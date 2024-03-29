// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.roms');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.examples.mario');
goog.require('mecca.examples.smw');
mecca.view.svg_paths = (function mecca$view$svg_paths(var_args){
var G__13242 = arguments.length;
switch (G__13242) {
case 1:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$1 = (function (paths){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,(0),(0),(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$2 = (function (attrs,paths){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(attrs,paths,(0),(0),(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$3 = (function (paths,x,y){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,(1));
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$4 = (function (paths,x,y,scale){
return mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5(null,paths,x,y,scale);
});

mecca.view.svg_paths.cljs$core$IFn$_invoke$arity$5 = (function (attrs,paths,x,y,scale){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null)], 0))], null),(function (){var iter__4324__auto__ = (function mecca$view$iter__13243(s__13244){
return (new cljs.core.LazySeq(null,(function (){
var s__13244__$1 = s__13244;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__13244__$1);
if(temp__5720__auto__){
var s__13244__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13244__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13244__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13246 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13245 = (0);
while(true){
if((i__13245 < size__4323__auto__)){
var vec__13247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13245);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13247,(1),null);
cljs.core.chunk_append(b__13246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null));

var G__13254 = (i__13245 + (1));
i__13245 = G__13254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13246),mecca$view$iter__13243(cljs.core.chunk_rest(s__13244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13246),null);
}
} else {
var vec__13250 = cljs.core.first(s__13244__$2);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13250,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$d,path], null)], null),mecca$view$iter__13243(cljs.core.rest(s__13244__$2)));
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

mecca.view.svg_paths.cljs$lang$maxFixedArity = 5;

mecca.view.header_table = (function mecca$view$header_table(file,offsets){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offsets"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"NESplanation"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__13255(s__13256){
return (new cljs.core.LazySeq(null,(function (){
var s__13256__$1 = s__13256;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__13256__$1);
if(temp__5720__auto__){
var s__13256__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13256__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13256__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13258 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13257 = (0);
while(true){
if((i__13257 < size__4323__auto__)){
var vec__13259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13257);
var vec__13262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13259,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13262,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13262,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13259,(1),null);
cljs.core.chunk_append(b__13258,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13265 = mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to);
return (notes.cljs$core$IFn$_invoke$arity$1 ? notes.cljs$core$IFn$_invoke$arity$1(G__13265) : notes.call(null,G__13265));
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)));

var G__13273 = (i__13257 + (1));
i__13257 = G__13273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13258),mecca$view$header_table_$_iter__13255(cljs.core.chunk_rest(s__13256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13258),null);
}
} else {
var vec__13266 = cljs.core.first(s__13256__$2);
var vec__13269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13266,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13269,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13269,(1),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13266,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13272 = mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to);
return (notes.cljs$core$IFn$_invoke$arity$1 ? notes.cljs$core$IFn$_invoke$arity$1(G__13272) : notes.call(null,G__13272));
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)),mecca$view$header_table_$_iter__13255(cljs.core.rest(s__13256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(offsets);
})())], null)], null)], null);
});
mecca.view.number_input = (function mecca$view$number_input(label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$height,"4%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,on_change], null)], null)], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,onclick], null),label], null);
});
mecca.view.format_hex = (function mecca$view$format_hex(s){
var length = cljs.core.count(s);
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) - length),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
mecca.view.bank_selector = (function mecca$view$bank_selector(){
var bank = (function (){var G__13276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bank], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13276) : re_frame.core.subscribe.call(null,G__13276));
})();
var hovered = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (bank,hovered){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$view_DASH_box,"0 -0.5 10 11",cljs.core.cst$kw$transform,["translate(0,10)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),cljs.core.cst$kw$left))?null:"scale(0.7)"))].join(''),cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (bank,hovered){
return (function (){
return cljs.core.reset_BANG_(hovered,cljs.core.cst$kw$left);
});})(bank,hovered))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (bank,hovered){
return (function (){
return cljs.core.reset_BANG_(hovered,null);
});})(bank,hovered))
,cljs.core.cst$kw$on_DASH_click,((function (bank,hovered){
return (function (){
var G__13277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dec_DASH_bank], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13277) : re_frame.core.dispatch.call(null,G__13277));
});})(bank,hovered))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#000000",cljs.core.cst$kw$d,"M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#f8f800",cljs.core.cst$kw$d,"M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"], null)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" - ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bank,hovered){
return (function (p1__13274_SHARP_){
return mecca.view.format_hex(p1__13274_SHARP_.toString((16)));
});})(bank,hovered))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(parseInt(cljs.core.deref(bank)),cljs.core.iterate(((function (bank,hovered){
return (function (p1__13275_SHARP_){
return ((8192) + p1__13275_SHARP_);
});})(bank,hovered))
,(0))))))))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,(30),cljs.core.cst$kw$view_DASH_box,"0 -0.5 10 11",cljs.core.cst$kw$transform,["translate (0,5),rotate (180)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hovered),cljs.core.cst$kw$right))?null:"scale(0.7)"))].join(''),cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (bank,hovered){
return (function (){
return cljs.core.reset_BANG_(hovered,cljs.core.cst$kw$right);
});})(bank,hovered))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (bank,hovered){
return (function (){
return cljs.core.reset_BANG_(hovered,null);
});})(bank,hovered))
,cljs.core.cst$kw$on_DASH_click,((function (bank,hovered){
return (function (){
var G__13278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inc_DASH_bank], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13278) : re_frame.core.dispatch.call(null,G__13278));
});})(bank,hovered))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#000000",cljs.core.cst$kw$d,"M4 0h1M3 1h2M2 2h1M4 2h3M1 3h1M0 4h1M1 5h1M2 6h1M4 6h3M3 7h2M4 8h1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,"#f8f800",cljs.core.cst$kw$d,"M3 2h1M2 3h5M1 4h6M2 5h5M3 6h1"], null)], null)], null)], null);
});
;})(bank,hovered))
});
mecca.view.rom_data = (function mecca$view$rom_data(){
var bank = (function (){var G__13279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bank], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13279) : re_frame.core.subscribe.call(null,G__13279));
})();
return ((function (bank){
return (function (file){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Select 8KB bank:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bank_selector], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(30),cljs.core.cst$kw$cols,(48),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.rom_bank(file,parseInt(cljs.core.deref(bank))))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null)], null);
});
;})(bank))
});
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var G__13280_13289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_loading], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13280_13289) : re_frame.core.dispatch.call(null,G__13280_13289));

