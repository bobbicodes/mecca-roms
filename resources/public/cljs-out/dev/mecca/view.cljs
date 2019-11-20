(ns ^:figwheel-hooks mecca.view
  (:require
   [mecca.roms :as roms :refer [hex-bytes]]
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]
   [mecca.examples.mario :refer [mario-hex]]
   [mecca.examples.smw :refer [smw-hex]]))

(defn header-table [file offsets]
  [:div
   [:h3 "Header:"]
   [:table.tg
    [:tbody
     [:tr [:th.tg-0pky "Offsets"] [:th.tg-0lax "Hex"] [:th.tg-0lax "NESplanation"]]
     (doall (for [[[from to] string value] offsets]
              ^{:key from}
              [:tr
               [:td.tg-hmp3 (str "$" (.toString from 16) " - $" (.toString to 16))]
               [:td.tg-hmp3 (apply str (interpose " " (hex-bytes file from to)))]
               [:td.tg-hmp3 (str string (->>
                                         (hex-bytes file from to)
                                         value)) ]]))]]])

(defn number-input [label value on-change]
  [:label label
   [:input
    {:style     {:width            "6%"
                 :height           "4%"
                 :background-color "lightgray"}
     :type      "number"
     :value     value
     :on-change on-change}]])

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn rom-data []
  (let [bank (subscribe [:bank])]
    (fn [file]
      [:div
       [:h2 "ROM data:"]
       [number-input "Select 8K bank: " @bank #(dispatch [:select-bank (-> % .-target .-value)])]
       [:p (str "$" (apply str (interpose " - $" (map #(.toString % 16) (take 2 (drop (js/parseInt @bank) (iterate #(+ 8192 %) 0)))))))]
       [:div
        [:textarea 
         {:rows      30
          :cols      80
          :value     (apply str (interpose " " (roms/rom-bank file (js/parseInt @bank))))
          :read-only true}]]])))

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

(defn menu-items []
  (let [selected (r/atom nil)
        menu? (subscribe [:burger-menu?])]
    (fn []
      (into [:g]
            (for [choice (range 3)]
              ^{:key choice}
              [:g {:style {:cursor "pointer"}}
               [:rect
                {:rx           2
                 :stroke       "black"
                 :stroke-width 0.5
                 :x            3
                 :y            (+ 35 (* choice 18))
                 :width        91
                 :height       16
                 :fill         (if (= choice @selected) "lightpink" "lightgray")
                 :on-mouse-over #(reset! selected choice)
                 :on-mouse-out #(reset! selected nil)
                 :on-click #(dispatch [:select-item choice])
                 :visibility   (if @menu? "visible" "hidden")}]
               [:text {:x           18
                       :y           (+ 48 (* choice 18))
                       :text-anchor "left"
                       :font-size   14
                       :pointer-events "none"
                       :visibility  (if @menu? "visible" "hidden")}
                (str "Choice " (inc choice))]])))))

(defn burger-menu []
  (let [hover? (r/atom false)
        menu? (subscribe [:burger-menu?])]
    (fn []
      [:svg {:width 128 :height 96}
       [:g {:on-mouse-over #(reset! hover? true)
            :on-mouse-out  #(reset! hover? false)
            :on-click      #(dispatch [:toggle-menu])
            :style {:cursor "pointer"}}
        [:rect {:rx           10 :fill         "#f7f6cf"
                :stroke       "gray" :stroke-width 0.5
                :x            64 :y            5
                :width        64 :height       64
                :visibility   (if @hover? "visible"  "hidden")}]
        [:text {:x           96 :y           54
                :text-anchor "middle" :font-size   54}
         "🍔"]]
       [:g
        [:rect.menu
        {:rx           5
         :fill         "lightgray"
         :stroke       "gray"
         :stroke-width 0.5
         :x            0
         :y            32
         :width        96
         :height       58
         :visibility   (if @menu? "visible" "hidden")}]
       [menu-items]]])))

(defn nav-bar []
  [:div.parent
   [:div.wide 
    [:h1 "MECCA ROM Reader"]
    [:p "Inspect image, sound and game data from Nintendo binaries"]]
   [:div.narrow
    [burger-menu]]])

(defn mecca []
  (let [file (subscribe [:file-upload])
        selected-item (subscribe [:selected-item])]
    (fn []
      [:div {:on-click (when @(subscribe [:burger-menu?]) 
                         #(dispatch [:hide-menu]))}
       [nav-bar]
       (when @selected-item 
         [:p.green {:style {:text-align "right"}}
          (str "Choice " (inc @selected-item) " selected :)")])
       [file-upload]
       [button "Load NES ROM" #(dispatch [:file-upload mario-hex])]
       [button "Load SNES ROM" #(dispatch [:file-upload smw-hex])]
       (when (roms/nes-file? @file)
         [:div
          [:h2.green "This is an NES ROM :)"]
          [header-table @file roms/nes-offsets]])
       (when (= " " (last (roms/smc-title @file)))
         [:div
          [:h3.green "This is a Super Magicom ROM :)"]
          [:div "Title: " [:span.green (str (roms/smc-title @file))]]
          [:div "ROM layout: " 
           [:span.green (case (first (hex-bytes @file 0x81d5))
                          "20" "LoROM"
                          (first (hex-bytes @file 0x81d5)))]]
          [:p (str "Cartridge type (ROM-only / with save-RAM): " 
                   (first (hex-bytes @file 0x81d6)))]
          [:p (str "ROM byte size: " (first (hex-bytes @file 0x81d7)))]
          [:p (str "RAM byte size: " (first (hex-bytes @file 0x81d8)))]])
       [rom-data @file]])))

