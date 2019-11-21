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
var len__4531__auto___9833 = arguments.length;
var i__4532__auto___9834 = (0);
while(true){
if((i__4532__auto___9834 < len__4531__auto___9833)){
args__4534__auto__.push((arguments[i__4532__auto___9834]));

var G__9835 = (i__4532__auto___9834 + (1));
i__4532__auto___9834 = G__9835;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return chronoid.core.clock.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

chronoid.core.clock.cljs$core$IFn$_invoke$arity$variadic = (function (p__9830){
var map__9831 = p__9830;
var map__9831__$1 = ((((!((map__9831 == null)))?(((((map__9831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9831):map__9831);
var attrs = map__9831__$1;
var ctx = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(chronoid.core.audio_context,((function (map__9831,map__9831__$1,attrs){
return (function (p1__9828_SHARP_){
var or__3949__auto__ = p1__9828_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return chronoid.core.new_audio_context();
}
});})(map__9831,map__9831__$1,attrs))
);
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("clock");
var clock = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chronoid.core.default_options,attrs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$context,ctx,cljs.core.cst$kw$id,id,cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$started,false], null)], 0));
var clock_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(clock);
chronoid.core._STAR_clocks_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(chronoid.core._STAR_clocks_STAR_,id,clock_atom);

return clock_atom;
});

chronoid.core.clock.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
chronoid.core.clock.cljs$lang$applyTo = (function (seq9829){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9829));
});

/**
 * Returns the current time of a clock's audio context, in milliseconds.
 */
