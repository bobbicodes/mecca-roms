// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10416 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__10417 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10418 = null;
var count__10419 = (0);
var i__10420 = (0);
while(true){
if((i__10420 < count__10419)){
var vec__10421 = cljs.core._nth.call(null,chunk__10418,i__10420);
var effect_key = cljs.core.nth.call(null,vec__10421,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10421,(1),null);
var temp__5455__auto___10437 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10437)){
var effect_fn_10438 = temp__5455__auto___10437;
effect_fn_10438.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10439 = seq__10417;
var G__10440 = chunk__10418;
var G__10441 = count__10419;
var G__10442 = (i__10420 + (1));
seq__10417 = G__10439;
chunk__10418 = G__10440;
count__10419 = G__10441;
i__10420 = G__10442;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10417);
if(temp__5457__auto__){
var seq__10417__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10417__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10417__$1);
var G__10443 = cljs.core.chunk_rest.call(null,seq__10417__$1);
var G__10444 = c__4351__auto__;
var G__10445 = cljs.core.count.call(null,c__4351__auto__);
var G__10446 = (0);
seq__10417 = G__10443;
chunk__10418 = G__10444;
count__10419 = G__10445;
i__10420 = G__10446;
continue;
} else {
var vec__10424 = cljs.core.first.call(null,seq__10417__$1);
var effect_key = cljs.core.nth.call(null,vec__10424,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10424,(1),null);
var temp__5455__auto___10447 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10447)){
var effect_fn_10448 = temp__5455__auto___10447;
effect_fn_10448.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10449 = cljs.core.next.call(null,seq__10417__$1);
var G__10450 = null;
var G__10451 = (0);
var G__10452 = (0);
seq__10417 = G__10449;
chunk__10418 = G__10450;
count__10419 = G__10451;
i__10420 = G__10452;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9995__auto___10453 = re_frame.interop.now.call(null);
var duration__9996__auto___10454 = (end__9995__auto___10453 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9996__auto___10454,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9995__auto___10453);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10416;
}} else {
var seq__10427 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10428 = null;
var count__10429 = (0);
var i__10430 = (0);
while(true){
if((i__10430 < count__10429)){
var vec__10431 = cljs.core._nth.call(null,chunk__10428,i__10430);
var effect_key = cljs.core.nth.call(null,vec__10431,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10431,(1),null);
var temp__5455__auto___10455 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10455)){
var effect_fn_10456 = temp__5455__auto___10455;
effect_fn_10456.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10457 = seq__10427;
var G__10458 = chunk__10428;
var G__10459 = count__10429;
var G__10460 = (i__10430 + (1));
seq__10427 = G__10457;
chunk__10428 = G__10458;
count__10429 = G__10459;
i__10430 = G__10460;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10427);
if(temp__5457__auto__){
var seq__10427__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10427__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10427__$1);
var G__10461 = cljs.core.chunk_rest.call(null,seq__10427__$1);
var G__10462 = c__4351__auto__;
var G__10463 = cljs.core.count.call(null,c__4351__auto__);
var G__10464 = (0);
seq__10427 = G__10461;
chunk__10428 = G__10462;
count__10429 = G__10463;
i__10430 = G__10464;
continue;
} else {
var vec__10434 = cljs.core.first.call(null,seq__10427__$1);
var effect_key = cljs.core.nth.call(null,vec__10434,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10434,(1),null);
var temp__5455__auto___10465 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10465)){
var effect_fn_10466 = temp__5455__auto___10465;
effect_fn_10466.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10467 = cljs.core.next.call(null,seq__10427__$1);
var G__10468 = null;
var G__10469 = (0);
var G__10470 = (0);
seq__10427 = G__10467;
chunk__10428 = G__10468;
count__10429 = G__10469;
i__10430 = G__10470;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10471 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10472 = null;
var count__10473 = (0);
var i__10474 = (0);
while(true){
if((i__10474 < count__10473)){
var map__10475 = cljs.core._nth.call(null,chunk__10472,i__10474);
var map__10475__$1 = ((((!((map__10475 == null)))?(((((map__10475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10475):map__10475);
var effect = map__10475__$1;
var ms = cljs.core.get.call(null,map__10475__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10475__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10471,chunk__10472,count__10473,i__10474,map__10475,map__10475__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10471,chunk__10472,count__10473,i__10474,map__10475,map__10475__$1,effect,ms,dispatch))
,ms);
}


var G__10479 = seq__10471;
var G__10480 = chunk__10472;
var G__10481 = count__10473;
var G__10482 = (i__10474 + (1));
seq__10471 = G__10479;
chunk__10472 = G__10480;
count__10473 = G__10481;
i__10474 = G__10482;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10471);
if(temp__5457__auto__){
var seq__10471__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10471__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10471__$1);
var G__10483 = cljs.core.chunk_rest.call(null,seq__10471__$1);
var G__10484 = c__4351__auto__;
var G__10485 = cljs.core.count.call(null,c__4351__auto__);
var G__10486 = (0);
seq__10471 = G__10483;
chunk__10472 = G__10484;
count__10473 = G__10485;
i__10474 = G__10486;
continue;
} else {
var map__10477 = cljs.core.first.call(null,seq__10471__$1);
var map__10477__$1 = ((((!((map__10477 == null)))?(((((map__10477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10477):map__10477);
var effect = map__10477__$1;
var ms = cljs.core.get.call(null,map__10477__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10477__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10471,chunk__10472,count__10473,i__10474,map__10477,map__10477__$1,effect,ms,dispatch,seq__10471__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10471,chunk__10472,count__10473,i__10474,map__10477,map__10477__$1,effect,ms,dispatch,seq__10471__$1,temp__5457__auto__))
,ms);
}


var G__10487 = cljs.core.next.call(null,seq__10471__$1);
var G__10488 = null;
var G__10489 = (0);
var G__10490 = (0);
seq__10471 = G__10487;
chunk__10472 = G__10488;
count__10473 = G__10489;
i__10474 = G__10490;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__10491 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10492 = null;
var count__10493 = (0);
var i__10494 = (0);
while(true){
if((i__10494 < count__10493)){
var event = cljs.core._nth.call(null,chunk__10492,i__10494);
re_frame.router.dispatch.call(null,event);


var G__10495 = seq__10491;
var G__10496 = chunk__10492;
var G__10497 = count__10493;
var G__10498 = (i__10494 + (1));
seq__10491 = G__10495;
chunk__10492 = G__10496;
count__10493 = G__10497;
i__10494 = G__10498;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10491);
if(temp__5457__auto__){
var seq__10491__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10491__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10491__$1);
var G__10499 = cljs.core.chunk_rest.call(null,seq__10491__$1);
var G__10500 = c__4351__auto__;
var G__10501 = cljs.core.count.call(null,c__4351__auto__);
var G__10502 = (0);
seq__10491 = G__10499;
chunk__10492 = G__10500;
count__10493 = G__10501;
i__10494 = G__10502;
continue;
} else {
var event = cljs.core.first.call(null,seq__10491__$1);
re_frame.router.dispatch.call(null,event);


var G__10503 = cljs.core.next.call(null,seq__10491__$1);
var G__10504 = null;
var G__10505 = (0);
var G__10506 = (0);
seq__10491 = G__10503;
chunk__10492 = G__10504;
count__10493 = G__10505;
i__10494 = G__10506;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10507 = cljs.core.seq.call(null,value);
var chunk__10508 = null;
var count__10509 = (0);
var i__10510 = (0);
while(true){
if((i__10510 < count__10509)){
var event = cljs.core._nth.call(null,chunk__10508,i__10510);
clear_event.call(null,event);


var G__10511 = seq__10507;
var G__10512 = chunk__10508;
var G__10513 = count__10509;
var G__10514 = (i__10510 + (1));
seq__10507 = G__10511;
chunk__10508 = G__10512;
count__10509 = G__10513;
i__10510 = G__10514;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10507);
if(temp__5457__auto__){
var seq__10507__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10507__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10507__$1);
var G__10515 = cljs.core.chunk_rest.call(null,seq__10507__$1);
var G__10516 = c__4351__auto__;
var G__10517 = cljs.core.count.call(null,c__4351__auto__);
var G__10518 = (0);
seq__10507 = G__10515;
chunk__10508 = G__10516;
count__10509 = G__10517;
i__10510 = G__10518;
continue;
} else {
var event = cljs.core.first.call(null,seq__10507__$1);
clear_event.call(null,event);


var G__10519 = cljs.core.next.call(null,seq__10507__$1);
var G__10520 = null;
var G__10521 = (0);
var G__10522 = (0);
seq__10507 = G__10519;
chunk__10508 = G__10520;
count__10509 = G__10521;
i__10510 = G__10522;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
