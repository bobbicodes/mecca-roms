(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:burger-menu? false
    :file-upload nil
    :register-bank 0}))

(reg-event-db
 :select-bank
 (fn [db [_ bank]]
   (assoc db :register-bank bank)))

(reg-event-db
 :show-menu
 (fn [db [_ _]]
   (assoc db :burger-menu? true)))

(reg-event-db
 :hide-menu
 (fn [db [_ _]]
   (assoc db :burger-menu? false)))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))