chronoid.core.current_time = (function chronoid$core$current_time(p__9836){
var map__9837 = p__9836;
var map__9837__$1 = ((((!((map__9837 == null)))?(((((map__9837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9837):map__9837);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9837__$1,cljs.core.cst$kw$context);
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
chronoid.core.event_STAR_ = (function chronoid$core$event_STAR_(p__9839){
var map__9840 = p__9839;
var map__9840__$1 = ((((!((map__9840 == null)))?(((((map__9840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9840):map__9840);
var event = map__9840__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$id);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$clock_DASH_id);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$clock);
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$deadline);
var tolerance_early = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$tolerance_DASH_early);
var tolerance_late = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9840__$1,cljs.core.cst$kw$tolerance_DASH_late);
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
var map__9844 = cljs.core.deref(clock_atom);
var map__9844__$1 = ((((!((map__9844 == null)))?(((((map__9844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9844):map__9844);
var clock = map__9844__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9844__$1,cljs.core.cst$kw$events);
var current_time = chronoid.core.current_time(clock);
var execute_now_QMARK_ = ((function (map__9844,map__9844__$1,clock,events,current_time){
return (function (p1__9842_SHARP_){
return (cljs.core.cst$kw$earliest_DASH_time.cljs$core$IFn$_invoke$arity$1(p1__9842_SHARP_) <= current_time);
});})(map__9844,map__9844__$1,clock,events,current_time))
;
var events_due = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(execute_now_QMARK_,events);
var seq__9846_9850 = cljs.core.seq(events_due);
var chunk__9847_9851 = null;
var count__9848_9852 = (0);
var i__9849_9853 = (0);
while(true){
if((i__9849_9853 < count__9848_9852)){
var event_9854 = chunk__9847_9851.cljs$core$IIndexed$_nth$arity$2(null,i__9849_9853);
(chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1 ? chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1(event_9854) : chronoid.core.execute_BANG_.call(null,event_9854));


var G__9855 = seq__9846_9850;
var G__9856 = chunk__9847_9851;
var G__9857 = count__9848_9852;
var G__9858 = (i__9849_9853 + (1));
seq__9846_9850 = G__9855;
chunk__9847_9851 = G__9856;
count__9848_9852 = G__9857;
i__9849_9853 = G__9858;
continue;
} else {
var temp__5457__auto___9859 = cljs.core.seq(seq__9846_9850);
if(temp__5457__auto___9859){
var seq__9846_9860__$1 = temp__5457__auto___9859;
if(cljs.core.chunked_seq_QMARK_(seq__9846_9860__$1)){
var c__4351__auto___9861 = cljs.core.chunk_first(seq__9846_9860__$1);
var G__9862 = cljs.core.chunk_rest(seq__9846_9860__$1);
var G__9863 = c__4351__auto___9861;
var G__9864 = cljs.core.count(c__4351__auto___9861);
var G__9865 = (0);
seq__9846_9850 = G__9862;
chunk__9847_9851 = G__9863;
count__9848_9852 = G__9864;
i__9849_9853 = G__9865;
continue;
} else {
var event_9866 = cljs.core.first(seq__9846_9860__$1);
(chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1 ? chronoid.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1(event_9866) : chronoid.core.execute_BANG_.call(null,event_9866));


var G__9867 = cljs.core.next(seq__9846_9860__$1);
var G__9868 = null;
var G__9869 = (0);
var G__9870 = (0);
seq__9846_9850 = G__9867;
chunk__9847_9851 = G__9868;
count__9848_9852 = G__9869;
i__9849_9853 = G__9870;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(events_due)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clock_atom,cljs.core.update,cljs.core.cst$kw$events,((function (map__9844,map__9844__$1,clock,events,current_time,execute_now_QMARK_,events_due){
return (function (p1__9843_SHARP_){
return cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(execute_now_QMARK_,p1__9843_SHARP_);
});})(map__9844,map__9844__$1,clock,events,current_time,execute_now_QMARK_,events_due))
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
var map__9871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(events,mid);
var map__9871__$1 = ((((!((map__9871 == null)))?(((((map__9871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9871):map__9871);
var earliest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9871__$1,cljs.core.cst$kw$earliest_DASH_time);
var action = (((earliest_time < deadline))?cljs.core.cst$kw$higher:cljs.core.cst$kw$lower);
var G__9873 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$higher))?(mid + (1)):low);
var G__9874 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,cljs.core.cst$kw$lower))?mid:high);
var G__9875 = Math.floor(((low + high) / (2)));
low = G__9873;
high = G__9874;
mid = G__9875;
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
chronoid.core.insert_event = (function chronoid$core$insert_event(events,p__9876){
var map__9877 = p__9876;
var map__9877__$1 = ((((!((map__9877 == null)))?(((((map__9877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9877):map__9877);
var event = map__9877__$1;
var earliest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9877__$1,cljs.core.cst$kw$earliest_DASH_time);
var i = chronoid.core.index_by_time(events,earliest_time);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,events),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(i,events)], 0));
});
/**
 * Create an event and insert into a clock's event queue.
 */
chronoid.core.create_event_BANG_ = (function chronoid$core$create_event_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9889 = arguments.length;
var i__4532__auto___9890 = (0);
while(true){
if((i__4532__auto___9890 < len__4531__auto___9889)){
args__4534__auto__.push((arguments[i__4532__auto___9890]));

var G__9891 = (i__4532__auto___9890 + (1));
i__4532__auto___9890 = G__9891;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,deadline,p__9883){
var vec__9884 = p__9883;
var map__9887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9884,(0),null);
var map__9887__$1 = ((((!((map__9887 == null)))?(((((map__9887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9887):map__9887);
var opts = map__9887__$1;
var event = chronoid.core.event_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,f,cljs.core.cst$kw$clock,clock_atom,cljs.core.cst$kw$deadline,deadline], null),opts], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,cljs.core.update,cljs.core.cst$kw$events,chronoid.core.insert_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

return event;
});

chronoid.core.create_event_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.create_event_BANG_.cljs$lang$applyTo = (function (seq9879){
var G__9880 = cljs.core.first(seq9879);
var seq9879__$1 = cljs.core.next(seq9879);
var G__9881 = cljs.core.first(seq9879__$1);
var seq9879__$2 = cljs.core.next(seq9879__$1);
var G__9882 = cljs.core.first(seq9879__$2);
var seq9879__$3 = cljs.core.next(seq9879__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9880,G__9881,G__9882,seq9879__$3);
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
chronoid.core.schedule_BANG_ = (function chronoid$core$schedule_BANG_(p__9892,new_deadline){
var map__9893 = p__9892;
var map__9893__$1 = ((((!((map__9893 == null)))?(((((map__9893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9893):map__9893);
var event = map__9893__$1;
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9893__$1,cljs.core.cst$kw$clock_DASH_id);
var clock_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,cljs.core.update,cljs.core.cst$kw$events,chronoid.core.schedule_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event,new_deadline], 0));

return chronoid.core.event_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$deadline,new_deadline));
});
chronoid.core.execute_BANG_ = (function chronoid$core$execute_BANG_(p__9895){
var map__9896 = p__9895;
var map__9896__$1 = ((((!((map__9896 == null)))?(((((map__9896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9896):map__9896);
var event = map__9896__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9896__$1,cljs.core.cst$kw$action);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9896__$1,cljs.core.cst$kw$clock_DASH_id);
var latest_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9896__$1,cljs.core.cst$kw$latest_DASH_time);
var repeat_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9896__$1,cljs.core.cst$kw$repeat_DASH_time);
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
var len__4531__auto___9905 = arguments.length;
var i__4532__auto___9906 = (0);
while(true){
if((i__4532__auto___9906 < len__4531__auto___9905)){
args__4534__auto__.push((arguments[i__4532__auto___9906]));

var G__9907 = (i__4532__auto___9906 + (1));
i__4532__auto___9906 = G__9907;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,delay_ms,p__9902){
var map__9903 = p__9902;
var map__9903__$1 = ((((!((map__9903 == null)))?(((((map__9903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9903):map__9903);
var opts = map__9903__$1;
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,f,(chronoid.core.current_time(cljs.core.deref(clock_atom)) + delay_ms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

chronoid.core.set_timeout_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.set_timeout_BANG_.cljs$lang$applyTo = (function (seq9898){
var G__9899 = cljs.core.first(seq9898);
var seq9898__$1 = cljs.core.next(seq9898);
var G__9900 = cljs.core.first(seq9898__$1);
var seq9898__$2 = cljs.core.next(seq9898__$1);
var G__9901 = cljs.core.first(seq9898__$2);
var seq9898__$3 = cljs.core.next(seq9898__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9899,G__9900,G__9901,seq9898__$3);
});

/**
 * Schedules `f` to run before `deadline`. Returns the event.
 * 
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
chronoid.core.callback_at_time_BANG_ = (function chronoid$core$callback_at_time_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9915 = arguments.length;
var i__4532__auto___9916 = (0);
while(true){
if((i__4532__auto___9916 < len__4531__auto___9915)){
args__4534__auto__.push((arguments[i__4532__auto___9916]));

var G__9917 = (i__4532__auto___9916 + (1));
i__4532__auto___9916 = G__9917;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return chronoid.core.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

chronoid.core.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock_atom,f,deadline,p__9912){
var map__9913 = p__9912;
var map__9913__$1 = ((((!((map__9913 == null)))?(((((map__9913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9913):map__9913);
var opts = map__9913__$1;
return chronoid.core.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic(clock_atom,f,deadline,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

chronoid.core.callback_at_time_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
chronoid.core.callback_at_time_BANG_.cljs$lang$applyTo = (function (seq9908){
var G__9909 = cljs.core.first(seq9908);
var seq9908__$1 = cljs.core.next(seq9908);
var G__9910 = cljs.core.first(seq9908__$1);
var seq9908__$2 = cljs.core.next(seq9908__$1);
var G__9911 = cljs.core.first(seq9908__$2);
var seq9908__$3 = cljs.core.next(seq9908__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9909,G__9910,G__9911,seq9908__$3);
});

/**
 * Unschedules an event by removing it from its clock's event queue.
 */
chronoid.core.clear_BANG_ = (function chronoid$core$clear_BANG_(p__9919){
var map__9920 = p__9919;
var map__9920__$1 = ((((!((map__9920 == null)))?(((((map__9920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9920):map__9920);
var event = map__9920__$1;
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9920__$1,cljs.core.cst$kw$clock_DASH_id);
var clock_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clock_atom,cljs.core.update,cljs.core.cst$kw$events,((function (clock_atom,map__9920,map__9920__$1,event,clock_id){
return (function (p1__9918_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (clock_atom,map__9920,map__9920__$1,event,clock_id){
return (function (p__9922){
var map__9923 = p__9922;
var map__9923__$1 = ((((!((map__9923 == null)))?(((((map__9923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9923):map__9923);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$id);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(event));
});})(clock_atom,map__9920,map__9920__$1,event,clock_id))
,p1__9918_SHARP_);
});})(clock_atom,map__9920,map__9920__$1,event,clock_id))
);

return event;
});
/**
 * Sets the event to repeat every `time` milliseconds 
 */
chronoid.core.repeat_BANG_ = (function chronoid$core$repeat_BANG_(p__9925,time){
var map__9926 = p__9925;
var map__9926__$1 = ((((!((map__9926 == null)))?(((((map__9926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9926):map__9926);
var event = map__9926__$1;
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9926__$1,cljs.core.cst$kw$deadline);
if((time > (0))){
} else {
throw (new Error("Assert failed: (pos? time)"));
}

return chronoid.core.schedule_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$repeat_DASH_time,time),(deadline + time));
});
/**
 * Internal implementation for time-stretching a single event.
 */
chronoid.core.time_stretch_BANG__STAR_ = (function chronoid$core$time_stretch_BANG__STAR_(p__9929,time_reference,ratio){
var map__9930 = p__9929;
var map__9930__$1 = ((((!((map__9930 == null)))?(((((map__9930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9930):map__9930);
var event = map__9930__$1;
var repeat_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9930__$1,cljs.core.cst$kw$repeat_DASH_time);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9930__$1,cljs.core.cst$kw$clock_DASH_id);
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9930__$1,cljs.core.cst$kw$deadline);
var clock = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id));
var deadline__$1 = (time_reference + (ratio * (deadline - time_reference)));
var repeat_time__$1 = (cljs.core.truth_(repeat_time)?(repeat_time * ratio):null);
var repeats = (cljs.core.truth_(repeat_time__$1)?cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,repeat_time__$1),deadline__$1):null);
chronoid.core.clear_BANG_(event);

return chronoid.core.schedule_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$repeat_DASH_time,repeat_time__$1),(cljs.core.truth_(repeats)?cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (clock,deadline__$1,repeat_time__$1,repeats,map__9930,map__9930__$1,event,repeat_time,clock_id,deadline){
return (function (p1__9928_SHARP_){
return (chronoid.core.current_time(clock) >= p1__9928_SHARP_);
});})(clock,deadline__$1,repeat_time__$1,repeats,map__9930,map__9930__$1,event,repeat_time,clock_id,deadline))
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
var G__9934 = arguments.length;
switch (G__9934) {
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
var map__9935 = ((cljs.core.sequential_QMARK_(e))?cljs.core.first(e):e);
var map__9935__$1 = ((((!((map__9935 == null)))?(((((map__9935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9935):map__9935);
var clock_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9935__$1,cljs.core.cst$kw$clock_DASH_id);
var clock = cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(chronoid.core._STAR_clocks_STAR_,clock_id));
return chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3(e,chronoid.core.current_time(clock),ratio);
});

chronoid.core.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,time_reference,ratio){
if(cljs.core.sequential_QMARK_(e)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9932_SHARP_){
return chronoid.core.time_stretch_BANG__STAR_(p1__9932_SHARP_,time_reference,ratio);
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clock_atom,(function (p__9938){
var map__9939 = p__9938;
var map__9939__$1 = ((((!((map__9939 == null)))?(((((map__9939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9939):map__9939);
var clock = map__9939__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,cljs.core.cst$kw$context);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,cljs.core.cst$kw$started);
if(cljs.core.truth_(started)){
return clock;
} else {
var clock_node = (function (){var G__9941 = context.createScriptProcessor((256),(1),(1));
G__9941.connect(context.destination);

(G__9941["onaudioprocess"] = ((function (G__9941,map__9939,map__9939__$1,clock,context,started){
return (function (){
return chronoid.core.tick_BANG_(clock_atom);
});})(G__9941,map__9939,map__9939__$1,clock,context,started))
);

return G__9941;
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(clock,cljs.core.cst$kw$started,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$events,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$clock_DASH_node,clock_node], 0));
}
}));
});
/**
 * Stops the clock.
 */
chronoid.core.stop_BANG_ = (function chronoid$core$stop_BANG_(clock_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clock_atom,(function (p__9942){
var map__9943 = p__9942;
var map__9943__$1 = ((((!((map__9943 == null)))?(((((map__9943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9943):map__9943);
var clock = map__9943__$1;
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9943__$1,cljs.core.cst$kw$started);
var clock_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9943__$1,cljs.core.cst$kw$clock_DASH_node);
if(cljs.core.truth_(started)){
clock_node.disconnect();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clock,cljs.core.cst$kw$started,false),cljs.core.cst$kw$clock_DASH_node);
} else {
return clock;
}
}));
});
