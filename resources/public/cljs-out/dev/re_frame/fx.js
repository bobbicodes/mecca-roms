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
var _STAR_current_trace_STAR_12383 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12384 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12385 = null;
var count__12386 = (0);
var i__12387 = (0);
while(true){
if((i__12387 < count__12386)){
var vec__12388 = chunk__12385.cljs$core$IIndexed$_nth$arity$2(null,i__12387);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(1),null);
var temp__5718__auto___12404 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12404)){
var effect_fn_12405 = temp__5718__auto___12404;
(effect_fn_12405.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12405.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12405.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12406 = seq__12384;
var G__12407 = chunk__12385;
var G__12408 = count__12386;
var G__12409 = (i__12387 + (1));
seq__12384 = G__12406;
chunk__12385 = G__12407;
count__12386 = G__12408;
i__12387 = G__12409;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12384);
if(temp__5720__auto__){
var seq__12384__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12384__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12384__$1);
var G__12410 = cljs.core.chunk_rest(seq__12384__$1);
var G__12411 = c__4351__auto__;
var G__12412 = cljs.core.count(c__4351__auto__);
var G__12413 = (0);
seq__12384 = G__12410;
chunk__12385 = G__12411;
count__12386 = G__12412;
i__12387 = G__12413;
continue;
} else {
var vec__12391 = cljs.core.first(seq__12384__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12391,(1),null);
var temp__5718__auto___12414 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12414)){
var effect_fn_12415 = temp__5718__auto___12414;
(effect_fn_12415.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12415.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12415.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12416 = cljs.core.next(seq__12384__$1);
var G__12417 = null;
var G__12418 = (0);
var G__12419 = (0);
seq__12384 = G__12416;
chunk__12385 = G__12417;
count__12386 = G__12418;
i__12387 = G__12419;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11944__auto___12420 = re_frame.interop.now();
var duration__11945__auto___12421 = (end__11944__auto___12420 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11945__auto___12421,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11944__auto___12420);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12383;
}} else {
var seq__12394 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12395 = null;
var count__12396 = (0);
var i__12397 = (0);
while(true){
if((i__12397 < count__12396)){
var vec__12398 = chunk__12395.cljs$core$IIndexed$_nth$arity$2(null,i__12397);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12398,(1),null);
var temp__5718__auto___12422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12422)){
var effect_fn_12423 = temp__5718__auto___12422;
(effect_fn_12423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12424 = seq__12394;
var G__12425 = chunk__12395;
var G__12426 = count__12396;
var G__12427 = (i__12397 + (1));
seq__12394 = G__12424;
chunk__12395 = G__12425;
count__12396 = G__12426;
i__12397 = G__12427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12394);
if(temp__5720__auto__){
var seq__12394__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12394__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12394__$1);
var G__12428 = cljs.core.chunk_rest(seq__12394__$1);
var G__12429 = c__4351__auto__;
var G__12430 = cljs.core.count(c__4351__auto__);
var G__12431 = (0);
seq__12394 = G__12428;
chunk__12395 = G__12429;
count__12396 = G__12430;
i__12397 = G__12431;
continue;
} else {
var vec__12401 = cljs.core.first(seq__12394__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
var temp__5718__auto___12432 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12432)){
var effect_fn_12433 = temp__5718__auto___12432;
(effect_fn_12433.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12433.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12433.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12434 = cljs.core.next(seq__12394__$1);
var G__12435 = null;
var G__12436 = (0);
var G__12437 = (0);
seq__12394 = G__12434;
chunk__12395 = G__12435;
count__12396 = G__12436;
i__12397 = G__12437;
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
var seq__12438 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12439 = null;
var count__12440 = (0);
var i__12441 = (0);
while(true){
if((i__12441 < count__12440)){
var map__12442 = chunk__12439.cljs$core$IIndexed$_nth$arity$2(null,i__12441);
var map__12442__$1 = ((((!((map__12442 == null)))?(((((map__12442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12442):map__12442);
var effect = map__12442__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12438,chunk__12439,count__12440,i__12441,map__12442,map__12442__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12438,chunk__12439,count__12440,i__12441,map__12442,map__12442__$1,effect,ms,dispatch))
,ms);
}


var G__12446 = seq__12438;
var G__12447 = chunk__12439;
var G__12448 = count__12440;
var G__12449 = (i__12441 + (1));
seq__12438 = G__12446;
chunk__12439 = G__12447;
count__12440 = G__12448;
i__12441 = G__12449;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12438);
if(temp__5720__auto__){
var seq__12438__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12438__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12438__$1);
var G__12450 = cljs.core.chunk_rest(seq__12438__$1);
var G__12451 = c__4351__auto__;
var G__12452 = cljs.core.count(c__4351__auto__);
var G__12453 = (0);
seq__12438 = G__12450;
chunk__12439 = G__12451;
count__12440 = G__12452;
i__12441 = G__12453;
continue;
} else {
var map__12444 = cljs.core.first(seq__12438__$1);
var map__12444__$1 = ((((!((map__12444 == null)))?(((((map__12444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12444):map__12444);
var effect = map__12444__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12444__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12444__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12438,chunk__12439,count__12440,i__12441,map__12444,map__12444__$1,effect,ms,dispatch,seq__12438__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12438,chunk__12439,count__12440,i__12441,map__12444,map__12444__$1,effect,ms,dispatch,seq__12438__$1,temp__5720__auto__))
,ms);
}


var G__12454 = cljs.core.next(seq__12438__$1);
var G__12455 = null;
var G__12456 = (0);
var G__12457 = (0);
seq__12438 = G__12454;
chunk__12439 = G__12455;
count__12440 = G__12456;
i__12441 = G__12457;
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
var seq__12458 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12459 = null;
var count__12460 = (0);
var i__12461 = (0);
while(true){
if((i__12461 < count__12460)){
var event = chunk__12459.cljs$core$IIndexed$_nth$arity$2(null,i__12461);
re_frame.router.dispatch(event);


var G__12462 = seq__12458;
var G__12463 = chunk__12459;
var G__12464 = count__12460;
var G__12465 = (i__12461 + (1));
seq__12458 = G__12462;
chunk__12459 = G__12463;
count__12460 = G__12464;
i__12461 = G__12465;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12458);
if(temp__5720__auto__){
var seq__12458__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12458__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12458__$1);
var G__12466 = cljs.core.chunk_rest(seq__12458__$1);
var G__12467 = c__4351__auto__;
var G__12468 = cljs.core.count(c__4351__auto__);
var G__12469 = (0);
seq__12458 = G__12466;
chunk__12459 = G__12467;
count__12460 = G__12468;
i__12461 = G__12469;
continue;
} else {
var event = cljs.core.first(seq__12458__$1);
re_frame.router.dispatch(event);


var G__12470 = cljs.core.next(seq__12458__$1);
var G__12471 = null;
var G__12472 = (0);
var G__12473 = (0);
seq__12458 = G__12470;
chunk__12459 = G__12471;
count__12460 = G__12472;
i__12461 = G__12473;
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
var seq__12474 = cljs.core.seq(value);
var chunk__12475 = null;
var count__12476 = (0);
var i__12477 = (0);
while(true){
if((i__12477 < count__12476)){
var event = chunk__12475.cljs$core$IIndexed$_nth$arity$2(null,i__12477);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12478 = seq__12474;
var G__12479 = chunk__12475;
var G__12480 = count__12476;
var G__12481 = (i__12477 + (1));
seq__12474 = G__12478;
chunk__12475 = G__12479;
count__12476 = G__12480;
i__12477 = G__12481;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12474);
if(temp__5720__auto__){
var seq__12474__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12474__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12474__$1);
var G__12482 = cljs.core.chunk_rest(seq__12474__$1);
var G__12483 = c__4351__auto__;
var G__12484 = cljs.core.count(c__4351__auto__);
var G__12485 = (0);
seq__12474 = G__12482;
chunk__12475 = G__12483;
count__12476 = G__12484;
i__12477 = G__12485;
continue;
} else {
var event = cljs.core.first(seq__12474__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12486 = cljs.core.next(seq__12474__$1);
var G__12487 = null;
var G__12488 = (0);
var G__12489 = (0);
seq__12474 = G__12486;
chunk__12475 = G__12487;
count__12476 = G__12488;
i__12477 = G__12489;
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
