// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.mario');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
mecca.mario.svg_paths = (function mecca$mario$svg_paths(var_args){
var G__19843 = arguments.length;
switch (G__19843) {
case 4:
return mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$4 = (function (paths,x,y,scale){
return mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,scale);
});

mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$5 = (function (attrs,paths,x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$mario$iter__19844(s__19845){
return (new cljs.core.LazySeq(null,(function (){
var s__19845__$1 = s__19845;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19845__$1);
if(temp__5457__auto__){
var s__19845__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19845__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19845__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19847 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19846 = (0);
while(true){
if((i__19846 < size__4323__auto__)){
var vec__19848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19846);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19848,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19848,(1),null);
cljs.core.chunk_append(b__19847,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__19855 = (i__19846 + (1));
i__19846 = G__19855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19847),mecca$mario$iter__19844(cljs.core.chunk_rest(s__19845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19847),null);
}
} else {
var vec__19851 = cljs.core.first(s__19845__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19851,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19851,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$mario$iter__19844(cljs.core.rest(s__19845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(paths);
})());
});

mecca.mario.svg_paths.cljs$lang$maxFixedArity = 5;

mecca.mario.mario_sm = (function mecca$mario$mario_sm(){
var x = (function (){var G__19856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_x], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19856) : re_frame.core.subscribe.call(null,G__19856));
})();
var y = (function (){var G__19857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_y], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19857) : re_frame.core.subscribe.call(null,G__19857));
})();
var run = (function (){var G__19858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19858) : re_frame.core.subscribe.call(null,G__19858));
})();
var jump = (function (){var G__19859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19859) : re_frame.core.subscribe.call(null,G__19859));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__19860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19860) : re_frame.core.subscribe.call(null,G__19860));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((61),cljs.core.deref(y)))?mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$4(((((8) > cljs.core.deref(jump)))?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#885818","M12 0h2M11 1h1M14 1h1M10 2h1M15 2h1M15 3h1M14 4h1M13 5h1M3 9h1M12 9h2M3 10h1M14 10h1M14 11h1M1 13h3M5 13h1M0 14h2M4 14h1M6 14h4M0 15h1M5 15h1M0 16h1M5 16h1M1 17h1M4 17h1M2 18h2M13 18h1M2 19h1M12 19h1M2 20h1M12 20h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M12 1h2M11 2h4M12 3h3M13 4h1M11 5h1M2 14h2M1 15h4M1 16h4M8 16h2M11 16h1M2 17h2M8 17h2M11 17h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#500000","M7 3h5M5 4h2M12 4h1M4 5h1M12 5h1M14 5h1M3 6h1M2 7h1M2 8h1M13 8h1M1 9h1M1 10h1M1 11h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f84070","M7 4h3M11 4h1M5 5h2M5 6h1M6 15h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d870","M10 4h1M10 5h1M13 17h1M3 20h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b02860","M7 5h2M4 6h1M6 6h2M3 7h3M12 8h1M4 13h1M5 14h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d8a038","M9 5h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M8 6h6M6 7h9M4 8h3M8 8h1M10 8h1M5 9h1M8 9h1M10 9h1M5 10h2M2 11h1M5 11h1M8 11h1M2 12h2M7 12h7M9 13h4M13 16h2M12 17h1M14 17h2M1 18h1M12 18h1M14 18h2M1 19h1M11 19h1M13 19h2M1 20h1M4 20h1M11 20h1M13 20h2M2 21h2M12 21h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d0c0","M3 8h1M2 9h1M4 9h1M7 9h1M9 9h1M11 9h1M4 10h1M7 10h7M4 11h1M6 11h2M6 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f87068","M7 8h1M9 8h1M11 8h1M6 9h1M2 10h1M3 11h1M9 11h5M4 12h2M6 13h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#203088","M10 14h1M11 15h1M12 16h1M11 18h1M3 19h3M10 19h1M6 20h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#408098","M7 15h2M6 16h2M5 17h3M4 18h6M6 19h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#80d8c8","M9 15h2M10 16h1M10 17h1M10 18h1"], null)], null):new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#500000","M7 0h5M5 1h2M12 1h1M4 2h1M12 2h1M3 3h1M2 4h1M2 5h1M1 6h1M1 7h1M1 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f84070","M7 1h3M11 1h1M5 2h2M5 3h1M5 14h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d870","M10 1h1M10 2h1M13 14h1M3 17h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b02860","M7 2h2M4 3h1M6 3h2M3 4h3M3 5h1M2 6h2M2 7h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d8a038","M9 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M11 2h1M2 11h2M14 11h1M1 12h4M13 12h2M1 13h4M12 13h1M2 14h2M8 15h2M11 15h1M8 16h2M11 16h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M8 3h6M6 4h9M4 5h5M10 5h2M4 6h2M4 7h2M8 7h1M10 7h1M5 8h1M8 8h1M10 8h1M1 9h1M5 9h2M2 10h1M5 10h1M8 10h1M7 11h7M9 12h4M13 13h2M12 14h1M14 14h2M1 15h1M12 15h1M14 15h2M1 16h1M12 16h1M14 16h2M1 17h1M12 17h1M14 17h2M2 18h2M13 18h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f87068","M9 5h1M6 6h1M2 9h1M3 10h1M9 10h5M5 11h1M6 12h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d0c0","M7 6h5M3 7h1M6 7h2M9 7h1M11 7h1M2 8h1M4 8h1M6 8h2M9 8h1M11 8h1M4 9h1M7 9h7M4 10h1M6 10h2M6 11h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#885818","M3 8h1M12 8h2M3 9h1M14 9h1M14 10h1M1 11h1M4 11h1M15 11h1M0 12h1M5 12h1M15 12h1M0 13h1M5 13h5M11 13h1M1 14h1M4 14h1M2 15h2M13 15h1M2 16h2M13 16h1M2 17h1M13 17h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#203088","M10 13h1M11 14h1M4 15h1M4 16h1M4 17h2M11 17h1M5 18h2M10 18h1M6 19h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#408098","M7 14h2M5 15h3M5 16h3M6 17h4M7 18h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#80d8c8","M9 14h2M10 15h1M10 16h1M10 17h1"], null)], null)),(function (){var x__4040__auto__ = (180);
var y__4041__auto__ = cljs.core.deref(x);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),cljs.core.deref(y),0.18):(cljs.core.truth_((function (){var and__3938__auto__ = playing_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(run) > (6));
} else {
return and__3938__auto__;
}
})())?mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#500000","M6 0h5M4 1h2M11 1h1M3 2h1M11 2h1M2 3h1M1 4h1M1 5h1M0 6h1M0 7h1M0 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f84070","M6 1h3M10 1h1M4 2h2M4 3h1M5 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d870","M9 1h1M9 2h1M12 14h1M2 17h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b02860","M6 2h2M3 3h1M5 3h2M2 4h3M3 11h1M3 12h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d8a038","M8 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M10 2h1M3 13h3M7 13h2M10 13h1M3 14h2M7 14h2M10 14h1M3 15h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M7 3h6M5 4h9M3 5h3M7 5h1M9 5h1M4 6h1M7 6h1M9 6h1M4 7h2M1 8h1M4 8h1M7 8h1M1 9h2M6 9h7M2 10h1M8 10h4M1 13h1M12 13h2M0 14h1M11 14h1M13 14h2M0 15h1M11 15h1M13 15h2M0 16h1M10 16h1M12 16h2M0 17h1M3 17h1M10 17h1M12 17h2M1 18h2M11 18h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d0c0","M2 5h1M1 6h1M3 6h1M6 6h1M8 6h1M10 6h1M3 7h1M6 7h7M3 8h1M5 8h2M5 9h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f87068","M6 5h1M8 5h1M10 5h1M5 6h1M1 7h1M2 8h1M8 8h5M3 9h2M4 10h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#885818","M2 6h1M11 6h2M2 7h1M13 7h1M13 8h1M3 10h1M2 11h1M4 11h5M2 12h1M6 12h1M2 13h1M6 13h1M1 14h2M5 14h1M1 15h2M5 15h1M12 15h1M1 16h1M3 16h2M11 16h1M1 17h1M11 17h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#203088","M9 11h1M10 12h1M11 13h1M10 15h1M2 16h1M9 16h1M5 17h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#408098","M7 12h1M6 14h1M6 15h3M5 16h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#80d8c8","M8 12h2M9 13h1M9 14h1M9 15h1"], null)], null),(function (){var x__4040__auto__ = (180);
var y__4041__auto__ = cljs.core.deref(x);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),(cljs.core.deref(y) - (1)),0.18):mecca.mario.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#500000","M6 0h5M4 1h2M11 1h1M3 2h1M11 2h1M2 3h1M1 4h1M1 5h1M0 6h1M0 7h1M0 8h1M3 11h1M2 12h1M2 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f84070","M6 1h3M10 1h1M4 2h2M4 3h1M5 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d870","M9 1h1M9 2h1M7 18h1M9 18h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#b02860","M6 2h2M3 3h1M5 3h2M2 4h3M4 11h1M3 12h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d8a038","M8 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M10 2h1M7 13h2M10 13h1M3 14h3M7 14h2M10 14h1M3 15h2M3 16h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M7 3h6M5 4h9M3 5h3M7 5h1M9 5h1M4 6h1M7 6h1M9 6h1M4 7h2M1 8h1M4 8h1M7 8h1M1 9h2M6 9h7M2 10h1M8 10h4M7 17h1M9 17h1M3 18h1M8 18h1M10 18h1M3 19h8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8d0c0","M2 5h1M1 6h1M3 6h1M6 6h1M8 6h1M10 6h1M3 7h1M6 7h7M3 8h1M5 8h2M5 9h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f87068","M6 5h1M8 5h1M10 5h1M5 6h1M1 7h1M2 8h1M8 8h5M3 9h2M5 10h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#885818","M2 6h1M11 6h2M2 7h1M13 7h1M13 8h1M3 10h2M5 11h4M3 13h3M2 14h1M6 14h1M2 15h1M5 15h1M2 16h1M5 16h1M3 17h4M8 17h1M4 18h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#203088","M9 11h1M10 12h1M11 13h1M11 14h1M11 15h1M8 16h1M10 16h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#408098","M6 12h2M6 13h1M6 15h3M6 16h2M9 16h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#80d8c8","M8 12h2M9 13h1M9 14h1M9 15h2"], null)], null),(function (){var x__4040__auto__ = (180);
var y__4041__auto__ = cljs.core.deref(x);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})(),cljs.core.deref(y),0.18)
))], null);
});
mecca.mario.limb = (function mecca$mario$limb(x,y,color,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),cljs.core.cst$kw$fill,color,cljs.core.cst$kw$d,path], null)], null);
});
mecca.mario.hat = (function mecca$mario$hat(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#f83800","M1 0H6V1H9V2H0V1H1V0"], null);
});
mecca.mario.mario_face = (function mecca$mario$mario_face(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M3 0H7V1H9V2H10V3H7V2H6V3H5V4H8V5H1V3H0V1H1V3H3V2H2V1H3V0H5V2H6V0"], null);
});
mecca.mario.hair = (function mecca$mario$hair(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ac7c00","M1 0H4V1H3V2H4V3H2V1H1V3H2V4H0V1H1V0M1 0H4V1H3V2H4V3H2V1H1V3H2V4H0V1H1V0"], null);
});
mecca.mario.eye = (function mecca$mario$eye(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ac7c00","M0 0H1V2H0V0"], null);
});
mecca.mario.moustache = (function mecca$mario$moustache(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ac7c00","M1 0H2V1H4V2H0V1H1V0"], null);
});
mecca.mario.sleeve = (function mecca$mario$sleeve(orientation,x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ac7c00",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,"front"))?"M1 0H3V1H4V2H3V3H4V4H3V6H2V5H1V4H0V1H1V0":"M0 0H3V1H4V2H2V1H0V0")], null);
});
mecca.mario.button = (function mecca$mario$button(x,y){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M0 0H1V1H0V0"], null);
});
mecca.mario.overalls = (function mecca$mario$overalls(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#f83800","M3 0H4V1H6V2H8V3H9V5H8V6H5V7H2V6H1V5H0V4H1V5H2V6H5V5H6V4H4V3H3V2H4V1H3V0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.button,(4),(9)], null)], null);
});
mecca.mario.smb_small_shirt = (function mecca$mario$smb_small_shirt(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#E52521",cljs.core.cst$kw$d,"M2.5 2H4.5V2.5H6V3H6.5V3.5H5V4H4.5V3.5H4V2.5H3.5V3H2.5V2H1V2.5H.5V3H0V3.5H1V4H1.5V3.5H2V2"], null)], null);
});
mecca.mario.hand = (function mecca$mario$hand(view,x,y){
var G__19861 = view;
switch (G__19861) {
case "side":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M0 0H3V1H2V2H0V0"], null);

break;
case "back":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M0 0H2V1H0V0"], null);

break;
case "thumb-left":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M2.2 5.6H4V6.5H2.7V6H2.2V5.6"], null);

break;
case "thumb-right":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.limb,x,y,"#ffa044","M5 5.5H6V6H6.5V6.5H6V7H5V5.5"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19861)].join('')));

}
});
mecca.mario.hands = (function mecca$mario$hands(configuration){
var G__19863 = configuration;
switch (G__19863) {
case "clenched":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hand,"side",(2),(11)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hand,"back",(6),(9)], null)], null);

