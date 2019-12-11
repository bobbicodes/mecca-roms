(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db dispatch subscribe]]
   [mantra.core :as m]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:burger-menu? false
    :selected-item nil
    :file-upload nil
    :loading? false
    :bank 0
    :oscillator nil
    :note nil}))

(reg-event-db
 :select-bank
 (fn [db [_ bank]]
   (assoc db :bank bank)))

(reg-event-db
 :inc-bank
 (fn [db [_ _]]
   (update db :bank inc)))

(reg-event-db
 :set-loading
 (fn [db [_ _]]
   (assoc db
          :loading? true
          :file-upload nil)))

(reg-event-db
 :dec-bank
 (fn [db [_ _]]
   (update db :bank dec)))

(reg-event-db
 :select-item
 (fn [db [_ item]]
   (assoc db :selected-item item)))

(reg-event-db
 :show-menu
 (fn [db [_ _]]
   (assoc db :burger-menu? true)))

(reg-event-db
 :set-tempo
 (fn [db [_ bpm]]
   (assoc db :tempo (m/set-tempo bpm))))

(reg-event-db
 :play-note
 (fn [db [_ osc pitch duration]]
   (assoc db :note 
          (m/play-note osc
                       {:pitch    pitch
                        :duration duration}))))

(comment
  
 
 (dispatch [:set-tempo 150])
 @(subscribe [:tempo])
  
  (dispatch [:play-note @(subscribe [:oscillator]) :C1 :eighth])
 )

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
      (assoc db
             :file-upload file)))

(reg-event-db
 :create-oscillator
 (fn [db [_ _]]
   (assoc db :oscillator (m/osc :type :square))))