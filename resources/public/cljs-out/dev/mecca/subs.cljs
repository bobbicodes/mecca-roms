(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]
            [mantra.core :as m]))

(reg-sub
 :file-upload
 (fn [db _]
   (:file-upload db)))

(reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(reg-sub
 :bank
 (fn [db _]
   (:bank db)))

(reg-sub
 :burger-menu?
 (fn [db _]
   (:burger-menu? db)))

(reg-sub
 :selected-item
 (fn [db _]
   (:selected-item db)))

(reg-sub
 :oscillator
 (fn [db _]
   (:oscillator db)))

(reg-sub
 :tempo
 (fn [db _]
   (:tempo db)))