var dom = goog.object.get(e,"target");
var file = (function (){var G__13281 = dom;
var G__13282 = ["files",(0)];
return goog.object.getValueByKeys(G__13281,G__13282);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (e__$1){
var G__13283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__13284 = (new Uint8Array(e__$1.target.result));
return goog.crypt.byteArrayToHex(G__13284);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13283) : re_frame.core.dispatch.call(null,G__13283));
});})(dom,file,reader))
;
})], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref((function (){var G__13287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13287) : re_frame.core.subscribe.call(null,G__13287));
})())));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__13288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13288) : re_frame.core.subscribe.call(null,G__13288));
})());
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$fade,"Loading..."], null):null)], null);
});
mecca.view.menu_items = (function mecca$view$menu_items(){
var selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var menu_QMARK_ = (function (){var G__13290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13290) : re_frame.core.subscribe.call(null,G__13290));
})();
return ((function (selected,menu_QMARK_){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (selected,menu_QMARK_){
return (function mecca$view$menu_items_$_iter__13291(s__13292){
return (new cljs.core.LazySeq(null,((function (selected,menu_QMARK_){
return (function (){
var s__13292__$1 = s__13292;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__13292__$1);
if(temp__5720__auto__){
var s__13292__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13292__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13292__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13294 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13293 = (0);
while(true){
if((i__13293 < size__4323__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13293);
cljs.core.chunk_append(b__13294,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (i__13293,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(i__13293,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),(function (){var G__13295 = choice;
switch (G__13295) {
case (0):
return ((function (i__13293,G__13295,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
var G__13296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$create_DASH_oscillator], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13296) : re_frame.core.dispatch.call(null,G__13296));
});
;})(i__13293,G__13295,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))

break;
default:
return ((function (i__13293,G__13295,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
var G__13297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13297) : re_frame.core.dispatch.call(null,G__13297));
});
;})(i__13293,G__13295,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))

}
})(),0.5,((function (i__13293,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(i__13293,choice,c__4322__auto__,size__4323__auto__,b__13294,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13298 = choice;
switch (G__13298) {
case (0):
return "Boot APU";

break;
default:
return ["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('');

}
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)));

var G__13305 = (i__13293 + (1));
i__13293 = G__13305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13294),mecca$view$menu_items_$_iter__13291(cljs.core.chunk_rest(s__13292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13294),null);
}
} else {
var choice = cljs.core.first(s__13292__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),(function (){var G__13299 = choice;
switch (G__13299) {
case (0):
return ((function (G__13299,choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
var G__13300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$create_DASH_oscillator], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13300) : re_frame.core.dispatch.call(null,G__13300));
});
;})(G__13299,choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))

break;
default:
return ((function (G__13299,choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
var G__13301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13301) : re_frame.core.dispatch.call(null,G__13301));
});
;})(G__13299,choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))

}
})(),0.5,((function (choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(choice,s__13292__$2,temp__5720__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13302 = choice;
switch (G__13302) {
case (0):
return "Boot APU";

break;
default:
return ["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('');

}
})())].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)),mecca$view$menu_items_$_iter__13291(cljs.core.rest(s__13292__$2)));
}
} else {
return null;
}
break;
}
});})(selected,menu_QMARK_))
,null,null));
});})(selected,menu_QMARK_))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());
});
;})(selected,menu_QMARK_))
});
mecca.view.burger_menu = (function mecca$view$burger_menu(){
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var menu_QMARK_ = (function (){var G__13308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13308) : re_frame.core.subscribe.call(null,G__13308));
})();
return ((function (hover_QMARK_,menu_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(128),cljs.core.cst$kw$height,(96)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (hover_QMARK_,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
});})(hover_QMARK_,menu_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (hover_QMARK_,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
});})(hover_QMARK_,menu_QMARK_))
,cljs.core.cst$kw$on_DASH_click,((function (hover_QMARK_,menu_QMARK_){
return (function (){
var G__13309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13309) : re_frame.core.dispatch.call(null,G__13309));
});})(hover_QMARK_,menu_QMARK_))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),(10),"gray","#f7f6cf",(64),0.5,(64),(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?"visible":"hidden"),(64)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(96),cljs.core.cst$kw$y,(54),cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,(54)], null),"\uD83C\uDF54"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$menu,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(32),(5),"gray","lightgray",(96),0.5,(0),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(58)])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.menu_items], null)], null)], null);
});
;})(hover_QMARK_,menu_QMARK_))
});
mecca.view.nav_bar = (function mecca$view$nav_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$parent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA ROM Reader"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Inspect image, sound and game data from Nintendo binaries"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$narrow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.burger_menu], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = (function (){var G__13310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13310) : re_frame.core.subscribe.call(null,G__13310));
})();
var selected_item = (function (){var G__13311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13311) : re_frame.core.subscribe.call(null,G__13311));
})();
return ((function (file,selected_item){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.deref((function (){var G__13312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13312) : re_frame.core.subscribe.call(null,G__13312));
})()))?((function (file,selected_item){
return (function (){
var G__13313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13313) : re_frame.core.dispatch.call(null,G__13313));
});})(file,selected_item))
:null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.nav_bar], null),(cljs.core.truth_(cljs.core.deref(selected_item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$green,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(selected_item) + (1)))," selected :)"].join('')], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load NES ROM",((function (file,selected_item){
return (function (){
var G__13314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.mario.mario_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13314) : re_frame.core.dispatch.call(null,G__13314));
});})(file,selected_item))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load SNES ROM",((function (file,selected_item){
return (function (){
var G__13315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.smw.smw_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13315) : re_frame.core.dispatch.call(null,G__13315));
});})(file,selected_item))
], null),(cljs.core.truth_(mecca.roms.nes_file_QMARK_(cljs.core.deref(file)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$green,"This is an NES ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,cljs.core.deref(file),mecca.roms.nes_offsets], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.last(mecca.roms.smc_title(cljs.core.deref(file)))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$green,"This is a Super Magicom ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Title: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.smc_title(cljs.core.deref(file)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"ROM layout: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,(function (){var G__13316 = cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33237)));
switch (G__13316) {
case "20":
return "LoROM";

break;
default:
return cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33237)));

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Cartridge type (ROM-only / with save-RAM): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33238))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["ROM byte size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33239))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["RAM byte size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33240))))].join('')], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.rom_data,cljs.core.deref(file)], null)], null);
});
;})(file,selected_item))
});
