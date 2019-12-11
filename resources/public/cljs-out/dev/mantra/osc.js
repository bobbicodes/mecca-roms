// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.osc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mantra.time');
goog.require('mantra.sound');
goog.require('chronoid.core');
/**
 * Models the state of an oscillator.
 * 
 * e.g. (osc :type :square
 *           :freq 440
 *           :gain 0.5)
 * 
 * This produces a map that is used to create a fresh oscillator every time
 * one is needed. Because oscillators can only be started once, this
 * provides an abstraction for a 'persistent oscillator' that can be reused
 * any number of times (but under the hood, it's just a blueprint for any
 * number of oscillators).
 * 
 * :type, :freq and :gain are all optional.
 * 
 * :type defaults to a sine wave.
 * 
 * :freq and :gain are optional default values that, when present, are used
 * when playing notes that do not specify frequency/gain values. If left out,
 * they default to 440 Hz and 1.0 (full volume), respectively.
 * 
 * You can also supply your own AudioContext as :context, otherwise Mantra will
 * create and use its own AudioContext.
 * 
 * Similarly, you can supply your own chronoid clock as :clock, otherwise
 * Mantra will create one for you.
 */
mantra.osc.osc = (function mantra$osc$osc(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10010 = arguments.length;
var i__4532__auto___10011 = (0);
while(true){
if((i__4532__auto___10011 < len__4531__auto___10010)){
args__4534__auto__.push((arguments[i__4532__auto___10011]));

var G__10012 = (i__4532__auto___10011 + (1));
i__4532__auto___10011 = G__10012;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mantra.osc.osc.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mantra.osc.osc.cljs$core$IFn$_invoke$arity$variadic = (function (p__10007){
var map__10008 = p__10007;
var map__10008__$1 = ((((!((map__10008 == null)))?(((((map__10008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10008):map__10008);
var osc_map = map__10008__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10008__$1,cljs.core.cst$kw$type);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10008__$1,cljs.core.cst$kw$context);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10008__$1,cljs.core.cst$kw$clock);
var type__$1 = cljs.core.name((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$sine;
}
})());
var context__$1 = (function (){var or__3949__auto__ = context;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.deref(mantra.sound._STAR_audio_context_STAR_);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return mantra.sound.create_audio_context();
}
}
})();
if(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["sawtooth",null,"triangle",null,"square",null,"sine",null], null), null),type__$1))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1)," is not a valid oscillator type."].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(osc_map,cljs.core.cst$kw$type,type__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(type__$1),cljs.core.cst$kw$context,context__$1,cljs.core.cst$kw$clock,(function (){var or__3949__auto__ = clock;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.deref(mantra.time._STAR_clock_STAR_);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return mantra.time.create_clock(context__$1);
}
}
})()], 0));
}
});

mantra.osc.osc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mantra.osc.osc.cljs$lang$applyTo = (function (seq10006){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10006));
});

/**
 * Creates a one-off oscillator based on a map, hooks it up to a gain node,
 * and hooks the gain node up to the destination of the AudioContext.
 * 
 * Returns a map including the oscillator and gain nodes and the ID of the
 * oscillator model used as a blueprint.
 */
mantra.osc.osc_STAR_ = (function mantra$osc$osc_STAR_(p__10013){
var map__10014 = p__10013;
var map__10014__$1 = ((((!((map__10014 == null)))?(((((map__10014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10014):map__10014);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10014__$1,cljs.core.cst$kw$id);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10014__$1,cljs.core.cst$kw$type);
var freq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10014__$1,cljs.core.cst$kw$freq);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10014__$1,cljs.core.cst$kw$context);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10014__$1,cljs.core.cst$kw$clock);
var osc = context.createOscillator();
var gain = context.createGain();
osc.type = (function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "sine";
}
})();

osc.frequency.value = (function (){var or__3949__auto__ = freq;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (440);
}
})();

gain.gain.value = 0.001;

osc.connect(gain);

gain.connect(context.destination);

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$osc_DASH_node,osc,cljs.core.cst$kw$gain_DASH_node,gain,cljs.core.cst$kw$model_DASH_id,id,cljs.core.cst$kw$context,context,cljs.core.cst$kw$clock,clock], null);
});
/**
 * A set of currently active oscillators. Each oscillator is represented as a
 *   map containing:
 * 
 *   :osc-node  -- the oscillator node :gain-node -- the gain node it's
 *   connected to :model-id  -- the ID of the model that was used as a blueprint
 *   to create the oscillator
 */
mantra.osc._STAR_oscillators_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
mantra.osc.freq = (function mantra$osc$freq(osc_node,hz){
return osc_node.frequency.value = hz;
});
mantra.osc.gain = (function mantra$osc$gain(gain_node,level){
return gain_node.gain.value = level;
});
mantra.osc.gain_ramp = (function mantra$osc$gain_ramp(gain_node,level){
var time = gain_node.context.currentTime;
return gain_node.gain.exponentialRampToValueAtTime(level,(time + 0.1));
});
mantra.osc.silence = (function mantra$osc$silence(gain_node){
return mantra.osc.gain(gain_node,0.001);
});
mantra.osc.silence_ramp = (function mantra$osc$silence_ramp(gain_node){
return mantra.osc.gain_ramp(gain_node,0.001);
});
/**
 * Start an oscillator and add it to *oscillators*.
 */
