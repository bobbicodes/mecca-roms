// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18717 = arguments.length;
switch (G__18717) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18718 = (function (f,blockable,meta18719){
this.f = f;
this.blockable = blockable;
this.meta18719 = meta18719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18720,meta18719__$1){
var self__ = this;
var _18720__$1 = this;
return (new cljs.core.async.t_cljs$core$async18718(self__.f,self__.blockable,meta18719__$1));
});

cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18720){
var self__ = this;
var _18720__$1 = this;
return self__.meta18719;
});

cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18719","meta18719",423195013,null)], null);
});

cljs.core.async.t_cljs$core$async18718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18718";

cljs.core.async.t_cljs$core$async18718.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18718");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18718.
 */
cljs.core.async.__GT_t_cljs$core$async18718 = (function cljs$core$async$__GT_t_cljs$core$async18718(f__$1,blockable__$1,meta18719){
return (new cljs.core.async.t_cljs$core$async18718(f__$1,blockable__$1,meta18719));
});

}

return (new cljs.core.async.t_cljs$core$async18718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18724 = arguments.length;
switch (G__18724) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18727 = arguments.length;
switch (G__18727) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18730 = arguments.length;
switch (G__18730) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18732 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18732);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18732,ret){
return (function (){
return fn1.call(null,val_18732);
});})(val_18732,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18734 = arguments.length;
switch (G__18734) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___18736 = n;
var x_18737 = (0);
while(true){
if((x_18737 < n__4408__auto___18736)){
(a[x_18737] = x_18737);

var G__18738 = (x_18737 + (1));
x_18737 = G__18738;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18739 = (function (flag,meta18740){
this.flag = flag;
this.meta18740 = meta18740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18741,meta18740__$1){
var self__ = this;
var _18741__$1 = this;
return (new cljs.core.async.t_cljs$core$async18739(self__.flag,meta18740__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18741){
var self__ = this;
var _18741__$1 = this;
return self__.meta18740;
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18740","meta18740",660539765,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18739";

cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18739");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18739.
 */
cljs.core.async.__GT_t_cljs$core$async18739 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18739(flag__$1,meta18740){
return (new cljs.core.async.t_cljs$core$async18739(flag__$1,meta18740));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18739(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18742 = (function (flag,cb,meta18743){
this.flag = flag;
this.cb = cb;
this.meta18743 = meta18743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18744,meta18743__$1){
var self__ = this;
var _18744__$1 = this;
return (new cljs.core.async.t_cljs$core$async18742(self__.flag,self__.cb,meta18743__$1));
});

cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18744){
var self__ = this;
var _18744__$1 = this;
return self__.meta18743;
});

cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18743","meta18743",-1408029762,null)], null);
});

cljs.core.async.t_cljs$core$async18742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18742";

cljs.core.async.t_cljs$core$async18742.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18742");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18742.
 */
cljs.core.async.__GT_t_cljs$core$async18742 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18742(flag__$1,cb__$1,meta18743){
return (new cljs.core.async.t_cljs$core$async18742(flag__$1,cb__$1,meta18743));
});

}

return (new cljs.core.async.t_cljs$core$async18742(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18745_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18746_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18746_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18747 = (i + (1));
i = G__18747;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18753 = arguments.length;
var i__4532__auto___18754 = (0);
while(true){
if((i__4532__auto___18754 < len__4531__auto___18753)){
args__4534__auto__.push((arguments[i__4532__auto___18754]));

var G__18755 = (i__4532__auto___18754 + (1));
i__4532__auto___18754 = G__18755;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18750){
var map__18751 = p__18750;
var map__18751__$1 = ((((!((map__18751 == null)))?(((((map__18751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18751):map__18751);
var opts = map__18751__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18748){
var G__18749 = cljs.core.first.call(null,seq18748);
var seq18748__$1 = cljs.core.next.call(null,seq18748);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18749,seq18748__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18757 = arguments.length;
switch (G__18757) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16794__auto___18803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___18803){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___18803){
return (function (state_18781){
var state_val_18782 = (state_18781[(1)]);
if((state_val_18782 === (7))){
var inst_18777 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
var statearr_18783_18804 = state_18781__$1;
(statearr_18783_18804[(2)] = inst_18777);

(statearr_18783_18804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (1))){
var state_18781__$1 = state_18781;
var statearr_18784_18805 = state_18781__$1;
(statearr_18784_18805[(2)] = null);

(statearr_18784_18805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (4))){
var inst_18760 = (state_18781[(7)]);
var inst_18760__$1 = (state_18781[(2)]);
var inst_18761 = (inst_18760__$1 == null);
var state_18781__$1 = (function (){var statearr_18785 = state_18781;
(statearr_18785[(7)] = inst_18760__$1);

return statearr_18785;
})();
if(cljs.core.truth_(inst_18761)){
var statearr_18786_18806 = state_18781__$1;
(statearr_18786_18806[(1)] = (5));

} else {
var statearr_18787_18807 = state_18781__$1;
(statearr_18787_18807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (13))){
var state_18781__$1 = state_18781;
var statearr_18788_18808 = state_18781__$1;
(statearr_18788_18808[(2)] = null);

(statearr_18788_18808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (6))){
var inst_18760 = (state_18781[(7)]);
var state_18781__$1 = state_18781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18781__$1,(11),to,inst_18760);
} else {
if((state_val_18782 === (3))){
var inst_18779 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18781__$1,inst_18779);
} else {
if((state_val_18782 === (12))){
var state_18781__$1 = state_18781;
var statearr_18789_18809 = state_18781__$1;
(statearr_18789_18809[(2)] = null);

(statearr_18789_18809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (2))){
var state_18781__$1 = state_18781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18781__$1,(4),from);
} else {
if((state_val_18782 === (11))){
var inst_18770 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
if(cljs.core.truth_(inst_18770)){
var statearr_18790_18810 = state_18781__$1;
(statearr_18790_18810[(1)] = (12));

} else {
var statearr_18791_18811 = state_18781__$1;
(statearr_18791_18811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (9))){
var state_18781__$1 = state_18781;
var statearr_18792_18812 = state_18781__$1;
(statearr_18792_18812[(2)] = null);

(statearr_18792_18812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (5))){
var state_18781__$1 = state_18781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18793_18813 = state_18781__$1;
(statearr_18793_18813[(1)] = (8));

} else {
var statearr_18794_18814 = state_18781__$1;
(statearr_18794_18814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (14))){
var inst_18775 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
var statearr_18795_18815 = state_18781__$1;
(statearr_18795_18815[(2)] = inst_18775);

(statearr_18795_18815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (10))){
var inst_18767 = (state_18781[(2)]);
var state_18781__$1 = state_18781;
var statearr_18796_18816 = state_18781__$1;
(statearr_18796_18816[(2)] = inst_18767);

(statearr_18796_18816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18782 === (8))){
var inst_18764 = cljs.core.async.close_BANG_.call(null,to);
var state_18781__$1 = state_18781;
var statearr_18797_18817 = state_18781__$1;
(statearr_18797_18817[(2)] = inst_18764);

(statearr_18797_18817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___18803))
;
return ((function (switch__16635__auto__,c__16794__auto___18803){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_18798 = [null,null,null,null,null,null,null,null];
(statearr_18798[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_18798[(1)] = (1));

return statearr_18798;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_18781){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18799){if((e18799 instanceof Object)){
var ex__16639__auto__ = e18799;
var statearr_18800_18818 = state_18781;
(statearr_18800_18818[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18819 = state_18781;
state_18781 = G__18819;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_18781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_18781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___18803))
})();
var state__16796__auto__ = (function (){var statearr_18801 = f__16795__auto__.call(null);
(statearr_18801[(6)] = c__16794__auto___18803);

return statearr_18801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___18803))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18820){
var vec__18821 = p__18820;
var v = cljs.core.nth.call(null,vec__18821,(0),null);
var p = cljs.core.nth.call(null,vec__18821,(1),null);
var job = vec__18821;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16794__auto___18992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results){
return (function (state_18828){
var state_val_18829 = (state_18828[(1)]);
if((state_val_18829 === (1))){
var state_18828__$1 = state_18828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18828__$1,(2),res,v);
} else {
if((state_val_18829 === (2))){
var inst_18825 = (state_18828[(2)]);
var inst_18826 = cljs.core.async.close_BANG_.call(null,res);
var state_18828__$1 = (function (){var statearr_18830 = state_18828;
(statearr_18830[(7)] = inst_18825);

return statearr_18830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18828__$1,inst_18826);
} else {
return null;
}
}
});})(c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results))
;
return ((function (switch__16635__auto__,c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_18831 = [null,null,null,null,null,null,null,null];
(statearr_18831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__);

(statearr_18831[(1)] = (1));

return statearr_18831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1 = (function (state_18828){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18832){if((e18832 instanceof Object)){
var ex__16639__auto__ = e18832;
var statearr_18833_18993 = state_18828;
(statearr_18833_18993[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18994 = state_18828;
state_18828 = G__18994;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = function(state_18828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1.call(this,state_18828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results))
})();
var state__16796__auto__ = (function (){var statearr_18834 = f__16795__auto__.call(null);
(statearr_18834[(6)] = c__16794__auto___18992);

return statearr_18834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___18992,res,vec__18821,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18835){
var vec__18836 = p__18835;
var v = cljs.core.nth.call(null,vec__18836,(0),null);
var p = cljs.core.nth.call(null,vec__18836,(1),null);
var job = vec__18836;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18995 = n;
var __18996 = (0);
while(true){
if((__18996 < n__4408__auto___18995)){
var G__18839_18997 = type;
var G__18839_18998__$1 = (((G__18839_18997 instanceof cljs.core.Keyword))?G__18839_18997.fqn:null);
switch (G__18839_18998__$1) {
case "compute":
var c__16794__auto___19000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18996,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (__18996,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function (state_18852){
var state_val_18853 = (state_18852[(1)]);
if((state_val_18853 === (1))){
var state_18852__$1 = state_18852;
var statearr_18854_19001 = state_18852__$1;
(statearr_18854_19001[(2)] = null);

(statearr_18854_19001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (2))){
var state_18852__$1 = state_18852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18852__$1,(4),jobs);
} else {
if((state_val_18853 === (3))){
var inst_18850 = (state_18852[(2)]);
var state_18852__$1 = state_18852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18852__$1,inst_18850);
} else {
if((state_val_18853 === (4))){
var inst_18842 = (state_18852[(2)]);
var inst_18843 = process.call(null,inst_18842);
var state_18852__$1 = state_18852;
if(cljs.core.truth_(inst_18843)){
var statearr_18855_19002 = state_18852__$1;
(statearr_18855_19002[(1)] = (5));

} else {
var statearr_18856_19003 = state_18852__$1;
(statearr_18856_19003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (5))){
var state_18852__$1 = state_18852;
var statearr_18857_19004 = state_18852__$1;
(statearr_18857_19004[(2)] = null);

(statearr_18857_19004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (6))){
var state_18852__$1 = state_18852;
var statearr_18858_19005 = state_18852__$1;
(statearr_18858_19005[(2)] = null);

(statearr_18858_19005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18853 === (7))){
var inst_18848 = (state_18852[(2)]);
var state_18852__$1 = state_18852;
var statearr_18859_19006 = state_18852__$1;
(statearr_18859_19006[(2)] = inst_18848);

(statearr_18859_19006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18996,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
;
return ((function (__18996,switch__16635__auto__,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_18860 = [null,null,null,null,null,null,null];
(statearr_18860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__);

(statearr_18860[(1)] = (1));

return statearr_18860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1 = (function (state_18852){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18861){if((e18861 instanceof Object)){
var ex__16639__auto__ = e18861;
var statearr_18862_19007 = state_18852;
(statearr_18862_19007[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19008 = state_18852;
state_18852 = G__19008;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = function(state_18852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1.call(this,state_18852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__;
})()
;})(__18996,switch__16635__auto__,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
})();
var state__16796__auto__ = (function (){var statearr_18863 = f__16795__auto__.call(null);
(statearr_18863[(6)] = c__16794__auto___19000);

return statearr_18863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(__18996,c__16794__auto___19000,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
);


break;
case "async":
var c__16794__auto___19009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18996,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (__18996,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function (state_18876){
var state_val_18877 = (state_18876[(1)]);
if((state_val_18877 === (1))){
var state_18876__$1 = state_18876;
var statearr_18878_19010 = state_18876__$1;
(statearr_18878_19010[(2)] = null);

(statearr_18878_19010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (2))){
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18876__$1,(4),jobs);
} else {
if((state_val_18877 === (3))){
var inst_18874 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18876__$1,inst_18874);
} else {
if((state_val_18877 === (4))){
var inst_18866 = (state_18876[(2)]);
var inst_18867 = async.call(null,inst_18866);
var state_18876__$1 = state_18876;
if(cljs.core.truth_(inst_18867)){
var statearr_18879_19011 = state_18876__$1;
(statearr_18879_19011[(1)] = (5));

} else {
var statearr_18880_19012 = state_18876__$1;
(statearr_18880_19012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (5))){
var state_18876__$1 = state_18876;
var statearr_18881_19013 = state_18876__$1;
(statearr_18881_19013[(2)] = null);

(statearr_18881_19013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (6))){
var state_18876__$1 = state_18876;
var statearr_18882_19014 = state_18876__$1;
(statearr_18882_19014[(2)] = null);

(statearr_18882_19014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18877 === (7))){
var inst_18872 = (state_18876[(2)]);
var state_18876__$1 = state_18876;
var statearr_18883_19015 = state_18876__$1;
(statearr_18883_19015[(2)] = inst_18872);

(statearr_18883_19015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18996,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
;
return ((function (__18996,switch__16635__auto__,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_18884 = [null,null,null,null,null,null,null];
(statearr_18884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__);

(statearr_18884[(1)] = (1));

return statearr_18884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1 = (function (state_18876){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18885){if((e18885 instanceof Object)){
var ex__16639__auto__ = e18885;
var statearr_18886_19016 = state_18876;
(statearr_18886_19016[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19017 = state_18876;
state_18876 = G__19017;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = function(state_18876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1.call(this,state_18876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__;
})()
;})(__18996,switch__16635__auto__,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
})();
var state__16796__auto__ = (function (){var statearr_18887 = f__16795__auto__.call(null);
(statearr_18887[(6)] = c__16794__auto___19009);

return statearr_18887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(__18996,c__16794__auto___19009,G__18839_18997,G__18839_18998__$1,n__4408__auto___18995,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18839_18998__$1)].join('')));

}

var G__19018 = (__18996 + (1));
__18996 = G__19018;
continue;
} else {
}
break;
}

var c__16794__auto___19019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19019,jobs,results,process,async){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19019,jobs,results,process,async){
return (function (state_18909){
var state_val_18910 = (state_18909[(1)]);
if((state_val_18910 === (1))){
var state_18909__$1 = state_18909;
var statearr_18911_19020 = state_18909__$1;
(statearr_18911_19020[(2)] = null);

(statearr_18911_19020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18910 === (2))){
var state_18909__$1 = state_18909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18909__$1,(4),from);
} else {
if((state_val_18910 === (3))){
var inst_18907 = (state_18909[(2)]);
var state_18909__$1 = state_18909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18909__$1,inst_18907);
} else {
if((state_val_18910 === (4))){
var inst_18890 = (state_18909[(7)]);
var inst_18890__$1 = (state_18909[(2)]);
var inst_18891 = (inst_18890__$1 == null);
var state_18909__$1 = (function (){var statearr_18912 = state_18909;
(statearr_18912[(7)] = inst_18890__$1);

return statearr_18912;
})();
if(cljs.core.truth_(inst_18891)){
var statearr_18913_19021 = state_18909__$1;
(statearr_18913_19021[(1)] = (5));

} else {
var statearr_18914_19022 = state_18909__$1;
(statearr_18914_19022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18910 === (5))){
var inst_18893 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18909__$1 = state_18909;
var statearr_18915_19023 = state_18909__$1;
(statearr_18915_19023[(2)] = inst_18893);

(statearr_18915_19023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18910 === (6))){
var inst_18890 = (state_18909[(7)]);
var inst_18895 = (state_18909[(8)]);
var inst_18895__$1 = cljs.core.async.chan.call(null,(1));
var inst_18896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18897 = [inst_18890,inst_18895__$1];
var inst_18898 = (new cljs.core.PersistentVector(null,2,(5),inst_18896,inst_18897,null));
var state_18909__$1 = (function (){var statearr_18916 = state_18909;
(statearr_18916[(8)] = inst_18895__$1);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18909__$1,(8),jobs,inst_18898);
} else {
if((state_val_18910 === (7))){
var inst_18905 = (state_18909[(2)]);
var state_18909__$1 = state_18909;
var statearr_18917_19024 = state_18909__$1;
(statearr_18917_19024[(2)] = inst_18905);

(statearr_18917_19024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18910 === (8))){
var inst_18895 = (state_18909[(8)]);
var inst_18900 = (state_18909[(2)]);
var state_18909__$1 = (function (){var statearr_18918 = state_18909;
(statearr_18918[(9)] = inst_18900);

return statearr_18918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18909__$1,(9),results,inst_18895);
} else {
if((state_val_18910 === (9))){
var inst_18902 = (state_18909[(2)]);
var state_18909__$1 = (function (){var statearr_18919 = state_18909;
(statearr_18919[(10)] = inst_18902);

return statearr_18919;
})();
var statearr_18920_19025 = state_18909__$1;
(statearr_18920_19025[(2)] = null);

(statearr_18920_19025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19019,jobs,results,process,async))
;
return ((function (switch__16635__auto__,c__16794__auto___19019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_18921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__);

(statearr_18921[(1)] = (1));

return statearr_18921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1 = (function (state_18909){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18922){if((e18922 instanceof Object)){
var ex__16639__auto__ = e18922;
var statearr_18923_19026 = state_18909;
(statearr_18923_19026[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19027 = state_18909;
state_18909 = G__19027;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = function(state_18909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1.call(this,state_18909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19019,jobs,results,process,async))
})();
var state__16796__auto__ = (function (){var statearr_18924 = f__16795__auto__.call(null);
(statearr_18924[(6)] = c__16794__auto___19019);

return statearr_18924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19019,jobs,results,process,async))
);


var c__16794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto__,jobs,results,process,async){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto__,jobs,results,process,async){
return (function (state_18962){
var state_val_18963 = (state_18962[(1)]);
if((state_val_18963 === (7))){
var inst_18958 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18964_19028 = state_18962__$1;
(statearr_18964_19028[(2)] = inst_18958);

(statearr_18964_19028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (20))){
var state_18962__$1 = state_18962;
var statearr_18965_19029 = state_18962__$1;
(statearr_18965_19029[(2)] = null);

(statearr_18965_19029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (1))){
var state_18962__$1 = state_18962;
var statearr_18966_19030 = state_18962__$1;
(statearr_18966_19030[(2)] = null);

(statearr_18966_19030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (4))){
var inst_18927 = (state_18962[(7)]);
var inst_18927__$1 = (state_18962[(2)]);
var inst_18928 = (inst_18927__$1 == null);
var state_18962__$1 = (function (){var statearr_18967 = state_18962;
(statearr_18967[(7)] = inst_18927__$1);

return statearr_18967;
})();
if(cljs.core.truth_(inst_18928)){
var statearr_18968_19031 = state_18962__$1;
(statearr_18968_19031[(1)] = (5));

} else {
var statearr_18969_19032 = state_18962__$1;
(statearr_18969_19032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (15))){
var inst_18940 = (state_18962[(8)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18962__$1,(18),to,inst_18940);
} else {
if((state_val_18963 === (21))){
var inst_18953 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18970_19033 = state_18962__$1;
(statearr_18970_19033[(2)] = inst_18953);

(statearr_18970_19033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (13))){
var inst_18955 = (state_18962[(2)]);
var state_18962__$1 = (function (){var statearr_18971 = state_18962;
(statearr_18971[(9)] = inst_18955);

return statearr_18971;
})();
var statearr_18972_19034 = state_18962__$1;
(statearr_18972_19034[(2)] = null);

(statearr_18972_19034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (6))){
var inst_18927 = (state_18962[(7)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18962__$1,(11),inst_18927);
} else {
if((state_val_18963 === (17))){
var inst_18948 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
if(cljs.core.truth_(inst_18948)){
var statearr_18973_19035 = state_18962__$1;
(statearr_18973_19035[(1)] = (19));

} else {
var statearr_18974_19036 = state_18962__$1;
(statearr_18974_19036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (3))){
var inst_18960 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18962__$1,inst_18960);
} else {
if((state_val_18963 === (12))){
var inst_18937 = (state_18962[(10)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18962__$1,(14),inst_18937);
} else {
if((state_val_18963 === (2))){
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18962__$1,(4),results);
} else {
if((state_val_18963 === (19))){
var state_18962__$1 = state_18962;
var statearr_18975_19037 = state_18962__$1;
(statearr_18975_19037[(2)] = null);

(statearr_18975_19037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (11))){
var inst_18937 = (state_18962[(2)]);
var state_18962__$1 = (function (){var statearr_18976 = state_18962;
(statearr_18976[(10)] = inst_18937);

return statearr_18976;
})();
var statearr_18977_19038 = state_18962__$1;
(statearr_18977_19038[(2)] = null);

(statearr_18977_19038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (9))){
var state_18962__$1 = state_18962;
var statearr_18978_19039 = state_18962__$1;
(statearr_18978_19039[(2)] = null);

(statearr_18978_19039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (5))){
var state_18962__$1 = state_18962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18979_19040 = state_18962__$1;
(statearr_18979_19040[(1)] = (8));

} else {
var statearr_18980_19041 = state_18962__$1;
(statearr_18980_19041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (14))){
var inst_18940 = (state_18962[(8)]);
var inst_18942 = (state_18962[(11)]);
var inst_18940__$1 = (state_18962[(2)]);
var inst_18941 = (inst_18940__$1 == null);
var inst_18942__$1 = cljs.core.not.call(null,inst_18941);
var state_18962__$1 = (function (){var statearr_18981 = state_18962;
(statearr_18981[(8)] = inst_18940__$1);

(statearr_18981[(11)] = inst_18942__$1);

return statearr_18981;
})();
if(inst_18942__$1){
var statearr_18982_19042 = state_18962__$1;
(statearr_18982_19042[(1)] = (15));

} else {
var statearr_18983_19043 = state_18962__$1;
(statearr_18983_19043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (16))){
var inst_18942 = (state_18962[(11)]);
var state_18962__$1 = state_18962;
var statearr_18984_19044 = state_18962__$1;
(statearr_18984_19044[(2)] = inst_18942);

(statearr_18984_19044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (10))){
var inst_18934 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18985_19045 = state_18962__$1;
(statearr_18985_19045[(2)] = inst_18934);

(statearr_18985_19045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (18))){
var inst_18945 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18986_19046 = state_18962__$1;
(statearr_18986_19046[(2)] = inst_18945);

(statearr_18986_19046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (8))){
var inst_18931 = cljs.core.async.close_BANG_.call(null,to);
var state_18962__$1 = state_18962;
var statearr_18987_19047 = state_18962__$1;
(statearr_18987_19047[(2)] = inst_18931);

(statearr_18987_19047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto__,jobs,results,process,async))
;
return ((function (switch__16635__auto__,c__16794__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_18988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__);

(statearr_18988[(1)] = (1));

return statearr_18988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1 = (function (state_18962){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_18962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e18989){if((e18989 instanceof Object)){
var ex__16639__auto__ = e18989;
var statearr_18990_19048 = state_18962;
(statearr_18990_19048[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19049 = state_18962;
state_18962 = G__19049;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__ = function(state_18962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1.call(this,state_18962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto__,jobs,results,process,async))
})();
var state__16796__auto__ = (function (){var statearr_18991 = f__16795__auto__.call(null);
(statearr_18991[(6)] = c__16794__auto__);

return statearr_18991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto__,jobs,results,process,async))
);

return c__16794__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19051 = arguments.length;
switch (G__19051) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19054 = arguments.length;
switch (G__19054) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19057 = arguments.length;
switch (G__19057) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16794__auto___19106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19106,tc,fc){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19106,tc,fc){
return (function (state_19083){
var state_val_19084 = (state_19083[(1)]);
if((state_val_19084 === (7))){
var inst_19079 = (state_19083[(2)]);
var state_19083__$1 = state_19083;
var statearr_19085_19107 = state_19083__$1;
(statearr_19085_19107[(2)] = inst_19079);

(statearr_19085_19107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (1))){
var state_19083__$1 = state_19083;
var statearr_19086_19108 = state_19083__$1;
(statearr_19086_19108[(2)] = null);

(statearr_19086_19108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (4))){
var inst_19060 = (state_19083[(7)]);
var inst_19060__$1 = (state_19083[(2)]);
var inst_19061 = (inst_19060__$1 == null);
var state_19083__$1 = (function (){var statearr_19087 = state_19083;
(statearr_19087[(7)] = inst_19060__$1);

return statearr_19087;
})();
if(cljs.core.truth_(inst_19061)){
var statearr_19088_19109 = state_19083__$1;
(statearr_19088_19109[(1)] = (5));

} else {
var statearr_19089_19110 = state_19083__$1;
(statearr_19089_19110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (13))){
var state_19083__$1 = state_19083;
var statearr_19090_19111 = state_19083__$1;
(statearr_19090_19111[(2)] = null);

(statearr_19090_19111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (6))){
var inst_19060 = (state_19083[(7)]);
var inst_19066 = p.call(null,inst_19060);
var state_19083__$1 = state_19083;
if(cljs.core.truth_(inst_19066)){
var statearr_19091_19112 = state_19083__$1;
(statearr_19091_19112[(1)] = (9));

} else {
var statearr_19092_19113 = state_19083__$1;
(statearr_19092_19113[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (3))){
var inst_19081 = (state_19083[(2)]);
var state_19083__$1 = state_19083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19083__$1,inst_19081);
} else {
if((state_val_19084 === (12))){
var state_19083__$1 = state_19083;
var statearr_19093_19114 = state_19083__$1;
(statearr_19093_19114[(2)] = null);

(statearr_19093_19114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (2))){
var state_19083__$1 = state_19083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19083__$1,(4),ch);
} else {
if((state_val_19084 === (11))){
var inst_19060 = (state_19083[(7)]);
var inst_19070 = (state_19083[(2)]);
var state_19083__$1 = state_19083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19083__$1,(8),inst_19070,inst_19060);
} else {
if((state_val_19084 === (9))){
var state_19083__$1 = state_19083;
var statearr_19094_19115 = state_19083__$1;
(statearr_19094_19115[(2)] = tc);

(statearr_19094_19115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (5))){
var inst_19063 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19064 = cljs.core.async.close_BANG_.call(null,fc);
var state_19083__$1 = (function (){var statearr_19095 = state_19083;
(statearr_19095[(8)] = inst_19063);

return statearr_19095;
})();
var statearr_19096_19116 = state_19083__$1;
(statearr_19096_19116[(2)] = inst_19064);

(statearr_19096_19116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (14))){
var inst_19077 = (state_19083[(2)]);
var state_19083__$1 = state_19083;
var statearr_19097_19117 = state_19083__$1;
(statearr_19097_19117[(2)] = inst_19077);

(statearr_19097_19117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (10))){
var state_19083__$1 = state_19083;
var statearr_19098_19118 = state_19083__$1;
(statearr_19098_19118[(2)] = fc);

(statearr_19098_19118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19084 === (8))){
var inst_19072 = (state_19083[(2)]);
var state_19083__$1 = state_19083;
if(cljs.core.truth_(inst_19072)){
var statearr_19099_19119 = state_19083__$1;
(statearr_19099_19119[(1)] = (12));

} else {
var statearr_19100_19120 = state_19083__$1;
(statearr_19100_19120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19106,tc,fc))
;
return ((function (switch__16635__auto__,c__16794__auto___19106,tc,fc){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_19101 = [null,null,null,null,null,null,null,null,null];
(statearr_19101[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_19101[(1)] = (1));

return statearr_19101;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_19083){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19102){if((e19102 instanceof Object)){
var ex__16639__auto__ = e19102;
var statearr_19103_19121 = state_19083;
(statearr_19103_19121[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19122 = state_19083;
state_19083 = G__19122;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_19083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_19083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19106,tc,fc))
})();
var state__16796__auto__ = (function (){var statearr_19104 = f__16795__auto__.call(null);
(statearr_19104[(6)] = c__16794__auto___19106);

return statearr_19104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19106,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto__){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto__){
return (function (state_19143){
var state_val_19144 = (state_19143[(1)]);
if((state_val_19144 === (7))){
var inst_19139 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19145_19163 = state_19143__$1;
(statearr_19145_19163[(2)] = inst_19139);

(statearr_19145_19163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (1))){
var inst_19123 = init;
var state_19143__$1 = (function (){var statearr_19146 = state_19143;
(statearr_19146[(7)] = inst_19123);

return statearr_19146;
})();
var statearr_19147_19164 = state_19143__$1;
(statearr_19147_19164[(2)] = null);

(statearr_19147_19164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (4))){
var inst_19126 = (state_19143[(8)]);
var inst_19126__$1 = (state_19143[(2)]);
var inst_19127 = (inst_19126__$1 == null);
var state_19143__$1 = (function (){var statearr_19148 = state_19143;
(statearr_19148[(8)] = inst_19126__$1);

return statearr_19148;
})();
if(cljs.core.truth_(inst_19127)){
var statearr_19149_19165 = state_19143__$1;
(statearr_19149_19165[(1)] = (5));

} else {
var statearr_19150_19166 = state_19143__$1;
(statearr_19150_19166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (6))){
var inst_19130 = (state_19143[(9)]);
var inst_19126 = (state_19143[(8)]);
var inst_19123 = (state_19143[(7)]);
var inst_19130__$1 = f.call(null,inst_19123,inst_19126);
var inst_19131 = cljs.core.reduced_QMARK_.call(null,inst_19130__$1);
var state_19143__$1 = (function (){var statearr_19151 = state_19143;
(statearr_19151[(9)] = inst_19130__$1);

return statearr_19151;
})();
if(inst_19131){
var statearr_19152_19167 = state_19143__$1;
(statearr_19152_19167[(1)] = (8));

} else {
var statearr_19153_19168 = state_19143__$1;
(statearr_19153_19168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (3))){
var inst_19141 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19143__$1,inst_19141);
} else {
if((state_val_19144 === (2))){
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19143__$1,(4),ch);
} else {
if((state_val_19144 === (9))){
var inst_19130 = (state_19143[(9)]);
var inst_19123 = inst_19130;
var state_19143__$1 = (function (){var statearr_19154 = state_19143;
(statearr_19154[(7)] = inst_19123);

return statearr_19154;
})();
var statearr_19155_19169 = state_19143__$1;
(statearr_19155_19169[(2)] = null);

(statearr_19155_19169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (5))){
var inst_19123 = (state_19143[(7)]);
var state_19143__$1 = state_19143;
var statearr_19156_19170 = state_19143__$1;
(statearr_19156_19170[(2)] = inst_19123);

(statearr_19156_19170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (10))){
var inst_19137 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19157_19171 = state_19143__$1;
(statearr_19157_19171[(2)] = inst_19137);

(statearr_19157_19171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (8))){
var inst_19130 = (state_19143[(9)]);
var inst_19133 = cljs.core.deref.call(null,inst_19130);
var state_19143__$1 = state_19143;
var statearr_19158_19172 = state_19143__$1;
(statearr_19158_19172[(2)] = inst_19133);

(statearr_19158_19172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto__))
;
return ((function (switch__16635__auto__,c__16794__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16636__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16636__auto____0 = (function (){
var statearr_19159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19159[(0)] = cljs$core$async$reduce_$_state_machine__16636__auto__);

(statearr_19159[(1)] = (1));

return statearr_19159;
});
var cljs$core$async$reduce_$_state_machine__16636__auto____1 = (function (state_19143){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19160){if((e19160 instanceof Object)){
var ex__16639__auto__ = e19160;
var statearr_19161_19173 = state_19143;
(statearr_19161_19173[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19174 = state_19143;
state_19143 = G__19174;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16636__auto__ = function(state_19143){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16636__auto____1.call(this,state_19143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16636__auto____0;
cljs$core$async$reduce_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16636__auto____1;
return cljs$core$async$reduce_$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto__))
})();
var state__16796__auto__ = (function (){var statearr_19162 = f__16795__auto__.call(null);
(statearr_19162[(6)] = c__16794__auto__);

return statearr_19162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto__))
);

return c__16794__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto__,f__$1){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto__,f__$1){
return (function (state_19180){
var state_val_19181 = (state_19180[(1)]);
if((state_val_19181 === (1))){
var inst_19175 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19180__$1 = state_19180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19180__$1,(2),inst_19175);
} else {
if((state_val_19181 === (2))){
var inst_19177 = (state_19180[(2)]);
var inst_19178 = f__$1.call(null,inst_19177);
var state_19180__$1 = state_19180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19180__$1,inst_19178);
} else {
return null;
}
}
});})(c__16794__auto__,f__$1))
;
return ((function (switch__16635__auto__,c__16794__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16636__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16636__auto____0 = (function (){
var statearr_19182 = [null,null,null,null,null,null,null];
(statearr_19182[(0)] = cljs$core$async$transduce_$_state_machine__16636__auto__);

(statearr_19182[(1)] = (1));

return statearr_19182;
});
var cljs$core$async$transduce_$_state_machine__16636__auto____1 = (function (state_19180){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19183){if((e19183 instanceof Object)){
var ex__16639__auto__ = e19183;
var statearr_19184_19186 = state_19180;
(statearr_19184_19186[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19187 = state_19180;
state_19180 = G__19187;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16636__auto__ = function(state_19180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16636__auto____1.call(this,state_19180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16636__auto____0;
cljs$core$async$transduce_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16636__auto____1;
return cljs$core$async$transduce_$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto__,f__$1))
})();
var state__16796__auto__ = (function (){var statearr_19185 = f__16795__auto__.call(null);
(statearr_19185[(6)] = c__16794__auto__);

return statearr_19185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto__,f__$1))
);

return c__16794__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19189 = arguments.length;
switch (G__19189) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto__){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto__){
return (function (state_19214){
var state_val_19215 = (state_19214[(1)]);
if((state_val_19215 === (7))){
var inst_19196 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19216_19237 = state_19214__$1;
(statearr_19216_19237[(2)] = inst_19196);

(statearr_19216_19237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (1))){
var inst_19190 = cljs.core.seq.call(null,coll);
var inst_19191 = inst_19190;
var state_19214__$1 = (function (){var statearr_19217 = state_19214;
(statearr_19217[(7)] = inst_19191);

return statearr_19217;
})();
var statearr_19218_19238 = state_19214__$1;
(statearr_19218_19238[(2)] = null);

(statearr_19218_19238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (4))){
var inst_19191 = (state_19214[(7)]);
var inst_19194 = cljs.core.first.call(null,inst_19191);
var state_19214__$1 = state_19214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19214__$1,(7),ch,inst_19194);
} else {
if((state_val_19215 === (13))){
var inst_19208 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19219_19239 = state_19214__$1;
(statearr_19219_19239[(2)] = inst_19208);

(statearr_19219_19239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (6))){
var inst_19199 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
if(cljs.core.truth_(inst_19199)){
var statearr_19220_19240 = state_19214__$1;
(statearr_19220_19240[(1)] = (8));

} else {
var statearr_19221_19241 = state_19214__$1;
(statearr_19221_19241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (3))){
var inst_19212 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19214__$1,inst_19212);
} else {
if((state_val_19215 === (12))){
var state_19214__$1 = state_19214;
var statearr_19222_19242 = state_19214__$1;
(statearr_19222_19242[(2)] = null);

(statearr_19222_19242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (2))){
var inst_19191 = (state_19214[(7)]);
var state_19214__$1 = state_19214;
if(cljs.core.truth_(inst_19191)){
var statearr_19223_19243 = state_19214__$1;
(statearr_19223_19243[(1)] = (4));

} else {
var statearr_19224_19244 = state_19214__$1;
(statearr_19224_19244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (11))){
var inst_19205 = cljs.core.async.close_BANG_.call(null,ch);
var state_19214__$1 = state_19214;
var statearr_19225_19245 = state_19214__$1;
(statearr_19225_19245[(2)] = inst_19205);

(statearr_19225_19245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (9))){
var state_19214__$1 = state_19214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19226_19246 = state_19214__$1;
(statearr_19226_19246[(1)] = (11));

} else {
var statearr_19227_19247 = state_19214__$1;
(statearr_19227_19247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (5))){
var inst_19191 = (state_19214[(7)]);
var state_19214__$1 = state_19214;
var statearr_19228_19248 = state_19214__$1;
(statearr_19228_19248[(2)] = inst_19191);

(statearr_19228_19248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (10))){
var inst_19210 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19229_19249 = state_19214__$1;
(statearr_19229_19249[(2)] = inst_19210);

(statearr_19229_19249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (8))){
var inst_19191 = (state_19214[(7)]);
var inst_19201 = cljs.core.next.call(null,inst_19191);
var inst_19191__$1 = inst_19201;
var state_19214__$1 = (function (){var statearr_19230 = state_19214;
(statearr_19230[(7)] = inst_19191__$1);

return statearr_19230;
})();
var statearr_19231_19250 = state_19214__$1;
(statearr_19231_19250[(2)] = null);

(statearr_19231_19250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto__))
;
return ((function (switch__16635__auto__,c__16794__auto__){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_19232 = [null,null,null,null,null,null,null,null];
(statearr_19232[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_19232[(1)] = (1));

return statearr_19232;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_19214){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19233){if((e19233 instanceof Object)){
var ex__16639__auto__ = e19233;
var statearr_19234_19251 = state_19214;
(statearr_19234_19251[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19252 = state_19214;
state_19214 = G__19252;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_19214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_19214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto__))
})();
var state__16796__auto__ = (function (){var statearr_19235 = f__16795__auto__.call(null);
(statearr_19235[(6)] = c__16794__auto__);

return statearr_19235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto__))
);

return c__16794__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19253 = (function (ch,cs,meta19254){
this.ch = ch;
this.cs = cs;
this.meta19254 = meta19254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19255,meta19254__$1){
var self__ = this;
var _19255__$1 = this;
return (new cljs.core.async.t_cljs$core$async19253(self__.ch,self__.cs,meta19254__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19255){
var self__ = this;
var _19255__$1 = this;
return self__.meta19254;
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19254","meta19254",452719565,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19253";

cljs.core.async.t_cljs$core$async19253.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19253");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19253.
 */
cljs.core.async.__GT_t_cljs$core$async19253 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19253(ch__$1,cs__$1,meta19254){
return (new cljs.core.async.t_cljs$core$async19253(ch__$1,cs__$1,meta19254));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19253(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16794__auto___19475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19475,cs,m,dchan,dctr,done){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19475,cs,m,dchan,dctr,done){
return (function (state_19390){
var state_val_19391 = (state_19390[(1)]);
if((state_val_19391 === (7))){
var inst_19386 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19392_19476 = state_19390__$1;
(statearr_19392_19476[(2)] = inst_19386);

(statearr_19392_19476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (20))){
var inst_19289 = (state_19390[(7)]);
var inst_19301 = cljs.core.first.call(null,inst_19289);
var inst_19302 = cljs.core.nth.call(null,inst_19301,(0),null);
var inst_19303 = cljs.core.nth.call(null,inst_19301,(1),null);
var state_19390__$1 = (function (){var statearr_19393 = state_19390;
(statearr_19393[(8)] = inst_19302);

return statearr_19393;
})();
if(cljs.core.truth_(inst_19303)){
var statearr_19394_19477 = state_19390__$1;
(statearr_19394_19477[(1)] = (22));

} else {
var statearr_19395_19478 = state_19390__$1;
(statearr_19395_19478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (27))){
var inst_19331 = (state_19390[(9)]);
var inst_19333 = (state_19390[(10)]);
var inst_19338 = (state_19390[(11)]);
var inst_19258 = (state_19390[(12)]);
var inst_19338__$1 = cljs.core._nth.call(null,inst_19331,inst_19333);
var inst_19339 = cljs.core.async.put_BANG_.call(null,inst_19338__$1,inst_19258,done);
var state_19390__$1 = (function (){var statearr_19396 = state_19390;
(statearr_19396[(11)] = inst_19338__$1);

return statearr_19396;
})();
if(cljs.core.truth_(inst_19339)){
var statearr_19397_19479 = state_19390__$1;
(statearr_19397_19479[(1)] = (30));

} else {
var statearr_19398_19480 = state_19390__$1;
(statearr_19398_19480[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (1))){
var state_19390__$1 = state_19390;
var statearr_19399_19481 = state_19390__$1;
(statearr_19399_19481[(2)] = null);

(statearr_19399_19481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (24))){
var inst_19289 = (state_19390[(7)]);
var inst_19308 = (state_19390[(2)]);
var inst_19309 = cljs.core.next.call(null,inst_19289);
var inst_19267 = inst_19309;
var inst_19268 = null;
var inst_19269 = (0);
var inst_19270 = (0);
var state_19390__$1 = (function (){var statearr_19400 = state_19390;
(statearr_19400[(13)] = inst_19268);

(statearr_19400[(14)] = inst_19267);

(statearr_19400[(15)] = inst_19269);

(statearr_19400[(16)] = inst_19308);

(statearr_19400[(17)] = inst_19270);

return statearr_19400;
})();
var statearr_19401_19482 = state_19390__$1;
(statearr_19401_19482[(2)] = null);

(statearr_19401_19482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (39))){
var state_19390__$1 = state_19390;
var statearr_19405_19483 = state_19390__$1;
(statearr_19405_19483[(2)] = null);

(statearr_19405_19483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (4))){
var inst_19258 = (state_19390[(12)]);
var inst_19258__$1 = (state_19390[(2)]);
var inst_19259 = (inst_19258__$1 == null);
var state_19390__$1 = (function (){var statearr_19406 = state_19390;
(statearr_19406[(12)] = inst_19258__$1);

return statearr_19406;
})();
if(cljs.core.truth_(inst_19259)){
var statearr_19407_19484 = state_19390__$1;
(statearr_19407_19484[(1)] = (5));

} else {
var statearr_19408_19485 = state_19390__$1;
(statearr_19408_19485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (15))){
var inst_19268 = (state_19390[(13)]);
var inst_19267 = (state_19390[(14)]);
var inst_19269 = (state_19390[(15)]);
var inst_19270 = (state_19390[(17)]);
var inst_19285 = (state_19390[(2)]);
var inst_19286 = (inst_19270 + (1));
var tmp19402 = inst_19268;
var tmp19403 = inst_19267;
var tmp19404 = inst_19269;
var inst_19267__$1 = tmp19403;
var inst_19268__$1 = tmp19402;
var inst_19269__$1 = tmp19404;
var inst_19270__$1 = inst_19286;
var state_19390__$1 = (function (){var statearr_19409 = state_19390;
(statearr_19409[(13)] = inst_19268__$1);

(statearr_19409[(14)] = inst_19267__$1);

(statearr_19409[(18)] = inst_19285);

(statearr_19409[(15)] = inst_19269__$1);

(statearr_19409[(17)] = inst_19270__$1);

return statearr_19409;
})();
var statearr_19410_19486 = state_19390__$1;
(statearr_19410_19486[(2)] = null);

(statearr_19410_19486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (21))){
var inst_19312 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19414_19487 = state_19390__$1;
(statearr_19414_19487[(2)] = inst_19312);

(statearr_19414_19487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (31))){
var inst_19338 = (state_19390[(11)]);
var inst_19342 = done.call(null,null);
var inst_19343 = cljs.core.async.untap_STAR_.call(null,m,inst_19338);
var state_19390__$1 = (function (){var statearr_19415 = state_19390;
(statearr_19415[(19)] = inst_19342);

return statearr_19415;
})();
var statearr_19416_19488 = state_19390__$1;
(statearr_19416_19488[(2)] = inst_19343);

(statearr_19416_19488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (32))){
var inst_19331 = (state_19390[(9)]);
var inst_19333 = (state_19390[(10)]);
var inst_19330 = (state_19390[(20)]);
var inst_19332 = (state_19390[(21)]);
var inst_19345 = (state_19390[(2)]);
var inst_19346 = (inst_19333 + (1));
var tmp19411 = inst_19331;
var tmp19412 = inst_19330;
var tmp19413 = inst_19332;
var inst_19330__$1 = tmp19412;
var inst_19331__$1 = tmp19411;
var inst_19332__$1 = tmp19413;
var inst_19333__$1 = inst_19346;
var state_19390__$1 = (function (){var statearr_19417 = state_19390;
(statearr_19417[(9)] = inst_19331__$1);

(statearr_19417[(10)] = inst_19333__$1);

(statearr_19417[(20)] = inst_19330__$1);

(statearr_19417[(22)] = inst_19345);

(statearr_19417[(21)] = inst_19332__$1);

return statearr_19417;
})();
var statearr_19418_19489 = state_19390__$1;
(statearr_19418_19489[(2)] = null);

(statearr_19418_19489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (40))){
var inst_19358 = (state_19390[(23)]);
var inst_19362 = done.call(null,null);
var inst_19363 = cljs.core.async.untap_STAR_.call(null,m,inst_19358);
var state_19390__$1 = (function (){var statearr_19419 = state_19390;
(statearr_19419[(24)] = inst_19362);

return statearr_19419;
})();
var statearr_19420_19490 = state_19390__$1;
(statearr_19420_19490[(2)] = inst_19363);

(statearr_19420_19490[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (33))){
var inst_19349 = (state_19390[(25)]);
var inst_19351 = cljs.core.chunked_seq_QMARK_.call(null,inst_19349);
var state_19390__$1 = state_19390;
if(inst_19351){
var statearr_19421_19491 = state_19390__$1;
(statearr_19421_19491[(1)] = (36));

} else {
var statearr_19422_19492 = state_19390__$1;
(statearr_19422_19492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (13))){
var inst_19279 = (state_19390[(26)]);
var inst_19282 = cljs.core.async.close_BANG_.call(null,inst_19279);
var state_19390__$1 = state_19390;
var statearr_19423_19493 = state_19390__$1;
(statearr_19423_19493[(2)] = inst_19282);

(statearr_19423_19493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (22))){
var inst_19302 = (state_19390[(8)]);
var inst_19305 = cljs.core.async.close_BANG_.call(null,inst_19302);
var state_19390__$1 = state_19390;
var statearr_19424_19494 = state_19390__$1;
(statearr_19424_19494[(2)] = inst_19305);

(statearr_19424_19494[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (36))){
var inst_19349 = (state_19390[(25)]);
var inst_19353 = cljs.core.chunk_first.call(null,inst_19349);
var inst_19354 = cljs.core.chunk_rest.call(null,inst_19349);
var inst_19355 = cljs.core.count.call(null,inst_19353);
var inst_19330 = inst_19354;
var inst_19331 = inst_19353;
var inst_19332 = inst_19355;
var inst_19333 = (0);
var state_19390__$1 = (function (){var statearr_19425 = state_19390;
(statearr_19425[(9)] = inst_19331);

(statearr_19425[(10)] = inst_19333);

(statearr_19425[(20)] = inst_19330);

(statearr_19425[(21)] = inst_19332);

return statearr_19425;
})();
var statearr_19426_19495 = state_19390__$1;
(statearr_19426_19495[(2)] = null);

(statearr_19426_19495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (41))){
var inst_19349 = (state_19390[(25)]);
var inst_19365 = (state_19390[(2)]);
var inst_19366 = cljs.core.next.call(null,inst_19349);
var inst_19330 = inst_19366;
var inst_19331 = null;
var inst_19332 = (0);
var inst_19333 = (0);
var state_19390__$1 = (function (){var statearr_19427 = state_19390;
(statearr_19427[(9)] = inst_19331);

(statearr_19427[(10)] = inst_19333);

(statearr_19427[(20)] = inst_19330);

(statearr_19427[(27)] = inst_19365);

(statearr_19427[(21)] = inst_19332);

return statearr_19427;
})();
var statearr_19428_19496 = state_19390__$1;
(statearr_19428_19496[(2)] = null);

(statearr_19428_19496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (43))){
var state_19390__$1 = state_19390;
var statearr_19429_19497 = state_19390__$1;
(statearr_19429_19497[(2)] = null);

(statearr_19429_19497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (29))){
var inst_19374 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19430_19498 = state_19390__$1;
(statearr_19430_19498[(2)] = inst_19374);

(statearr_19430_19498[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (44))){
var inst_19383 = (state_19390[(2)]);
var state_19390__$1 = (function (){var statearr_19431 = state_19390;
(statearr_19431[(28)] = inst_19383);

return statearr_19431;
})();
var statearr_19432_19499 = state_19390__$1;
(statearr_19432_19499[(2)] = null);

(statearr_19432_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (6))){
var inst_19322 = (state_19390[(29)]);
var inst_19321 = cljs.core.deref.call(null,cs);
var inst_19322__$1 = cljs.core.keys.call(null,inst_19321);
var inst_19323 = cljs.core.count.call(null,inst_19322__$1);
var inst_19324 = cljs.core.reset_BANG_.call(null,dctr,inst_19323);
var inst_19329 = cljs.core.seq.call(null,inst_19322__$1);
var inst_19330 = inst_19329;
var inst_19331 = null;
var inst_19332 = (0);
var inst_19333 = (0);
var state_19390__$1 = (function (){var statearr_19433 = state_19390;
(statearr_19433[(9)] = inst_19331);

(statearr_19433[(10)] = inst_19333);

(statearr_19433[(20)] = inst_19330);

(statearr_19433[(30)] = inst_19324);

(statearr_19433[(29)] = inst_19322__$1);

(statearr_19433[(21)] = inst_19332);

return statearr_19433;
})();
var statearr_19434_19500 = state_19390__$1;
(statearr_19434_19500[(2)] = null);

(statearr_19434_19500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (28))){
var inst_19330 = (state_19390[(20)]);
var inst_19349 = (state_19390[(25)]);
var inst_19349__$1 = cljs.core.seq.call(null,inst_19330);
var state_19390__$1 = (function (){var statearr_19435 = state_19390;
(statearr_19435[(25)] = inst_19349__$1);

return statearr_19435;
})();
if(inst_19349__$1){
var statearr_19436_19501 = state_19390__$1;
(statearr_19436_19501[(1)] = (33));

} else {
var statearr_19437_19502 = state_19390__$1;
(statearr_19437_19502[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (25))){
var inst_19333 = (state_19390[(10)]);
var inst_19332 = (state_19390[(21)]);
var inst_19335 = (inst_19333 < inst_19332);
var inst_19336 = inst_19335;
var state_19390__$1 = state_19390;
if(cljs.core.truth_(inst_19336)){
var statearr_19438_19503 = state_19390__$1;
(statearr_19438_19503[(1)] = (27));

} else {
var statearr_19439_19504 = state_19390__$1;
(statearr_19439_19504[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (34))){
var state_19390__$1 = state_19390;
var statearr_19440_19505 = state_19390__$1;
(statearr_19440_19505[(2)] = null);

(statearr_19440_19505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (17))){
var state_19390__$1 = state_19390;
var statearr_19441_19506 = state_19390__$1;
(statearr_19441_19506[(2)] = null);

(statearr_19441_19506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (3))){
var inst_19388 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19390__$1,inst_19388);
} else {
if((state_val_19391 === (12))){
var inst_19317 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19442_19507 = state_19390__$1;
(statearr_19442_19507[(2)] = inst_19317);

(statearr_19442_19507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (2))){
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19390__$1,(4),ch);
} else {
if((state_val_19391 === (23))){
var state_19390__$1 = state_19390;
var statearr_19443_19508 = state_19390__$1;
(statearr_19443_19508[(2)] = null);

(statearr_19443_19508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (35))){
var inst_19372 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19444_19509 = state_19390__$1;
(statearr_19444_19509[(2)] = inst_19372);

(statearr_19444_19509[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (19))){
var inst_19289 = (state_19390[(7)]);
var inst_19293 = cljs.core.chunk_first.call(null,inst_19289);
var inst_19294 = cljs.core.chunk_rest.call(null,inst_19289);
var inst_19295 = cljs.core.count.call(null,inst_19293);
var inst_19267 = inst_19294;
var inst_19268 = inst_19293;
var inst_19269 = inst_19295;
var inst_19270 = (0);
var state_19390__$1 = (function (){var statearr_19445 = state_19390;
(statearr_19445[(13)] = inst_19268);

(statearr_19445[(14)] = inst_19267);

(statearr_19445[(15)] = inst_19269);

(statearr_19445[(17)] = inst_19270);

return statearr_19445;
})();
var statearr_19446_19510 = state_19390__$1;
(statearr_19446_19510[(2)] = null);

(statearr_19446_19510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (11))){
var inst_19289 = (state_19390[(7)]);
var inst_19267 = (state_19390[(14)]);
var inst_19289__$1 = cljs.core.seq.call(null,inst_19267);
var state_19390__$1 = (function (){var statearr_19447 = state_19390;
(statearr_19447[(7)] = inst_19289__$1);

return statearr_19447;
})();
if(inst_19289__$1){
var statearr_19448_19511 = state_19390__$1;
(statearr_19448_19511[(1)] = (16));

} else {
var statearr_19449_19512 = state_19390__$1;
(statearr_19449_19512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (9))){
var inst_19319 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19450_19513 = state_19390__$1;
(statearr_19450_19513[(2)] = inst_19319);

(statearr_19450_19513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (5))){
var inst_19265 = cljs.core.deref.call(null,cs);
var inst_19266 = cljs.core.seq.call(null,inst_19265);
var inst_19267 = inst_19266;
var inst_19268 = null;
var inst_19269 = (0);
var inst_19270 = (0);
var state_19390__$1 = (function (){var statearr_19451 = state_19390;
(statearr_19451[(13)] = inst_19268);

(statearr_19451[(14)] = inst_19267);

(statearr_19451[(15)] = inst_19269);

(statearr_19451[(17)] = inst_19270);

return statearr_19451;
})();
var statearr_19452_19514 = state_19390__$1;
(statearr_19452_19514[(2)] = null);

(statearr_19452_19514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (14))){
var state_19390__$1 = state_19390;
var statearr_19453_19515 = state_19390__$1;
(statearr_19453_19515[(2)] = null);

(statearr_19453_19515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (45))){
var inst_19380 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19454_19516 = state_19390__$1;
(statearr_19454_19516[(2)] = inst_19380);

(statearr_19454_19516[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (26))){
var inst_19322 = (state_19390[(29)]);
var inst_19376 = (state_19390[(2)]);
var inst_19377 = cljs.core.seq.call(null,inst_19322);
var state_19390__$1 = (function (){var statearr_19455 = state_19390;
(statearr_19455[(31)] = inst_19376);

return statearr_19455;
})();
if(inst_19377){
var statearr_19456_19517 = state_19390__$1;
(statearr_19456_19517[(1)] = (42));

} else {
var statearr_19457_19518 = state_19390__$1;
(statearr_19457_19518[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (16))){
var inst_19289 = (state_19390[(7)]);
var inst_19291 = cljs.core.chunked_seq_QMARK_.call(null,inst_19289);
var state_19390__$1 = state_19390;
if(inst_19291){
var statearr_19458_19519 = state_19390__$1;
(statearr_19458_19519[(1)] = (19));

} else {
var statearr_19459_19520 = state_19390__$1;
(statearr_19459_19520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (38))){
var inst_19369 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19460_19521 = state_19390__$1;
(statearr_19460_19521[(2)] = inst_19369);

(statearr_19460_19521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (30))){
var state_19390__$1 = state_19390;
var statearr_19461_19522 = state_19390__$1;
(statearr_19461_19522[(2)] = null);

(statearr_19461_19522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (10))){
var inst_19268 = (state_19390[(13)]);
var inst_19270 = (state_19390[(17)]);
var inst_19278 = cljs.core._nth.call(null,inst_19268,inst_19270);
var inst_19279 = cljs.core.nth.call(null,inst_19278,(0),null);
var inst_19280 = cljs.core.nth.call(null,inst_19278,(1),null);
var state_19390__$1 = (function (){var statearr_19462 = state_19390;
(statearr_19462[(26)] = inst_19279);

return statearr_19462;
})();
if(cljs.core.truth_(inst_19280)){
var statearr_19463_19523 = state_19390__$1;
(statearr_19463_19523[(1)] = (13));

} else {
var statearr_19464_19524 = state_19390__$1;
(statearr_19464_19524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (18))){
var inst_19315 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19465_19525 = state_19390__$1;
(statearr_19465_19525[(2)] = inst_19315);

(statearr_19465_19525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (42))){
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19390__$1,(45),dchan);
} else {
if((state_val_19391 === (37))){
var inst_19258 = (state_19390[(12)]);
var inst_19349 = (state_19390[(25)]);
var inst_19358 = (state_19390[(23)]);
var inst_19358__$1 = cljs.core.first.call(null,inst_19349);
var inst_19359 = cljs.core.async.put_BANG_.call(null,inst_19358__$1,inst_19258,done);
var state_19390__$1 = (function (){var statearr_19466 = state_19390;
(statearr_19466[(23)] = inst_19358__$1);

return statearr_19466;
})();
if(cljs.core.truth_(inst_19359)){
var statearr_19467_19526 = state_19390__$1;
(statearr_19467_19526[(1)] = (39));

} else {
var statearr_19468_19527 = state_19390__$1;
(statearr_19468_19527[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (8))){
var inst_19269 = (state_19390[(15)]);
var inst_19270 = (state_19390[(17)]);
var inst_19272 = (inst_19270 < inst_19269);
var inst_19273 = inst_19272;
var state_19390__$1 = state_19390;
if(cljs.core.truth_(inst_19273)){
var statearr_19469_19528 = state_19390__$1;
(statearr_19469_19528[(1)] = (10));

} else {
var statearr_19470_19529 = state_19390__$1;
(statearr_19470_19529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19475,cs,m,dchan,dctr,done))
;
return ((function (switch__16635__auto__,c__16794__auto___19475,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16636__auto__ = null;
var cljs$core$async$mult_$_state_machine__16636__auto____0 = (function (){
var statearr_19471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19471[(0)] = cljs$core$async$mult_$_state_machine__16636__auto__);

(statearr_19471[(1)] = (1));

return statearr_19471;
});
var cljs$core$async$mult_$_state_machine__16636__auto____1 = (function (state_19390){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19472){if((e19472 instanceof Object)){
var ex__16639__auto__ = e19472;
var statearr_19473_19530 = state_19390;
(statearr_19473_19530[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19531 = state_19390;
state_19390 = G__19531;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16636__auto__ = function(state_19390){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16636__auto____1.call(this,state_19390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16636__auto____0;
cljs$core$async$mult_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16636__auto____1;
return cljs$core$async$mult_$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19475,cs,m,dchan,dctr,done))
})();
var state__16796__auto__ = (function (){var statearr_19474 = f__16795__auto__.call(null);
(statearr_19474[(6)] = c__16794__auto___19475);

return statearr_19474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19475,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19533 = arguments.length;
switch (G__19533) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19545 = arguments.length;
var i__4532__auto___19546 = (0);
while(true){
if((i__4532__auto___19546 < len__4531__auto___19545)){
args__4534__auto__.push((arguments[i__4532__auto___19546]));

var G__19547 = (i__4532__auto___19546 + (1));
i__4532__auto___19546 = G__19547;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19539){
var map__19540 = p__19539;
var map__19540__$1 = ((((!((map__19540 == null)))?(((((map__19540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19540):map__19540);
var opts = map__19540__$1;
var statearr_19542_19548 = state;
(statearr_19542_19548[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__19540,map__19540__$1,opts){
return (function (val){
var statearr_19543_19549 = state;
(statearr_19543_19549[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19540,map__19540__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19544_19550 = state;
(statearr_19544_19550[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19535){
var G__19536 = cljs.core.first.call(null,seq19535);
var seq19535__$1 = cljs.core.next.call(null,seq19535);
var G__19537 = cljs.core.first.call(null,seq19535__$1);
var seq19535__$2 = cljs.core.next.call(null,seq19535__$1);
var G__19538 = cljs.core.first.call(null,seq19535__$2);
var seq19535__$3 = cljs.core.next.call(null,seq19535__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19536,G__19537,G__19538,seq19535__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19551 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19552){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19552 = meta19552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19553,meta19552__$1){
var self__ = this;
var _19553__$1 = this;
return (new cljs.core.async.t_cljs$core$async19551(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19552__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19553){
var self__ = this;
var _19553__$1 = this;
return self__.meta19552;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19552","meta19552",-2038324718,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19551";

cljs.core.async.t_cljs$core$async19551.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19551");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19551.
 */
cljs.core.async.__GT_t_cljs$core$async19551 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19551(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19552){
return (new cljs.core.async.t_cljs$core$async19551(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19552));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19551(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16794__auto___19715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19655){
var state_val_19656 = (state_19655[(1)]);
if((state_val_19656 === (7))){
var inst_19570 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19657_19716 = state_19655__$1;
(statearr_19657_19716[(2)] = inst_19570);

(statearr_19657_19716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (20))){
var inst_19582 = (state_19655[(7)]);
var state_19655__$1 = state_19655;
var statearr_19658_19717 = state_19655__$1;
(statearr_19658_19717[(2)] = inst_19582);

(statearr_19658_19717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (27))){
var state_19655__$1 = state_19655;
var statearr_19659_19718 = state_19655__$1;
(statearr_19659_19718[(2)] = null);

(statearr_19659_19718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (1))){
var inst_19557 = (state_19655[(8)]);
var inst_19557__$1 = calc_state.call(null);
var inst_19559 = (inst_19557__$1 == null);
var inst_19560 = cljs.core.not.call(null,inst_19559);
var state_19655__$1 = (function (){var statearr_19660 = state_19655;
(statearr_19660[(8)] = inst_19557__$1);

return statearr_19660;
})();
if(inst_19560){
var statearr_19661_19719 = state_19655__$1;
(statearr_19661_19719[(1)] = (2));

} else {
var statearr_19662_19720 = state_19655__$1;
(statearr_19662_19720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (24))){
var inst_19629 = (state_19655[(9)]);
var inst_19606 = (state_19655[(10)]);
var inst_19615 = (state_19655[(11)]);
var inst_19629__$1 = inst_19606.call(null,inst_19615);
var state_19655__$1 = (function (){var statearr_19663 = state_19655;
(statearr_19663[(9)] = inst_19629__$1);

return statearr_19663;
})();
if(cljs.core.truth_(inst_19629__$1)){
var statearr_19664_19721 = state_19655__$1;
(statearr_19664_19721[(1)] = (29));

} else {
var statearr_19665_19722 = state_19655__$1;
(statearr_19665_19722[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (4))){
var inst_19573 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19573)){
var statearr_19666_19723 = state_19655__$1;
(statearr_19666_19723[(1)] = (8));

} else {
var statearr_19667_19724 = state_19655__$1;
(statearr_19667_19724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (15))){
var inst_19600 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19600)){
var statearr_19668_19725 = state_19655__$1;
(statearr_19668_19725[(1)] = (19));

} else {
var statearr_19669_19726 = state_19655__$1;
(statearr_19669_19726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (21))){
var inst_19605 = (state_19655[(12)]);
var inst_19605__$1 = (state_19655[(2)]);
var inst_19606 = cljs.core.get.call(null,inst_19605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19607 = cljs.core.get.call(null,inst_19605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19608 = cljs.core.get.call(null,inst_19605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19655__$1 = (function (){var statearr_19670 = state_19655;
(statearr_19670[(10)] = inst_19606);

(statearr_19670[(13)] = inst_19607);

(statearr_19670[(12)] = inst_19605__$1);

return statearr_19670;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19655__$1,(22),inst_19608);
} else {
if((state_val_19656 === (31))){
var inst_19637 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19637)){
var statearr_19671_19727 = state_19655__$1;
(statearr_19671_19727[(1)] = (32));

} else {
var statearr_19672_19728 = state_19655__$1;
(statearr_19672_19728[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (32))){
var inst_19614 = (state_19655[(14)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19655__$1,(35),out,inst_19614);
} else {
if((state_val_19656 === (33))){
var inst_19605 = (state_19655[(12)]);
var inst_19582 = inst_19605;
var state_19655__$1 = (function (){var statearr_19673 = state_19655;
(statearr_19673[(7)] = inst_19582);

return statearr_19673;
})();
var statearr_19674_19729 = state_19655__$1;
(statearr_19674_19729[(2)] = null);

(statearr_19674_19729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (13))){
var inst_19582 = (state_19655[(7)]);
var inst_19589 = inst_19582.cljs$lang$protocol_mask$partition0$;
var inst_19590 = (inst_19589 & (64));
var inst_19591 = inst_19582.cljs$core$ISeq$;
var inst_19592 = (cljs.core.PROTOCOL_SENTINEL === inst_19591);
var inst_19593 = ((inst_19590) || (inst_19592));
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19593)){
var statearr_19675_19730 = state_19655__$1;
(statearr_19675_19730[(1)] = (16));

} else {
var statearr_19676_19731 = state_19655__$1;
(statearr_19676_19731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (22))){
var inst_19614 = (state_19655[(14)]);
var inst_19615 = (state_19655[(11)]);
var inst_19613 = (state_19655[(2)]);
var inst_19614__$1 = cljs.core.nth.call(null,inst_19613,(0),null);
var inst_19615__$1 = cljs.core.nth.call(null,inst_19613,(1),null);
var inst_19616 = (inst_19614__$1 == null);
var inst_19617 = cljs.core._EQ_.call(null,inst_19615__$1,change);
var inst_19618 = ((inst_19616) || (inst_19617));
var state_19655__$1 = (function (){var statearr_19677 = state_19655;
(statearr_19677[(14)] = inst_19614__$1);

(statearr_19677[(11)] = inst_19615__$1);

return statearr_19677;
})();
if(cljs.core.truth_(inst_19618)){
var statearr_19678_19732 = state_19655__$1;
(statearr_19678_19732[(1)] = (23));

} else {
var statearr_19679_19733 = state_19655__$1;
(statearr_19679_19733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (36))){
var inst_19605 = (state_19655[(12)]);
var inst_19582 = inst_19605;
var state_19655__$1 = (function (){var statearr_19680 = state_19655;
(statearr_19680[(7)] = inst_19582);

return statearr_19680;
})();
var statearr_19681_19734 = state_19655__$1;
(statearr_19681_19734[(2)] = null);

(statearr_19681_19734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (29))){
var inst_19629 = (state_19655[(9)]);
var state_19655__$1 = state_19655;
var statearr_19682_19735 = state_19655__$1;
(statearr_19682_19735[(2)] = inst_19629);

(statearr_19682_19735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (6))){
var state_19655__$1 = state_19655;
var statearr_19683_19736 = state_19655__$1;
(statearr_19683_19736[(2)] = false);

(statearr_19683_19736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (28))){
var inst_19625 = (state_19655[(2)]);
var inst_19626 = calc_state.call(null);
var inst_19582 = inst_19626;
var state_19655__$1 = (function (){var statearr_19684 = state_19655;
(statearr_19684[(15)] = inst_19625);

(statearr_19684[(7)] = inst_19582);

return statearr_19684;
})();
var statearr_19685_19737 = state_19655__$1;
(statearr_19685_19737[(2)] = null);

(statearr_19685_19737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (25))){
var inst_19651 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19686_19738 = state_19655__$1;
(statearr_19686_19738[(2)] = inst_19651);

(statearr_19686_19738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (34))){
var inst_19649 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19687_19739 = state_19655__$1;
(statearr_19687_19739[(2)] = inst_19649);

(statearr_19687_19739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (17))){
var state_19655__$1 = state_19655;
var statearr_19688_19740 = state_19655__$1;
(statearr_19688_19740[(2)] = false);

(statearr_19688_19740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (3))){
var state_19655__$1 = state_19655;
var statearr_19689_19741 = state_19655__$1;
(statearr_19689_19741[(2)] = false);

(statearr_19689_19741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (12))){
var inst_19653 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19655__$1,inst_19653);
} else {
if((state_val_19656 === (2))){
var inst_19557 = (state_19655[(8)]);
var inst_19562 = inst_19557.cljs$lang$protocol_mask$partition0$;
var inst_19563 = (inst_19562 & (64));
var inst_19564 = inst_19557.cljs$core$ISeq$;
var inst_19565 = (cljs.core.PROTOCOL_SENTINEL === inst_19564);
var inst_19566 = ((inst_19563) || (inst_19565));
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19566)){
var statearr_19690_19742 = state_19655__$1;
(statearr_19690_19742[(1)] = (5));

} else {
var statearr_19691_19743 = state_19655__$1;
(statearr_19691_19743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (23))){
var inst_19614 = (state_19655[(14)]);
var inst_19620 = (inst_19614 == null);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19620)){
var statearr_19692_19744 = state_19655__$1;
(statearr_19692_19744[(1)] = (26));

} else {
var statearr_19693_19745 = state_19655__$1;
(statearr_19693_19745[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (35))){
var inst_19640 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19640)){
var statearr_19694_19746 = state_19655__$1;
(statearr_19694_19746[(1)] = (36));

} else {
var statearr_19695_19747 = state_19655__$1;
(statearr_19695_19747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (19))){
var inst_19582 = (state_19655[(7)]);
var inst_19602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19582);
var state_19655__$1 = state_19655;
var statearr_19696_19748 = state_19655__$1;
(statearr_19696_19748[(2)] = inst_19602);

(statearr_19696_19748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (11))){
var inst_19582 = (state_19655[(7)]);
var inst_19586 = (inst_19582 == null);
var inst_19587 = cljs.core.not.call(null,inst_19586);
var state_19655__$1 = state_19655;
if(inst_19587){
var statearr_19697_19749 = state_19655__$1;
(statearr_19697_19749[(1)] = (13));

} else {
var statearr_19698_19750 = state_19655__$1;
(statearr_19698_19750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (9))){
var inst_19557 = (state_19655[(8)]);
var state_19655__$1 = state_19655;
var statearr_19699_19751 = state_19655__$1;
(statearr_19699_19751[(2)] = inst_19557);

(statearr_19699_19751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (5))){
var state_19655__$1 = state_19655;
var statearr_19700_19752 = state_19655__$1;
(statearr_19700_19752[(2)] = true);

(statearr_19700_19752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (14))){
var state_19655__$1 = state_19655;
var statearr_19701_19753 = state_19655__$1;
(statearr_19701_19753[(2)] = false);

(statearr_19701_19753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (26))){
var inst_19615 = (state_19655[(11)]);
var inst_19622 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19615);
var state_19655__$1 = state_19655;
var statearr_19702_19754 = state_19655__$1;
(statearr_19702_19754[(2)] = inst_19622);

(statearr_19702_19754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (16))){
var state_19655__$1 = state_19655;
var statearr_19703_19755 = state_19655__$1;
(statearr_19703_19755[(2)] = true);

(statearr_19703_19755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (38))){
var inst_19645 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19704_19756 = state_19655__$1;
(statearr_19704_19756[(2)] = inst_19645);

(statearr_19704_19756[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (30))){
var inst_19606 = (state_19655[(10)]);
var inst_19607 = (state_19655[(13)]);
var inst_19615 = (state_19655[(11)]);
var inst_19632 = cljs.core.empty_QMARK_.call(null,inst_19606);
var inst_19633 = inst_19607.call(null,inst_19615);
var inst_19634 = cljs.core.not.call(null,inst_19633);
var inst_19635 = ((inst_19632) && (inst_19634));
var state_19655__$1 = state_19655;
var statearr_19705_19757 = state_19655__$1;
(statearr_19705_19757[(2)] = inst_19635);

(statearr_19705_19757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (10))){
var inst_19557 = (state_19655[(8)]);
var inst_19578 = (state_19655[(2)]);
var inst_19579 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19580 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19581 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19582 = inst_19557;
var state_19655__$1 = (function (){var statearr_19706 = state_19655;
(statearr_19706[(16)] = inst_19580);

(statearr_19706[(17)] = inst_19581);

(statearr_19706[(7)] = inst_19582);

(statearr_19706[(18)] = inst_19579);

return statearr_19706;
})();
var statearr_19707_19758 = state_19655__$1;
(statearr_19707_19758[(2)] = null);

(statearr_19707_19758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (18))){
var inst_19597 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19708_19759 = state_19655__$1;
(statearr_19708_19759[(2)] = inst_19597);

(statearr_19708_19759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (37))){
var state_19655__$1 = state_19655;
var statearr_19709_19760 = state_19655__$1;
(statearr_19709_19760[(2)] = null);

(statearr_19709_19760[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (8))){
var inst_19557 = (state_19655[(8)]);
var inst_19575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19557);
var state_19655__$1 = state_19655;
var statearr_19710_19761 = state_19655__$1;
(statearr_19710_19761[(2)] = inst_19575);

(statearr_19710_19761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16635__auto__,c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16636__auto__ = null;
var cljs$core$async$mix_$_state_machine__16636__auto____0 = (function (){
var statearr_19711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19711[(0)] = cljs$core$async$mix_$_state_machine__16636__auto__);

(statearr_19711[(1)] = (1));

return statearr_19711;
});
var cljs$core$async$mix_$_state_machine__16636__auto____1 = (function (state_19655){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19712){if((e19712 instanceof Object)){
var ex__16639__auto__ = e19712;
var statearr_19713_19762 = state_19655;
(statearr_19713_19762[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19763 = state_19655;
state_19655 = G__19763;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16636__auto__ = function(state_19655){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16636__auto____1.call(this,state_19655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16636__auto____0;
cljs$core$async$mix_$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16636__auto____1;
return cljs$core$async$mix_$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16796__auto__ = (function (){var statearr_19714 = f__16795__auto__.call(null);
(statearr_19714[(6)] = c__16794__auto___19715);

return statearr_19714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19765 = arguments.length;
switch (G__19765) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19769 = arguments.length;
switch (G__19769) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__19767_SHARP_){
if(cljs.core.truth_(p1__19767_SHARP_.call(null,topic))){
return p1__19767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19771 = meta19771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19772,meta19771__$1){
var self__ = this;
var _19772__$1 = this;
return (new cljs.core.async.t_cljs$core$async19770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19772){
var self__ = this;
var _19772__$1 = this;
return self__.meta19771;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19771","meta19771",-334715901,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19770";

cljs.core.async.t_cljs$core$async19770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19770");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19770.
 */
cljs.core.async.__GT_t_cljs$core$async19770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19771){
return (new cljs.core.async.t_cljs$core$async19770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16794__auto___19890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19890,mults,ensure_mult,p){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19890,mults,ensure_mult,p){
return (function (state_19844){
var state_val_19845 = (state_19844[(1)]);
if((state_val_19845 === (7))){
var inst_19840 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19846_19891 = state_19844__$1;
(statearr_19846_19891[(2)] = inst_19840);

(statearr_19846_19891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (20))){
var state_19844__$1 = state_19844;
var statearr_19847_19892 = state_19844__$1;
(statearr_19847_19892[(2)] = null);

(statearr_19847_19892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (1))){
var state_19844__$1 = state_19844;
var statearr_19848_19893 = state_19844__$1;
(statearr_19848_19893[(2)] = null);

(statearr_19848_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (24))){
var inst_19823 = (state_19844[(7)]);
var inst_19832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19823);
var state_19844__$1 = state_19844;
var statearr_19849_19894 = state_19844__$1;
(statearr_19849_19894[(2)] = inst_19832);

(statearr_19849_19894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (4))){
var inst_19775 = (state_19844[(8)]);
var inst_19775__$1 = (state_19844[(2)]);
var inst_19776 = (inst_19775__$1 == null);
var state_19844__$1 = (function (){var statearr_19850 = state_19844;
(statearr_19850[(8)] = inst_19775__$1);

return statearr_19850;
})();
if(cljs.core.truth_(inst_19776)){
var statearr_19851_19895 = state_19844__$1;
(statearr_19851_19895[(1)] = (5));

} else {
var statearr_19852_19896 = state_19844__$1;
(statearr_19852_19896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (15))){
var inst_19817 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19853_19897 = state_19844__$1;
(statearr_19853_19897[(2)] = inst_19817);

(statearr_19853_19897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (21))){
var inst_19837 = (state_19844[(2)]);
var state_19844__$1 = (function (){var statearr_19854 = state_19844;
(statearr_19854[(9)] = inst_19837);

return statearr_19854;
})();
var statearr_19855_19898 = state_19844__$1;
(statearr_19855_19898[(2)] = null);

(statearr_19855_19898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (13))){
var inst_19799 = (state_19844[(10)]);
var inst_19801 = cljs.core.chunked_seq_QMARK_.call(null,inst_19799);
var state_19844__$1 = state_19844;
if(inst_19801){
var statearr_19856_19899 = state_19844__$1;
(statearr_19856_19899[(1)] = (16));

} else {
var statearr_19857_19900 = state_19844__$1;
(statearr_19857_19900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (22))){
var inst_19829 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
if(cljs.core.truth_(inst_19829)){
var statearr_19858_19901 = state_19844__$1;
(statearr_19858_19901[(1)] = (23));

} else {
var statearr_19859_19902 = state_19844__$1;
(statearr_19859_19902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (6))){
var inst_19825 = (state_19844[(11)]);
var inst_19775 = (state_19844[(8)]);
var inst_19823 = (state_19844[(7)]);
var inst_19823__$1 = topic_fn.call(null,inst_19775);
var inst_19824 = cljs.core.deref.call(null,mults);
var inst_19825__$1 = cljs.core.get.call(null,inst_19824,inst_19823__$1);
var state_19844__$1 = (function (){var statearr_19860 = state_19844;
(statearr_19860[(11)] = inst_19825__$1);

(statearr_19860[(7)] = inst_19823__$1);

return statearr_19860;
})();
if(cljs.core.truth_(inst_19825__$1)){
var statearr_19861_19903 = state_19844__$1;
(statearr_19861_19903[(1)] = (19));

} else {
var statearr_19862_19904 = state_19844__$1;
(statearr_19862_19904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (25))){
var inst_19834 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19863_19905 = state_19844__$1;
(statearr_19863_19905[(2)] = inst_19834);

(statearr_19863_19905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (17))){
var inst_19799 = (state_19844[(10)]);
var inst_19808 = cljs.core.first.call(null,inst_19799);
var inst_19809 = cljs.core.async.muxch_STAR_.call(null,inst_19808);
var inst_19810 = cljs.core.async.close_BANG_.call(null,inst_19809);
var inst_19811 = cljs.core.next.call(null,inst_19799);
var inst_19785 = inst_19811;
var inst_19786 = null;
var inst_19787 = (0);
var inst_19788 = (0);
var state_19844__$1 = (function (){var statearr_19864 = state_19844;
(statearr_19864[(12)] = inst_19788);

(statearr_19864[(13)] = inst_19787);

(statearr_19864[(14)] = inst_19810);

(statearr_19864[(15)] = inst_19785);

(statearr_19864[(16)] = inst_19786);

return statearr_19864;
})();
var statearr_19865_19906 = state_19844__$1;
(statearr_19865_19906[(2)] = null);

(statearr_19865_19906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (3))){
var inst_19842 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19844__$1,inst_19842);
} else {
if((state_val_19845 === (12))){
var inst_19819 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19866_19907 = state_19844__$1;
(statearr_19866_19907[(2)] = inst_19819);

(statearr_19866_19907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (2))){
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19844__$1,(4),ch);
} else {
if((state_val_19845 === (23))){
var state_19844__$1 = state_19844;
var statearr_19867_19908 = state_19844__$1;
(statearr_19867_19908[(2)] = null);

(statearr_19867_19908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (19))){
var inst_19825 = (state_19844[(11)]);
var inst_19775 = (state_19844[(8)]);
var inst_19827 = cljs.core.async.muxch_STAR_.call(null,inst_19825);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19844__$1,(22),inst_19827,inst_19775);
} else {
if((state_val_19845 === (11))){
var inst_19799 = (state_19844[(10)]);
var inst_19785 = (state_19844[(15)]);
var inst_19799__$1 = cljs.core.seq.call(null,inst_19785);
var state_19844__$1 = (function (){var statearr_19868 = state_19844;
(statearr_19868[(10)] = inst_19799__$1);

return statearr_19868;
})();
if(inst_19799__$1){
var statearr_19869_19909 = state_19844__$1;
(statearr_19869_19909[(1)] = (13));

} else {
var statearr_19870_19910 = state_19844__$1;
(statearr_19870_19910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (9))){
var inst_19821 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19871_19911 = state_19844__$1;
(statearr_19871_19911[(2)] = inst_19821);

(statearr_19871_19911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (5))){
var inst_19782 = cljs.core.deref.call(null,mults);
var inst_19783 = cljs.core.vals.call(null,inst_19782);
var inst_19784 = cljs.core.seq.call(null,inst_19783);
var inst_19785 = inst_19784;
var inst_19786 = null;
var inst_19787 = (0);
var inst_19788 = (0);
var state_19844__$1 = (function (){var statearr_19872 = state_19844;
(statearr_19872[(12)] = inst_19788);

(statearr_19872[(13)] = inst_19787);

(statearr_19872[(15)] = inst_19785);

(statearr_19872[(16)] = inst_19786);

return statearr_19872;
})();
var statearr_19873_19912 = state_19844__$1;
(statearr_19873_19912[(2)] = null);

(statearr_19873_19912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (14))){
var state_19844__$1 = state_19844;
var statearr_19877_19913 = state_19844__$1;
(statearr_19877_19913[(2)] = null);

(statearr_19877_19913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (16))){
var inst_19799 = (state_19844[(10)]);
var inst_19803 = cljs.core.chunk_first.call(null,inst_19799);
var inst_19804 = cljs.core.chunk_rest.call(null,inst_19799);
var inst_19805 = cljs.core.count.call(null,inst_19803);
var inst_19785 = inst_19804;
var inst_19786 = inst_19803;
var inst_19787 = inst_19805;
var inst_19788 = (0);
var state_19844__$1 = (function (){var statearr_19878 = state_19844;
(statearr_19878[(12)] = inst_19788);

(statearr_19878[(13)] = inst_19787);

(statearr_19878[(15)] = inst_19785);

(statearr_19878[(16)] = inst_19786);

return statearr_19878;
})();
var statearr_19879_19914 = state_19844__$1;
(statearr_19879_19914[(2)] = null);

(statearr_19879_19914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (10))){
var inst_19788 = (state_19844[(12)]);
var inst_19787 = (state_19844[(13)]);
var inst_19785 = (state_19844[(15)]);
var inst_19786 = (state_19844[(16)]);
var inst_19793 = cljs.core._nth.call(null,inst_19786,inst_19788);
var inst_19794 = cljs.core.async.muxch_STAR_.call(null,inst_19793);
var inst_19795 = cljs.core.async.close_BANG_.call(null,inst_19794);
var inst_19796 = (inst_19788 + (1));
var tmp19874 = inst_19787;
var tmp19875 = inst_19785;
var tmp19876 = inst_19786;
var inst_19785__$1 = tmp19875;
var inst_19786__$1 = tmp19876;
var inst_19787__$1 = tmp19874;
var inst_19788__$1 = inst_19796;
var state_19844__$1 = (function (){var statearr_19880 = state_19844;
(statearr_19880[(12)] = inst_19788__$1);

(statearr_19880[(13)] = inst_19787__$1);

(statearr_19880[(17)] = inst_19795);

(statearr_19880[(15)] = inst_19785__$1);

(statearr_19880[(16)] = inst_19786__$1);

return statearr_19880;
})();
var statearr_19881_19915 = state_19844__$1;
(statearr_19881_19915[(2)] = null);

(statearr_19881_19915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (18))){
var inst_19814 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19882_19916 = state_19844__$1;
(statearr_19882_19916[(2)] = inst_19814);

(statearr_19882_19916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (8))){
var inst_19788 = (state_19844[(12)]);
var inst_19787 = (state_19844[(13)]);
var inst_19790 = (inst_19788 < inst_19787);
var inst_19791 = inst_19790;
var state_19844__$1 = state_19844;
if(cljs.core.truth_(inst_19791)){
var statearr_19883_19917 = state_19844__$1;
(statearr_19883_19917[(1)] = (10));

} else {
var statearr_19884_19918 = state_19844__$1;
(statearr_19884_19918[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19890,mults,ensure_mult,p))
;
return ((function (switch__16635__auto__,c__16794__auto___19890,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_19885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19885[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_19885[(1)] = (1));

return statearr_19885;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_19844){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19886){if((e19886 instanceof Object)){
var ex__16639__auto__ = e19886;
var statearr_19887_19919 = state_19844;
(statearr_19887_19919[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19920 = state_19844;
state_19844 = G__19920;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_19844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_19844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19890,mults,ensure_mult,p))
})();
var state__16796__auto__ = (function (){var statearr_19888 = f__16795__auto__.call(null);
(statearr_19888[(6)] = c__16794__auto___19890);

return statearr_19888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19890,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19922 = arguments.length;
switch (G__19922) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19925 = arguments.length;
switch (G__19925) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19928 = arguments.length;
switch (G__19928) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16794__auto___19995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19967){
var state_val_19968 = (state_19967[(1)]);
if((state_val_19968 === (7))){
var state_19967__$1 = state_19967;
var statearr_19969_19996 = state_19967__$1;
(statearr_19969_19996[(2)] = null);

(statearr_19969_19996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (1))){
var state_19967__$1 = state_19967;
var statearr_19970_19997 = state_19967__$1;
(statearr_19970_19997[(2)] = null);

(statearr_19970_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (4))){
var inst_19931 = (state_19967[(7)]);
var inst_19933 = (inst_19931 < cnt);
var state_19967__$1 = state_19967;
if(cljs.core.truth_(inst_19933)){
var statearr_19971_19998 = state_19967__$1;
(statearr_19971_19998[(1)] = (6));

} else {
var statearr_19972_19999 = state_19967__$1;
(statearr_19972_19999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (15))){
var inst_19963 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19973_20000 = state_19967__$1;
(statearr_19973_20000[(2)] = inst_19963);

(statearr_19973_20000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (13))){
var inst_19956 = cljs.core.async.close_BANG_.call(null,out);
var state_19967__$1 = state_19967;
var statearr_19974_20001 = state_19967__$1;
(statearr_19974_20001[(2)] = inst_19956);

(statearr_19974_20001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (6))){
var state_19967__$1 = state_19967;
var statearr_19975_20002 = state_19967__$1;
(statearr_19975_20002[(2)] = null);

(statearr_19975_20002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (3))){
var inst_19965 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19967__$1,inst_19965);
} else {
if((state_val_19968 === (12))){
var inst_19953 = (state_19967[(8)]);
var inst_19953__$1 = (state_19967[(2)]);
var inst_19954 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19953__$1);
var state_19967__$1 = (function (){var statearr_19976 = state_19967;
(statearr_19976[(8)] = inst_19953__$1);

return statearr_19976;
})();
if(cljs.core.truth_(inst_19954)){
var statearr_19977_20003 = state_19967__$1;
(statearr_19977_20003[(1)] = (13));

} else {
var statearr_19978_20004 = state_19967__$1;
(statearr_19978_20004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (2))){
var inst_19930 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19931 = (0);
var state_19967__$1 = (function (){var statearr_19979 = state_19967;
(statearr_19979[(9)] = inst_19930);

(statearr_19979[(7)] = inst_19931);

return statearr_19979;
})();
var statearr_19980_20005 = state_19967__$1;
(statearr_19980_20005[(2)] = null);

(statearr_19980_20005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (11))){
var inst_19931 = (state_19967[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19967,(10),Object,null,(9));
var inst_19940 = chs__$1.call(null,inst_19931);
var inst_19941 = done.call(null,inst_19931);
var inst_19942 = cljs.core.async.take_BANG_.call(null,inst_19940,inst_19941);
var state_19967__$1 = state_19967;
var statearr_19981_20006 = state_19967__$1;
(statearr_19981_20006[(2)] = inst_19942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (9))){
var inst_19931 = (state_19967[(7)]);
var inst_19944 = (state_19967[(2)]);
var inst_19945 = (inst_19931 + (1));
var inst_19931__$1 = inst_19945;
var state_19967__$1 = (function (){var statearr_19982 = state_19967;
(statearr_19982[(7)] = inst_19931__$1);

(statearr_19982[(10)] = inst_19944);

return statearr_19982;
})();
var statearr_19983_20007 = state_19967__$1;
(statearr_19983_20007[(2)] = null);

(statearr_19983_20007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (5))){
var inst_19951 = (state_19967[(2)]);
var state_19967__$1 = (function (){var statearr_19984 = state_19967;
(statearr_19984[(11)] = inst_19951);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19967__$1,(12),dchan);
} else {
if((state_val_19968 === (14))){
var inst_19953 = (state_19967[(8)]);
var inst_19958 = cljs.core.apply.call(null,f,inst_19953);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19967__$1,(16),out,inst_19958);
} else {
if((state_val_19968 === (16))){
var inst_19960 = (state_19967[(2)]);
var state_19967__$1 = (function (){var statearr_19985 = state_19967;
(statearr_19985[(12)] = inst_19960);

return statearr_19985;
})();
var statearr_19986_20008 = state_19967__$1;
(statearr_19986_20008[(2)] = null);

(statearr_19986_20008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (10))){
var inst_19935 = (state_19967[(2)]);
var inst_19936 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19967__$1 = (function (){var statearr_19987 = state_19967;
(statearr_19987[(13)] = inst_19935);

return statearr_19987;
})();
var statearr_19988_20009 = state_19967__$1;
(statearr_19988_20009[(2)] = inst_19936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (8))){
var inst_19949 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19989_20010 = state_19967__$1;
(statearr_19989_20010[(2)] = inst_19949);

(statearr_19989_20010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16635__auto__,c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_19990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19990[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_19990[(1)] = (1));

return statearr_19990;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_19967){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_19967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e19991){if((e19991 instanceof Object)){
var ex__16639__auto__ = e19991;
var statearr_19992_20011 = state_19967;
(statearr_19992_20011[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20012 = state_19967;
state_19967 = G__20012;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_19967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_19967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16796__auto__ = (function (){var statearr_19993 = f__16795__auto__.call(null);
(statearr_19993[(6)] = c__16794__auto___19995);

return statearr_19993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___19995,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20015 = arguments.length;
switch (G__20015) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20069,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20069,out){
return (function (state_20047){
var state_val_20048 = (state_20047[(1)]);
if((state_val_20048 === (7))){
var inst_20026 = (state_20047[(7)]);
var inst_20027 = (state_20047[(8)]);
var inst_20026__$1 = (state_20047[(2)]);
var inst_20027__$1 = cljs.core.nth.call(null,inst_20026__$1,(0),null);
var inst_20028 = cljs.core.nth.call(null,inst_20026__$1,(1),null);
var inst_20029 = (inst_20027__$1 == null);
var state_20047__$1 = (function (){var statearr_20049 = state_20047;
(statearr_20049[(9)] = inst_20028);

(statearr_20049[(7)] = inst_20026__$1);

(statearr_20049[(8)] = inst_20027__$1);

return statearr_20049;
})();
if(cljs.core.truth_(inst_20029)){
var statearr_20050_20070 = state_20047__$1;
(statearr_20050_20070[(1)] = (8));

} else {
var statearr_20051_20071 = state_20047__$1;
(statearr_20051_20071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (1))){
var inst_20016 = cljs.core.vec.call(null,chs);
var inst_20017 = inst_20016;
var state_20047__$1 = (function (){var statearr_20052 = state_20047;
(statearr_20052[(10)] = inst_20017);

return statearr_20052;
})();
var statearr_20053_20072 = state_20047__$1;
(statearr_20053_20072[(2)] = null);

(statearr_20053_20072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (4))){
var inst_20017 = (state_20047[(10)]);
var state_20047__$1 = state_20047;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20047__$1,(7),inst_20017);
} else {
if((state_val_20048 === (6))){
var inst_20043 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
var statearr_20054_20073 = state_20047__$1;
(statearr_20054_20073[(2)] = inst_20043);

(statearr_20054_20073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (3))){
var inst_20045 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20047__$1,inst_20045);
} else {
if((state_val_20048 === (2))){
var inst_20017 = (state_20047[(10)]);
var inst_20019 = cljs.core.count.call(null,inst_20017);
var inst_20020 = (inst_20019 > (0));
var state_20047__$1 = state_20047;
if(cljs.core.truth_(inst_20020)){
var statearr_20056_20074 = state_20047__$1;
(statearr_20056_20074[(1)] = (4));

} else {
var statearr_20057_20075 = state_20047__$1;
(statearr_20057_20075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (11))){
var inst_20017 = (state_20047[(10)]);
var inst_20036 = (state_20047[(2)]);
var tmp20055 = inst_20017;
var inst_20017__$1 = tmp20055;
var state_20047__$1 = (function (){var statearr_20058 = state_20047;
(statearr_20058[(10)] = inst_20017__$1);

(statearr_20058[(11)] = inst_20036);

return statearr_20058;
})();
var statearr_20059_20076 = state_20047__$1;
(statearr_20059_20076[(2)] = null);

(statearr_20059_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (9))){
var inst_20027 = (state_20047[(8)]);
var state_20047__$1 = state_20047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20047__$1,(11),out,inst_20027);
} else {
if((state_val_20048 === (5))){
var inst_20041 = cljs.core.async.close_BANG_.call(null,out);
var state_20047__$1 = state_20047;
var statearr_20060_20077 = state_20047__$1;
(statearr_20060_20077[(2)] = inst_20041);

(statearr_20060_20077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (10))){
var inst_20039 = (state_20047[(2)]);
var state_20047__$1 = state_20047;
var statearr_20061_20078 = state_20047__$1;
(statearr_20061_20078[(2)] = inst_20039);

(statearr_20061_20078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20048 === (8))){
var inst_20017 = (state_20047[(10)]);
var inst_20028 = (state_20047[(9)]);
var inst_20026 = (state_20047[(7)]);
var inst_20027 = (state_20047[(8)]);
var inst_20031 = (function (){var cs = inst_20017;
var vec__20022 = inst_20026;
var v = inst_20027;
var c = inst_20028;
return ((function (cs,vec__20022,v,c,inst_20017,inst_20028,inst_20026,inst_20027,state_val_20048,c__16794__auto___20069,out){
return (function (p1__20013_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20013_SHARP_);
});
;})(cs,vec__20022,v,c,inst_20017,inst_20028,inst_20026,inst_20027,state_val_20048,c__16794__auto___20069,out))
})();
var inst_20032 = cljs.core.filterv.call(null,inst_20031,inst_20017);
var inst_20017__$1 = inst_20032;
var state_20047__$1 = (function (){var statearr_20062 = state_20047;
(statearr_20062[(10)] = inst_20017__$1);

return statearr_20062;
})();
var statearr_20063_20079 = state_20047__$1;
(statearr_20063_20079[(2)] = null);

(statearr_20063_20079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20069,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20069,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20064[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20064[(1)] = (1));

return statearr_20064;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20047){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20065){if((e20065 instanceof Object)){
var ex__16639__auto__ = e20065;
var statearr_20066_20080 = state_20047;
(statearr_20066_20080[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20081 = state_20047;
state_20047 = G__20081;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20069,out))
})();
var state__16796__auto__ = (function (){var statearr_20067 = f__16795__auto__.call(null);
(statearr_20067[(6)] = c__16794__auto___20069);

return statearr_20067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20069,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20083 = arguments.length;
switch (G__20083) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20128,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20128,out){
return (function (state_20107){
var state_val_20108 = (state_20107[(1)]);
if((state_val_20108 === (7))){
var inst_20089 = (state_20107[(7)]);
var inst_20089__$1 = (state_20107[(2)]);
var inst_20090 = (inst_20089__$1 == null);
var inst_20091 = cljs.core.not.call(null,inst_20090);
var state_20107__$1 = (function (){var statearr_20109 = state_20107;
(statearr_20109[(7)] = inst_20089__$1);

return statearr_20109;
})();
if(inst_20091){
var statearr_20110_20129 = state_20107__$1;
(statearr_20110_20129[(1)] = (8));

} else {
var statearr_20111_20130 = state_20107__$1;
(statearr_20111_20130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (1))){
var inst_20084 = (0);
var state_20107__$1 = (function (){var statearr_20112 = state_20107;
(statearr_20112[(8)] = inst_20084);

return statearr_20112;
})();
var statearr_20113_20131 = state_20107__$1;
(statearr_20113_20131[(2)] = null);

(statearr_20113_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (4))){
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20107__$1,(7),ch);
} else {
if((state_val_20108 === (6))){
var inst_20102 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20114_20132 = state_20107__$1;
(statearr_20114_20132[(2)] = inst_20102);

(statearr_20114_20132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (3))){
var inst_20104 = (state_20107[(2)]);
var inst_20105 = cljs.core.async.close_BANG_.call(null,out);
var state_20107__$1 = (function (){var statearr_20115 = state_20107;
(statearr_20115[(9)] = inst_20104);

return statearr_20115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20107__$1,inst_20105);
} else {
if((state_val_20108 === (2))){
var inst_20084 = (state_20107[(8)]);
var inst_20086 = (inst_20084 < n);
var state_20107__$1 = state_20107;
if(cljs.core.truth_(inst_20086)){
var statearr_20116_20133 = state_20107__$1;
(statearr_20116_20133[(1)] = (4));

} else {
var statearr_20117_20134 = state_20107__$1;
(statearr_20117_20134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (11))){
var inst_20084 = (state_20107[(8)]);
var inst_20094 = (state_20107[(2)]);
var inst_20095 = (inst_20084 + (1));
var inst_20084__$1 = inst_20095;
var state_20107__$1 = (function (){var statearr_20118 = state_20107;
(statearr_20118[(8)] = inst_20084__$1);

(statearr_20118[(10)] = inst_20094);

return statearr_20118;
})();
var statearr_20119_20135 = state_20107__$1;
(statearr_20119_20135[(2)] = null);

(statearr_20119_20135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (9))){
var state_20107__$1 = state_20107;
var statearr_20120_20136 = state_20107__$1;
(statearr_20120_20136[(2)] = null);

(statearr_20120_20136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (5))){
var state_20107__$1 = state_20107;
var statearr_20121_20137 = state_20107__$1;
(statearr_20121_20137[(2)] = null);

(statearr_20121_20137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (10))){
var inst_20099 = (state_20107[(2)]);
var state_20107__$1 = state_20107;
var statearr_20122_20138 = state_20107__$1;
(statearr_20122_20138[(2)] = inst_20099);

(statearr_20122_20138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20108 === (8))){
var inst_20089 = (state_20107[(7)]);
var state_20107__$1 = state_20107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20107__$1,(11),out,inst_20089);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20128,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20128,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20123[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20123[(1)] = (1));

return statearr_20123;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20107){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20124){if((e20124 instanceof Object)){
var ex__16639__auto__ = e20124;
var statearr_20125_20139 = state_20107;
(statearr_20125_20139[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20140 = state_20107;
state_20107 = G__20140;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20128,out))
})();
var state__16796__auto__ = (function (){var statearr_20126 = f__16795__auto__.call(null);
(statearr_20126[(6)] = c__16794__auto___20128);

return statearr_20126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20128,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20142 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20142 = (function (f,ch,meta20143){
this.f = f;
this.ch = ch;
this.meta20143 = meta20143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20144,meta20143__$1){
var self__ = this;
var _20144__$1 = this;
return (new cljs.core.async.t_cljs$core$async20142(self__.f,self__.ch,meta20143__$1));
});

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20144){
var self__ = this;
var _20144__$1 = this;
return self__.meta20143;
});

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20145 = (function (f,ch,meta20143,_,fn1,meta20146){
this.f = f;
this.ch = ch;
this.meta20143 = meta20143;
this._ = _;
this.fn1 = fn1;
this.meta20146 = meta20146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20147,meta20146__$1){
var self__ = this;
var _20147__$1 = this;
return (new cljs.core.async.t_cljs$core$async20145(self__.f,self__.ch,self__.meta20143,self__._,self__.fn1,meta20146__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20147){
var self__ = this;
var _20147__$1 = this;
return self__.meta20146;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20141_SHARP_){
return f1.call(null,(((p1__20141_SHARP_ == null))?null:self__.f.call(null,p1__20141_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20143","meta20143",-124693821,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20142","cljs.core.async/t_cljs$core$async20142",-813107035,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20146","meta20146",684201107,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20145";

cljs.core.async.t_cljs$core$async20145.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20145");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20145.
 */
cljs.core.async.__GT_t_cljs$core$async20145 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20145(f__$1,ch__$1,meta20143__$1,___$2,fn1__$1,meta20146){
return (new cljs.core.async.t_cljs$core$async20145(f__$1,ch__$1,meta20143__$1,___$2,fn1__$1,meta20146));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20145(self__.f,self__.ch,self__.meta20143,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20143","meta20143",-124693821,null)], null);
});

cljs.core.async.t_cljs$core$async20142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20142";

cljs.core.async.t_cljs$core$async20142.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20142");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20142.
 */
cljs.core.async.__GT_t_cljs$core$async20142 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20142(f__$1,ch__$1,meta20143){
return (new cljs.core.async.t_cljs$core$async20142(f__$1,ch__$1,meta20143));
});

}

return (new cljs.core.async.t_cljs$core$async20142(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20148 = (function (f,ch,meta20149){
this.f = f;
this.ch = ch;
this.meta20149 = meta20149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20150,meta20149__$1){
var self__ = this;
var _20150__$1 = this;
return (new cljs.core.async.t_cljs$core$async20148(self__.f,self__.ch,meta20149__$1));
});

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20150){
var self__ = this;
var _20150__$1 = this;
return self__.meta20149;
});

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20149","meta20149",-1880503251,null)], null);
});

cljs.core.async.t_cljs$core$async20148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20148";

cljs.core.async.t_cljs$core$async20148.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20148.
 */
cljs.core.async.__GT_t_cljs$core$async20148 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20148(f__$1,ch__$1,meta20149){
return (new cljs.core.async.t_cljs$core$async20148(f__$1,ch__$1,meta20149));
});

}

return (new cljs.core.async.t_cljs$core$async20148(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20151 = (function (p,ch,meta20152){
this.p = p;
this.ch = ch;
this.meta20152 = meta20152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20153,meta20152__$1){
var self__ = this;
var _20153__$1 = this;
return (new cljs.core.async.t_cljs$core$async20151(self__.p,self__.ch,meta20152__$1));
});

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20153){
var self__ = this;
var _20153__$1 = this;
return self__.meta20152;
});

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20152","meta20152",-2007033120,null)], null);
});

cljs.core.async.t_cljs$core$async20151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20151";

cljs.core.async.t_cljs$core$async20151.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20151");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20151.
 */
cljs.core.async.__GT_t_cljs$core$async20151 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20151(p__$1,ch__$1,meta20152){
return (new cljs.core.async.t_cljs$core$async20151(p__$1,ch__$1,meta20152));
});

}

return (new cljs.core.async.t_cljs$core$async20151(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20155 = arguments.length;
switch (G__20155) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20195,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20195,out){
return (function (state_20176){
var state_val_20177 = (state_20176[(1)]);
if((state_val_20177 === (7))){
var inst_20172 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
var statearr_20178_20196 = state_20176__$1;
(statearr_20178_20196[(2)] = inst_20172);

(statearr_20178_20196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (1))){
var state_20176__$1 = state_20176;
var statearr_20179_20197 = state_20176__$1;
(statearr_20179_20197[(2)] = null);

(statearr_20179_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (4))){
var inst_20158 = (state_20176[(7)]);
var inst_20158__$1 = (state_20176[(2)]);
var inst_20159 = (inst_20158__$1 == null);
var state_20176__$1 = (function (){var statearr_20180 = state_20176;
(statearr_20180[(7)] = inst_20158__$1);

return statearr_20180;
})();
if(cljs.core.truth_(inst_20159)){
var statearr_20181_20198 = state_20176__$1;
(statearr_20181_20198[(1)] = (5));

} else {
var statearr_20182_20199 = state_20176__$1;
(statearr_20182_20199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (6))){
var inst_20158 = (state_20176[(7)]);
var inst_20163 = p.call(null,inst_20158);
var state_20176__$1 = state_20176;
if(cljs.core.truth_(inst_20163)){
var statearr_20183_20200 = state_20176__$1;
(statearr_20183_20200[(1)] = (8));

} else {
var statearr_20184_20201 = state_20176__$1;
(statearr_20184_20201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (3))){
var inst_20174 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20176__$1,inst_20174);
} else {
if((state_val_20177 === (2))){
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20176__$1,(4),ch);
} else {
if((state_val_20177 === (11))){
var inst_20166 = (state_20176[(2)]);
var state_20176__$1 = state_20176;
var statearr_20185_20202 = state_20176__$1;
(statearr_20185_20202[(2)] = inst_20166);

(statearr_20185_20202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (9))){
var state_20176__$1 = state_20176;
var statearr_20186_20203 = state_20176__$1;
(statearr_20186_20203[(2)] = null);

(statearr_20186_20203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (5))){
var inst_20161 = cljs.core.async.close_BANG_.call(null,out);
var state_20176__$1 = state_20176;
var statearr_20187_20204 = state_20176__$1;
(statearr_20187_20204[(2)] = inst_20161);

(statearr_20187_20204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (10))){
var inst_20169 = (state_20176[(2)]);
var state_20176__$1 = (function (){var statearr_20188 = state_20176;
(statearr_20188[(8)] = inst_20169);

return statearr_20188;
})();
var statearr_20189_20205 = state_20176__$1;
(statearr_20189_20205[(2)] = null);

(statearr_20189_20205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20177 === (8))){
var inst_20158 = (state_20176[(7)]);
var state_20176__$1 = state_20176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20176__$1,(11),out,inst_20158);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20195,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20195,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20190 = [null,null,null,null,null,null,null,null,null];
(statearr_20190[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20190[(1)] = (1));

return statearr_20190;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20176){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20191){if((e20191 instanceof Object)){
var ex__16639__auto__ = e20191;
var statearr_20192_20206 = state_20176;
(statearr_20192_20206[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20207 = state_20176;
state_20176 = G__20207;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20195,out))
})();
var state__16796__auto__ = (function (){var statearr_20193 = f__16795__auto__.call(null);
(statearr_20193[(6)] = c__16794__auto___20195);

return statearr_20193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20195,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20209 = arguments.length;
switch (G__20209) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16794__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto__){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto__){
return (function (state_20272){
var state_val_20273 = (state_20272[(1)]);
if((state_val_20273 === (7))){
var inst_20268 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20274_20312 = state_20272__$1;
(statearr_20274_20312[(2)] = inst_20268);

(statearr_20274_20312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (20))){
var inst_20238 = (state_20272[(7)]);
var inst_20249 = (state_20272[(2)]);
var inst_20250 = cljs.core.next.call(null,inst_20238);
var inst_20224 = inst_20250;
var inst_20225 = null;
var inst_20226 = (0);
var inst_20227 = (0);
var state_20272__$1 = (function (){var statearr_20275 = state_20272;
(statearr_20275[(8)] = inst_20225);

(statearr_20275[(9)] = inst_20224);

(statearr_20275[(10)] = inst_20227);

(statearr_20275[(11)] = inst_20249);

(statearr_20275[(12)] = inst_20226);

return statearr_20275;
})();
var statearr_20276_20313 = state_20272__$1;
(statearr_20276_20313[(2)] = null);

(statearr_20276_20313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (1))){
var state_20272__$1 = state_20272;
var statearr_20277_20314 = state_20272__$1;
(statearr_20277_20314[(2)] = null);

(statearr_20277_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (4))){
var inst_20213 = (state_20272[(13)]);
var inst_20213__$1 = (state_20272[(2)]);
var inst_20214 = (inst_20213__$1 == null);
var state_20272__$1 = (function (){var statearr_20278 = state_20272;
(statearr_20278[(13)] = inst_20213__$1);

return statearr_20278;
})();
if(cljs.core.truth_(inst_20214)){
var statearr_20279_20315 = state_20272__$1;
(statearr_20279_20315[(1)] = (5));

} else {
var statearr_20280_20316 = state_20272__$1;
(statearr_20280_20316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (15))){
var state_20272__$1 = state_20272;
var statearr_20284_20317 = state_20272__$1;
(statearr_20284_20317[(2)] = null);

(statearr_20284_20317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (21))){
var state_20272__$1 = state_20272;
var statearr_20285_20318 = state_20272__$1;
(statearr_20285_20318[(2)] = null);

(statearr_20285_20318[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (13))){
var inst_20225 = (state_20272[(8)]);
var inst_20224 = (state_20272[(9)]);
var inst_20227 = (state_20272[(10)]);
var inst_20226 = (state_20272[(12)]);
var inst_20234 = (state_20272[(2)]);
var inst_20235 = (inst_20227 + (1));
var tmp20281 = inst_20225;
var tmp20282 = inst_20224;
var tmp20283 = inst_20226;
var inst_20224__$1 = tmp20282;
var inst_20225__$1 = tmp20281;
var inst_20226__$1 = tmp20283;
var inst_20227__$1 = inst_20235;
var state_20272__$1 = (function (){var statearr_20286 = state_20272;
(statearr_20286[(8)] = inst_20225__$1);

(statearr_20286[(9)] = inst_20224__$1);

(statearr_20286[(10)] = inst_20227__$1);

(statearr_20286[(14)] = inst_20234);

(statearr_20286[(12)] = inst_20226__$1);

return statearr_20286;
})();
var statearr_20287_20319 = state_20272__$1;
(statearr_20287_20319[(2)] = null);

(statearr_20287_20319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (22))){
var state_20272__$1 = state_20272;
var statearr_20288_20320 = state_20272__$1;
(statearr_20288_20320[(2)] = null);

(statearr_20288_20320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (6))){
var inst_20213 = (state_20272[(13)]);
var inst_20222 = f.call(null,inst_20213);
var inst_20223 = cljs.core.seq.call(null,inst_20222);
var inst_20224 = inst_20223;
var inst_20225 = null;
var inst_20226 = (0);
var inst_20227 = (0);
var state_20272__$1 = (function (){var statearr_20289 = state_20272;
(statearr_20289[(8)] = inst_20225);

(statearr_20289[(9)] = inst_20224);

(statearr_20289[(10)] = inst_20227);

(statearr_20289[(12)] = inst_20226);

return statearr_20289;
})();
var statearr_20290_20321 = state_20272__$1;
(statearr_20290_20321[(2)] = null);

(statearr_20290_20321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (17))){
var inst_20238 = (state_20272[(7)]);
var inst_20242 = cljs.core.chunk_first.call(null,inst_20238);
var inst_20243 = cljs.core.chunk_rest.call(null,inst_20238);
var inst_20244 = cljs.core.count.call(null,inst_20242);
var inst_20224 = inst_20243;
var inst_20225 = inst_20242;
var inst_20226 = inst_20244;
var inst_20227 = (0);
var state_20272__$1 = (function (){var statearr_20291 = state_20272;
(statearr_20291[(8)] = inst_20225);

(statearr_20291[(9)] = inst_20224);

(statearr_20291[(10)] = inst_20227);

(statearr_20291[(12)] = inst_20226);

return statearr_20291;
})();
var statearr_20292_20322 = state_20272__$1;
(statearr_20292_20322[(2)] = null);

(statearr_20292_20322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (3))){
var inst_20270 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20272__$1,inst_20270);
} else {
if((state_val_20273 === (12))){
var inst_20258 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20293_20323 = state_20272__$1;
(statearr_20293_20323[(2)] = inst_20258);

(statearr_20293_20323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (2))){
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20272__$1,(4),in$);
} else {
if((state_val_20273 === (23))){
var inst_20266 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20294_20324 = state_20272__$1;
(statearr_20294_20324[(2)] = inst_20266);

(statearr_20294_20324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (19))){
var inst_20253 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20295_20325 = state_20272__$1;
(statearr_20295_20325[(2)] = inst_20253);

(statearr_20295_20325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (11))){
var inst_20224 = (state_20272[(9)]);
var inst_20238 = (state_20272[(7)]);
var inst_20238__$1 = cljs.core.seq.call(null,inst_20224);
var state_20272__$1 = (function (){var statearr_20296 = state_20272;
(statearr_20296[(7)] = inst_20238__$1);

return statearr_20296;
})();
if(inst_20238__$1){
var statearr_20297_20326 = state_20272__$1;
(statearr_20297_20326[(1)] = (14));

} else {
var statearr_20298_20327 = state_20272__$1;
(statearr_20298_20327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (9))){
var inst_20260 = (state_20272[(2)]);
var inst_20261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20272__$1 = (function (){var statearr_20299 = state_20272;
(statearr_20299[(15)] = inst_20260);

return statearr_20299;
})();
if(cljs.core.truth_(inst_20261)){
var statearr_20300_20328 = state_20272__$1;
(statearr_20300_20328[(1)] = (21));

} else {
var statearr_20301_20329 = state_20272__$1;
(statearr_20301_20329[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (5))){
var inst_20216 = cljs.core.async.close_BANG_.call(null,out);
var state_20272__$1 = state_20272;
var statearr_20302_20330 = state_20272__$1;
(statearr_20302_20330[(2)] = inst_20216);

(statearr_20302_20330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (14))){
var inst_20238 = (state_20272[(7)]);
var inst_20240 = cljs.core.chunked_seq_QMARK_.call(null,inst_20238);
var state_20272__$1 = state_20272;
if(inst_20240){
var statearr_20303_20331 = state_20272__$1;
(statearr_20303_20331[(1)] = (17));

} else {
var statearr_20304_20332 = state_20272__$1;
(statearr_20304_20332[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (16))){
var inst_20256 = (state_20272[(2)]);
var state_20272__$1 = state_20272;
var statearr_20305_20333 = state_20272__$1;
(statearr_20305_20333[(2)] = inst_20256);

(statearr_20305_20333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20273 === (10))){
var inst_20225 = (state_20272[(8)]);
var inst_20227 = (state_20272[(10)]);
var inst_20232 = cljs.core._nth.call(null,inst_20225,inst_20227);
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20272__$1,(13),out,inst_20232);
} else {
if((state_val_20273 === (18))){
var inst_20238 = (state_20272[(7)]);
var inst_20247 = cljs.core.first.call(null,inst_20238);
var state_20272__$1 = state_20272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20272__$1,(20),out,inst_20247);
} else {
if((state_val_20273 === (8))){
var inst_20227 = (state_20272[(10)]);
var inst_20226 = (state_20272[(12)]);
var inst_20229 = (inst_20227 < inst_20226);
var inst_20230 = inst_20229;
var state_20272__$1 = state_20272;
if(cljs.core.truth_(inst_20230)){
var statearr_20306_20334 = state_20272__$1;
(statearr_20306_20334[(1)] = (10));

} else {
var statearr_20307_20335 = state_20272__$1;
(statearr_20307_20335[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto__))
;
return ((function (switch__16635__auto__,c__16794__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____0 = (function (){
var statearr_20308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20308[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__);

(statearr_20308[(1)] = (1));

return statearr_20308;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____1 = (function (state_20272){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20309){if((e20309 instanceof Object)){
var ex__16639__auto__ = e20309;
var statearr_20310_20336 = state_20272;
(statearr_20310_20336[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20337 = state_20272;
state_20272 = G__20337;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__ = function(state_20272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____1.call(this,state_20272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16636__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto__))
})();
var state__16796__auto__ = (function (){var statearr_20311 = f__16795__auto__.call(null);
(statearr_20311[(6)] = c__16794__auto__);

return statearr_20311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto__))
);

return c__16794__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20339 = arguments.length;
switch (G__20339) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20342 = arguments.length;
switch (G__20342) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20345 = arguments.length;
switch (G__20345) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20392,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20392,out){
return (function (state_20369){
var state_val_20370 = (state_20369[(1)]);
if((state_val_20370 === (7))){
var inst_20364 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20371_20393 = state_20369__$1;
(statearr_20371_20393[(2)] = inst_20364);

(statearr_20371_20393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (1))){
var inst_20346 = null;
var state_20369__$1 = (function (){var statearr_20372 = state_20369;
(statearr_20372[(7)] = inst_20346);

return statearr_20372;
})();
var statearr_20373_20394 = state_20369__$1;
(statearr_20373_20394[(2)] = null);

(statearr_20373_20394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (4))){
var inst_20349 = (state_20369[(8)]);
var inst_20349__$1 = (state_20369[(2)]);
var inst_20350 = (inst_20349__$1 == null);
var inst_20351 = cljs.core.not.call(null,inst_20350);
var state_20369__$1 = (function (){var statearr_20374 = state_20369;
(statearr_20374[(8)] = inst_20349__$1);

return statearr_20374;
})();
if(inst_20351){
var statearr_20375_20395 = state_20369__$1;
(statearr_20375_20395[(1)] = (5));

} else {
var statearr_20376_20396 = state_20369__$1;
(statearr_20376_20396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (6))){
var state_20369__$1 = state_20369;
var statearr_20377_20397 = state_20369__$1;
(statearr_20377_20397[(2)] = null);

(statearr_20377_20397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (3))){
var inst_20366 = (state_20369[(2)]);
var inst_20367 = cljs.core.async.close_BANG_.call(null,out);
var state_20369__$1 = (function (){var statearr_20378 = state_20369;
(statearr_20378[(9)] = inst_20366);

return statearr_20378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20369__$1,inst_20367);
} else {
if((state_val_20370 === (2))){
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20369__$1,(4),ch);
} else {
if((state_val_20370 === (11))){
var inst_20349 = (state_20369[(8)]);
var inst_20358 = (state_20369[(2)]);
var inst_20346 = inst_20349;
var state_20369__$1 = (function (){var statearr_20379 = state_20369;
(statearr_20379[(10)] = inst_20358);

(statearr_20379[(7)] = inst_20346);

return statearr_20379;
})();
var statearr_20380_20398 = state_20369__$1;
(statearr_20380_20398[(2)] = null);

(statearr_20380_20398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (9))){
var inst_20349 = (state_20369[(8)]);
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20369__$1,(11),out,inst_20349);
} else {
if((state_val_20370 === (5))){
var inst_20349 = (state_20369[(8)]);
var inst_20346 = (state_20369[(7)]);
var inst_20353 = cljs.core._EQ_.call(null,inst_20349,inst_20346);
var state_20369__$1 = state_20369;
if(inst_20353){
var statearr_20382_20399 = state_20369__$1;
(statearr_20382_20399[(1)] = (8));

} else {
var statearr_20383_20400 = state_20369__$1;
(statearr_20383_20400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (10))){
var inst_20361 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20384_20401 = state_20369__$1;
(statearr_20384_20401[(2)] = inst_20361);

(statearr_20384_20401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (8))){
var inst_20346 = (state_20369[(7)]);
var tmp20381 = inst_20346;
var inst_20346__$1 = tmp20381;
var state_20369__$1 = (function (){var statearr_20385 = state_20369;
(statearr_20385[(7)] = inst_20346__$1);

return statearr_20385;
})();
var statearr_20386_20402 = state_20369__$1;
(statearr_20386_20402[(2)] = null);

(statearr_20386_20402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20392,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20392,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20387[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20387[(1)] = (1));

return statearr_20387;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20369){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20388){if((e20388 instanceof Object)){
var ex__16639__auto__ = e20388;
var statearr_20389_20403 = state_20369;
(statearr_20389_20403[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20404 = state_20369;
state_20369 = G__20404;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20392,out))
})();
var state__16796__auto__ = (function (){var statearr_20390 = f__16795__auto__.call(null);
(statearr_20390[(6)] = c__16794__auto___20392);

return statearr_20390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20392,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20406 = arguments.length;
switch (G__20406) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20472,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20472,out){
return (function (state_20444){
var state_val_20445 = (state_20444[(1)]);
if((state_val_20445 === (7))){
var inst_20440 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20446_20473 = state_20444__$1;
(statearr_20446_20473[(2)] = inst_20440);

(statearr_20446_20473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (1))){
var inst_20407 = (new Array(n));
var inst_20408 = inst_20407;
var inst_20409 = (0);
var state_20444__$1 = (function (){var statearr_20447 = state_20444;
(statearr_20447[(7)] = inst_20408);

(statearr_20447[(8)] = inst_20409);

return statearr_20447;
})();
var statearr_20448_20474 = state_20444__$1;
(statearr_20448_20474[(2)] = null);

(statearr_20448_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (4))){
var inst_20412 = (state_20444[(9)]);
var inst_20412__$1 = (state_20444[(2)]);
var inst_20413 = (inst_20412__$1 == null);
var inst_20414 = cljs.core.not.call(null,inst_20413);
var state_20444__$1 = (function (){var statearr_20449 = state_20444;
(statearr_20449[(9)] = inst_20412__$1);

return statearr_20449;
})();
if(inst_20414){
var statearr_20450_20475 = state_20444__$1;
(statearr_20450_20475[(1)] = (5));

} else {
var statearr_20451_20476 = state_20444__$1;
(statearr_20451_20476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (15))){
var inst_20434 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20452_20477 = state_20444__$1;
(statearr_20452_20477[(2)] = inst_20434);

(statearr_20452_20477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (13))){
var state_20444__$1 = state_20444;
var statearr_20453_20478 = state_20444__$1;
(statearr_20453_20478[(2)] = null);

(statearr_20453_20478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (6))){
var inst_20409 = (state_20444[(8)]);
var inst_20430 = (inst_20409 > (0));
var state_20444__$1 = state_20444;
if(cljs.core.truth_(inst_20430)){
var statearr_20454_20479 = state_20444__$1;
(statearr_20454_20479[(1)] = (12));

} else {
var statearr_20455_20480 = state_20444__$1;
(statearr_20455_20480[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (3))){
var inst_20442 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20444__$1,inst_20442);
} else {
if((state_val_20445 === (12))){
var inst_20408 = (state_20444[(7)]);
var inst_20432 = cljs.core.vec.call(null,inst_20408);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20444__$1,(15),out,inst_20432);
} else {
if((state_val_20445 === (2))){
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20444__$1,(4),ch);
} else {
if((state_val_20445 === (11))){
var inst_20424 = (state_20444[(2)]);
var inst_20425 = (new Array(n));
var inst_20408 = inst_20425;
var inst_20409 = (0);
var state_20444__$1 = (function (){var statearr_20456 = state_20444;
(statearr_20456[(7)] = inst_20408);

(statearr_20456[(8)] = inst_20409);

(statearr_20456[(10)] = inst_20424);

return statearr_20456;
})();
var statearr_20457_20481 = state_20444__$1;
(statearr_20457_20481[(2)] = null);

(statearr_20457_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (9))){
var inst_20408 = (state_20444[(7)]);
var inst_20422 = cljs.core.vec.call(null,inst_20408);
var state_20444__$1 = state_20444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20444__$1,(11),out,inst_20422);
} else {
if((state_val_20445 === (5))){
var inst_20408 = (state_20444[(7)]);
var inst_20409 = (state_20444[(8)]);
var inst_20417 = (state_20444[(11)]);
var inst_20412 = (state_20444[(9)]);
var inst_20416 = (inst_20408[inst_20409] = inst_20412);
var inst_20417__$1 = (inst_20409 + (1));
var inst_20418 = (inst_20417__$1 < n);
var state_20444__$1 = (function (){var statearr_20458 = state_20444;
(statearr_20458[(11)] = inst_20417__$1);

(statearr_20458[(12)] = inst_20416);

return statearr_20458;
})();
if(cljs.core.truth_(inst_20418)){
var statearr_20459_20482 = state_20444__$1;
(statearr_20459_20482[(1)] = (8));

} else {
var statearr_20460_20483 = state_20444__$1;
(statearr_20460_20483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (14))){
var inst_20437 = (state_20444[(2)]);
var inst_20438 = cljs.core.async.close_BANG_.call(null,out);
var state_20444__$1 = (function (){var statearr_20462 = state_20444;
(statearr_20462[(13)] = inst_20437);

return statearr_20462;
})();
var statearr_20463_20484 = state_20444__$1;
(statearr_20463_20484[(2)] = inst_20438);

(statearr_20463_20484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (10))){
var inst_20428 = (state_20444[(2)]);
var state_20444__$1 = state_20444;
var statearr_20464_20485 = state_20444__$1;
(statearr_20464_20485[(2)] = inst_20428);

(statearr_20464_20485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20445 === (8))){
var inst_20408 = (state_20444[(7)]);
var inst_20417 = (state_20444[(11)]);
var tmp20461 = inst_20408;
var inst_20408__$1 = tmp20461;
var inst_20409 = inst_20417;
var state_20444__$1 = (function (){var statearr_20465 = state_20444;
(statearr_20465[(7)] = inst_20408__$1);

(statearr_20465[(8)] = inst_20409);

return statearr_20465;
})();
var statearr_20466_20486 = state_20444__$1;
(statearr_20466_20486[(2)] = null);

(statearr_20466_20486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20472,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20472,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20467[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20467[(1)] = (1));

return statearr_20467;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20444){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20468){if((e20468 instanceof Object)){
var ex__16639__auto__ = e20468;
var statearr_20469_20487 = state_20444;
(statearr_20469_20487[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20488 = state_20444;
state_20444 = G__20488;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20472,out))
})();
var state__16796__auto__ = (function (){var statearr_20470 = f__16795__auto__.call(null);
(statearr_20470[(6)] = c__16794__auto___20472);

return statearr_20470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20472,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20490 = arguments.length;
switch (G__20490) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16794__auto___20560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16794__auto___20560,out){
return (function (){
var f__16795__auto__ = (function (){var switch__16635__auto__ = ((function (c__16794__auto___20560,out){
return (function (state_20532){
var state_val_20533 = (state_20532[(1)]);
if((state_val_20533 === (7))){
var inst_20528 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20534_20561 = state_20532__$1;
(statearr_20534_20561[(2)] = inst_20528);

(statearr_20534_20561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (1))){
var inst_20491 = [];
var inst_20492 = inst_20491;
var inst_20493 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20532__$1 = (function (){var statearr_20535 = state_20532;
(statearr_20535[(7)] = inst_20492);

(statearr_20535[(8)] = inst_20493);

return statearr_20535;
})();
var statearr_20536_20562 = state_20532__$1;
(statearr_20536_20562[(2)] = null);

(statearr_20536_20562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (4))){
var inst_20496 = (state_20532[(9)]);
var inst_20496__$1 = (state_20532[(2)]);
var inst_20497 = (inst_20496__$1 == null);
var inst_20498 = cljs.core.not.call(null,inst_20497);
var state_20532__$1 = (function (){var statearr_20537 = state_20532;
(statearr_20537[(9)] = inst_20496__$1);

return statearr_20537;
})();
if(inst_20498){
var statearr_20538_20563 = state_20532__$1;
(statearr_20538_20563[(1)] = (5));

} else {
var statearr_20539_20564 = state_20532__$1;
(statearr_20539_20564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (15))){
var inst_20522 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20540_20565 = state_20532__$1;
(statearr_20540_20565[(2)] = inst_20522);

(statearr_20540_20565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (13))){
var state_20532__$1 = state_20532;
var statearr_20541_20566 = state_20532__$1;
(statearr_20541_20566[(2)] = null);

(statearr_20541_20566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (6))){
var inst_20492 = (state_20532[(7)]);
var inst_20517 = inst_20492.length;
var inst_20518 = (inst_20517 > (0));
var state_20532__$1 = state_20532;
if(cljs.core.truth_(inst_20518)){
var statearr_20542_20567 = state_20532__$1;
(statearr_20542_20567[(1)] = (12));

} else {
var statearr_20543_20568 = state_20532__$1;
(statearr_20543_20568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (3))){
var inst_20530 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20532__$1,inst_20530);
} else {
if((state_val_20533 === (12))){
var inst_20492 = (state_20532[(7)]);
var inst_20520 = cljs.core.vec.call(null,inst_20492);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20532__$1,(15),out,inst_20520);
} else {
if((state_val_20533 === (2))){
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20532__$1,(4),ch);
} else {
if((state_val_20533 === (11))){
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20510 = (state_20532[(2)]);
var inst_20511 = [];
var inst_20512 = inst_20511.push(inst_20496);
var inst_20492 = inst_20511;
var inst_20493 = inst_20500;
var state_20532__$1 = (function (){var statearr_20544 = state_20532;
(statearr_20544[(7)] = inst_20492);

(statearr_20544[(11)] = inst_20510);

(statearr_20544[(12)] = inst_20512);

(statearr_20544[(8)] = inst_20493);

return statearr_20544;
})();
var statearr_20545_20569 = state_20532__$1;
(statearr_20545_20569[(2)] = null);

(statearr_20545_20569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (9))){
var inst_20492 = (state_20532[(7)]);
var inst_20508 = cljs.core.vec.call(null,inst_20492);
var state_20532__$1 = state_20532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20532__$1,(11),out,inst_20508);
} else {
if((state_val_20533 === (5))){
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20493 = (state_20532[(8)]);
var inst_20500__$1 = f.call(null,inst_20496);
var inst_20501 = cljs.core._EQ_.call(null,inst_20500__$1,inst_20493);
var inst_20502 = cljs.core.keyword_identical_QMARK_.call(null,inst_20493,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20503 = ((inst_20501) || (inst_20502));
var state_20532__$1 = (function (){var statearr_20546 = state_20532;
(statearr_20546[(10)] = inst_20500__$1);

return statearr_20546;
})();
if(cljs.core.truth_(inst_20503)){
var statearr_20547_20570 = state_20532__$1;
(statearr_20547_20570[(1)] = (8));

} else {
var statearr_20548_20571 = state_20532__$1;
(statearr_20548_20571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (14))){
var inst_20525 = (state_20532[(2)]);
var inst_20526 = cljs.core.async.close_BANG_.call(null,out);
var state_20532__$1 = (function (){var statearr_20550 = state_20532;
(statearr_20550[(13)] = inst_20525);

return statearr_20550;
})();
var statearr_20551_20572 = state_20532__$1;
(statearr_20551_20572[(2)] = inst_20526);

(statearr_20551_20572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (10))){
var inst_20515 = (state_20532[(2)]);
var state_20532__$1 = state_20532;
var statearr_20552_20573 = state_20532__$1;
(statearr_20552_20573[(2)] = inst_20515);

(statearr_20552_20573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20533 === (8))){
var inst_20492 = (state_20532[(7)]);
var inst_20496 = (state_20532[(9)]);
var inst_20500 = (state_20532[(10)]);
var inst_20505 = inst_20492.push(inst_20496);
var tmp20549 = inst_20492;
var inst_20492__$1 = tmp20549;
var inst_20493 = inst_20500;
var state_20532__$1 = (function (){var statearr_20553 = state_20532;
(statearr_20553[(7)] = inst_20492__$1);

(statearr_20553[(14)] = inst_20505);

(statearr_20553[(8)] = inst_20493);

return statearr_20553;
})();
var statearr_20554_20574 = state_20532__$1;
(statearr_20554_20574[(2)] = null);

(statearr_20554_20574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16794__auto___20560,out))
;
return ((function (switch__16635__auto__,c__16794__auto___20560,out){
return (function() {
var cljs$core$async$state_machine__16636__auto__ = null;
var cljs$core$async$state_machine__16636__auto____0 = (function (){
var statearr_20555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20555[(0)] = cljs$core$async$state_machine__16636__auto__);

(statearr_20555[(1)] = (1));

return statearr_20555;
});
var cljs$core$async$state_machine__16636__auto____1 = (function (state_20532){
while(true){
var ret_value__16637__auto__ = (function (){try{while(true){
var result__16638__auto__ = switch__16635__auto__.call(null,state_20532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16638__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16638__auto__;
}
break;
}
}catch (e20556){if((e20556 instanceof Object)){
var ex__16639__auto__ = e20556;
var statearr_20557_20575 = state_20532;
(statearr_20557_20575[(5)] = ex__16639__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16637__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20576 = state_20532;
state_20532 = G__20576;
continue;
} else {
return ret_value__16637__auto__;
}
break;
}
});
cljs$core$async$state_machine__16636__auto__ = function(state_20532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16636__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16636__auto____1.call(this,state_20532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16636__auto____0;
cljs$core$async$state_machine__16636__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16636__auto____1;
return cljs$core$async$state_machine__16636__auto__;
})()
;})(switch__16635__auto__,c__16794__auto___20560,out))
})();
var state__16796__auto__ = (function (){var statearr_20558 = f__16795__auto__.call(null);
(statearr_20558[(6)] = c__16794__auto___20560);

return statearr_20558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16796__auto__);
});})(c__16794__auto___20560,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
