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
  [[[0x00 0x03] "NES"]
   [[0x04 0x05] "Size of PRG ROM (in 16 KB units)"]
   [[0x05 0x06] "Size of CHR ROM in 8 KB units (Value 0 means the board uses CHR RAM)"]
   [[0x06 0x07] "Flags 6 - Mapper, mirroring, battery, trainer"]
   [[0x07 0x08] "Flags 7 - Mapper, VS/Playchoice, NES 2.0"]
   [[0x08 0x09] "Flags 8 - PRG-RAM size (rarely used extension)"]
   [[0x09 0x0a] "Flags 9 - TV system (rarely used extension)"]
   [[0x0a 0x0b] "Flags 10 - TV system, PRG-RAM presence (unofficial, rarely used extension)"]
   [[0x0b 0x0f] "Unused padding (should be filled with zero, but some rippers put their name across bytes 7-15)"]])

(defn rom-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))

