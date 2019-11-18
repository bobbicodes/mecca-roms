(ns ^:figwheel-hooks mecca.view
  (:require
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [goog.object :as o]
   [goog.crypt :as crypt]
   [mecca.mario :refer [mario-hex]]))

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
  (crypt/byteArrayToString
   (crypt/hexToByteArray (apply str s))))
  
(def header 
  [[0x00 0x03] [0x04 0x05] [0x05 0x06] [0x06 0x07]
   [0x07 0x08] [0x08 0x09] [0x09 0x0a] [0x0a 0x0b]
   [0x0b 0x0f]])

(defn header-table [file]
  [:div
   [:h3 "Header:"]
   [:table.tg
    [:tbody
     [:tr [:th.tg-0pky "Offset"] [:th.tg-0lax "Hex"] [:th.tg-0lax "ASCII"]]
     (doall (for [[from to] header]
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
    {:style     {:width            "6%"
                 :background-color "lightgray"}
     :type      "number"
     :value     value
     :on-change on-change}]])

(def register-banks
  [[0x80 0x107f] [0x107f 0x207e] [0x207e 0x307d] [0x307d 0x407c]
   [0x407c 0x507b] [0x507b 0x607a] [0x607a 0x7079] [0x7079 0x8078]])

(defn register-bank [file n]
  (let [offsets (get register-banks (dec n))]
    (hex-bytes file (first offsets) (last offsets))))
  
(defn rom-data [file]
  (let [bank (subscribe [:register-bank])]
    [:div
     [:h2 "ROM data"]
     [number-input "Register bank " @bank #(dispatch [:select-bank (-> % .-target .-value)])]
     [:p (interpose " " (partition 2 (register-bank file @bank)))]]))

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn file-import []
  [:div
   [:h1 "Import .nes file"]
   [:h4 "Web parser for iNES file format"]
   [:p]
   [:div
    [:input#input
     {:type      "file"
      :on-change (fn [e]
                   (let [dom    (o/get e "target")
                         file   (o/getValueByKeys dom #js ["files" 0])
                         reader (js/FileReader.)]
                     (.readAsArrayBuffer reader file)
                     (set! (.-onload reader)
                           #(dispatch [:file-upload
                                        (-> % .-target .-result
                                            (js/Uint8Array.)
                                            crypt/byteArrayToHex
                                            .toUpperCase)]))))}]]])

(comment
  (str @(subscribe [:file-upload]))
  )

(defn nes-file? [file]
  (= (apply str (take 8 file)) "4E45531A"))

(defn mecca []
  (let [file @(subscribe [:file-upload])]
    [:div
     [file-import]
     [button "Load example file" #(dispatch [:file-upload mario-hex])]
     (when (nes-file? file)
       [:div
        [:h2.green "This is an NES file :)"]
        [header-table file]
        [:h3 "File info:"]
        [file-info file]
        [rom-data file]])]))
