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

(defn prg-rom-size
  "Size of PRG ROM (in 16 KB units)"
  [file]
  (str (* 16 (hex-bytes file 0x04)) "KB"))

(def nes-offsets     ;    each vector contains
  [[[0x00 0x03]      ; <- the vector of offsets, followed by
    "Hex to ASCII: " ; <- the NESplanation string, followed by 
    hex->ascii]      ; <- a function that will compute the result
                     ;    to display given the sequence of bytes.
   [[0x04 0x05] "PRG ROM size: " #(str (* 16 (js/parseInt (str "0x" (first %)))) " KB")]
   [[0x05 0x06] "CHR ROM size: " #(str (* 8 (js/parseInt (str "0x" (first %)))) " KB")]
   [[0x06 0x07] "Flags 6 - Mapper, mirroring, battery, trainer: " first]
   [[0x07 0x08] "Flags 7 - Mapper, VS/Playchoice, NES 2.0: " first]
   [[0x08 0x09] "Flags 8 - PRG-RAM size (rarely used extension): " first]
   [[0x09 0x0a] "Flags 9 - TV system (rarely used extension): " first]
   [[0x0a 0x0b] "Flags 10 - TV system, PRG-RAM presence (unofficial, rarely used extension): " first]
   [[0x0b 0x0f] "Unused padding (should be filled with zero, but some rippers put their name across bytes 7-15): " #(apply str %)]])

(defn rom-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))