mantra.osc.start_osc = (function mantra$osc$start_osc(p__10016){
var map__10017 = p__10016;
var map__10017__$1 = ((((!((map__10017 == null)))?(((((map__10017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10017):map__10017);
var osc_impl = map__10017__$1;
var osc_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10017__$1,cljs.core.cst$kw$osc_DASH_node);
osc_node.start((0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mantra.osc._STAR_oscillators_STAR_,cljs.core.conj,osc_impl);
});
/**
 * Silences and stops a currently playing oscillator.
 * 
 * This fn can take either an osc-model or an osc-impl as an argument.
 */
mantra.osc.stop_osc = (function mantra$osc$stop_osc(osc){
if(cljs.core.contains_QMARK_(osc,cljs.core.cst$kw$model_DASH_id)){
var map__10020 = osc;
var map__10020__$1 = ((((!((map__10020 == null)))?(((((map__10020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10020):map__10020);
var osc_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10020__$1,cljs.core.cst$kw$osc_DASH_node);
var gain_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10020__$1,cljs.core.cst$kw$gain_DASH_node);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10020__$1,cljs.core.cst$kw$clock);
mantra.osc.silence_ramp(gain_node);

return chronoid.core.set_timeout_BANG_(clock,((function (map__10020,map__10020__$1,osc_node,gain_node,clock){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mantra.osc._STAR_oscillators_STAR_,cljs.core.disj,osc);

return osc_node.stop();
});})(map__10020,map__10020__$1,osc_node,gain_node,clock))
,(1000));
} else {
if(cljs.core.contains_QMARK_(osc,cljs.core.cst$kw$id)){
var seq__10022 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10019_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(osc),cljs.core.cst$kw$model_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__10019_SHARP_));
}),cljs.core.deref(mantra.osc._STAR_oscillators_STAR_)));
var chunk__10023 = null;
var count__10024 = (0);
var i__10025 = (0);
while(true){
if((i__10025 < count__10024)){
var osc_impl = chunk__10023.cljs$core$IIndexed$_nth$arity$2(null,i__10025);
(mantra.osc.stop_osc.cljs$core$IFn$_invoke$arity$1 ? mantra.osc.stop_osc.cljs$core$IFn$_invoke$arity$1(osc_impl) : mantra.osc.stop_osc.call(null,osc_impl));


var G__10026 = seq__10022;
var G__10027 = chunk__10023;
var G__10028 = count__10024;
var G__10029 = (i__10025 + (1));
seq__10022 = G__10026;
chunk__10023 = G__10027;
count__10024 = G__10028;
i__10025 = G__10029;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10022);
if(temp__5720__auto__){
var seq__10022__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10022__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10022__$1);
var G__10030 = cljs.core.chunk_rest(seq__10022__$1);
var G__10031 = c__4351__auto__;
var G__10032 = cljs.core.count(c__4351__auto__);
var G__10033 = (0);
seq__10022 = G__10030;
chunk__10023 = G__10031;
count__10024 = G__10032;
i__10025 = G__10033;
continue;
} else {
var osc_impl = cljs.core.first(seq__10022__$1);
(mantra.osc.stop_osc.cljs$core$IFn$_invoke$arity$1 ? mantra.osc.stop_osc.cljs$core$IFn$_invoke$arity$1(osc_impl) : mantra.osc.stop_osc.call(null,osc_impl));


var G__10034 = cljs.core.next(seq__10022__$1);
var G__10035 = null;
var G__10036 = (0);
var G__10037 = (0);
seq__10022 = G__10034;
chunk__10023 = G__10035;
count__10024 = G__10036;
i__10025 = G__10037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
/**
 * Silences and stops all currently playing oscillators.
 */
mantra.osc.stop_all_oscs = (function mantra$osc$stop_all_oscs(){
var seq__10038 = cljs.core.seq(cljs.core.deref(mantra.osc._STAR_oscillators_STAR_));
var chunk__10039 = null;
var count__10040 = (0);
var i__10041 = (0);
while(true){
if((i__10041 < count__10040)){
var osc = chunk__10039.cljs$core$IIndexed$_nth$arity$2(null,i__10041);
mantra.osc.stop_osc(osc);


var G__10042 = seq__10038;
var G__10043 = chunk__10039;
var G__10044 = count__10040;
var G__10045 = (i__10041 + (1));
seq__10038 = G__10042;
chunk__10039 = G__10043;
count__10040 = G__10044;
i__10041 = G__10045;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10038);
if(temp__5720__auto__){
var seq__10038__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10038__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10038__$1);
var G__10046 = cljs.core.chunk_rest(seq__10038__$1);
var G__10047 = c__4351__auto__;
var G__10048 = cljs.core.count(c__4351__auto__);
var G__10049 = (0);
seq__10038 = G__10046;
chunk__10039 = G__10047;
count__10040 = G__10048;
i__10041 = G__10049;
continue;
} else {
var osc = cljs.core.first(seq__10038__$1);
mantra.osc.stop_osc(osc);


var G__10050 = cljs.core.next(seq__10038__$1);
var G__10051 = null;
var G__10052 = (0);
var G__10053 = (0);
seq__10038 = G__10050;
chunk__10039 = G__10051;
count__10040 = G__10052;
i__10041 = G__10053;
continue;
}
} else {
return null;
}
}
break;
}
});
