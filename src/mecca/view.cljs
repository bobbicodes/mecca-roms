(ns ^:figwheel-hooks mecca.view
  (:require [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [goog.object :as o]
            [goog.crypt :as crypt]
            [mecca.asterix :refer [asterix-hex]]))

(defn hex-bytes
  ([file n] (hex-bytes file n (inc n)))
  ([file from to]
   (map #(apply str %)
        (partition 2 (take (- (* 2 to) (* 2 from))
                           (drop (* 2 from) file))))))

(defn word [file offset]
  (str "0x" (first (hex-bytes file (inc offset)))
       (first (hex-bytes file offset))))

(defn load-address [file]
  (word file 0x08))

(defn init-address [file]
  (word file 0x0a))

(defn play-address [file]
  (word file 0x0c))

(defn bankswitch-vals [file]
  (hex-bytes file 0x70 0x78))

(defn hex->ascii [s]
  (crypt/byteArrayToString
   (crypt/hexToByteArray (apply str s))))
  
(def header 
  [[0x00 0x05] [0x05 0x06] [0x06 0x07] [0x07 0x08]
   [0x08 0x0a] [0x0a 0x0c] [0x0c 0x0e] [0x0e 0x2e]
   [0x2e 0x4e] [0x4e 0x6e] [0x6e 0x70] [0x70 0x78]
   [0x7a 0x7b] [0x7b 0x7c] [0x7c 0x7d] [0x7d 0x7e]])

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

(defn song-info [file]
       [:div
        [:p (str "Version number: " (first (hex-bytes file 0x05)))]
        [:p (str "Total songs: " (js/parseInt (str "0x" (first (hex-bytes file 0x06)))))]
        [:p (str "Starting song: " (js/parseInt (str "0x" (first (hex-bytes file 0x07)))))]
        [:p (str "Load address: " (load-address file))]
        [:p (str "Init address: " (init-address file))]
        [:p (str "Play address: " (play-address file))]
        [:p (str "Song name: " (hex->ascii (hex-bytes file 0x0e 0x2e)))]
        [:p (str "Artist: " (hex->ascii (hex-bytes file 0x2e 0x4e)))]
        [:p (str "Copyright: " (hex->ascii (hex-bytes file 0x4e 0x6e)))]
        [:p (str "Play speed (NTSC): " (js/parseInt (word file 0x6e)) " (in 1/1000000th sec ticks)")]
        [:p (str "Bankswitch init values: " (bankswitch-vals file))]
        [:p (str "Play speed (PAL): " (js/parseInt (word file 0x78)) " (in 1/1000000th sec ticks)")]
        [:p (str "PAL/NTSC: " (first (hex-bytes file 0x7a)))]
        [:p (str "Extra Sound Chip Support: "
                 (let [byte (first (hex-bytes file 0x7b))]
                   (case byte
                     "01" "This song uses VRC6 audio"
                     "02" "This song uses VRC7 audio"
                     "04" "This song uses FDS audio"
                     "08" "This song uses MMC5 audio"
                     "10" "This song uses Namco 163 audio"
                     "20" "This song uses Sunsoft 5B audio"
                     byte)))]])

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
  
(defn music-data [file]
  (let [bank (subscribe [:register-bank])]
    [:div
     [:h2 "Music data"]
     (if (= (bankswitch-vals file) ["00" "00" "00" "00" "00" "00" "00" "00"])
       [:div
        [:p "This song does not use bankswitching."]
        [:p (str "Initializing from $080 at load address " (load-address file) ".")]])
     [number-input "Register bank " @bank #(dispatch [:select-bank (-> % .-target .-value)])]
     [:p (interpose " " (partition 2 (register-bank file @bank)))]]))

(defn button [label onclick]
  [:button
   {:on-click onclick}
   label])

(defn file-import []
  [:div
   [:h1 "Import NSF file"]
   [:h4 "Web parser for NES Sound Format"]
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

(defn nsf? [file]
  (= (apply str (take 10 file)) "4E45534D1A"))

(defn mecca []
  (let [file @(subscribe [:file-upload])]
    [:div
     [file-import]
     [button "Load example file" #(dispatch [:file-upload asterix-hex])]
     (if (nsf? file)
       [:div
        [:h2.green "This is an NSF song :)"]
        [header-table file]
        [:h3 "Song info:"]
        [song-info file]
        [music-data file]])]))
