// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_12392 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12393 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12394 = null;
var count__12395 = (0);
var i__12396 = (0);
while(true){
if((i__12396 < count__12395)){
var vec__12397 = chunk__12394.cljs$core$IIndexed$_nth$arity$2(null,i__12396);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397,(1),null);
var temp__5455__auto___12413 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12413)){
var effect_fn_12414 = temp__5455__auto___12413;
(effect_fn_12414.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12414.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12414.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12415 = seq__12393;
var G__12416 = chunk__12394;
var G__12417 = count__12395;
var G__12418 = (i__12396 + (1));
seq__12393 = G__12415;
chunk__12394 = G__12416;
count__12395 = G__12417;
i__12396 = G__12418;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12393);
if(temp__5457__auto__){
var seq__12393__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12393__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12393__$1);
var G__12419 = cljs.core.chunk_rest(seq__12393__$1);
var G__12420 = c__4351__auto__;
var G__12421 = cljs.core.count(c__4351__auto__);
var G__12422 = (0);
seq__12393 = G__12419;
chunk__12394 = G__12420;
count__12395 = G__12421;
i__12396 = G__12422;
continue;
} else {
var vec__12400 = cljs.core.first(seq__12393__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12400,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12400,(1),null);
var temp__5455__auto___12423 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12423)){
var effect_fn_12424 = temp__5455__auto___12423;
(effect_fn_12424.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12424.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12424.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12425 = cljs.core.next(seq__12393__$1);
var G__12426 = null;
var G__12427 = (0);
var G__12428 = (0);
seq__12393 = G__12425;
chunk__12394 = G__12426;
count__12395 = G__12427;
i__12396 = G__12428;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11953__auto___12429 = re_frame.interop.now();
var duration__11954__auto___12430 = (end__11953__auto___12429 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11954__auto___12430,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11953__auto___12429);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12392;
}} else {
var seq__12403 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12404 = null;
var count__12405 = (0);
var i__12406 = (0);
while(true){
if((i__12406 < count__12405)){
var vec__12407 = chunk__12404.cljs$core$IIndexed$_nth$arity$2(null,i__12406);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407,(1),null);
var temp__5455__auto___12431 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12431)){
var effect_fn_12432 = temp__5455__auto___12431;
(effect_fn_12432.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12432.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12432.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12433 = seq__12403;
var G__12434 = chunk__12404;
var G__12435 = count__12405;
var G__12436 = (i__12406 + (1));
seq__12403 = G__12433;
chunk__12404 = G__12434;
count__12405 = G__12435;
i__12406 = G__12436;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12403);
if(temp__5457__auto__){
var seq__12403__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12403__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12403__$1);
var G__12437 = cljs.core.chunk_rest(seq__12403__$1);
var G__12438 = c__4351__auto__;
var G__12439 = cljs.core.count(c__4351__auto__);
var G__12440 = (0);
seq__12403 = G__12437;
chunk__12404 = G__12438;
count__12405 = G__12439;
i__12406 = G__12440;
continue;
} else {
var vec__12410 = cljs.core.first(seq__12403__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(1),null);
var temp__5455__auto___12441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12441)){
var effect_fn_12442 = temp__5455__auto___12441;
(effect_fn_12442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12442.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12443 = cljs.core.next(seq__12403__$1);
var G__12444 = null;
var G__12445 = (0);
var G__12446 = (0);
seq__12403 = G__12443;
chunk__12404 = G__12444;
count__12405 = G__12445;
i__12406 = G__12446;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__12447 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12448 = null;
var count__12449 = (0);
var i__12450 = (0);
while(true){
if((i__12450 < count__12449)){
var map__12451 = chunk__12448.cljs$core$IIndexed$_nth$arity$2(null,i__12450);
var map__12451__$1 = ((((!((map__12451 == null)))?(((((map__12451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12451):map__12451);
var effect = map__12451__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12451__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12451__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12447,chunk__12448,count__12449,i__12450,map__12451,map__12451__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12447,chunk__12448,count__12449,i__12450,map__12451,map__12451__$1,effect,ms,dispatch))
,ms);
}


var G__12455 = seq__12447;
var G__12456 = chunk__12448;
var G__12457 = count__12449;
var G__12458 = (i__12450 + (1));
seq__12447 = G__12455;
chunk__12448 = G__12456;
count__12449 = G__12457;
i__12450 = G__12458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12447);
if(temp__5457__auto__){
var seq__12447__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12447__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12447__$1);
var G__12459 = cljs.core.chunk_rest(seq__12447__$1);
var G__12460 = c__4351__auto__;
var G__12461 = cljs.core.count(c__4351__auto__);
var G__12462 = (0);
seq__12447 = G__12459;
chunk__12448 = G__12460;
count__12449 = G__12461;
i__12450 = G__12462;
continue;
} else {
var map__12453 = cljs.core.first(seq__12447__$1);
var map__12453__$1 = ((((!((map__12453 == null)))?(((((map__12453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12453):map__12453);
var effect = map__12453__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12453__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12453__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12447,chunk__12448,count__12449,i__12450,map__12453,map__12453__$1,effect,ms,dispatch,seq__12447__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12447,chunk__12448,count__12449,i__12450,map__12453,map__12453__$1,effect,ms,dispatch,seq__12447__$1,temp__5457__auto__))
,ms);
}


var G__12463 = cljs.core.next(seq__12447__$1);
var G__12464 = null;
var G__12465 = (0);
var G__12466 = (0);
seq__12447 = G__12463;
chunk__12448 = G__12464;
count__12449 = G__12465;
i__12450 = G__12466;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12467 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12468 = null;
var count__12469 = (0);
var i__12470 = (0);
while(true){
if((i__12470 < count__12469)){
var event = chunk__12468.cljs$core$IIndexed$_nth$arity$2(null,i__12470);
re_frame.router.dispatch(event);


var G__12471 = seq__12467;
var G__12472 = chunk__12468;
var G__12473 = count__12469;
var G__12474 = (i__12470 + (1));
seq__12467 = G__12471;
chunk__12468 = G__12472;
count__12469 = G__12473;
i__12470 = G__12474;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12467);
if(temp__5457__auto__){
var seq__12467__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12467__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12467__$1);
var G__12475 = cljs.core.chunk_rest(seq__12467__$1);
var G__12476 = c__4351__auto__;
var G__12477 = cljs.core.count(c__4351__auto__);
var G__12478 = (0);
seq__12467 = G__12475;
chunk__12468 = G__12476;
count__12469 = G__12477;
i__12470 = G__12478;
continue;
} else {
var event = cljs.core.first(seq__12467__$1);
re_frame.router.dispatch(event);


var G__12479 = cljs.core.next(seq__12467__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12467 = G__12479;
chunk__12468 = G__12480;
count__12469 = G__12481;
i__12470 = G__12482;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12483 = cljs.core.seq(value);
var chunk__12484 = null;
var count__12485 = (0);
var i__12486 = (0);
while(true){
if((i__12486 < count__12485)){
var event = chunk__12484.cljs$core$IIndexed$_nth$arity$2(null,i__12486);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12487 = seq__12483;
var G__12488 = chunk__12484;
var G__12489 = count__12485;
var G__12490 = (i__12486 + (1));
seq__12483 = G__12487;
chunk__12484 = G__12488;
count__12485 = G__12489;
i__12486 = G__12490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12483);
if(temp__5457__auto__){
var seq__12483__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12483__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12483__$1);
var G__12491 = cljs.core.chunk_rest(seq__12483__$1);
var G__12492 = c__4351__auto__;
var G__12493 = cljs.core.count(c__4351__auto__);
var G__12494 = (0);
seq__12483 = G__12491;
chunk__12484 = G__12492;
count__12485 = G__12493;
i__12486 = G__12494;
continue;
} else {
var event = cljs.core.first(seq__12483__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12495 = cljs.core.next(seq__12483__$1);
var G__12496 = null;
var G__12497 = (0);
var G__12498 = (0);
seq__12483 = G__12495;
chunk__12484 = G__12496;
count__12485 = G__12497;
i__12486 = G__12498;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
