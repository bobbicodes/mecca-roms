(ns ^:figwheel-hooks mecca.roms
  (:require
   [goog.crypt :as crypt]))

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

(defn smc-title [file]
  (hex->ascii (apply str (hex-bytes file 0x81c0 0x81d5))))

(defn nes-file? [file]
  (= (apply str (take 8 file)) "4E45531A"))

(def nes-offsets
  [[0x00 0x03] [0x04 0x05] [0x05 0x06] [0x06 0x07]
   [0x07 0x08] [0x08 0x09] [0x09 0x0a] [0x0a 0x0b]
   [0x0b 0x0f]])

(defn rom-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))