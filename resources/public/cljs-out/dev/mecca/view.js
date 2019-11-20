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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"ASCII"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__12587(s__12588){
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
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(1),null);
cljs.core.chunk_append(b__12590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.roms.hex__GT_ascii(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)));

var G__12597 = (i__12589 + (1));
i__12589 = G__12597;
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
var vec__12594 = cljs.core.first(s__12588__$2);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.roms.hex__GT_ascii(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)),mecca$view$header_table_$_iter__12587(cljs.core.rest(s__12588__$2)));
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
mecca.view.file_info = (function mecca$view$file_info(file){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Size of PRG ROM (in 16 KB units): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(4))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Size of CHR ROM in 8 KB units (Value 0 means the board uses CHR RAM): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(5))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Flags 6 - Mapper, mirroring, battery, trainer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(6))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Flags 7 - Mapper, VS/Playchoice, NES 2.0: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(7))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Flags 8 - PRG-RAM size (rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(8))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Flags 9 - TV system (rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(9))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Flags 10 - TV system, PRG-RAM presence (unofficial, rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(10))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Unused padding (should be filled with zero, but some rippers put their name across bytes 7-15): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(11),(15))))].join('')], null)], null);
});
mecca.view.number_input = (function mecca$view$number_input(label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$height,"4%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,on_change], null)], null)], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,onclick], null),label], null);
});
mecca.view.rom_data = (function mecca$view$rom_data(){
var bank = (function (){var G__12601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bank], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12601) : re_frame.core.subscribe.call(null,G__12601));
})();
return ((function (bank){
return (function (file){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"ROM data:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.number_input,"Select 8K bank: ",cljs.core.deref(bank),((function (bank){
return (function (p1__12598_SHARP_){
var G__12602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_bank,p1__12598_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12602) : re_frame.core.dispatch.call(null,G__12602));
});})(bank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" - $",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (bank){
return (function (p1__12599_SHARP_){
return p1__12599_SHARP_.toString((16));
});})(bank))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(parseInt(cljs.core.deref(bank)),cljs.core.iterate(((function (bank){
return (function (p1__12600_SHARP_){
return ((8192) + p1__12600_SHARP_);
});})(bank))
,(0))))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(30),cljs.core.cst$kw$cols,(80),cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.roms.rom_bank(file,parseInt(cljs.core.deref(bank))))),cljs.core.cst$kw$read_DASH_only,true], null)], null)], null)], null);
});
;})(bank))
});
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12604 = dom;
var G__12605 = ["files",(0)];
return goog.object.getValueByKeys(G__12604,G__12605);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12603_SHARP_){
var G__12606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12607 = (new Uint8Array(p1__12603_SHARP_.target.result));
return goog.crypt.byteArrayToHex(G__12607);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12606) : re_frame.core.dispatch.call(null,G__12606));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.menu_items = (function mecca$view$menu_items(){
var selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var menu_QMARK_ = (function (){var G__12608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12608) : re_frame.core.subscribe.call(null,G__12608));
})();
return ((function (selected,menu_QMARK_){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (selected,menu_QMARK_){
return (function mecca$view$menu_items_$_iter__12609(s__12610){
return (new cljs.core.LazySeq(null,((function (selected,menu_QMARK_){
return (function (){
var s__12610__$1 = s__12610;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12610__$1);
if(temp__5457__auto__){
var s__12610__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12610__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12610__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12612 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12611 = (0);
while(true){
if((i__12611 < size__4323__auto__)){
var choice = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12611);
cljs.core.chunk_append(b__12612,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),((function (i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
var G__12613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12613) : re_frame.core.dispatch.call(null,G__12613));
});})(i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,0.5,((function (i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(i__12611,choice,c__4322__auto__,size__4323__auto__,b__12612,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)));

var G__12615 = (i__12611 + (1));
i__12611 = G__12615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12612),mecca$view$menu_items_$_iter__12609(cljs.core.chunk_rest(s__12610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12612),null);
}
} else {
var choice = cljs.core.first(s__12610__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[((35) + (choice * (18))),(2),"black",((function (choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,null);
});})(choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,cljs.core.deref(selected)))?"lightpink":"lightgray"),(91),((function (choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
var G__12614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_item,choice], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12614) : re_frame.core.dispatch.call(null,G__12614));
});})(choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,0.5,((function (choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_){
return (function (){
return cljs.core.reset_BANG_(selected,choice);
});})(choice,s__12610__$2,temp__5457__auto__,selected,menu_QMARK_))
,(3),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(16)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(18),cljs.core.cst$kw$y,((48) + (choice * (18))),cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,(14),cljs.core.cst$kw$pointer_DASH_events,"none",cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden")], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((choice + (1)))].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,choice], null)),mecca$view$menu_items_$_iter__12609(cljs.core.rest(s__12610__$2)));
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
var menu_QMARK_ = (function (){var G__12616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12616) : re_frame.core.subscribe.call(null,G__12616));
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
var G__12617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12617) : re_frame.core.dispatch.call(null,G__12617));
});})(hover_QMARK_,menu_QMARK_))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),(10),"gray","#f7f6cf",(64),0.5,(64),(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?"visible":"hidden"),(64)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(96),cljs.core.cst$kw$y,(54),cljs.core.cst$kw$text_DASH_anchor,"middle",cljs.core.cst$kw$font_DASH_size,(54)], null),"\uD83C\uDF54"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect$menu,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$rx,cljs.core.cst$kw$stroke,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(32),(5),"gray","lightgray",(96),0.5,(0),(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?"visible":"hidden"),(58)])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.menu_items], null)], null)], null);
});
;})(hover_QMARK_,menu_QMARK_))
});
mecca.view.nav_bar = (function mecca$view$nav_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$parent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA ROM Reader"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Inspect Nintendo binaries for image, sound and game data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$narrow,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.burger_menu], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = (function (){var G__12618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12618) : re_frame.core.subscribe.call(null,G__12618));
})();
var selected_item = (function (){var G__12619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_item], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12619) : re_frame.core.subscribe.call(null,G__12619));
})();
return ((function (file,selected_item){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(cljs.core.deref((function (){var G__12620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$burger_DASH_menu_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12620) : re_frame.core.subscribe.call(null,G__12620));
})()))?((function (file,selected_item){
return (function (){
var G__12621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hide_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12621) : re_frame.core.dispatch.call(null,G__12621));
});})(file,selected_item))
:null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.nav_bar], null),(cljs.core.truth_(cljs.core.deref(selected_item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$green,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null)], null),["Choice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(selected_item) + (1)))," selected :)"].join('')], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load NES file",((function (file,selected_item){
return (function (){
var G__12622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.mario.mario_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12622) : re_frame.core.dispatch.call(null,G__12622));
});})(file,selected_item))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load SNES file",((function (file,selected_item){
return (function (){
var G__12623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.examples.smw.smw_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12623) : re_frame.core.dispatch.call(null,G__12623));
});})(file,selected_item))
], null),(cljs.core.truth_(mecca.roms.nes_file_QMARK_(cljs.core.deref(file)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$green,"This is an NES ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,cljs.core.deref(file),mecca.roms.nes_offsets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"File info:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info,cljs.core.deref(file)], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.last(mecca.roms.smc_title(cljs.core.deref(file)))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$green,"This is a Super Magicom ROM :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Title: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.smc_title(cljs.core.deref(file)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"ROM layout: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$green,(function (){var G__12624 = cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(file),(33237)));
switch (G__12624) {
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
