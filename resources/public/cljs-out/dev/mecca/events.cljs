(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:burger-menu? false
    :selected-item nil
    :file-upload nil
    :bank 0}))

(reg-event-db
 :select-bank
 (fn [db [_ bank]]
   (assoc db :bank bank)))

(reg-event-db
 :select-item
 (fn [db [_ item]]
   (assoc db :selected-item item)))

(reg-event-db
 :show-menu
 (fn [db [_ _]]
   (assoc db :burger-menu? true)))

(reg-event-db
 :hide-menu
 (fn [db [_ _]]
   (assoc db :burger-menu? false)))

(reg-event-db
 :toggle-menu
 (fn [db [_ _]]
   (update db :burger-menu? not)))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))