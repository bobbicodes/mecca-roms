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
mecca.view.header_table = (function mecca$view$header_table(file,offsets){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offsets"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Meaning"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__12587(s__12588){
return (new cljs.core.LazySeq(null,(function (){
var s__12588__$1 = s__12588;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12588__$1);
if(temp__5457__auto__){
var s__12588__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12588__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12588__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12590 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12589 = (0);
while(true){
if((i__12589 < size__4323__auto__)){
var vec__12591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12589);
var vec__12594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(1),null);
var note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(1),null);
cljs.core.chunk_append(b__12590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)));

var G__12603 = (i__12589 + (1));
i__12589 = G__12603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12590),mecca$view$header_table_$_iter__12587(cljs.core.chunk_rest(s__12588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12590),null);
}
} else {
var vec__12597 = cljs.core.first(s__12588__$2);
var vec__12600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(1),null);
var note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))," - $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,from], null)),mecca$view$header_table_$_iter__12587(cljs.core.rest(s__12588__$2)));
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
mecca.view.rom_data = (function mecca$view$rom_data(){
var bank = (function (){var G__12607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bank], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12607) : re_frame.core.subscribe.call(null,G__12607));
})();
return ((function (bank){
return (function (file){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"ROM data:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.number_input,"Select 8K bank: ",cljs.core.deref(bank),((function (bank){
return (function (p1__12604_SHARP_){
var G__12608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_bank,p1__12604_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12608) : re_frame.core.dispatch.call(null,G__12608));
});})(bank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" - $",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bank){
return (function (p1__12605_SHARP_){
return p1__12605_SHARP_.toString((16));
});})(bank))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(parseInt(cljs.core.deref(bank)),cljs.core.iterate(((function (bank){
return (function (p1__12606_SHARP_){
return ((8192) + p1__12606_SHARP_);
});})(bank))
,(0))))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(30),cljs.core.cst$kw$cols,(80),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.rom_bank(file,parseInt(cljs.core.deref(bank))))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null)], null);
});
;})(bank))
});
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12610 = dom;
var G__12611 = ["files",(0)];
return goog.object.getValueByKeys(G__12610,G__12611);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12609_SHARP_){
var G__12612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12613 = (new Uint8Array(p1__12609_SHARP_.target.result));
return goog.crypt.byteArrayToHex(G__12613);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12612) : re_frame.core.dispatch.call(null,G__12612));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.menu_items = (function mecca$view$menu_items(){
var selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var menu_QMARK_ = (function (){var G__12614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12614) : re_frame.core.subscribe.call(null,G__12614));
})();
return ((function (selected,menu_QMARK_){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (selected,menu_QMARK_){
return (function mecca$view$menu_items_$_iter__12615(s__12616){
return (new cljs.core.LazySeq(null,((function (selected,menu_QMARK_){
return (function (){
var s__12616__$1 = s__12616;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12616__$1);
if(temp__5457__auto__){
var s__12616__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12616__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12616__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12618 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12617 = (0);
while(true){
if((i__12617 < size__4323__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12617);
cljs.core.chunk_append(b__12618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),((function (i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
var G__12619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12619) : re_frame.core.dispatch.call(null,G__12619));
});})(i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,0.5,((function (i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(i__12617,choice,c__4322__auto__,size__4323__auto__,b__12618,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)));

var G__12621 = (i__12617 + (1));
i__12617 = G__12621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12618),mecca$view$menu_items_$_iter__12615(cljs.core.chunk_rest(s__12616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12618),null);
}
} else {
var choice = cljs.core.first(s__12616__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),((function (choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
var G__12620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12620) : re_frame.core.dispatch.call(null,G__12620));
});})(choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,0.5,((function (choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(choice,s__12616__$2,temp__5457__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)),mecca$view$menu_items_$_iter__12615(cljs.core.rest(s__12616__$2)));
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
var menu_QMARK_ = (function (){var G__12622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12622) : re_frame.core.subscribe.call(null,G__12622));
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
var G__12623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12623) : re_frame.core.dispatch.call(null,G__12623));
});})(hover_QMARK_,menu_QMARK_))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),(10),"gray","#f7f6cf",(64),0.5,(64),(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?"visible":"hidden"),(64)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(96),cljs.core.cst$kw$y,(54),cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,(54)], null),"\uD83C\uDF54"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$menu,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(32),(5),"gray","lightgray",(96),0.5,(0),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(58)])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.menu_items], null)], null)], null);
});
;})(hover_QMARK_,menu_QMARK_))
});
mecca.view.nav_bar = (function mecca$view$nav_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$parent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA ROM Reader"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Inspect image, sound and game data from Nintendo binaries"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$narrow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.burger_menu], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = (function (){var G__12624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12624) : re_frame.core.subscribe.call(null,G__12624));
})();
var selected_item = (function (){var G__12625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12625) : re_frame.core.subscribe.call(null,G__12625));
})();
return ((function (file,selected_item){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.deref((function (){var G__12626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12626) : re_frame.core.subscribe.call(null,G__12626));
})()))?((function (file,selected_item){
return (function (){
var G__12627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12627) : re_frame.core.dispatch.call(null,G__12627));
});})(file,selected_item))
:null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.nav_bar], null),(cljs.core.truth_(cljs.core.deref(selected_item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$green,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(selected_item) + (1)))," selected :)"].join('')], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load NES ROM",((function (file,selected_item){
return (function (){
var G__12628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.mario.mario_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12628) : re_frame.core.dispatch.call(null,G__12628));
});})(file,selected_item))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load SNES ROM",((function (file,selected_item){
return (function (){
var G__12629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.smw.smw_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12629) : re_frame.core.dispatch.call(null,G__12629));
});})(file,selected_item))
], null),(cljs.core.truth_(mecca.roms.nes_file_QMARK_(cljs.core.deref(file)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$green,"This is an NES ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,cljs.core.deref(file),mecca.roms.nes_offsets], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.last(mecca.roms.smc_title(cljs.core.deref(file)))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$green,"This is a Super Magicom ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Title: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.smc_title(cljs.core.deref(file)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"ROM layout: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,(function (){var G__12630 = cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33237)));
switch (G__12630) {
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
