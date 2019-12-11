// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('chronoid.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
chronoid.core.default_options = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tolerance_DASH_late,(100),cljs.core.cst$kw$tolerance_DASH_early,(1)], null);
chronoid.core._STAR_clocks_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * An atomic reference to a global audio context that gets created the first
 * time you call `clock` and is reused for any subsequent clocks.
 */
chronoid.core.audio_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
chronoid.core.new_audio_context = (function chronoid$core$new_audio_context(){
var Context = (function (){var or__3949__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new Context());
});
chronoid.core.clock = (function chronoid$core$clock(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9824 = arguments.length;
var i__4532__auto___9825 = (0);
while(true){
if((i__4532__auto___9825 < len__4531__auto___9824)){
args__4534__auto__.push((arguments[i__4532__auto___9825]));

var G__9826 = (i__4532__auto___9825 + (1));
i__4532__auto___9825 = G__9826;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return chronoid.core.clock.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

chronoid.core.clock.cljs$core$IFn$_invoke$arity$variadic = (function (p__9821){
var map__9822 = p__9821;
var map__9822__$1 = ((((!((map__9822 == null)))?(((((map__9822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9822):map__9822);
var attrs = map__9822__$1;
var ctx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(chronoid.core.audio_context,((function (map__9822,map__9822__$1,attrs){
return (function (p1__9819_SHARP_){
var or__3949__auto__ = p1__9819_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return chronoid.core.new_audio_context();
}
});})(map__9822,map__9822__$1,attrs))
);
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("clock");
var clock = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chronoid.core.default_options,attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$context,ctx,cljs.core.cst$kw$id,id,cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$started,false], null)], 0));
var clock_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clock);
chronoid.core._STAR_clocks_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(chronoid.core._STAR_clocks_STAR_,id,clock_atom);

return clock_atom;
});

chronoid.core.clock.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chronoid.core.clock.cljs$lang$applyTo = (function (seq9820){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9820));
});

/**
 * Returns the current time of a clock's audio context, in milliseconds.
 */
chronoid.core.current_time = (function chronoid$core$current_time(p__9827){
var map__9828 = p__9827;
var map__9828__$1 = ((((!((map__9828 == null)))?(((((map__9828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9828):map__9828);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9828__$1,cljs.core.cst$kw$context);
return ((1000) * context.currentTime);
});
/**
 * Constructor for an event. Requires `action`, `clock` (as an atom) and
 * `deadline` at the minimum.
 * 
 * Assigns a randomly generated id for the event if an :id is not provided to
 * the constructor. This is useful for removing and repeating events.
 * 
 * The tolerance interval (:latest-time and :earliest-time) is calculated
 * based on the deadline and :tolerance-early and :tolerance-late, which are
 * either provided as keyword arguments, or taken from the clock's options.
 */
chronoid.core.event_STAR_ = (function chronoid$core$event_STAR_(p__9830){
var map__9831 = p__9830;
var map__9831__$1 = ((((!((map__9831 == null)))?(((((map__9831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9831):map__9831);
var event = map__9831__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$id);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$clock_DASH_id);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$clock);
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$deadline);
var tolerance_early = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$tolerance_DASH_early);
var tolerance_late = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,cljs.core.cst$kw$tolerance_DASH_late);
var clock__$1 = cljs.core.deref((cljs.core.truth_(clock_id)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id):clock));
var id__$1 = (function (){var or__3949__auto__ = id;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$event);
}
})();
var latest = (deadline + (function (){var or__3949__auto__ = tolerance_late;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$tolerance_DASH_late.cljs$core$IFn$_invoke$arity$1(clock__$1);
}
})());
var earliest = (deadline - (function (){var or__3949__auto__ = tolerance_early;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$tolerance_DASH_early.cljs$core$IFn$_invoke$arity$1(clock__$1);
}
})());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.cst$kw$id,id__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clock_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(clock__$1),cljs.core.cst$kw$latest_DASH_time,latest,cljs.core.cst$kw$earliest_DASH_time,earliest], 0)),cljs.core.cst$kw$clock);
});

/**
 * This function is run constantly, and at each tick it executes events for
 * which `currentTime` is included in their tolerance interval.
 */
