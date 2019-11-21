// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chronoid.core');
mantra.time._STAR_clock_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
mantra.time.create_clock = (function mantra$time$create_clock(context){
return cljs.core.reset_BANG_(mantra.time._STAR_clock_STAR_,(function (){var G__9955 = chronoid.core.clock.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$context,context], 0));
chronoid.core.start_BANG_(G__9955);

return G__9955;
})());
});
mantra.time._STAR_tempo_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
mantra.time.get_tempo = (function mantra$time$get_tempo(){
return cljs.core.deref(mantra.time._STAR_tempo_STAR_);
});
mantra.time.set_tempo = (function mantra$time$set_tempo(bpm){
if(cljs.core.truth_(bpm)){
return cljs.core.reset_BANG_(mantra.time._STAR_tempo_STAR_,bpm);
} else {
throw (new Error("You must supply a tempo. e.g.: (set-tempo 120)"));
}
});
mantra.time.update_tempo = (function mantra$time$update_tempo(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9958 = arguments.length;
var i__4532__auto___9959 = (0);
while(true){
if((i__4532__auto___9959 < len__4531__auto___9958)){
args__4534__auto__.push((arguments[i__4532__auto___9959]));

var G__9960 = (i__4532__auto___9959 + (1));
i__4532__auto___9959 = G__9960;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mantra.time.update_tempo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mantra.time.update_tempo.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,mantra.time._STAR_tempo_STAR_,f,args);
});

mantra.time.update_tempo.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mantra.time.update_tempo.cljs$lang$applyTo = (function (seq9956){
var G__9957 = cljs.core.first(seq9956);
var seq9956__$1 = cljs.core.next(seq9956);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9957,seq9956__$1);
});

