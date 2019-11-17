(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx dispatch subscribe]]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:file-upload nil
    :register-bank 1}))

(reg-event-db
 :select-bank
 (fn [db [_ bank]]
   (assoc db :register-bank bank)))

(reg-event-db
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))