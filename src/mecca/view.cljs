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
  [[0x00 0x1000]  [0x1000 0x2000] [0x2000 0x3000] [0x3000 0x4000]
   [0x4000 0x5000] [0x5000 0x6000] [0x6000 0x7000] [0x7000 0x8000]
   [0x8000 0x9000] [0x9000 0xa000] [0xa000 0xb000] [0xb000 0xc000]
   [0xc000 0xd000] [0xd000 0xe000] [0xe000 0xf000] [0xf000 0x10000]
   [0x10000 0x11000] [0x11000 0x12000] [0x12000 0x13000] [0x13000 0x14000]
   [0x14000 0x15000] [0x15000 0x16000] [0x16000 0x17000] [0x17000 0x18000]
   [0x18000 0x19000] [0x19000 0x1a000] [0x1a000 0x1b000] [0x1b000 0x1c000]
   [0x1c000 0x1d000] [0x1d000 0x1e000] [0x1e000 0x1f000] [0x1f000 0x20000]
   [0x20000 0x21000] [0x21000 0x22000] [0x22000 0x23000] [0x23000 0x24000]
   [0x24000 0x25000] [0x25000 0x26000] [0x26000 0x27000] [0x27000 0x28000]
   [0x28000 0x29000] [0x29000 0x2a000] [0x2a000 0x2b000] [0x2b000 0x2c000]
   [0x2c000 0x2d000] [0x2d000 0x2e000] [0x2e000 0x2f000] [0x2f000 0x30000]
   [0x30000 0x31000] [0x31000 0x32000] [0x32000 0x33000] [0x33000 0x34000]
   [0x34000 0x35000] [0x35000 0x36000] [0x36000 0x37000] [0x37000 0x38000]
   [0x38000 0x39000] [0x39000 0x3a000] [0x3a000 0x3b000] [0x3b000 0x3c000]
   [0x3c000 0x3d000] [0x3d000 0x3e000] [0x3e000 0x3f000] [0x3f000 0x40000]
   [0x40000 0x41000] [0x41000 0x42000] [0x42000 0x43000] [0x43000 0x44000]
   [0x44000 0x45000] [0x45000 0x46000] [0x46000 0x47000] [0x47000 0x48000]
   [0x48000 0x49000] [0x49000 0x4a000] [0x4a000 0x4b000] [0x4b000 0x4c000]
   [0x4c000 0x4d000] [0x4d000 0x4e000] [0x4e000 0x4f000] [0x4f000 0x50000]
   [0x50000 0x51000] [0x51000 0x52000] [0x52000 0x53000] [0x53000 0x54000]
   [0x54000 0x55000] [0x55000 0x56000] [0x56000 0x57000] [0x57000 0x58000]
   [0x58000 0x59000] [0x59000 0x5a000] [0x5a000 0x5b000] [0x5b000 0x5c000]
   [0x5c000 0x5d000] [0x5d000 0x5e000] [0x5e000 0x5f000] [0x5f000 0x60000]
   [0x60000 0x61000] [0x61000 0x62000] [0x62000 0x63000] [0x63000 0x64000]
   [0x64000 0x65000] [0x65000 0x66000] [0x66000 0x67000] [0x67000 0x68000]
   [0x68000 0x69000] [0x69000 0x6a000] [0x6a000 0x6b000] [0x6b000 0x6c000]
   [0x6c000 0x6d000] [0x6d000 0x6e000] [0x6e000 0x6f000] [0x6f000 0x70000]
   [0x70000 0x71000] [0x71000 0x72000] [0x72000 0x73000] [0x73000 0x74000]
   [0x74000 0x75000] [0x75000 0x76000] [0x76000 0x77000] [0x77000 0x78000]
   [0x78000 0x79000] [0x79000 0x7a000] [0x7a000 0x7b000] [0x7b000 0x7c000]
   [0x7c000 0x7d000] [0x7d000 0x7e000] [0x7e000 0x7f000] [0x7f000 0x80000]
   [0x80000 0x81000] [0x81000 0x82000] [0x82000 0x83000] [0x83000 0x84000]
   [0x84000 0x85000] [0x85000 0x86000] [0x86000 0x87000] [0x87000 0x88000]
   [0x88000 0x89000] [0x89000 0x8a000] [0x8a000 0x8b000] [0x8b000 0x8c000]
   [0x8c000 0x8d000] [0x8d000 0x8e000] [0x8e000 0x8f000] [0x8f000 0x90000]])

(defn register-bank [file n]
  (let [offsets (get register-banks (dec n))]
    (hex-bytes file (first offsets) (last offsets))))
  
(defn rom-data [file]
  (let [bank (subscribe [:register-bank])]
    [:div
     [:h2 "ROM data"]
     [number-input "Register bank " @bank #(dispatch [:select-bank (-> % .-target .-value)])]
     [:div
      [:textarea {:rows      60
                  :cols      89
                  :value     (apply str (interpose " " (register-bank file @bank)))
                  :read-only true}]]]))

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
                                .toUpperCase)]))))}]]])

(defn smc-title [file]
  (hex->ascii (apply str (hex-bytes file 0x81c0 0x81d5))))



(comment
(smc-title @(subscribe [:file-upload])) 
 (.toString (+ 0x81c0 21) 16)
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
        [file-info file]])
     (when (= " " (last (smc-title file)))
       [:div
        [:h3.green "Super Magi-Com file (.smc) detected :)"]
        [:p (str "Title: " (smc-title file))]])
     [rom-data file]]))
