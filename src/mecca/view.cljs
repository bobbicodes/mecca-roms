(ns ^:figwheel-hooks mecca.view
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]
   [mecca.examples.mario :refer [mario-hex]]
   [mecca.examples.smw :refer [smw-hex]]))

(defn hex-bytes
  ([file n] (hex-bytes file n (inc n)))
  ([file from to]
   (map #(apply str %)
        (partition 2 (take (- (* 2 to) (* 2 from))
                           (drop (* 2 from) file))))))

(defn word [file offset]
  (str "0x" (first (hex-bytes file (inc offset)))
       (first (hex-bytes file offset))))

(defn hex->ascii [s]
  (->> s 
       (apply str) 
       crypt/hexToByteArray
       crypt/byteArrayToString))
  
(def nes-offsets
  [[0x00 0x03] [0x04 0x05] [0x05 0x06] [0x06 0x07]
   [0x07 0x08] [0x08 0x09] [0x09 0x0a] [0x0a 0x0b]
   [0x0b 0x0f]])

(defn header-table [file offsets]
  [:div
   [:h3 "Header:"]
   [:table.tg
    [:tbody
     [:tr [:th.tg-0pky "Offset"] [:th.tg-0lax "Hex"] [:th.tg-0lax "ASCII"]]
     (doall (for [[from to] offsets]
              ^{:key [from to]}
              [:tr
               [:td.tg-hmp3 (str "0x" (.toString from 16))]
               [:td.tg-hmp3 (apply str (interpose " " (hex-bytes file from to)))]
               [:td.tg-hmp3 (hex->ascii (hex-bytes file from to))]]))]]])

(defn file-info [file]
  [:div
   [:p (str "Size of PRG ROM (in 16 KB units): " (first (hex-bytes file 0x04)))]
   [:p (str "Size of CHR ROM in 8 KB units (Value 0 means the board uses CHR RAM): " (first (hex-bytes file 0x05)))]
   [:p (str "Flags 6 - Mapper, mirroring, battery, trainer: " (first (hex-bytes file 0x06)))]
   [:p (str "Flags 7 - Mapper, VS/Playchoice, NES 2.0: " (first (hex-bytes file 0x07)))]
   [:p (str "Flags 8 - PRG-RAM size (rarely used extension): " (first (hex-bytes file 0x08)))]
   [:p (str "Flags 9 - TV system (rarely used extension): " (first (hex-bytes file 0x09)))]
   [:p (str "Flags 10 - TV system, PRG-RAM presence (unofficial, rarely used extension): " (first (hex-bytes file 0x0a)))]
   [:p (str "Unused padding (should be filled with zero, but some rippers put their name across bytes 7-15): " (first (hex-bytes file 0x0b 0x0f)))]])

(defn number-input [label value on-change]
  [:label label
   [:input
    {:style     
     {:width            "6%"
      :height "4%"
      :background-color "lightgray"}
     :type      "number"
     :value     value
     :on-change on-change}]])

(defn register-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))

(defn rom-data [file]
  (let [bank (subscribe [:register-bank])]
    [:div
     [:h2 "ROM data:"]
     [number-input "Select 8KB register bank: " @bank #(dispatch [:select-bank (-> % .-target .-value)])]
     [:div
      [:textarea 
       {:rows      30
        :cols      80
        :value     (apply str (interpose " " (register-bank file (js/parseInt @bank))))
        :read-only true}]]]))

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn file-upload []
   [:div
    [:input#input
     {:type      "file"
      :on-change 
      (fn [e]
        (let [dom    (o/get e "target")
              file   (o/getValueByKeys dom #js ["files" 0])
              reader (js/FileReader.)]
          (.readAsArrayBuffer reader file)
          (set! (.-onload reader)
                #(dispatch [:file-upload
                            (-> % .-target .-result
                                (js/Uint8Array.)
                                crypt/byteArrayToHex
                                .toUpperCase)]))))}]])

(defn smc-title [file]
  (hex->ascii (apply str (hex-bytes file 0x81c0 0x81d5))))

(defn nes-file? [file]
  (= (apply str (take 8 file)) "4E45531A"))

(defn burger-menu []
  (let [hover? (r/atom false)
        menu? (subscribe [:burger-menu?])]
    (fn []
      [:svg {:width 128 :height 128}
       [:g {:on-mouse-over #(reset! hover? true)
            :on-mouse-out  #(reset! hover? false)
            :on-click      #(dispatch [:show-menu])}
        [:rect {:rx           10
                :stroke       "gray"
                :stroke-width 0.5
                :x            64
                :y            5
                :width        64
                :height       64
                :fill         "#f7f6cf"
                :visibility   (if @hover?
                                "visible"
                                "hidden")}]
        [:text
         {:x           96
          :y           54
          :text-anchor "middle"
          :font-size   54}
         "🍔"]]
       [:rect {:rx 5
               :stroke       "gray"
               :stroke-width 0.5
               :x            0
               :y            32
               :width        96
               :height       96
               :fill         "lightgray"
               :visibility   (if @menu? "visible" "hidden")
               :on-mouse-out #(dispatch [:hide-menu])}]])))

(defn nav-bar []
  [:div.parent
   [:div.wide 
    [:h1 "MECCA ROM Reader"]
    [:p "Upload and inspect image sound and game data from Nintendo binaries"]]
   [:div.narrow
    [burger-menu]]])

(defn mecca []
  (let [file @(subscribe [:file-upload])]
    (fn []
      [:div
       [nav-bar]
       [:p (str @(subscribe [:burger-menu?]))]
       [file-upload]
       [button "Load NES file" #(dispatch [:file-upload mario-hex])]
       [button "Load SNES file" #(dispatch [:file-upload smw-hex])]
       (when (nes-file? file)
         [:div
          [:h2.green "This is an NES file :)"]
          [header-table file nes-offsets]
          [:h3 "File info:"]
          [file-info file]])
       (when (= " " (last (smc-title file)))
         [:div
          [:h3.green "This is a Super Magicom file :)"]
          [:div "Title: " [:span.green (str (smc-title file))]]
          [:div "ROM layout: " [:span.green (case (first (hex-bytes file 0x81d5))
                                              "20" "LoROM"
                                              (first (hex-bytes file 0x81d5)))]]
          [:p (str "Cartridge type (ROM-only / with save-RAM): " (first (hex-bytes file 0x81d6)))]
          [:p (str "ROM byte size: " (first (hex-bytes file 0x81d7)))]
          [:p (str "RAM byte size: " (first (hex-bytes file 0x81d8)))]])
       [rom-data file]])))
