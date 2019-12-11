// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12605){
var vec__12606 = p__12605;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12606,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__12609 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12609,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12613 = arguments.length;
switch (G__12613) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__12615_12639 = clojure.data.equality_partition;
var G__12616_12640 = "null";
var G__12617_12641 = ((function (G__12615_12639,G__12616_12640){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12615_12639,G__12616_12640))
;
goog.object.set(G__12615_12639,G__12616_12640,G__12617_12641);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12618_12642 = clojure.data.equality_partition;
var G__12619_12643 = "string";
var G__12620_12644 = ((function (G__12618_12642,G__12619_12643){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12618_12642,G__12619_12643))
;
goog.object.set(G__12618_12642,G__12619_12643,G__12620_12644);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12621_12645 = clojure.data.equality_partition;
var G__12622_12646 = "number";
var G__12623_12647 = ((function (G__12621_12645,G__12622_12646){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12621_12645,G__12622_12646))
;
goog.object.set(G__12621_12645,G__12622_12646,G__12623_12647);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12624_12648 = clojure.data.equality_partition;
var G__12625_12649 = "array";
var G__12626_12650 = ((function (G__12624_12648,G__12625_12649){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12624_12648,G__12625_12649))
;
goog.object.set(G__12624_12648,G__12625_12649,G__12626_12650);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12627_12651 = clojure.data.equality_partition;
var G__12628_12652 = "function";
var G__12629_12653 = ((function (G__12627_12651,G__12628_12652){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12627_12651,G__12628_12652))
;
goog.object.set(G__12627_12651,G__12628_12652,G__12629_12653);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12630_12654 = clojure.data.equality_partition;
var G__12631_12655 = "boolean";
var G__12632_12656 = ((function (G__12630_12654,G__12631_12655){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12630_12654,G__12631_12655))
;
goog.object.set(G__12630_12654,G__12631_12655,G__12632_12656);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12633_12657 = clojure.data.equality_partition;
var G__12634_12658 = "_";
var G__12635_12659 = ((function (G__12633_12657,G__12634_12658){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__12633_12657,G__12634_12658))
;
goog.object.set(G__12633_12657,G__12634_12658,G__12635_12659);
goog.object.set(clojure.data.Diff,"null",true);

var G__12660_12684 = clojure.data.diff_similar;
var G__12661_12685 = "null";
var G__12662_12686 = ((function (G__12660_12684,G__12661_12685){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12660_12684,G__12661_12685))
;
goog.object.set(G__12660_12684,G__12661_12685,G__12662_12686);

goog.object.set(clojure.data.Diff,"string",true);

var G__12663_12687 = clojure.data.diff_similar;
var G__12664_12688 = "string";
var G__12665_12689 = ((function (G__12663_12687,G__12664_12688){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12663_12687,G__12664_12688))
;
goog.object.set(G__12663_12687,G__12664_12688,G__12665_12689);

goog.object.set(clojure.data.Diff,"number",true);

var G__12666_12690 = clojure.data.diff_similar;
var G__12667_12691 = "number";
var G__12668_12692 = ((function (G__12666_12690,G__12667_12691){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12666_12690,G__12667_12691))
;
goog.object.set(G__12666_12690,G__12667_12691,G__12668_12692);

goog.object.set(clojure.data.Diff,"array",true);

var G__12669_12693 = clojure.data.diff_similar;
var G__12670_12694 = "array";
var G__12671_12695 = ((function (G__12669_12693,G__12670_12694){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12669_12693,G__12670_12694))
;
goog.object.set(G__12669_12693,G__12670_12694,G__12671_12695);

goog.object.set(clojure.data.Diff,"function",true);

var G__12672_12696 = clojure.data.diff_similar;
var G__12673_12697 = "function";
var G__12674_12698 = ((function (G__12672_12696,G__12673_12697){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12672_12696,G__12673_12697))
;
goog.object.set(G__12672_12696,G__12673_12697,G__12674_12698);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12675_12699 = clojure.data.diff_similar;
var G__12676_12700 = "boolean";
var G__12677_12701 = ((function (G__12675_12699,G__12676_12700){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12675_12699,G__12676_12700))
;
goog.object.set(G__12675_12699,G__12676_12700,G__12677_12701);

goog.object.set(clojure.data.Diff,"_",true);

var G__12678_12702 = clojure.data.diff_similar;
var G__12679_12703 = "_";
var G__12680_12704 = ((function (G__12678_12702,G__12679_12703){
return (function (a,b){
var fexpr__12682 = (function (){var G__12683 = clojure.data.equality_partition(a);
var G__12683__$1 = (((G__12683 instanceof cljs.core.Keyword))?G__12683.fqn:null);
switch (G__12683__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12683__$1)].join('')));

}
})();
return (fexpr__12682.cljs$core$IFn$_invoke$arity$2 ? fexpr__12682.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12682.call(null,a,b));
});})(G__12678_12702,G__12679_12703))
;
goog.object.set(G__12678_12702,G__12679_12703,G__12680_12704);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