break;
case "stretched":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hand,"thumb-right",(-4),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hand,"thumb-left",(4),(4)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19863)].join('')));

}
});
mecca.mario.foot = (function mecca$mario$foot(shape,x,y,rotation){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),")"].join(''),cljs.core.cst$kw$fill,"#ac7c00",cljs.core.cst$kw$d,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,"bent"))?"M0 0H2V1H3V2H4V3H1V2H0V0":"M0 0H3V1H4V2H0V0")], null)], null);
});
mecca.mario.feet = (function mecca$mario$feet(config){
var G__19865 = config;
switch (G__19865) {
case "together":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.foot,"flat",(3),(13),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.foot,"flat",(1),(14),(0)], null)], null);

break;
case "stretched":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.foot,"bent",(2),(10),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.foot,"flat",(6),(10),(-90)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19865)].join('')));

}
});
mecca.mario.mario = (function mecca$mario$mario(){
var x = (function (){var G__19867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_x], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19867) : re_frame.core.subscribe.call(null,G__19867));
})();
var y = (function (){var G__19868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_y], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19868) : re_frame.core.subscribe.call(null,G__19868));
})();
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(0.25) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(y)),")"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hat,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_face,(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.eye,(5),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hair,(-1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.moustache,(5),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.sleeve,"front",(-1),(7)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.sleeve,"back",(3),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.overalls,(-1),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hands,"clenched"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.feet,"together"], null)], null);
});
mecca.mario.mario2 = (function mecca$mario$mario2(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_mario,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(1.5,1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#f8cd66",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M.903 3.612l-.056.057v-.226l.056.056.057.057zm1.552.029h-.084v-.17h.169v.17zm2.032 0h-.084v-.17h.169v.17zm-2.751-.424h-.043v-.084H1.778v.084zM5.8 2.963h-.043V2.88H5.842v.084zM3.768 2.88h-.043V2.794H3.81V2.879zM1.22.762h-.134l.033-.1.034-.101.1-.034.1-.033v.268zm4.064 0H5.15l.033-.1.034-.101.1-.034.1-.033v.268zM3.076.592h-.14L3.011.53l.076-.063.064-.085.063-.085.001.148.001.149z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#7fd7ce",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M3.29 3.242l-.157.151v-.26h-.254v-.339h.254v-.169h.181l.107.106.106.107-.04.126-.039.126zm-.03-.279h.127v-.169h-.254v.169zm-2.235.17H.95L.903 3.01.856 2.89l.25-.055.249-.054V2.53l.084.052.085.053v.498h-.169v-.17H1.1v.17zm4.288-.005l-.106-.005-.148-.15-.148-.15V2.54h.254V2.37h.181l.121.12.121.122v.266h-.169v.254l-.106-.005zm-.021-.334h.127V2.54h-.254v.254zM1.609 2.54h-.085v-.169h.169v.169z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#fe6f6e",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M1.427 2.495l-.03.028-.11-.119-.108-.118h.166l.055.09.056.09zm1.917.045h-.127v-.169h.254v.169zM.44 2.37l-.144-.002.127-.082.127-.082H.62l.068-.002-.052.085-.052.085zm2.472-.084h-.035l-.145-.17-.145-.169h-.301v-.16l.098-.06.097-.06.102.14.103.14h.173l.044.17.044.169zm2.457-.007l-.162-.007.111-.045.111-.044.051.051.052.051zm-3.027-.106l-.056.056v-.226l.056.057.057.056zm2.032 0l-.056.056v-.226l.056.057.057.056zm-3.292-.156l-.399.015-.09-.17-.091-.17H.254v-.159l.098-.06.097-.06.102.14.103.14h.193v.244l.317.033.318.033zm4.054 0l-.41.015-.045-.17-.044-.17h-.319v-.159l.098-.06.097-.06.102.14.103.14h.193v.244l.317.033.318.033zm-1.58-.07h-.17v-.169H3.105l.043-.043.043-.043.268.053.267.054v.148zm-1.365-.17h-.074v-.235l.117-.045.118-.045-.043.163-.043.163zm-.743-.084h-.245l-.052-.137-.053-.137.192.05.192.052.106.001.105.001v.17zm1.336 0H2.71v-.266l.127-.127.127-.127v.07l-.002.069-.051.19-.051.19zm2.804 0h-.17v-.169H5.137l.043-.043.043-.043.268.053.267.054v.148zM.16 1.523H.085v-.096L.212 1.3l.127-.127v.083l-.052.134-.051.134zm4.064 0H4.15v-.096l.127-.127.127-.127v.083l-.052.134-.051.134zm-3.44-.105l-.107.035v-.25l.133-.051.134-.051-.028.14-.027.142zm4.063 0l-.106.035v-.25l.133-.051.134-.051-.028.14-.027.142zm-1.545-.064h-.067l-.041-.109-.042-.108h.3l-.042.108-.041.11zm2.413 0h-.127v-.169h.254v.169zM1.27 1.185h-.113l.057-.056.056-.057.056.057.057.056zm4.064 0h-.113l.057-.056.056-.057.056.057.057.056zM.725.815L.52.908.616.756.712.602.916.551l.205-.052.046.047.047.046H.932L.93.656.93.719.725.814zm4.064 0l-.205.094.096-.153.096-.154.204-.051.205-.052.046.047.047.046H4.996l-.001.064-.001.063-.205.095zM2.649.752l-.104.136-.002-.06L2.54.77l.2-.216.2-.216h.193v.158l-.19.06-.19.061zm-1.21-.16h-.113l.057-.057.056-.057.057.057.056.056zm4.064 0H5.39l.057-.057.056-.057.057.057.056.056zM3.302.507h-.085v-.17h.17v.17z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#3f7f9e",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M3.048 3.387h-.085v-.15l-.156-.04-.157-.042-.047-.18-.047-.181h.323v.339h.254v.254zm-1.82-.219l-.339.02-.14-.032-.139-.032-.043-.165-.043-.165h.153l.186.185.185.185.033-.1.034-.1h.24v.169h.169v-.339h.169v.339l-.063.008-.064.008zm3.873.04l-.063-.01-.141-.038-.141-.037L4.709 3l-.047-.122.049-.127.048-.127h.152v.259l.127.049.127.048v.236zm-1.587-.245H3.47V2.88H3.556v.084zm2.159-.084H5.56l.056-.057.057-.056.056.056.057.057zM3.64 2.794h-.085V2.54h.169v.254zm-2.16-.17H1.44V2.54H1.524V2.625zm1.772-.006L3.09 2.61l.111-.045.112-.044.05.05.052.052zm2.43-.078h-.075l-.043-.163-.043-.163.118.045.117.045v.236zm-4.201-.17h-.043v-.084H1.524v.084zm3.803-.007l-.163-.007.111-.044.112-.045.05.051.052.052z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#8e571e",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M.699 3.637L.55 3.634l-.105-.12-.106-.12v-.261h.174l.049.127.049.127h.236v.254zm1.643-.06l-.043.106-.006-.273-.007-.272.12.046.12.046.047.12.046.121h-.234zm2.032 0l-.043.106-.006-.281-.007-.282.147.029.147.028.029.147.028.147h-.252zM1.588 3.41l-.149.056v-.249h.24l.156-.058.155-.06-.127.128-.127.127zm2.062-.023h-.076l-.051-.134-.052-.134v-.15l.254-.26.254-.26V2.3l-.105-.035-.105-.035-.106.107-.107.106v.181h-.164l.049-.126.048-.127-.157-.01-.157-.008.275-.089.275-.088v-.143l.17.145.169.145v.179l-.17.145-.169.145v.594zM3.514 2.37h.042V2.286H3.471V2.371zm2.11.908l-.134.134.028-.24.028-.239.106-.035.105-.035v.28zm-4.756-.4H.672l-.049-.127-.048-.127H.339V2.39l.18-.047.18-.047-.042-.164-.043-.163.159.041.158.042V2.2h.254v-.149l.168-.044.168-.044-.08.151-.082.151-.136.052-.136.053-.195-.05-.196-.049-.057.093-.057.092.053.169.054.168h.408l.054-.212.053-.211h.151v.167l-.146.17-.146.17zm1.693-.092l-.148-.007-.148-.162-.148-.163v-.084l.169-.17.17-.169h.167l.17.146.17.146v.202l.106.043.106.042-.233.007-.233.007v.17l-.148-.007zm-.073-.162h.123l.134-.052.134-.051v-.233l-.218-.054-.218-.055-.09.09-.09.09.051.132.051.133zm2.07.162l-.113-.007-.148-.162-.148-.163v-.084l.164-.165.165-.164.11-.015.111-.015.148.01.148.01v.254h.182l-.253.254-.254.254-.113-.007zm-.038-.162h.123l.134-.052.134-.051v-.218l-.224-.056-.224-.056-.084.084-.083.083.05.133.051.133zm-2.697 0h-.124l.048-.127.05-.127h-.259l-.034.101-.034.102-.05-.131-.05-.131.225.016.225.016.064.013.063.014v.254zm3.68-.254H5.39l.057-.057.056-.056.057.056.056.057zm-.127-.17H5.25v-.149L5.44 2l.191-.051.064-.001.063-.001v.254h-.155l-.043-.106-.042-.106-.007.106-.007.106zm-2.074-.254h-.085v-.169h.17v.169zm.479-.062l-.042.105.009-.51-.304-.344.228.276.151.37-.042.103zm-1.444-.13l-.051.051.007-.162.006-.162.045.11.044.112zm-1.18-.09l-.056.057v-.226l.056.056.057.057zm.592-.035l-.042.106v-.212l-.004-.348.046.242.043.106zm3.585.063h-.085v-.169h.17v.169zm.48-.063l-.043.106v-.424l.042.106.043.106zM.31 1.496l-.056.056v-.226l.056.057.057.056zm4.064 0l-.056.056v-.226l.056.057.057.056zm-2.03-.247l-.038.148-.01-.22-.01-.22.177-.203L2.64.55l.07-.126.071-.126.056.055.056.056-.177.177-.176.176V1.1h-.157zM.466 1.185H.339V.963L.635.847.931.73V.593h.17v.152L.847.834.593.922v.263zm4.064 0h-.127V.963l.296-.116.296-.117V.593h.17v.152L4.91.834l-.254.088v.263zM1.496.734L1.439.79V.564l.057.057.056.056zm4.064 0L5.503.79V.564l.057.057.056.056zm.319.028h-.122V.593h.254v-.34h-.157L5.818.36l-.036.106.032-.19.031-.191h-.324l-.048.127-.049.127h-.181l.167-.18.168-.18.21.053L6 .085l.054.17.053.168-.053.17L6 .762z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#1f2f8e",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M2.926 3.64h-.188l-.113-.211-.114-.212h-.14v-.423h.173l.08.212.081.211h.258v.17h.254v-.151l.127-.05.127-.048v.249h-.259l-.049.127-.048.127zM.903 3.38l-.268-.007L.477 3.2l-.158-.172.104-.064.104-.065-.115-.046-.116-.046L.41 2.8l.114-.007.044.17.044.17.139.013.138.015.246.007.246.007.036.127.035.127-.097-.127-.098-.127-.043.105-.043.106zm4.029 0l-.233-.007-.148-.163-.148-.162v-.254h.242l.051.16.05.16.167.044.167.044.165-.044.165-.043.037-.14.037-.139.003.297.003.296-.043-.106-.043-.106h-.24v.17l-.232-.007zm-3.323-.184l-.127.034.098-.07.098-.07.04-.254.042-.254-.012.29-.012.29zM3.09 2.54h-.127v-.169h.254v.169zm2.726-.07l-.045.112-.007-.139-.007-.139-.127-.049-.127-.048v-.181l.179.166.178.166zm-4.419-.184h-.042V2.201h.084V2.286zm3.718-.007l-.162-.007.111-.044.111-.045.051.051.052.051z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#4f0000",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"M.467 2.794H.342l-.055-.217-.054-.217.176-.164.177-.164h.091v.158l-.169.054-.17.053v.328h.255v.169zm2.454 0h-.212v-.169h.424v.169zm.55 0h-.084v-.169h.169v.169zM5.08 2.54h-.085v-.169h.17v.169zm.423 0H5.42v-.169h.169v.169zm-2.42-.176l-.162-.007.111-.045.111-.044.051.051.052.051zm-1.601-.078h-.043V2.201H1.524V2.286zm.72 0h-.085v-.254h.169v.254zm2.031 0H4.15v-.251l.215-.054.216-.054.052.053.053.052h-.367v.254zm-3.175-.085H.931v-.169h.254V2.2zm4.064 0h-.127v-.169h.254V2.2zM2.194 1.44h-.077v-.43l.087-.102.087-.103.243-.28.243-.281.325.026.326.027.017.17.017.169-.044-.148-.044-.148H2.71v.127l-.211.246-.212.246.01.22.01.219.038-.148.039-.148h.157l.003-.106.002-.106.124-.163.123-.163.062.062.062.061-.124.08-.125.078.119.001.119.001-.183.158-.182.158v.174l-.134.051-.134.052zm.473-.508h.042V.847h-.084V.93zm3.26.508h-.085v-.338h.169v.339zM.312 1.117l-.045.11-.006-.112-.007-.112.247-.248L.75.508H.93V.339h.52l.121.12.121.121v.181h-.169V.487l-.365.04-.365.042-.219.22-.22.218zm4.064 0l-.045.11-.006-.112-.007-.112.247-.248.248-.247h.182V.339h.52l.121.12.121.121v.181h-.169V.487l-.365.04-.365.042-.219.22-.22.218zm-.848-.045l-.057.057V.903l.057.056.056.057zm-.353-.14h-.042V.846h.084V.93zM5.927.846h-.113L5.87.79l.057-.056.056.056.057.057z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M.81 3.725H.52l-.133-.133-.133-.133.01-.184.01-.185.041.164.042.163.112.112.112.112h.368l-.047-.123-.047-.123.123.047.123.047v.236zm.88-.044l-.213.053-.061-.06-.061-.061v-.19l.17-.013.17-.013.125-.125.126-.126-.105-.037-.105-.038L1.804 3l.068-.073.079.125.078.124v.254l-.063.1-.063.098zm.758.018l-.12.015-.105-.044-.106-.043v-.421l.118-.12.119-.118-.045.336-.045.337h.262l.043-.087.043-.087-.022.108-.022.108zm2.015.02l-.103-.007-.105-.043-.106-.043v-.421l.118-.119.119-.118-.045.336-.045.336h.215l.12-.148.12-.148-.093.19-.092.191-.103-.007zm-.591-.083l-.104-.005-.163-.164-.163-.164.057-.057.057-.057v.198h.159l.026-.275.027-.276h.254l.028.2.028.199-.05.203-.052.203zm1.813.005h-.079l-.048-.125-.047-.124.128-.129.129-.129.013-.172.013-.173.13.024.13.025.027.24.028.242-.172.16-.173.16zm-.14-.678h-.042V2.88H5.588v.084zM3.42 2.201h-.287v-.169h-.249l.049-.127.048-.127h.236v.169h.588l-.05.127-.048.127zm-2.843-.25l-.034.104-.156-.156-.156-.156.104-.034.103-.035.087.087.087.087zm1.838.07l-.171-.012.19-.037.19-.036-.055-.227-.055-.227-.093-.062-.093-.063h.106l.106-.002v-.254h.187L2.683.987 2.64.872l.162-.14.163-.139h.742l.049.127.049.127-.05.127-.048.127h-.151V.9l-.114.156-.114.156-.097-.06-.096-.06.05.132.05.131h-.272v-.181l-.127.127-.127.127v.266h.168l-.145.17-.145.169zM2.794.93h.113L2.85.875 2.794.818l-.056.057-.057.056zm.381 0h.042V.847h-.084V.93zM1.403 1.947h-.302V1.79l-.125-.027-.125-.027.089-.127.089-.127.043.105.043.106h.844l-.127.127-.127.127zm3.136 0H4.42l-.049-.127-.049-.127h.295v-.672l.097-.097.096-.096.384-.044.383-.043.217.055.216.054v.233l-.122.047-.122.047-.297-.049-.296-.048-.216.055-.217.054v.251h.181l-.132.133-.133.133v.242zm.913 0h-.287v-.169h-.249l.049-.127.048-.127h.236v.169h.588l-.049.127-.049.127zM.717 1.586l-.114.104-.05-.16L.5 1.37l.057-.226L.614.92.821.841l.206-.079h.652l.134.051.134.052v.218l-.122.046-.122.047-.297-.048-.296-.048-.216.054-.217.055v.236l.077.029.076.028zm2.467.084l-.051.052.006-.163.007-.162.045.111.044.111zm.254 0l-.051.052.006-.163.007-.162.045.111.044.111zm-2.286-.254l-.051.052.006-.163.007-.162.045.111.044.111zm.254 0l-.051.052.006-.163.007-.162.045.111.044.111zm3.81 0l-.051.052.006-.163.007-.162.045.111.044.111zm.254 0l-.051.052.006-.163.007-.162.045.111.044.111zM3.47 1.355h-.084v-.16l.084-.052.085-.052v.264z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M5.64.46L5.516.335 5.473.332 5.43.33l.047-.12.046-.122.16-.001.16-.002L5.84.1c-.01.046-.06.354-.057.36A.492.492 0 0 0 5.82.366L5.855.26 5.932.26l.077-.002V.59L5.886.589 5.764.587zM.688 2.779a9.072 9.072 0 0 1-.1-.32.838.838 0 0 1 .113-.174c0-.006.004-.009.008-.007l.194.05.184.046.062-.024.062-.024.02.02.018.02h-.047l-.048.192-.054.214-.006.022h-.4zM4.372 2.55a29.382 29.382 0 0 1-.05-.13L4.3 2.357l.082-.081.08-.082.225.056.224.056-.002.106-.002.107-.13.05-.132.051H4.4zM2.975 1.686l-.027-.106-.028-.104.019-.071c.01-.04.02-.066.02-.06.003.01.016.012.13.012h.128v.102l-.001.102-.033-.082a.502.502 0 0 0-.036-.08c-.003 0-.007.065-.01.144l-.005.145h-.079a.592.592 0 0 1-.078-.002zM5.052 1.415a1.26 1.26 0 0 1-.092-.034 3.174 3.174 0 0 1 .044-.246c.002-.007.028-.016.08-.03.089-.02.09-.02.161-.01l.053.008-.038.039a.276.276 0 0 0-.039.044c0 .003.006.005.014.005.013 0 .014.004.014.056a.231.231 0 0 1-.003.054 1.157 1.157 0 0 1-.032-.076.73.73 0 0 0-.034-.078 1.781 1.781 0 0 0-.014.252c0 .04-.002.048-.012.047-.007 0-.053-.014-.102-.03zM5.493 1.4l.032-.033-.039-.097a16.657 16.657 0 0 1-.045-.113c-.004-.012-.008-.015-.012-.009s-.01.004-.021-.009c-.01-.01-.013-.017-.007-.017l.182.028c.177.03.189.03.241.01.01-.004.012-.002.012.01 0 .014-.002.014-.124.014h-.125v.173h.114l-.114.038-.12.038c-.004 0 .008-.015.026-.033zM.988 1.415a1.26 1.26 0 0 1-.092-.034 3.174 3.174 0 0 1 .044-.246c.002-.007.028-.016.08-.03.088-.02.098-.021.165-.01l.049.008-.039.039a.274.274 0 0 0-.038.044c0 .003.006.005.014.005.013 0 .014.004.014.056a.232.232 0 0 1-.003.054 1.156 1.156 0 0 1-.032-.076.704.704 0 0 0-.034-.078 2.57 2.57 0 0 0-.015.287c.002.018-.012.016-.113-.019zM5.166 2.67v-.124h.249v.248h-.249zM3.134 2.877v-.083h.249v.166h-.249z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M.688 2.779a9.072 9.072 0 0 1-.1-.32.838.838 0 0 1 .113-.174c0-.006.004-.009.008-.007l.194.05.184.046.062-.024.062-.024.02.02.018.02h-.047l-.048.192-.054.214-.006.022h-.4z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M.688 2.779a9.072 9.072 0 0 1-.1-.32.838.838 0 0 1 .113-.174c0-.006.004-.009.008-.007l.194.05.184.046.062-.024.062-.024.02.02.018.02h-.047l-.048.192-.054.214-.006.022h-.4zM2.34 2.55a25.078 25.078 0 0 1-.05-.131l-.023-.06.088-.088.087-.088.218.054.218.054-.002.115-.001.114-.132.05-.131.051h-.244zM5.052 1.415a1.26 1.26 0 0 1-.092-.034 3.174 3.174 0 0 1 .044-.246c.002-.007.028-.016.08-.03.089-.02.09-.02.161-.01l.053.008-.038.039a.276.276 0 0 0-.039.044c0 .003.006.005.014.005.013 0 .014.004.014.056a.231.231 0 0 1-.003.054 1.157 1.157 0 0 1-.032-.076.73.73 0 0 0-.034-.078 1.781 1.781 0 0 0-.014.252c0 .04-.002.048-.012.047-.007 0-.053-.014-.102-.03z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#000000",cljs.core.cst$kw$stroke_DASH_width,0.08466667], null),cljs.core.cst$kw$d,"m -39.279287,150.696 h -0.290286 l -0.133047,-0.13304 -0.133048,-0.13305 0.0098,-0.18445 0.0098,-0.18446 0.04164,0.16335 0.04164,0.16334 0.111821,0.11183 0.111821,0.11182 h 0.18444 0.184439 l -0.04708,-0.12269 -0.04708,-0.12269 0.122689,0.0471 0.122688,0.0471 v 0.11794 0.11794 z m 0.879555,-0.0445 -0.213369,0.0536 -0.06095,-0.061 -0.06095,-0.0609 v -0.0949 -0.0949 l 0.170183,-0.0128 0.170183,-0.0128 0.125394,-0.12539 0.125395,-0.1254 -0.105078,-0.0375 -0.105077,-0.0375 0.0681,-0.0726 0.0681,-0.0726 0.07877,0.12455 0.07877,0.12455 v 0.127 0.127 l -0.06305,0.0991 -0.06305,0.0991 z m 0.758381,0.0177 -0.119984,0.0155 -0.105833,-0.0437 -0.105833,-0.0437 v -0.21066 -0.21066 l 0.118632,-0.11863 0.118632,-0.11864 -0.04511,0.33635 -0.04511,0.33635 h 0.131093 0.131092 l 0.04304,-0.0868 0.04304,-0.0868 -0.02183,0.10795 -0.02183,0.10795 z m 2.014871,0.0202 -0.102855,-0.007 -0.105833,-0.0427 -0.105833,-0.0427 v -0.21066 -0.21066 l 0.118632,-0.11863 0.118632,-0.11864 -0.04511,0.33635 -0.04511,0.33635 h 0.107648 0.107647 l 0.119838,-0.14817 0.119838,-0.14817 -0.09232,0.1905 -0.09232,0.1905 -0.102854,-0.007 z m -0.591301,-0.083 -0.10422,-0.005 -0.16262,-0.16396 -0.16262,-0.16396 0.05679,-0.0568 0.05679,-0.0568 v 0.0988 0.0988 h 0.0793 0.0793 l 0.02653,-0.27517 0.02653,-0.27517 h 0.127 0.127 l 0.02818,0.19911 0.02818,0.19912 -0.05096,0.20305 -0.05096,0.20306 z m 1.813378,0.005 h -0.07915 l -0.04779,-0.12455 -0.0478,-0.12455 0.128601,-0.1286 0.1286,-0.1286 0.01302,-0.17289 0.01302,-0.17288 0.129946,0.0246 0.129946,0.0246 0.02764,0.24095 0.02764,0.24095 -0.17227,0.16049 -0.17227,0.1605 z m -0.139598,-0.67734 h -0.04233 v -0.0423 -0.0423 h 0.04233 0.04233 v 0.0423 0.0423 z m -2.125725,-0.762 h -0.287275 v -0.0847 -0.0847 h -0.124343 -0.124343 l 0.04874,-0.127 0.04873,-0.127 h 0.117942 0.117941 v 0.0847 0.0847 h 0.293677 0.293676 l -0.04874,0.127 -0.04873,0.127 z m -2.842697,-0.25007 -0.03447,0.10342 -0.155726,-0.15573 -0.155727,-0.15572 0.103415,-0.0345 0.103414,-0.0345 0.08678,0.0868 0.08678,0.0868 z m 1.838105,0.0692 -0.171683,-0.0115 0.190631,-0.0367 0.19063,-0.0367 -0.0555,-0.22693 -0.0555,-0.22692 -0.0928,-0.0622 -0.0928,-0.0622 0.105834,-10e-4 0.105833,-0.001 v -0.127 -0.127 h 0.09372 0.09372 l -0.04396,-0.11455 -0.04396,-0.11455 0.162866,-0.13945 0.162866,-0.13945 h 0.370974 0.370974 l 0.04873,0.127 0.04874,0.127 -0.04874,0.127 -0.04873,0.127 h -0.07561 -0.07561 v -0.10085 -0.10085 l -0.114156,0.15612 -0.114155,0.15611 -0.09654,-0.0597 -0.09654,-0.0597 0.05042,0.1314 0.05042,0.1314 h -0.136058 -0.136059 v -0.0907 -0.0907 l -0.127,0.127 -0.127,0.127 v 0.13305 0.13304 h 0.08384 0.08384 l -0.144987,0.16934 -0.144988,0.16933 z m 0.37865,-1.08914 h 0.112889 l -0.05644,-0.0564 -0.05644,-0.0565 -0.05644,0.0565 -0.05645,0.0564 z m 0.381,0 h 0.04233 v -0.0423 -0.0423 h -0.04233 -0.04233 v 0.0423 0.0423 z m -1.771952,1.016 h -0.302381 v -0.0785 -0.0785 l -0.124771,-0.0274 -0.12477,-0.0274 0.08888,-0.127 0.08888,-0.127 0.04294,0.10583 0.04294,0.10583 h 0.422325 0.422326 l -0.127,0.127 -0.127,0.127 z m 3.135677,0 h -0.117941 l -0.04874,-0.127 -0.04873,-0.127 h 0.147433 0.147434 v -0.33635 -0.33636 l 0.09655,-0.0965 0.09655,-0.0965 0.383324,-0.0432 0.383325,-0.0432 0.216705,0.0544 0.216706,0.0544 v 0.11633 0.11633 l -0.122118,0.0469 -0.122118,0.0469 -0.296619,-0.0481 -0.29662,-0.0481 -0.216263,0.0543 -0.216263,0.0543 v 0.12539 0.12538 h 0.09071 0.09071 l -0.133048,0.13305 -0.133047,0.13305 v 0.12095 0.12095 z m 0.913217,0 h -0.287275 v -0.0847 -0.0847 h -0.124343 -0.124343 l 0.04874,-0.127 0.04873,-0.127 h 0.117942 0.117942 v 0.0847 0.0847 h 0.293676 0.293676 l -0.04873,0.127 -0.04873,0.127 z m -4.735399,-0.36137 -0.11344,0.1043 -0.05097,-0.1606 -0.05097,-0.16059 0.05648,-0.22504 0.05648,-0.22505 0.20645,-0.0785 0.206451,-0.0785 h 0.32623 0.32623 l 0.133925,0.0514 0.133924,0.0514 v 0.10889 0.10888 l -0.122117,0.0469 -0.122118,0.0469 -0.296619,-0.0481 -0.29662,-0.0481 -0.216263,0.0543 -0.216263,0.0543 v 0.11833 0.11833 l 0.07633,0.0282 0.07632,0.0282 z m 2.467277,0.0844 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m 0.254,0 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m -2.286,-0.254 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m 0.254,0 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m 3.81,0 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m 0.254,0 -0.05115,0.0512 0.0067,-0.16228 0.0067,-0.16228 0.04447,0.11112 0.04447,0.11113 z m -1.998487,-0.0617 h -0.08467 v -0.0797 -0.0797 l 0.08467,-0.0523 0.08467,-0.0523 v 0.132 0.132 z"], null)], null)], null);
});
mecca.mario.editor_bg = (function mecca$mario$editor_bg(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_bg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.25) translate(0,38)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$height,(119),cljs.core.cst$kw$width,(240),cljs.core.cst$kw$x,(8),cljs.core.cst$kw$y,(23)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path54,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f7aff7"], null),cljs.core.cst$kw$d,"M 13.5,223 H 0 V 211.5 200 H 13.5 27 v 11.5 11.5 z m 2.5,-2 h 8 V 211 201 H 16 8 v 10 10 z m 234.5,2 H 245 V 211.5 200 h 5.5 5.5 v 11.5 11.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path52,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f5e7b7"], null),cljs.core.cst$kw$d,"M136 223H31V211.5 200H136 241V211.5 223ZM48.5 221H57v-8.071-8.071L55.571 203.429 54.143 202H47.071 40v9.5 9.5zM145.75 220.962 153 221v-8.071-8.071L151.571 203.429 150.143 202H143.071 136v8.042 8.042l1.25 1.42 1.25 1.42 7.25.038zm24 0L177 221v-8.071-8.071L175.571 203.429 174.143 202H167.071 160v8.042 8.042l1.25 1.42 1.25 1.42 7.25.038zm24 0L201 221v-8.071-8.071L199.571 203.429 198.143 202H191.071 184v8.042 8.042l1.25 1.42 1.25 1.42 7.25.038zm-96-1L112 220v-7.071-7.071L110.571 204.429 109.143 203H102.571 96l-.079 1.25-.079 1.25-.504-1.25L94.833 203H87.917 81v7.042 7.042l1.25 1.42 1.25 1.42 14.25.038zm127.5 0L232 220v-7.071-7.071L230.571 204.429 229.143 203H222.571 216v7.042 7.042l1.25 1.42 1.25 1.42 6.75.038zM231.378 192H231v-.378-.378l1.75-1.372 1.75-1.372-1.372 1.75-1.372 1.75zm-29.727-4.75-.516 1.25.576-3.5.576-3.5.356-.417L203 180.667V182.833 185h2 2v-.969-.969l-1.5.576-1.5.576V182.607 181h2 2v2 2l2.25-.116 2.25-.116-1.75-.457-1.75-.457V182.427 181h2 2v2 2l2.25-.116 2.25-.116-1.75-.457-1.75-.457v-.82-.82l1.582-.607L217.164 181H217.582 218l.116 2.25.116 2.25.457-1.75.457-1.75H220.573 222l.1 1.75.1 1.75.801-2.5.801-2.5.216 2.5.216 2.5.457-1.75.457-1.75h.877.877l1.097 1.75 1.097 1.75-.615-2.25-.615-2.25H229.433 231v1.3 1.3l-1.2 1.2-1.2 1.2H215.383 202.167ZM202.5 180H202v-.5-.5h.5.5v.5.5zm2.5 0h-1.333l.667-.667.667-.667.667 .667.667 .667zm2.5 0H207v-.5-.5h.5.5v.5.5zm3.5-.158h-2.5l1.25-.504 1.25-.504 1.25.504 1.25.504zm5 0h-2.5l1.25-.504 1.25-.504 1.25.504 1.25.504zm4.417.079-1.917-.079 1.313-.525 1.313-.525.604 .604.604 .604-1.917-.079zM223.5 180H223v-.5-.5h.5.5v.5.5zm2.917-.079-1.917-.079 1.313-.525 1.313-.525.604 .604.604 .604-1.917-.079zM230 180h-1.333l.667-.667.667-.667.667 .667.667 .667z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_musicarea,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#c6e6de"], null),cljs.core.cst$kw$height,(119),cljs.core.cst$kw$width,(240),cljs.core.cst$kw$x,(8),cljs.core.cst$kw$y,(23)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#cfcfcf"], null),cljs.core.cst$kw$d,"M11.219 188.001 10.937 188 10.442 186.71 9.947 185.42 10.224 169.46 10.5 153.5h81 81v1.25 1.25l-1-.25-1-.25.252-.756.252-.756-79.752.256L11.5 154.5v16.751 16.751zM171.5 156h.5v-.5-.5h-.5-.5v.5.5zm.333 31.333L171.5 187.5 92.544 187.244 13.588 186.988 12.844 186.244 12.1 185.5 92.05 185.738 172 185.976l.083.595 .083.595-.333.167zM171.5 187h.5v-.5-.5h-.5-.5v.5.5zM92 184H15v-13-13h77 77v13 13zm0-1h76V171 159H92 16v12 12zM12.382 157h-.5L12.5 156l.618-1h.5.5L13.5 156l-.618 1z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path46,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f7bf8f"], null),cljs.core.cst$kw$d,"M 30,223 H 29 V 211.5 200 h 1 1 v 11.5 11.5 z m 212,0 h -1 V 211.5 200 h 1 1 v 11.5 11.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path42,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#9fbfaf"], null),cljs.core.cst$kw$d,"M92 183H16v-12-12h76 76v7.508 7.508l-1.919-1.198-1.919-1.198-1.581 1.312-1.581 1.312v1.255 1.255l1.581 1.312 1.581 1.312 1.919-1.198L168 176.983V179.992 183Zm15.801-4.207 1.485-.293 1.09-1.731 1.09-1.731-1.656-1.656-1.656-1.656-1.6.614-1.6.614-.589 1.535-.589 1.535 1.27 1.53 1.27 1.53zM136 177h20v-1-1h-20-20v1 1zM28 167H39V163.5 160H28 17v3.5 3.5zm32 0H71V163.5 160H60 49v3.5 3.5zm31.5 0H102V163.5 160H91.5 81v3.5 3.5zm44.5 0h14v-3.5-3.5h-14-14v3.5 3.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path$path40,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#a7a7a7"], null),cljs.core.cst$kw$d,"M47.5 217H43v-4.5-4.5h4.5 4.5v4.5 4.5zm.25-1.136 2.75-.136-2.25-.433L46 214.861V213.93 213l1.75-.116 1.75-.116-1.75-.457-1.75-.457v-.857-.857l2.25-.433 2.25-.433-2.75-.136L45 209v3.5 3.5zM222.441 217H222v-1-1h1.059 1.059l-.618 1-.618 1zM220.5 216H220v-.5-.5h.5.5v.5.5zm-1-2h-.29l-.366-3.833-.366-3.833H219.5 220.521L220.156 210.167 219.79 214Zm5.607 0h-.893L223.607 212.418 223 210.836v-.977-.977l.929.574 .929.574 .435-2.265.435-2.265.136 4.25L226 214ZM185.5 213H185v-.5-.5h.5.5v.5.5zm10.719-.15-.719-.15-2.953-.436-2.953-.436-1.146-1.567-1.146-1.567-1.152.712L185 210.118V209.059 208h1.492 1.492l1.249-2 1.249-2h1.214 1.214l2.481 2.481 2.481 2.481-1.004.62-1.004.62 .537 1.399.537 1.399zm-3.458-2.045 1.574-.305.416-1.249.416-1.249-1.65-.633-1.65-.633-1.046 1.046-1.046 1.046.706 1.143.706 1.143zm34.906-4.139L227 207.333V206 204.667l.667.667L228.333 206ZM90.967 189H10.333L9.667 188.333 9 187.667V171.033 154.4l1.2-1.2 1.2-1.2h80.1 80.1l1.2 1.2 1.2 1.2v16.1 16.1l-1.2 1.2-1.2 1.2zm.754-1.244L172.5 187.5v-17-17h-81-81l-.276 15.96-.276 15.96.497 1.296.497 1.296zM13.417 186.001 13.333 186 12.667 185.333 12 184.667V171.033 157.4l1.2-1.2 1.2-1.2H92 169.6l1.2 1.2 1.2 1.2v13.741 13.741l-.75.465-.75.465V171.156 156.5H92 13.5v14.751 14.751l-.083-8.6zM92.5 184.509l-77 .009 76.721-.265 76.721-.265.324-12.995.324-12.995-.045 13.251L169.5 184.5l-77 .009z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f7f700"], null),cljs.core.cst$kw$d,"m103 216h-5v-3.544-3.544l1.75.294 1.75.294-.313-2.25-.313-2.25H104.437 108v5.5 5.5zm3.156-1.636.656-.366-.52-1.988-.52-1.988-.903.558-.903.558 .671 1.085.671 1.085-1.155-.714L103 211.882v.976.976l1.25.448 1.25.448zM100.313 213h.313l2.937-3.25 2.937-3.25-3.25 2.937-3.25 2.937V212.687 213ZM99.5 208H99.333L98.667 207.333 98 206.667V205.833 205h.833.833v1.5 1.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path34,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#d99b55"], null),cljs.core.cst$kw$d,"m28.738 217.789-.36 5.711.004-12 .004-12 .356 6.289.356 6.289-.36 5.711zm215 0-.36 5.711.004-12 .004-12 .356 6.289.356 6.289-.36 5.711zM48.5 221H40v-1-1h7.5 7.5v-7.5-7.5h1 1v8.5 8.5zm97 0H138v-1-1h6.5 6.5v-7.5-7.5h1 1v8.5 8.5zm24 0H162v-1-1h6.5 6.5v-7.5-7.5h1 1v8.5 8.5zm24 0H186v-1-1h6.5 6.5v-7.5-7.5h1 1v8.5 8.5zm-96-1H83v-1-1h5.954 5.954l.35-6.75.35-6.75.196 6.75L96 218h7 7v-6.5-6.5h1 1v7.5 7.5zm127.5 0h-7v-1-1h6 6v-6.5-6.5h1 1v7.5 7.5zM97.5 217H97v-.5-.5h.5.5v.5.5zm0-12H97v-.5-.5h.5.5v.5.5zm11 0H108v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path32,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#9f9f7f"], null),cljs.core.cst$kw$d,"m216.55 190.792-14.05-.208 14.492-.542 14.492-.542.64-3 .64-3 .118 2.55.118 2.55-1.2 1.2-1.2 1.2zM215.5 189H203v-1-1h12.5 12.5v1 1zM200.637 187.696 200 188.333V183.367 178.4l1.2-1.2 1.2-1.2 14.05.208 14.05.208-14.5.542-14.5.542-.113 4.78-.113 4.78z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path28,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#777776"], null),cljs.core.cst$kw$d,"M139.167 219H136v-2.023-2.023l2.75 1.72 2.75 1.72.417 .303.417 .303zm8.667 0h-3.167l.417-.303.417-.303 2.75-1.72 2.75-1.72V216.977 219ZM167.5 219H160v-8.5-8.5h7.5 7.5v8.5 8.5zm-.5-4.01h.5l3-2.491 3-2.491-2.361-2.004L168.778 206H167 165.222l-2.361 2.004-2.361 2.004 3 2.491 3 2.491zM191.5 219H184l.032-3.25.032-3.25 2.052 2.75 2.052 2.75h3.333 3.333l2.052-2.75 2.052-2.75.032 3.25.032 3.25h-7.5zm-103.25-2.185-5.75-.185 5.202-.366 5.202-.366.359-5.699.359-5.699.189 6.25L94 217ZM221.5 217H221v-.5-.5h.5.5v.5.5zm2.223 0h-1.033l1.655-1.829L226 213.343V210.171 207h.799.799l-.418 3.75-.418 3.75-1.004 1.25-1.004 1.25zM219.5 215H219v-.5-.5h.5.5v.5.5zM136.866 210.583 136 211.118V206.559 202h7.5 7.5v4.559 4.559l-.866-.535-.866-.535.446-2.335.446-2.335-1.599-1.327-1.599-1.327-1.787 1.618-1.787 1.618-1.644-1.644-1.644-1.644-1.631 1.353-1.631 1.353.446 2.335.446 2.335zM186.455 205.455 184 207.909V204.955 202h7.5 7.5v2.955 2.955L196.545 205.455 194.091 203H191.5 188.909ZM218.5 208H218v-.5-.5h.5.5v.5.5zm1-2H219v-.5-.5h.5.5v.5.5zm7 0H226v-.5-.5h.5.5v.5.5zM91.55 189.756 10.5 189.512 90.905 189.25 171.31 188.988 172.655 187.872 174 186.755V170.578 154.4l-1.25-1.402-1.25-1.402 1.75 1.324 1.75 1.324V170.922 187.6l-1.2 1.2-1.2 1.2zm139.487-.279-.876.541-1.479-1.479-1.479-1.479-12.852-.313L201.5 186.435 216.143 186.217 230.786 186l.563 1.468.563 1.468zM230.5 189h.5v-.5-.5h-.5-.5v.5.5zm-29 0H201v-.5-.5h.5.5v.5.5zM14.734 171.008 14.409 184.003 14.455 170.751 14.5 157.5l77.25-.009 77.25-.009-76.971.265-76.971.265-.324 12.995zM231.559 179h-.441l-.714-1.155-.714-1.155 1.155.714L232 178.118V178.559 179Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_SHARP_path22,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"black"], null),cljs.core.cst$kw$d,"M27.7 205.8 27.4 217.5 27.2 205.8 27 194.1 13.3 193.7-.5 193.4 128 193.4 256.5 193.4 250.8 193.8 245.1 194.2 244.8 205.9 244.4 217.5 244.2 205.8 244 194H136 28.1ZM16 215H8V205 195H16 24V205 215ZM16 214H23V205 196H16 9V205 214ZM47.5 213H40V204.5 196H47.5 55V204.5 213ZM47.5 211H52V207.6 204.2L51.4 201.1 50.8 198H47.5 44.3L43.6 201.1 43 204.3V207.7 211.1ZM143.5 213H142.5L139.3 211 136.1 209V207 205L137 204.5 137.9 204 137.5 201.7 137.1 199.4 138.7 198.1 140.3 196.8 142.1 198.4 143.9 200 145.5 198.4 147.1 196.8 148.7 198.2 150.3 199.6 149.9 201.9 149.5 204.2 150.4 204.7 151.3 205.2V207.2 209.2L148.1 211.2 144.9 213.2ZM143.3 212 144.1 212 147.1 210.5 150 208.9V207 205.1L149.1 204.5 148.2 203.9 148.6 202.2 149 200.5 148.1 199.1 147.2 197.7 146.1 198.4 145 199.1V200.7 202.3L146.8 200.9 148.6 199.5 147.2 201.3 145.8 203.1 144.6 202.1 143.4 201.1 142.4 202.1 141.4 203.1 140 201.3 138.5 199.5 140.3 200.9 142.1 202.3V200.7 199.1L141 198.4 139.9 197.7 139 199.1 138.1 200.5 138.5 202.2 138.9 203.9 138 204.5 137 205.1V207 208.9L139.8 210.4 142.6 211.9 143.4 211.9ZM143.4 210 141.5 209.9 142.8 209.4 144.1 208.9 144.7 209.5 145.3 210.1 143.4 210ZM142.5 205H142V204.5 204H142.5 143V204.5 205ZM144.5 205H144V204.5 204H144.5 145V204.5 205ZM88 212H81V204.5 197H88 95V204.5 212ZM88 211H94V204.5 198H88 82V204.5 211ZM91.2 208.4 90.5 208.7 89.3 208.3 88 207.8V206.8 205.8L89.2 206.5 90.4 207.2 89.7 206.1 89 205 89.9 204.4 90.8 203.8 91.3 205.8 91.8 207.8ZM85.2 207H84.8L86 205.5 87.2 204 85.4 203.9 83.5 203.8 84.9 203.3 86.2 202.8 84.9 201.9 83.5 201 85 201 86.5 201 85 200 83.5 199 85.3 199 87 199V201.7 204.4L89.3 202.5 91.6 200.6 88.7 203.8 85.6 207ZM103 212H96V204.5 197H103 110V204.5 212ZM103 211H109V204.5 198H103 97V204.5 211ZM106.2 208.4 105.5 208.8 104.3 208.4 103.1 208V207 206L104.3 206.7 105.5 207.4 104.8 206.3 104.1 205.2 105 204.6 105.9 204 106.4 206 106.9 208ZM100.3 207H100V206.7 206.4L103.3 203.5 106.6 200.6 103.7 203.9 100.8 207.2ZM101.1 203.4 100.4 203.8 98.9 202.9 97.4 202 99 200.4 100.6 198.8 101.1 200.9 101.6 203ZM99.5 202H100V201.5 201H99.5 99V201.5 202ZM191.5 212H188.1L186 209.1 184 206.2V204.1 202L186.5 199.5 188.9 197H191.5 194.1L196.6 199.5 199.1 202V204.1 206.2L197 209.1 194.9 212ZM191.5 211H194.9L195.6 209.9 196.3 208.8 195.1 207.6 193.9 206.4 193 207.9 192.1 209.4 192 207.9 191.9 206.4 191.4 207.8 190.9 209.2 190.1 207.8 189.3 206.4 188.1 207.6 186.9 208.8 187.6 209.9 188.3 211H191.7ZM191.5 206.5H198V204.3 202L196 200 194 198H191.5 189L187 200 185 202V204.3 206.6ZM223 212H216V204.5 197H223 230V204.5 212ZM223 211H224.6L225.8 209.8 227 208.6V205.9 203.2L228 200.6 229 198H228 227L225 199.2 223 200.5 221 199.2 219 198H218 217L218 200.6 219 203.2V205.9 208.6L220.2 209.8 221.4 211ZM223 209H221.1L221.7 207.5 222.3 206H223 223.8L224.4 207.5 225 209ZM221.5 204H221V203.5 203H221.5 222V203.5 204ZM224.5 204H224V203.5 203H224.5 225V203.5 204ZM219.5 201H219V200.5 200H219.5 220V200.5 201ZM226.5 201H226V200.5 200H226.5 227V200.5 201ZM167 209H166.5L163.5 206.5 160.5 204 162.9 202 165.2 200H167 168.8L171.2 202 173.6 204 170.6 206.5 167.6 209ZM167 208H167.9L168.4 207.2 168.9 206.4H167 165.1L165.6 207.2 166.1 208ZM167 205.5H170.8L170.4 204.8 169.9 204H171 172.1L171.4 202.9 170.7 201.8 169.2 202.4 167.7 203 168.3 202 169.1 201H167 164.9L165.5 202 166.1 203 164.6 202.4 163.1 201.8 162.4 202.9 161.9 204H163 164.1L163.6 204.8 163.1 205.6ZM128 191H2V105 19H128 254V105 191ZM128 189H252V105 21H128 4V105 189ZM92 185H10.4L9.2 183.8 8 182.6V165 147.4L9.2 146.2 10.4 145H92 173.6L174.8 146.2 176 147.4V165 182.6L174.8 183.8 173.6 185ZM92 184H172.6L173.8 182.8 175 181.6V165 148.4L173.8 147.2 172.6 146H92 11.4L10.2 147.2 9 148.4V165 181.6L10.2 182.8 11.4 184ZM92.2 179.8 13.9 180.1 13.4 178.8 12.9 177.4 13.2 163.9 13.5 150.5H92 170.5V165 179.5ZM95.1 NaNV165 151.5H92 14.5L14.2 163.9 13.9 176.3 14.4 177.6 14.9 178.9ZM110.7 NaNZM110.4 NaNZM110.7 NaNV156.5 155L20.3 155.1 22.6 155.2 20.6 156.1 18.6 157 20.4 157.1 22 157V158.5 160L19.8 159.9ZM25.8 158.5 25.3 160.5 25.2 158.3 25 156.2 23.8 155.7 22.6 155.2 25.6 155.1 28.6 155 27.5 155.7 26.4 156.4 25.9 158.4ZM31 160H29V157.5 155H31 33V157.5 160ZM31 159H32V157.5 156H31 30V157.5 159ZM34.7 159.3 34.2 160.6 34.1 157.9 34 155H36 38V156.5 158H36.6 35.2ZM36 157H37.3L36.7 156.3 36 155.7 35.3 156.3 34.7 157ZM50.7 159.3 50.2 160.6 50.1 157.9 50 155H52 54V156.5 158H52.6 51.2ZM52 157H53.3L52.7 156.3 52 155.7 51.3 156.3 50.7 157ZM57.3 159.9 55 160 55.1 157.3 55.2 154.6 55.6 156.8 56 159 57.7 159.4 59.5 159.8ZM61 159 59.9 160.5 60.2 158 60.5 155.5H62 63.5L63.8 158 64.1 160.5 63 159 62 157.5ZM62 157H63.3L62.7 156.3 62 155.7 61.3 156.3 60.7 157ZM67.9 158.7 67.5 159.9 66.3 157.4 65.1 154.9 66.4 155.9 67.7 156.9 69.1 155.7 70.5 154.5 69.4 156 68.3 157.5ZM84.3 159.9 82 160 82.1 157.3 82.2 154.6 82.6 156.8 83 159 84.7 159.4 86.5 159.8ZM89 160H87V157.5 155H89 91V157.5 160ZM89 159H90V157.5 156H89 88V157.5 159ZM94 160H92V157.5 155H94 96V157.5 160ZM94 159H95V157.5 156H94 93V157.5 159ZM97.7 159.3 97.2 160.6 97.1 157.9 97 155H99 101V156.5 158H99.6 98.2ZM99 157H100.3L99.7 156.3 99 155.7 98.3 156.3 97.7 157ZM125.7 158.5 125.2 160.5 125.1 158.3 125 156.1 123.8 155.6 122.6 155.1 125.6 155 128.6 154.9 127.5 155.6 126.4 156.3 125.9 158.3ZM131.3 159.9 129 160V157.5 155L131.3 155.1 133.6 155.2 131.6 156 129.6 156.8 131.6 157.3 133.6 157.8 131.6 158 129.6 158.2 131.6 159.1 133.6 160 131.4 160.1ZM134.9 158.6 134.2 160.4 134.1 157.5 134 154.6 135.3 155.7 136.6 156.8 137.8 155.6 139 154.6 138.9 157.5 138.8 160.4 138.1 158.6 137.4 156.8H136.5 135.6L134.9 158.6ZM140.7 159.2 140.2 160.5 140.1 157.8 140 155H142 144V156.5 158H142.6 141.2ZM142 157H143.3L142.7 156.3 142 155.7 141.3 156.3 140.7 157ZM147 160H145V157.5 155H147 149V157.5 160ZM147 159H148V157.5 156H147 146V157.5 159ZM215.6 183.8 201.5 183.6 216 183.1 230.5 182.6 230.8 178.1 231.1 173.6 231.5 173.2 232 172.7V177.2 181.7L230.8 182.9 229.6 184.1ZM205 179H203V175.5 172H205 207V173 174L205.5 173.4 204 172.8V175.5 178.2L205.5 177.6 207 177V178 179ZM210.3 178.9 208.1 179 208.3 175.3 208.5 171.6 208.9 174.8 209.3 178 211 178.4 212.7 178.8ZM215.3 178.9 213 179V175.5 172L215.3 172.1 217.6 172.2 215.9 172.7 214.2 173.2V174 174.8L215.5 175.3 216.8 175.8 215.6 175.9 214 176V176.9 177.8L215.8 178.3 217.6 178.8ZM218.7 177.8 218.2 179.6 218.4 176.1 218.6 172.6H220.6 222.6L222.8 176.1 223 179.6 222.5 177.9 222 176.2H220.5 219.1ZM220.5 175H222V174 173H220.5 219V174 175ZM224.7 177.8 224.2 179.6 224.1 175.8 224 172 226.2 172.3 228.4 172.6 228.6 176 228.8 179.4 227.9 177.7 226.9 176H226 225.1ZM226.5 175H228V174 173H226.5 225V174 175ZM216 161H184V156.5 152H216 248V156.5 161ZM187.5 160H190V156.5 153H187.5 185V156.5 160ZM188.6 159H188.2L187.1 157.6 186 156.2 187.5 154.9 189 153.8V156.4 159ZM216 160H241V156.5 153H216 191V156.5 160ZM244.5 160H247V156.5 153H244.5 242V156.5 160ZM243.4 159H243V156.4 153.8L244.5 155.1 246 156.4 244.9 157.8 243.8 159ZM188.7 151H188.3L187.2 149.6 186.1 148.2 187.8 146.8 189.5 145.4 188.8 146.6 188.1 147.8 189.9 148.3 191.7 148.8 189.9 148.9 188.1 149 188.7 150 189.3 151ZM204.8 150.9 202.6 150.8 204.6 149.9 206.6 149 204.9 148.9 203 149V147.5 146L205.3 146.1 207.6 146.2 205.6 147.1 203.6 148 205.4 148.1 207.2 148.2V149.7 151.2L205 151.1ZM210 151H208V148.5 146H210 212V147 148L210.5 147.4 209 146.8V148.5 150.2L210.5 149.6 212 149V150 151ZM214 150 213 151.5 213 148.8 213 146H214.9 216.8V148.6 151.2L215.9 149.9 215 148.5ZM215 148H216.3L215.7 147.3 215 146.7 214.3 147.3 213.7 148ZM220 151H218V148.5 146H220 222V148.5 151ZM220 150H221V148.5 147H220 219V148.5 150ZM224.8 151 223 151 223.1 148.3 223.2 145.6 223.7 147.6 224.2 149.6 225.3 150.3 226.4 151 224.7 151ZM228.8 151 227 151 227.1 148.3 227.2 145.6 227.7 147.6 228.2 149.6 229.3 150.3 230.4 151 228.7 151ZM243.4 151H243L243.6 150.1 244.2 149.2 242.4 148.7 240.6 148.2 242.4 148.1 244.2 148 243.4 146.8 242.6 145.6 244.3 147 246 148.4 244.9 149.8 243.8 151.2ZM193.5 148.9 191.6 148.8 192.9 148.3 194.2 147.8 194.8 148.4 195.4 149 193.5 148.9ZM197.5 148.9 195.6 148.8 196.9 148.3 198.2 147.8 198.8 148.4 199.4 149 197.5 148.9ZM234.5 148.9 232.6 148.8 233.9 148.3 235.2 147.8 235.8 148.4 236.4 149 234.5 148.9ZM238.5 148.9 236.6 148.8 237.9 148.3 239.2 147.8 239.8 148.4 240.4 149 238.5 148.9Z"], null)], null)], null);
});
mecca.mario.tile = (function mecca$mario$tile(color,row,length,height,offset,array){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,(0),cljs.core.cst$kw$x2,length,cljs.core.cst$kw$y1,(row + (height / (2))),cljs.core.cst$kw$y2,(row + (height / (2))),cljs.core.cst$kw$stroke_DASH_width,height,cljs.core.cst$kw$stroke_DASH_dasharray,array,cljs.core.cst$kw$stroke_DASH_dashoffset,offset,cljs.core.cst$kw$stroke,color], null)], null);
});
mecca.mario.hill = (function mecca$mario$hill(x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(-0.75,4.875) scale(0.3)"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$mario$hill_$_iter__19869(s__19870){
return (new cljs.core.LazySeq(null,(function (){
var s__19870__$1 = s__19870;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19870__$1);
if(temp__5457__auto__){
var s__19870__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19870__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19870__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19872 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19871 = (0);
while(true){
if((i__19871 < size__4323__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19871);
cljs.core.chunk_append(b__19872,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(function (){var G__19873 = line;
switch (G__19873) {
case (0):
return (x - (3));

break;
case (1):
return (x - (6));

break;
case (2):
return (x - (8));

break;
default:
return (x - ((6) + line));

}
})(),cljs.core.cst$kw$x2,(function (){var G__19874 = line;
switch (G__19874) {
case (0):
return (x + (3));

break;
case (1):
return (x + (6));

break;
case (2):
return (x + (8));

break;
default:
return (x + ((6) + line));

}
})(),cljs.core.cst$kw$y1,line,cljs.core.cst$kw$y2,line,cljs.core.cst$kw$stroke_DASH_width,1.5,cljs.core.cst$kw$stroke,"#00ad00"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,(function (){var G__19875 = line;
switch (G__19875) {
case (0):
return (x - (3));

break;
case (1):
return (x - (6));

break;
case (2):
return (x - (8));

break;
default:
return (x - ((6) + line));

}
})(),cljs.core.cst$kw$x2,(function (){var G__19876 = line;
switch (G__19876) {
case (0):
return (x + (3));

break;
case (1):
return (x + (6));

break;
case (2):
return (x + (8));

break;
default:
return (x + ((6) + line));

}
})(),cljs.core.cst$kw$y1,line,cljs.core.cst$kw$y2,line,cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,(function (){var G__19877 = line;
switch (G__19877) {
case (0):
return "6";

break;
case (1):
return "3 6";

break;
case (2):
return "2 12";

break;
default:
return ["1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * ((5) + line)))].join('');

}
})(),cljs.core.cst$kw$stroke_DASH_dashoffset,(0),cljs.core.cst$kw$stroke,"black"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,line], null)));

var G__19888 = (i__19871 + (1));
i__19871 = G__19888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19872),mecca$mario$hill_$_iter__19869(cljs.core.chunk_rest(s__19870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19872),null);
}
} else {
var line = cljs.core.first(s__19870__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(function (){var G__19878 = line;
switch (G__19878) {
case (0):
return (x - (3));

break;
case (1):
return (x - (6));

break;
case (2):
return (x - (8));

break;
default:
return (x - ((6) + line));

}
})(),cljs.core.cst$kw$x2,(function (){var G__19879 = line;
switch (G__19879) {
case (0):
return (x + (3));

break;
case (1):
return (x + (6));

break;
case (2):
return (x + (8));

break;
default:
return (x + ((6) + line));

}
})(),cljs.core.cst$kw$y1,line,cljs.core.cst$kw$y2,line,cljs.core.cst$kw$stroke_DASH_width,1.5,cljs.core.cst$kw$stroke,"#00ad00"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,(function (){var G__19880 = line;
switch (G__19880) {
case (0):
return (x - (3));

break;
case (1):
return (x - (6));

break;
case (2):
return (x - (8));

break;
default:
return (x - ((6) + line));

}
})(),cljs.core.cst$kw$x2,(function (){var G__19881 = line;
switch (G__19881) {
case (0):
return (x + (3));

break;
case (1):
return (x + (6));

break;
case (2):
return (x + (8));

break;
default:
return (x + ((6) + line));

}
})(),cljs.core.cst$kw$y1,line,cljs.core.cst$kw$y2,line,cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,(function (){var G__19882 = line;
switch (G__19882) {
case (0):
return "6";

break;
case (1):
return "3 6";

break;
case (2):
return "2 12";

break;
default:
return ["1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * ((5) + line)))].join('');

}
})(),cljs.core.cst$kw$stroke_DASH_dashoffset,(0),cljs.core.cst$kw$stroke,"black"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,line], null)),mecca$mario$hill_$_iter__19869(cljs.core.rest(s__19870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((32)));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(40,2)",cljs.core.cst$kw$d,"M0 4H2V8H0V4Z M3 1H4V0H5V1H6V5H5V6H4V5H3V1Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(24,18)",cljs.core.cst$kw$d,"M0 4H2V8H0V4Z M3 1H4V0H5V1H6V5H5V6H4V5H3V1Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(48,18)",cljs.core.cst$kw$d,"M0 4H2V8H0V4Z M3 1H4V0H5V1H6V5H5V6H4V5H3V1Z"], null)], null)], null);
});
mecca.mario.cloud = (function mecca$mario$cloud(x,y){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,[" scale(0.2) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#6b8cff",cljs.core.cst$kw$d,"M0 0h14M18 0h14M0 1h13M19 1h13M0 2h11M20 2h12M0 3h10M20 3h1M22 3h10M0 4h10M23 4h9M0 5h10M24 5h8M0 6h9M24 6h8M0 7h8M24 7h8M0 8h5M25 8h2M28 8h4M0 9h4M25 9h1M29 9h3M0 10h3M29 10h3M0 11h3M29 11h1M31 11h1M0 12h1M0 15h1M31 15h1M0 16h2M30 16h2M0 17h3M31 17h1M0 18h4M0 19h4M31 19h1M0 20h5M31 20h1M0 21h8M29 21h3M0 22h9M15 22h1M24 22h1M27 22h5M0 23h11M14 23h4M22 23h10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#000000",cljs.core.cst$kw$d,"M14 0h4M13 1h1M18 1h1M11 2h2M19 2h1M10 3h1M19 3h1M21 3h1M10 4h1M20 4h1M22 4h1M10 5h1M23 5h1M9 6h1M23 6h1M8 7h1M23 7h1M5 8h3M24 8h1M27 8h1M4 9h1M24 9h1M26 9h1M28 9h1M3 10h1M25 10h1M28 10h1M28 11h1M30 11h1M1 12h2M29 12h1M31 12h1M0 13h1M31 13h1M0 14h1M31 14h1M1 15h1M30 15h1M2 16h1M29 16h1M3 17h1M30 17h1M4 18h1M31 18h1M4 19h1M5 20h3M29 20h2M8 21h1M15 21h1M24 21h1M27 21h2M9 22h2M14 22h1M16 22h2M22 22h2M25 22h2M11 23h3M18 23h4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#fefefe",cljs.core.cst$kw$d,"M14 1h4M13 2h6M11 3h8M11 4h9M21 4h1M11 5h6M18 5h5M10 6h3M15 6h3M19 6h4M9 7h3M13 7h10M8 8h16M5 9h19M27 9h1M4 10h21M26 10h2M3 11h25M3 12h26M30 12h1M1 13h30M1 14h30M2 15h28M3 16h2M6 16h11M18 16h11M4 17h2M7 17h2M10 17h6M17 17h13M5 18h2M11 18h3M18 18h4M23 18h8M5 19h5M16 19h1M22 19h9M8 20h4M14 20h4M21 20h8M9 21h6M16 21h8M25 21h2M11 22h3M18 22h4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#39bdff",cljs.core.cst$kw$d,"M17 5h1M13 6h2M18 6h1M12 7h1M5 16h1M17 16h1M6 17h1M9 17h1M16 17h1M7 18h4M14 18h4M22 18h1M10 19h6M17 19h5M12 20h2M18 20h3"], null)], null)], null);
});
mecca.mario.mario_icon = (function mecca$mario$mario_icon(x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + 30.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3) + y)),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function mecca$mario$mario_icon_$_iter__19894(s__19895){
return (new cljs.core.LazySeq(null,(function (){
var s__19895__$1 = s__19895;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19895__$1);
if(temp__5457__auto__){
var s__19895__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19895__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19895__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19897 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19896 = (0);
while(true){
if((i__19896 < size__4323__auto__)){
var vec__19898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19896);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19898,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19898,(1),null);
cljs.core.chunk_append(b__19897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__19904 = (i__19896 + (1));
i__19896 = G__19904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19897),mecca$mario$mario_icon_$_iter__19894(cljs.core.chunk_rest(s__19895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19897),null);
}
} else {
var vec__19901 = cljs.core.first(s__19895__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19901,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$mario$mario_icon_$_iter__19894(cljs.core.rest(s__19895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c04020","M3 0h5M2 1h1M8 1h2M2 2h1M10 2h1M11 3h1M12 4h1M13 5h1M13 6h1M1 8h1M13 8h1M1 9h1M13 9h1M1 10h1M6 10h1M1 13h3M10 13h1M3 14h8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M3 1h2M6 1h2M8 2h2M10 3h1M11 4h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M5 1h1M5 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c000c0","M3 2h1M7 2h1M8 3h2M10 4h1M11 5h2M11 6h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M4 2h1M3 6h2M6 6h2M3 7h1M7 7h1M3 8h1M7 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M6 2h1M5 6h1M8 6h1M8 7h2M13 7h1M9 8h1M5 9h2M12 9h1M2 10h4M11 10h3M9 11h3M9 12h2M4 13h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M1 3h7M0 4h10M0 5h11M1 6h2M9 6h2M4 7h1M6 7h1M10 7h2M4 8h1M6 8h1M10 8h2M9 9h3M7 10h1M10 10h1M0 11h9M12 11h2M1 12h6M11 12h2M11 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8c080","M5 7h1M12 7h1M2 8h1M5 8h1M8 8h1M12 8h1M2 9h3M7 9h2M8 10h2M7 12h2"], null)], null));
})());
});
mecca.mario.mario_note = (function mecca$mario$mario_note(x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + 30.5)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3) + y)),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null)], null),(function (){var iter__4324__auto__ = (function mecca$mario$mario_note_$_iter__19905(s__19906){
return (new cljs.core.LazySeq(null,(function (){
var s__19906__$1 = s__19906;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19906__$1);
if(temp__5457__auto__){
var s__19906__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19906__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19906__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19908 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19907 = (0);
while(true){
if((i__19907 < size__4323__auto__)){
var vec__19909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19907);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19909,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19909,(1),null);
cljs.core.chunk_append(b__19908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__19915 = (i__19907 + (1));
i__19907 = G__19915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19908),mecca$mario$mario_note_$_iter__19905(cljs.core.chunk_rest(s__19906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19908),null);
}
} else {
var vec__19912 = cljs.core.first(s__19906__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$mario$mario_note_$_iter__19905(cljs.core.rest(s__19906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c04020","M3 0h5M2 1h1M8 1h2M2 2h1M10 2h1M11 3h1M12 4h1M13 5h1M13 6h1M1 8h1M13 8h1M1 9h1M13 9h1M1 10h1M6 10h1M1 13h3M10 13h1M3 14h8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M3 1h2M6 1h2M8 2h2M10 3h1M11 4h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M5 1h1M5 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c000c0","M3 2h1M7 2h1M8 3h2M10 4h1M11 5h2M11 6h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M4 2h1M3 6h2M6 6h2M3 7h1M7 7h1M3 8h1M7 8h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M6 2h1M5 6h1M8 6h1M8 7h2M13 7h1M9 8h1M5 9h2M12 9h1M2 10h4M11 10h3M9 11h3M9 12h2M4 13h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M1 3h7M0 4h10M0 5h11M1 6h2M9 6h2M4 7h1M6 7h1M10 7h2M4 8h1M6 8h1M10 8h2M9 9h3M7 10h1M10 10h1M0 11h9M12 11h2M1 12h6M11 12h2M11 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8c080","M5 7h1M12 7h1M2 8h1M5 8h1M8 8h1M12 8h1M2 9h3M7 9h2M8 10h2M7 12h2"], null)], null));
})());
});
mecca.mario.color_paths = (function mecca$mario$color_paths(var_args){
var G__19917 = arguments.length;
switch (G__19917) {
case 4:
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$4 = (function (paths,x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,scale);
});

mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5 = (function (attrs,paths,x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$mario$iter__19918(s__19919){
return (new cljs.core.LazySeq(null,(function (){
var s__19919__$1 = s__19919;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19919__$1);
if(temp__5457__auto__){
var s__19919__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19919__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19919__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19921 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19920 = (0);
while(true){
if((i__19920 < size__4323__auto__)){
var vec__19922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19920);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19922,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19922,(1),null);
cljs.core.chunk_append(b__19921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__19929 = (i__19920 + (1));
i__19920 = G__19929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19921),mecca$mario$iter__19918(cljs.core.chunk_rest(s__19919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19921),null);
}
} else {
var vec__19925 = cljs.core.first(s__19919__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$mario$iter__19918(cljs.core.rest(s__19919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(paths);
})());
});

mecca.mario.color_paths.cljs$lang$maxFixedArity = 5;

mecca.mario.shroom = (function mecca$mario$shroom(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M5 0h6M3 1h2M11 1h2M2 2h1M13 2h1M1 3h1M14 3h1M1 4h1M14 4h1M0 5h1M15 5h1M0 6h1M15 6h1M0 7h1M15 7h1M0 8h1M15 8h1M0 9h1M15 9h1M0 10h1M4 10h8M15 10h1M1 11h3M6 11h1M9 11h1M12 11h3M2 12h1M6 12h1M9 12h1M13 12h1M2 13h1M13 13h1M3 14h1M12 14h1M4 15h8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M5 1h2M3 2h4M11 2h2M2 3h4M12 3h2M2 4h3M7 4h4M13 4h1M6 5h6M2 6h2M6 6h6M1 7h4M6 7h6M14 7h1M1 8h4M7 8h4M13 8h2M2 9h2M13 9h2M14 10h1M4 11h2M7 11h2M10 11h2M3 12h3M7 12h2M10 12h3M3 13h10M4 14h8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c000c0","M7 1h4M1 5h1M14 5h1M1 6h1M14 6h1M1 9h1M4 9h9M1 10h3M12 10h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M7 2h4M6 3h6M5 4h2M11 4h2M2 5h4M12 5h2M4 6h2M12 6h2M5 7h1M12 7h2M5 8h2M11 8h2"], null)], null),x,y,scale);
});
mecca.mario.yoshi = (function mecca$mario$yoshi(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M6 0h3M5 1h1M9 1h1M10 2h1M3 3h2M6 3h1M10 3h2M1 4h2M6 4h1M12 4h1M0 5h1M9 5h1M12 5h1M0 6h1M7 6h2M12 6h1M0 7h1M3 7h4M11 7h1M1 8h3M11 8h1M4 9h1M12 9h2M15 9h1M4 10h1M14 10h2M3 11h1M15 11h1M3 12h1M8 12h6M15 12h1M3 13h1M7 13h2M13 13h1M15 13h1M4 14h1M7 14h1M13 14h2M5 15h9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#008040","M6 1h3M8 2h2M9 3h1M3 4h1M11 4h1M1 5h1M11 5h1M11 6h1M10 7h1M10 8h1M11 9h1M12 10h2M14 11h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M5 2h3M5 3h1M7 3h2M5 4h1M7 4h3M2 5h1M6 5h3M7 7h1M4 8h4M5 9h4M5 10h5M4 11h7M4 12h4M4 13h3M14 13h1M5 14h2M8 14h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00f800","M4 4h1M10 4h1M3 5h2M10 5h1M1 6h2M10 6h1M9 7h1M9 8h1M10 9h1M11 10h1M12 11h2M14 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M5 5h1M3 6h4M9 6h1M1 7h2M8 7h1M8 8h1M9 9h1M10 10h1M11 11h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M9 13h2M9 14h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c04020","M11 13h2M10 14h3"], null)], null),x,y,scale);
});
mecca.mario.star = (function mecca$mario$star(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M7 0h1M6 1h1M8 1h1M6 2h1M8 2h1M5 3h1M9 3h1M5 4h1M9 4h1M0 5h5M10 5h5M0 6h1M6 6h1M8 6h1M14 6h1M1 7h1M6 7h1M8 7h1M13 7h1M2 8h1M6 8h1M8 8h1M12 8h1M3 9h1M11 9h1M2 10h1M12 10h1M2 11h1M12 11h1M1 12h1M7 12h1M13 12h1M1 13h1M5 13h2M8 13h2M13 13h1M0 14h1M3 14h2M10 14h2M14 14h1M0 15h3M12 15h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M7 1h1M7 2h1M6 3h3M6 4h3M5 5h5M1 6h5M7 6h1M9 6h5M2 7h4M7 7h1M9 7h4M3 8h3M7 8h1M9 8h3M4 9h7M3 10h9M3 11h9M2 12h5M8 12h5M2 13h3M10 13h3M1 14h2M12 14h2"], null)], null),x,y,scale);
});
mecca.mario.flower = (function mecca$mario$flower(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M7 0h2M2 1h1M6 1h1M9 1h1M13 1h1M1 2h1M3 2h1M5 2h1M10 2h1M12 2h1M14 2h1M1 3h1M4 3h1M11 3h1M14 3h1M0 4h1M15 4h1M0 5h1M4 5h2M9 5h2M15 5h1M0 6h1M3 6h1M6 6h1M8 6h1M11 6h1M15 6h1M0 7h1M15 7h1M1 8h1M14 8h1M2 9h1M13 9h1M3 10h2M11 10h2M5 11h6M2 12h3M6 12h1M9 12h4M1 13h1M5 13h2M9 13h1M13 13h1M0 14h1M6 14h1M8 14h1M14 14h1M0 15h1M6 15h3M14 15h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M7 1h2M2 2h1M6 2h4M2 3h2M5 3h6M12 3h2M1 4h13M1 5h3M6 5h3M11 5h3M1 6h2M4 6h2M7 6h1M9 6h2M12 6h2M1 7h12M2 8h11M4 9h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c04020","M13 2h1M14 4h1M14 5h1M14 6h1M13 7h2M13 8h1M3 9h1M10 9h3M5 10h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#008040","M7 12h1M2 13h2M7 13h1M10 13h2M1 14h4M7 14h1M9 14h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00f800","M8 12h1M4 13h1M8 13h1M12 13h1M5 14h1M13 14h1M1 15h5M9 15h5"], null)], null),x,y,scale);
});
mecca.mario.gb = (function mecca$mario$gb(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#808080","M1 0h10M0 1h1M11 1h1M0 2h1M2 2h8M11 2h1M0 3h1M2 3h2M8 3h2M11 3h1M0 4h1M2 4h2M8 4h2M11 4h1M0 5h1M2 5h2M8 5h2M11 5h1M0 6h1M2 6h2M8 6h2M11 6h1M0 7h1M2 7h7M11 7h1M0 8h1M11 8h1M0 9h1M11 9h1M0 10h1M11 10h1M0 11h1M11 11h1M0 12h1M11 12h1M0 13h1M11 13h1M0 14h1M10 14h2M1 15h10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M1 1h1M4 3h1M4 4h1M4 5h1M4 6h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c0c0c0","M2 1h9M1 2h1M10 2h1M1 3h1M10 3h1M1 4h1M10 4h1M1 5h1M10 5h1M1 6h1M10 6h1M1 7h1M9 7h2M1 8h10M1 9h10M1 10h2M4 10h5M10 10h1M1 11h1M5 11h6M1 12h2M4 12h3M8 12h3M1 13h10M1 14h9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M5 3h3M5 4h3M5 5h3M5 6h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M3 10h1M2 11h3M3 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c000c0","M9 10h1M7 12h1"], null)], null),x,y,scale);
});
mecca.mario.dog = (function mecca$mario$dog(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M0 0h2M5 0h2M0 1h1M2 1h3M6 1h1M14 1h1M0 2h1M6 2h8M0 3h2M4 3h1M13 3h1M0 4h1M13 4h1M0 5h1M2 5h1M5 5h1M13 5h1M0 6h1M5 6h1M13 6h1M0 7h5M13 7h1M1 8h1M3 8h1M5 8h7M13 8h1M1 9h1M3 9h1M5 9h1M9 9h1M11 9h1M13 9h1M1 10h1M3 10h1M5 10h1M9 10h1M11 10h1M13 10h1M1 11h1M3 11h1M5 11h1M9 11h1M11 11h1M13 11h1M1 12h5M9 12h5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M1 1h1M5 1h1M1 2h5M2 3h2M5 3h8M1 4h12M1 5h1M3 5h2M6 5h7M1 6h4M6 6h7M5 7h8M2 8h1M4 8h1M12 8h1M2 9h1M4 9h1M10 9h1M12 9h1M2 10h1M4 10h1M10 10h1M12 10h1M2 11h1M4 11h1M10 11h1M12 11h1"], null)], null),x,y,scale);
});
mecca.mario.kitty = (function mecca$mario$kitty(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M13 0h1M1 1h1M5 1h1M12 1h1M0 2h1M2 2h3M6 2h1M13 2h1M0 3h1M6 3h1M12 3h1M0 4h1M2 4h1M4 4h1M6 4h1M13 4h1M0 5h1M7 5h6M1 6h1M3 6h1M13 6h1M1 7h1M13 7h1M1 8h1M13 8h1M1 9h1M3 9h1M5 9h7M13 9h1M1 10h1M3 10h1M5 10h1M9 10h1M11 10h1M13 10h1M1 11h1M3 11h1M5 11h1M9 11h1M11 11h1M13 11h1M2 12h1M4 12h1M10 12h1M12 12h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8c080","M1 2h1M5 2h1M2 3h3M1 4h1M3 4h1M5 4h1M1 5h2M4 5h3M5 6h2M8 6h1M10 6h1M12 6h1M2 7h5M8 7h1M10 7h1M12 7h1M2 8h5M8 8h1M10 8h1M12 8h1M2 9h1M4 9h1M12 9h1M2 10h1M4 10h1M10 10h1M12 10h1M2 11h1M4 11h1M10 11h1M12 11h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c04020","M1 3h1M5 3h1M3 5h1M2 6h1M4 6h1M7 6h1M9 6h1M11 6h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#806000","M7 7h1M9 7h1M11 7h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M7 8h1M9 8h1M11 8h1"], null)], null),x,y,scale);
});
mecca.mario.pig = (function mecca$mario$pig(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M3 0h1M7 0h1M2 1h1M4 1h3M8 1h1M1 2h1M9 2h1M15 2h1M0 3h1M3 3h1M7 3h1M10 3h1M14 3h1M0 4h1M10 4h1M15 4h1M0 5h1M3 5h5M10 5h5M0 6h1M2 6h1M8 6h1M10 6h1M14 6h1M0 7h1M2 7h1M4 7h1M6 7h1M8 7h1M10 7h1M14 7h1M0 8h1M2 8h1M8 8h1M10 8h1M14 8h1M0 9h1M2 9h7M10 9h1M14 9h1M1 10h1M3 10h1M7 10h1M9 10h1M14 10h1M2 11h7M14 11h1M2 12h1M14 12h1M2 13h1M4 13h1M6 13h7M14 13h1M2 14h1M4 14h1M6 14h1M10 14h1M12 14h1M14 14h1M3 15h1M5 15h1M11 15h1M13 15h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8c080","M3 1h1M7 1h1M2 2h7M1 3h1M4 3h3M9 3h1M1 4h9M1 5h2M8 5h2M1 6h1M3 6h5M9 6h1M11 6h3M1 7h1M3 7h1M5 7h1M7 7h1M9 7h1M11 7h3M1 8h1M3 8h5M9 8h1M11 8h3M1 9h1M9 9h1M11 9h3M2 10h1M8 10h1M10 10h4M9 11h5M3 12h11M3 13h1M5 13h1M13 13h1M3 14h1M5 14h1M11 14h1M13 14h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M2 3h1M8 3h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M4 10h3"], null)], null),x,y,scale);
});
mecca.mario.swan = (function mecca$mario$swan(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c0c0c0","M3 1h3M5 2h2M6 3h2M5 4h1M7 4h1M4 7h1M15 7h1M3 8h1M9 8h2M14 8h2M2 9h1M5 9h3M11 9h3M15 9h1M1 10h1M3 10h3M14 10h1M1 11h1M4 11h3M11 11h3M1 12h3M8 12h4M2 13h1M4 13h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#806000","M2 2h1M3 4h1M1 5h2M7 14h3M8 15h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M3 2h2M4 3h2M6 4h1M6 5h1M6 6h1M5 7h1M4 8h1M3 9h1M8 9h3M14 9h1M2 10h1M6 10h8M2 11h2M7 11h4M4 12h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M1 3h2M0 4h1M0 5h1M6 16h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M3 3h1M1 4h2M5 16h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#808080","M4 4h1M5 5h1M7 5h1M5 6h1M7 6h1M6 7h1M5 8h4M4 9h1M14 11h1M7 12h1M12 12h3M3 13h1M8 13h6M4 14h3M10 14h2"], null)], null),x,y,scale);
});
mecca.mario.face = (function mecca$mario$face(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M5 1h6M3 2h2M11 2h2M2 3h1M13 3h1M1 4h1M14 4h1M1 5h1M3 5h3M10 5h3M14 5h1M0 6h1M2 6h1M4 6h1M6 6h1M9 6h1M11 6h1M13 6h1M15 6h1M0 7h1M3 7h3M10 7h3M15 7h1M0 8h1M15 8h1M0 9h1M7 9h2M15 9h1M0 10h1M6 10h1M9 10h1M15 10h1M0 11h1M3 11h1M12 11h1M15 11h1M1 12h1M4 12h8M14 12h1M1 13h1M5 13h1M10 13h1M14 13h1M2 14h1M6 14h4M13 14h1M3 15h2M11 15h2M5 16h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8c080","M5 2h6M3 3h10M2 4h12M2 5h1M6 5h4M13 5h1M1 6h1M7 6h2M14 6h1M1 7h2M6 7h4M13 7h2M1 8h14M1 9h6M9 9h6M1 10h5M7 10h2M10 10h5M1 11h2M4 11h8M13 11h2M2 12h2M12 12h2M2 13h3M11 13h3M3 14h3M10 14h3M5 15h6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M3 6h1M5 6h1M10 6h1M12 6h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M6 13h4"], null)], null),x,y,scale);
});
mecca.mario.plane = (function mecca$mario$plane(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M3 0h3M13 0h2M2 1h1M6 1h1M12 1h1M15 1h1M2 2h2M7 2h5M15 2h1M1 3h1M15 3h1M0 4h1M15 4h1M0 5h1M15 5h1M0 6h1M5 6h1M10 6h1M13 6h2M1 7h1M6 7h1M10 7h3M2 8h6M10 8h1M8 9h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M3 1h2M13 1h2M4 2h2M12 2h3M2 3h13M1 5h14M6 6h4M7 7h3M8 8h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c0c0c0","M5 1h1M6 2h1M1 6h4M11 6h2M2 7h4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M1 4h14"], null)], null),x,y,scale);
});
mecca.mario.boat = (function mecca$mario$boat(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M6 0h1M11 0h3M6 1h1M11 1h1M13 1h1M6 2h1M11 2h1M13 2h1M6 3h1M8 3h7M6 4h1M8 4h1M14 4h1M0 5h5M6 5h1M8 5h1M10 5h1M12 5h1M14 5h1M0 6h1M4 6h12M1 7h1M15 7h1M1 8h15M1 9h1M15 9h1M2 10h1M14 10h1M2 11h13"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M12 1h1M12 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M9 4h5M9 5h1M11 5h1M13 5h1M1 6h3M2 7h13"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M2 9h1M3 10h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M3 9h12M4 10h10"], null)], null),x,y,scale);
});
mecca.mario.car = (function mecca$mario$car(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#0000f8","M6 0h1M5 1h1M4 2h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","M7 0h5M7 1h1M10 1h1M12 1h1M6 2h1M11 2h1M13 2h1M1 3h11M14 3h1M0 4h1M15 4h1M0 5h1M15 5h1M0 6h1M3 6h2M11 6h2M15 6h1M0 7h1M2 7h1M5 7h1M10 7h1M13 7h1M15 7h1M1 8h2M5 8h6M13 8h2M3 9h2M11 9h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M6 1h1M8 1h1M5 2h1M7 2h1M4 7h1M12 7h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#00f8f8","M9 1h1M8 2h3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f88000","M11 1h1M12 2h1M12 3h2M14 4h1M1 5h14M1 6h2M5 6h6M13 6h2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f800","M1 4h13"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M1 7h1M6 7h4M14 7h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#808080","M3 7h1M11 7h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#c0c0c0","M3 8h2M11 8h2"], null)], null),x,y,scale);
});
mecca.mario.heart = (function mecca$mario$heart(x,y,scale){
return mecca.mario.color_paths.cljs$core$IFn$_invoke$arity$5(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f80000","M2 0h4M9 0h4M1 1h2M5 1h2M8 1h1M12 1h2M1 2h1M3 2h5M9 2h5M0 3h1M2 3h13M0 4h1M2 4h13M0 5h1M2 5h13M1 6h1M3 6h11M1 7h2M4 7h10M2 8h2M5 8h8M3 9h9M4 10h2M7 10h4M5 11h5M6 12h3M7 13h1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f8f8f8","M3 1h2M9 1h3M2 2h1M8 2h1M1 3h1M1 4h1M1 5h1M2 6h1M3 7h1M4 8h1M6 10h1"], null)], null),x,y,scale);
});
mecca.mario.floor_tile = (function mecca$mario$floor_tile(length){
return cljs.core.PersistentVector.fromArray([cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(0.125),") translate (0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((115)),")"].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(0),((32) * length),(1),(1),"2 9 1 4"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(0),((32) * length),(1),(-1),"8 2 4 2"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(0),((32) * length),(10),(-9),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(1),((32) * length),(9),(0),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(1),((32) * length),(9),(-1),"8 8"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(1),((32) * length),(4),(-10),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(1),((32) * length),(3),(-11),"4 12"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(1),((32) * length),(4),(-15),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(4),((32) * length),(1),(-11),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(4),((32) * length),(1),(-12),"3 13"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(5),((32) * length),(1),(-10),"1 4 1 10"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(5),((32) * length),(1),(-11),"4 12"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(6),((32) * length),(1),(-10),"5 11"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(6),((32) * length),(10),(-15),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(7),((32) * length),(3),(-10),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(7),((32) * length),(7),(-11),"4 12"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(10),((32) * length),(1),(0),"2 6 1 7"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(10),((32) * length),(1),(-2),"6 2 5 3"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(10),((32) * length),(1),(-9),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(11),((32) * length),(1),(0),"2 7 1 6"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(11),((32) * length),(1),(-2),"2 4 1 9"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(11),((32) * length),(1),(-4),"4 2 1 9"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(12),((32) * length),(1),(0),"1 1 2 4 1 7"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(12),((32) * length),(3),(-1),"1 7 5 3"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(13),((32) * length),(1),(0),"1 3 3 1 1 7"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(12),((32) * length),(1),(-4),"4 12"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(13),((32) * length),(1),(-2),"2 14"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(13),((32) * length),(1),(-7),"1 15"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(14),((32) * length),(1),(0),"1 7 1 7"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(14),((32) * length),(1),(-2),"5 11"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(14),((32) * length),(1),(-7),"1 6 1 8"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#e45e10",(15),((32) * length),(1),(1),"2 6 1 7"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"black",(15),((32) * length),(1),(-1),"6 2 6 2"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.tile,"#f0d0b0",(15),((32) * length),(1),(-8),"1 15"], null)], true);
});
