(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf :refer [reg-sub]]))

(reg-sub
 :file-upload
 (fn [db _]
   (:file-upload db)))

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
