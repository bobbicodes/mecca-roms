// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12026){
var map__12027 = p__12026;
var map__12027__$1 = ((((!((map__12027 == null)))?(((((map__12027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12027):map__12027);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12027__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12027__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12027__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12027__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12029_12043 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12030_12044 = null;
var count__12031_12045 = (0);
var i__12032_12046 = (0);
while(true){
if((i__12032_12046 < count__12031_12045)){
var vec__12033_12047 = chunk__12030_12044.cljs$core$IIndexed$_nth$arity$2(null,i__12032_12046);
var k_12048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033_12047,(0),null);
var cb_12049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12033_12047,(1),null);
try{var G__12037_12050 = cljs.core.deref(re_frame.trace.traces);
(cb_12049.cljs$core$IFn$_invoke$arity$1 ? cb_12049.cljs$core$IFn$_invoke$arity$1(G__12037_12050) : cb_12049.call(null,G__12037_12050));
}catch (e12036){var e_12051 = e12036;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12048,"while storing",cljs.core.deref(re_frame.trace.traces),e_12051], 0));
}

var G__12052 = seq__12029_12043;
var G__12053 = chunk__12030_12044;
var G__12054 = count__12031_12045;
var G__12055 = (i__12032_12046 + (1));
seq__12029_12043 = G__12052;
chunk__12030_12044 = G__12053;
count__12031_12045 = G__12054;
i__12032_12046 = G__12055;
continue;
} else {
var temp__5457__auto___12056 = cljs.core.seq(seq__12029_12043);
if(temp__5457__auto___12056){
var seq__12029_12057__$1 = temp__5457__auto___12056;
if(cljs.core.chunked_seq_QMARK_(seq__12029_12057__$1)){
var c__4351__auto___12058 = cljs.core.chunk_first(seq__12029_12057__$1);
var G__12059 = cljs.core.chunk_rest(seq__12029_12057__$1);
var G__12060 = c__4351__auto___12058;
var G__12061 = cljs.core.count(c__4351__auto___12058);
var G__12062 = (0);
seq__12029_12043 = G__12059;
chunk__12030_12044 = G__12060;
count__12031_12045 = G__12061;
i__12032_12046 = G__12062;
continue;
} else {
var vec__12038_12063 = cljs.core.first(seq__12029_12057__$1);
var k_12064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12063,(0),null);
var cb_12065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12063,(1),null);
try{var G__12042_12066 = cljs.core.deref(re_frame.trace.traces);
(cb_12065.cljs$core$IFn$_invoke$arity$1 ? cb_12065.cljs$core$IFn$_invoke$arity$1(G__12042_12066) : cb_12065.call(null,G__12042_12066));
}catch (e12041){var e_12067 = e12041;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12064,"while storing",cljs.core.deref(re_frame.trace.traces),e_12067], 0));
}

var G__12068 = cljs.core.next(seq__12029_12057__$1);
var G__12069 = null;
var G__12070 = (0);
var G__12071 = (0);
seq__12029_12043 = G__12068;
chunk__12030_12044 = G__12069;
count__12031_12045 = G__12070;
i__12032_12046 = G__12071;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
