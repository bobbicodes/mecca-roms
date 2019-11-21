(ns ^:figwheel-hooks mecca.roms
  (:require
   [goog.crypt :as crypt]
   [re-frame.core :refer [subscribe]]))

(defn hex-bytes
  ([file n] (hex-bytes file n (inc n)))
  ([file from to]
   (map #(apply str %)
        (partition 2 (take (- (* 2 to) (* 2 from))
                           (drop (* 2 from) file))))))

(defn format-hex [s]
  (let [length (count s)]
    (str "$"
         (apply str (repeat (- 4 length) "0"))
         s)))

(defn format-bin [n]
  (let [length (count (.toString n 2))]
    (str "%"
         (apply str (repeat (- 8 length) "0"))
         (.toString n 2))))

(comment
  
  (format-bin 03)
  
  )

(defn word [file offset]
  (str "0x" (first (hex-bytes file (inc offset)))
       (first (hex-bytes file offset))))

(defn hex->ascii [s]
  (->> s
       (apply str)
       crypt/hexToByteArray
       crypt/byteArrayToString))

(defn smc-title [file]
  (hex->ascii (apply str (hex-bytes file 0x81c0 0x81d5))))

(defn nes-file? [file]
  (= (apply str (take 8 file)) "4E45531A"))

(defn prg-rom-size
  "Size of PRG ROM (in 16 KB units)"
  [file]
  (str (* 16 (hex-bytes file 0x04)) "KB"))

(def nes-offsets ; each function will output a string when given the bytes at offsets
  [[[0x00 0x03] #(str "Hex to ASCII: " "\"" (hex->ascii %) "\"")]
   [[0x04 0x05] #(str "PRG ROM size: " 
                      (* 16 (js/parseInt (str "0x" (first %)))) 
                      " KB (" (js/parseInt (str "0x" (first %))) " 16K blocks)")]
   [[0x05 0x06] #(str "CHR ROM size: " 
                      (* 8 (js/parseInt (str "0x" (first %)))) 
                      " KB (" (js/parseInt (str "0x" (first %))) 
                      " 8K block" (when-not (= 1 (js/parseInt (str "0x" (first %)))) "s") ")")]
   [[0x06 0x07] #(cond
                   (= (last (format-bin (js/parseInt (first %)))) "1")
                   "This game uses vertical mirroring (horizontal arrangement)"
                   :else
                   (first %))]
   [[0x07 0x08] first]
   [[0x08 0x09] first]
   [[0x09 0x0a] first]
   [[0x0a 0x0b] first]
   [[0x0b 0x0f] #(str "Ripped by (or zeros): " (apply str %))]])

(comment
  
 (last (format-bin (js/parseInt (first (hex-bytes @(subscribe [:file-upload]) 6)))))
 (.toString 10 2)
  )

(defn rom-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))