chronoid.core.tick_BANG_ = (function chronoid$core$tick_BANG_(clock_atom){
var map__9835 = cljs.core.deref(clock_atom);
var map__9835__$1 = ((((!((map__9835 == null)))?(((((map__9835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9835):map__9835);
var clock = map__9835__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9835__$1,cljs.core.cst$kw$events);
var current_time = chronoid.core.current_time(clock);
var execute_now_QMARK_ = ((function (map__9835,map__9835__$1,clock,events,current_time){
return (function (p1__9833_SHARP_){
return (cljs.core.cst$kw$earliest_DASH_time.cljs$core$IFn$_invoke$arity$1(p1__9833_SHARP_) <= current_time);
});})(map__9835,map__9835__$1,clock,events,current_time))
;
var events_due = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(execute_now_QMARK_,events);
var seq__9837_9841 = cljs.core.seq(events_due);
var chunk__9838_9842 = null;
var count__9839_9843 = (0);
var i__9840_9844 = (0);
while(true){
if((i__9840_9844 < count__9839_9843)){
var event_9845 = chunk__9838_9842.cljs$core$IIndexed$_nth$arity$2(null,i__9840_9844);
(chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1 ? chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1(event_9845) : chronoid.core.execute_BANG_.call(null,event_9845));


var G__9846 = seq__9837_9841;
var G__9847 = chunk__9838_9842;
var G__9848 = count__9839_9843;
var G__9849 = (i__9840_9844 + (1));
seq__9837_9841 = G__9846;
chunk__9838_9842 = G__9847;
count__9839_9843 = G__9848;
i__9840_9844 = G__9849;
continue;
} else {
var temp__5720__auto___9850 = cljs.core.seq(seq__9837_9841);
if(temp__5720__auto___9850){
var seq__9837_9851__$1 = temp__5720__auto___9850;
if(cljs.core.chunked_seq_QMARK_(seq__9837_9851__$1)){
var c__4351__auto___9852 = cljs.core.chunk_first(seq__9837_9851__$1);
var G__9853 = cljs.core.chunk_rest(seq__9837_9851__$1);
var G__9854 = c__4351__auto___9852;
var G__9855 = cljs.core.count(c__4351__auto___9852);
var G__9856 = (0);
seq__9837_9841 = G__9853;
chunk__9838_9842 = G__9854;
count__9839_9843 = G__9855;
i__9840_9844 = G__9856;
continue;
} else {
var event_9857 = cljs.core.first(seq__9837_9851__$1);
(chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1 ? chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1(event_9857) : chronoid.core.execute_BANG_.call(null,event_9857));


var G__9858 = cljs.core.next(seq__9837_9851__$1);
var G__9859 = null;
var G__9860 = (0);
var G__9861 = (0);
seq__9837_9841 = G__9858;
chunk__9838_9842 = G__9859;
count__9839_9843 = G__9860;
i__9840_9844 = G__9861;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(events_due)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clock_atom,cljs.core.update,cljs.core.cst$kw$events,((function (map__9835,map__9835__$1,clock,events,current_time,execute_now_QMARK_,events_due){
return (function (p1__9834_SHARP_){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(execute_now_QMARK_,p1__9834_SHARP_);
});})(map__9835,map__9835__$1,clock,events,current_time,execute_now_QMARK_,events_due))
);
} else {
return null;
}
});
/**
 * Does a binary search to find the index of the first event whose deadline is
 * >= `deadline`.
 */
chronoid.core.index_by_time = (function chronoid$core$index_by_time(events,deadline){
var low = (0);
var high = cljs.core.count(events);
var mid = Math.floor(((low + high) / (2)));
while(true){
if((low < high)){
var map__9862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(events,mid);
var map__9862__$1 = ((((!((map__9862 == null)))?(((((map__9862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9862):map__9862);
var earliest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9862__$1,cljs.core.cst$kw$earliest_DASH_time);
var action = (((earliest_time < deadline))?cljs.core.cst$kw$higher:cljs.core.cst$kw$lower);
var G__9864 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$higher))?(mid + (1)):low);
var G__9865 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$lower))?mid:high);
var G__9866 = Math.floor(((low + high) / (2)));
low = G__9864;
high = G__9865;
mid = G__9866;
continue;
} else {
return low;
}
break;
}
});
/**
 * Insert an event into an event queue, properly sorted by deadline.
 */
chronoid.core.insert_event = (function chronoid$core$insert_event(events,p__9867){
var map__9868 = p__9867;
var map__9868__$1 = ((((!((map__9868 == null)))?(((((map__9868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9868):map__9868);
var event = map__9868__$1;
var earliest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9868__$1,cljs.core.cst$kw$earliest_DASH_time);
var i = chronoid.core.index_by_time(events,earliest_time);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,events),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i,events)], 0));
});
/**
 * Create an event and insert into a clock's event queue.
 */
chronoid.core.create_event_BANG_ = (function chronoid$core$create_event_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9880 = arguments.length;
var i__4532__auto___9881 = (0);
while(true){
if((i__4532__auto___9881 < len__4531__auto___9880)){
args__4534__auto__.push((arguments[i__4532__auto___9881]));

var G__9882 = (i__4532__auto___9881 + (1));
i__4532__auto___9881 = G__9882;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,deadline,p__9874){
var vec__9875 = p__9874;
var map__9878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(0),null);
var map__9878__$1 = ((((!((map__9878 == null)))?(((((map__9878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9878):map__9878);
var opts = map__9878__$1;
var event = chronoid.core.event_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,f,cljs.core.cst$kw$clock,clock_atom,cljs.core.cst$kw$deadline,deadline], null),opts], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,cljs.core.update,cljs.core.cst$kw$events,chronoid.core.insert_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

return event;
});

chronoid.core.create_event_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.create_event_BANG_.cljs$lang$applyTo = (function (seq9870){
var G__9871 = cljs.core.first(seq9870);
var seq9870__$1 = cljs.core.next(seq9870);
var G__9872 = cljs.core.first(seq9870__$1);
var seq9870__$2 = cljs.core.next(seq9870__$1);
var G__9873 = cljs.core.first(seq9870__$2);
var seq9870__$3 = cljs.core.next(seq9870__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9871,G__9872,G__9873,seq9870__$3);
});

/**
 * Insert a copy of an event into an event queue with a new deadline.
 */
chronoid.core.schedule_STAR_ = (function chronoid$core$schedule_STAR_(events,event,new_deadline){
var new_event = chronoid.core.event_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$deadline,new_deadline));
return chronoid.core.insert_event(events,new_event);
});
/**
 * Schedule a copy of an event with a new deadline.
 */
chronoid.core.schedule_BANG_ = (function chronoid$core$schedule_BANG_(p__9883,new_deadline){
var map__9884 = p__9883;
var map__9884__$1 = ((((!((map__9884 == null)))?(((((map__9884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9884):map__9884);
var event = map__9884__$1;
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9884__$1,cljs.core.cst$kw$clock_DASH_id);
var clock_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,cljs.core.update,cljs.core.cst$kw$events,chronoid.core.schedule_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event,new_deadline], 0));

return chronoid.core.event_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$deadline,new_deadline));
});
chronoid.core.execute_BANG_ = (function chronoid$core$execute_BANG_(p__9886){
var map__9887 = p__9886;
var map__9887__$1 = ((((!((map__9887 == null)))?(((((map__9887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9887):map__9887);
var event = map__9887__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9887__$1,cljs.core.cst$kw$action);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9887__$1,cljs.core.cst$kw$clock_DASH_id);
var latest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9887__$1,cljs.core.cst$kw$latest_DASH_time);
var repeat_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9887__$1,cljs.core.cst$kw$repeat_DASH_time);
var clock = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id));
if((chronoid.core.current_time(clock) < latest_time)){
(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
}

if(cljs.core.truth_(repeat_time)){
return (chronoid.core.repeat_BANG_.cljs$core$IFn$_invoke$arity$2 ? chronoid.core.repeat_BANG_.cljs$core$IFn$_invoke$arity$2(event,repeat_time) : chronoid.core.repeat_BANG_.call(null,event,repeat_time));
} else {
return null;
}
});
/**
 * Schedules `f` after `delay-ms` milliseconds. Returns the event.
 * 
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
chronoid.core.set_timeout_BANG_ = (function chronoid$core$set_timeout_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9896 = arguments.length;
var i__4532__auto___9897 = (0);
while(true){
if((i__4532__auto___9897 < len__4531__auto___9896)){
args__4534__auto__.push((arguments[i__4532__auto___9897]));

var G__9898 = (i__4532__auto___9897 + (1));
i__4532__auto___9897 = G__9898;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,delay_ms,p__9893){
var map__9894 = p__9893;
var map__9894__$1 = ((((!((map__9894 == null)))?(((((map__9894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9894):map__9894);
var opts = map__9894__$1;
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,f,(chronoid.core.current_time(cljs.core.deref(clock_atom)) + delay_ms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

chronoid.core.set_timeout_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.set_timeout_BANG_.cljs$lang$applyTo = (function (seq9889){
var G__9890 = cljs.core.first(seq9889);
var seq9889__$1 = cljs.core.next(seq9889);
var G__9891 = cljs.core.first(seq9889__$1);
var seq9889__$2 = cljs.core.next(seq9889__$1);
var G__9892 = cljs.core.first(seq9889__$2);
var seq9889__$3 = cljs.core.next(seq9889__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9890,G__9891,G__9892,seq9889__$3);
});

/**
 * Schedules `f` to run before `deadline`. Returns the event.
 * 
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
chronoid.core.callback_at_time_BANG_ = (function chronoid$core$callback_at_time_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9906 = arguments.length;
var i__4532__auto___9907 = (0);
while(true){
if((i__4532__auto___9907 < len__4531__auto___9906)){
args__4534__auto__.push((arguments[i__4532__auto___9907]));

var G__9908 = (i__4532__auto___9907 + (1));
i__4532__auto___9907 = G__9908;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,deadline,p__9903){
var map__9904 = p__9903;
var map__9904__$1 = ((((!((map__9904 == null)))?(((((map__9904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9904):map__9904);
var opts = map__9904__$1;
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,f,deadline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

chronoid.core.callback_at_time_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.callback_at_time_BANG_.cljs$lang$applyTo = (function (seq9899){
var G__9900 = cljs.core.first(seq9899);
var seq9899__$1 = cljs.core.next(seq9899);
var G__9901 = cljs.core.first(seq9899__$1);
var seq9899__$2 = cljs.core.next(seq9899__$1);
var G__9902 = cljs.core.first(seq9899__$2);
var seq9899__$3 = cljs.core.next(seq9899__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9900,G__9901,G__9902,seq9899__$3);
});

/**
 * Unschedules an event by removing it from its clock's event queue.
 */
chronoid.core.clear_BANG_ = (function chronoid$core$clear_BANG_(p__9910){
var map__9911 = p__9910;
var map__9911__$1 = ((((!((map__9911 == null)))?(((((map__9911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9911):map__9911);
var event = map__9911__$1;
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,cljs.core.cst$kw$clock_DASH_id);
var clock_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clock_atom,cljs.core.update,cljs.core.cst$kw$events,((function (clock_atom,map__9911,map__9911__$1,event,clock_id){
return (function (p1__9909_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (clock_atom,map__9911,map__9911__$1,event,clock_id){
return (function (p__9913){
var map__9914 = p__9913;
var map__9914__$1 = ((((!((map__9914 == null)))?(((((map__9914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9914):map__9914);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9914__$1,cljs.core.cst$kw$id);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(event));
});})(clock_atom,map__9911,map__9911__$1,event,clock_id))
,p1__9909_SHARP_);
});})(clock_atom,map__9911,map__9911__$1,event,clock_id))
);

return event;
});
/**
 * Sets the event to repeat every `time` milliseconds 
 */
chronoid.core.repeat_BANG_ = (function chronoid$core$repeat_BANG_(p__9916,time){
var map__9917 = p__9916;
var map__9917__$1 = ((((!((map__9917 == null)))?(((((map__9917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9917):map__9917);
var event = map__9917__$1;
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9917__$1,cljs.core.cst$kw$deadline);
if((time > (0))){
} else {
throw (new Error("Assert failed: (pos? time)"));
}

return chronoid.core.schedule_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$repeat_DASH_time,time),(deadline + time));
});
/**
 * Internal implementation for time-stretching a single event.
 */
chronoid.core.time_stretch_BANG__STAR_ = (function chronoid$core$time_stretch_BANG__STAR_(p__9920,time_reference,ratio){
var map__9921 = p__9920;
var map__9921__$1 = ((((!((map__9921 == null)))?(((((map__9921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9921):map__9921);
var event = map__9921__$1;
var repeat_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9921__$1,cljs.core.cst$kw$repeat_DASH_time);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9921__$1,cljs.core.cst$kw$clock_DASH_id);
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9921__$1,cljs.core.cst$kw$deadline);
var clock = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id));
var deadline__$1 = (time_reference + (ratio * (deadline - time_reference)));
var repeat_time__$1 = (cljs.core.truth_(repeat_time)?(repeat_time * ratio):null);
var repeats = (cljs.core.truth_(repeat_time__$1)?cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,repeat_time__$1),deadline__$1):null);
chronoid.core.clear_BANG_(event);

return chronoid.core.schedule_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$repeat_DASH_time,repeat_time__$1),(cljs.core.truth_(repeats)?cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (clock,deadline__$1,repeat_time__$1,repeats,map__9921,map__9921__$1,event,repeat_time,clock_id,deadline){
return (function (p1__9919_SHARP_){
return (chronoid.core.current_time(clock) >= p1__9919_SHARP_);
});})(clock,deadline__$1,repeat_time__$1,repeats,map__9921,map__9921__$1,event,repeat_time,clock_id,deadline))
,repeats)):deadline__$1));
});
/**
 * Reschedules events according to a `time-reference` and a `ratio`.
 * If the event is a repeating event, adjusts its repeat-time accordingly.
 * 
 * The first argument can be either a single event or a list of events.
 * Returns the rescheduled event, or a list of rescheduled events, depending
 * on the input type.
 * 
 * e.g.
 * (time-stretch! e (current-time clock) 0.5)
 * ^-- makes an event `e` occur twice as soon as it would otherwise
 * 
 * If `time-reference` is omitted, the default value is the current time of the
 * event's clock.
 */
chronoid.core.time_stretch_BANG_ = (function chronoid$core$time_stretch_BANG_(var_args){
var G__9925 = arguments.length;
switch (G__9925) {
case 2:
return chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,ratio){
var map__9926 = ((cljs.core.sequential_QMARK_(e))?cljs.core.first(e):e);
var map__9926__$1 = ((((!((map__9926 == null)))?(((((map__9926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9926):map__9926);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9926__$1,cljs.core.cst$kw$clock_DASH_id);
var clock = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id));
return chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3(e,chronoid.core.current_time(clock),ratio);
});

chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,time_reference,ratio){
if(cljs.core.sequential_QMARK_(e)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9923_SHARP_){
return chronoid.core.time_stretch_BANG__STAR_(p1__9923_SHARP_,time_reference,ratio);
}),e));
} else {
return chronoid.core.time_stretch_BANG__STAR_(e,time_reference,ratio);
}
});

chronoid.core.time_stretch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove all scheduled events and start the clock.
 */
chronoid.core.start_BANG_ = (function chronoid$core$start_BANG_(clock_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clock_atom,(function (p__9929){
var map__9930 = p__9929;
var map__9930__$1 = ((((!((map__9930 == null)))?(((((map__9930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9930):map__9930);
var clock = map__9930__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9930__$1,cljs.core.cst$kw$context);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9930__$1,cljs.core.cst$kw$started);
if(cljs.core.truth_(started)){
return clock;
} else {
var clock_node = (function (){var G__9932 = context.createScriptProcessor((256),(1),(1));
G__9932.connect(context.destination);

(G__9932["onaudioprocess"] = ((function (G__9932,map__9930,map__9930__$1,clock,context,started){
return (function (){
return chronoid.core.tick_BANG_(clock_atom);
});})(G__9932,map__9930,map__9930__$1,clock,context,started))
);

return G__9932;
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(clock,cljs.core.cst$kw$started,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$clock_DASH_node,clock_node], 0));
}
}));
});
/**
 * Stops the clock.
 */
chronoid.core.stop_BANG_ = (function chronoid$core$stop_BANG_(clock_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clock_atom,(function (p__9933){
var map__9934 = p__9933;
var map__9934__$1 = ((((!((map__9934 == null)))?(((((map__9934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9934):map__9934);
var clock = map__9934__$1;
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,cljs.core.cst$kw$started);
var clock_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,cljs.core.cst$kw$clock_DASH_node);
if(cljs.core.truth_(started)){
clock_node.disconnect();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clock,cljs.core.cst$kw$started,false),cljs.core.cst$kw$clock_DASH_node);
} else {
return clock;
}
}));
});
