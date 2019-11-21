(ns ^:figwheel-hooks mecca.roms
  (:require
   [goog.crypt :as crypt]))

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
  (let [bin    (.toString (js/parseInt (str "0x" n)) 2)
        length (count bin)]
    (str "%"
         (apply str (repeat (- 8 length) "0"))
         bin)))

(defn nth-bit [hex n]
  (js/parseInt (nth (reverse (format-bin hex)) n)))

(comment
  (format-bin 13)
  (nth-bit 12 1)
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

(def nes-offsets ; each function will output a string when passed the bytes at offsets
  [[[0x00 0x03] 
    #(str "Hex to ASCII: " "\"" (hex->ascii %) "\"")]
   [[0x04 0x05] 
    #(str "PRG ROM size: "
          (* 16 (js/parseInt (str "0x" (first %))))
          " KB (" (js/parseInt (str "0x" (first %)))
          " 16K block" (when-not (= 1 (js/parseInt (str "0x" (first %)))) "s") ")")]
   [[0x05 0x06] 
    #(str "CHR ROM size: "
          (* 8 (js/parseInt (str "0x" (first %))))
          " KB (" (js/parseInt (str "0x" (first %)))
          " 8K block" (when-not (= 1 (js/parseInt (str "0x" (first %)))) "s") ")")]
   [[0x06 0x07] #(str "Hex to binary: " (format-bin (js/parseInt (first %))) " "
                      (when (= 1 (nth-bit (js/parseInt (first %)) 0))
                        "Bit 0 set - This game uses vertical mirroring (horizontal arrangement). ")
                      (when (= 1 (nth-bit (js/parseInt (first %)) 1))
                        "Bit 1 set - This cartridge contains battery-backed PRG RAM ($6000-7FFF) or other persistent memory. ")
                      (when (= 1 (nth-bit (js/parseInt (first %)) 2))
                        "Bit 2 set - This game contains a 512-byte trainer at $7000-$71FF (stored before PRG data). ")
                      (when (= 1 (nth-bit (js/parseInt (first %)) 3))
                        "Bit 3 set - Ignore mirroring control or above mirroring bit; instead provide four-screen VRAM. "))]
   [[0x07 0x08] first]
   [[0x08 0x09] first]
   [[0x09 0x0a] first]
   [[0x0a 0x0b] first]
   [[0x0b 0x0f] #(str "Ripped by (or zeros): " (apply str %))]])

(defn rom-bank [file n]
  (let [offsets (take 2 (drop n (iterate #(+ 8192 %) 0)))]
    (hex-bytes file (first offsets) (last offsets))))

