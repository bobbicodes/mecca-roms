// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.mario');
mecca.view.hex_bytes = (function mecca$view$hex_bytes(var_args){
var G__12554 = arguments.length;
switch (G__12554) {
case 2:
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2 = (function (file,n){
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,n,(n + (1)));
});

mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3 = (function (file,from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12552_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12552_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((((2) * to) - ((2) * from)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) * from),file))));
});

mecca.view.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.view.word = (function mecca$view$word(file,offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,offset)))].join('');
});
mecca.view.load_address = (function mecca$view$load_address(file){
return mecca.view.word(file,(8));
});
mecca.view.init_address = (function mecca$view$init_address(file){
return mecca.view.word(file,(10));
});
mecca.view.play_address = (function mecca$view$play_address(file){
return mecca.view.word(file,(12));
});
mecca.view.bankswitch_vals = (function mecca$view$bankswitch_vals(file){
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(112),(120));
});
mecca.view.hex__GT_ascii = (function mecca$view$hex__GT_ascii(s){
var G__12556 = (function (){var G__12557 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
return goog.crypt.hexToByteArray(G__12557);
})();
return goog.crypt.byteArrayToString(G__12556);
});
mecca.view.header = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(46)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(78)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(110),(112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(126)], null)], null);
mecca.view.header_table = (function mecca$view$header_table(file){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$tg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0pky,"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th$tg_DASH_0lax,"ASCII"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__12558(s__12559){
return (new cljs.core.LazySeq(null,(function (){
var s__12559__$1 = s__12559;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12559__$1);
if(temp__5457__auto__){
var s__12559__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12559__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12559__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12561 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12560 = (0);
while(true){
if((i__12560 < size__4323__auto__)){
var vec__12562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12560);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
cljs.core.chunk_append(b__12561,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)));

var G__12568 = (i__12560 + (1));
i__12560 = G__12568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12561),mecca$view$header_table_$_iter__12558(cljs.core.chunk_rest(s__12559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12561),null);
}
} else {
var vec__12565 = cljs.core.first(s__12559__$2);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12565,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$tg_DASH_hmp3,mecca.view.hex__GT_ascii(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)),mecca$view$header_table_$_iter__12558(cljs.core.rest(s__12559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.view.header);
})())], null)], null)], null);
});
mecca.view.file_info = (function mecca$view$file_info(file){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Version number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(5))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Total songs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(6))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Starting song: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(7))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Load address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.load_address(file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Init address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.init_address(file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.play_address(file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Song name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(14),(46))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Artist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(46),(78))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Copyright: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(78),(110))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (NTSC): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word(file,(110))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bankswitch init values: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.bankswitch_vals(file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play speed (PAL): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word(file,(120))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["PAL/NTSC: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(122))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Extra Sound Chip Support: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var byte$ = cljs.core.first(mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(123)));
var G__12569 = byte$;
switch (G__12569) {
case "01":
return "This song uses VRC6 audio";

break;
case "02":
return "This song uses VRC7 audio";

break;
case "04":
return "This song uses FDS audio";

break;
case "08":
return "This song uses MMC5 audio";

break;
case "10":
return "This song uses Namco 163 audio";

break;
case "20":
return "This song uses Sunsoft 5B audio";

break;
default:
return byte$;

}
})())].join('')], null)], null);
});
mecca.view.number_input = (function mecca$view$number_input(label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,on_change], null)], null)], null);
});
mecca.view.register_banks = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(4223)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4223),(8318)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8318),(12413)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12413),(16508)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16508),(20603)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20603),(24698)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24698),(28793)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(28793),(32888)], null)], null);
mecca.view.register_bank = (function mecca$view$register_bank(file,n){
var offsets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.view.register_banks,(n - (1)));
return mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,cljs.core.first(offsets),cljs.core.last(offsets));
});
mecca.view.rom_data = (function mecca$view$rom_data(file){
var bank = (function (){var G__12572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_bank], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12572) : re_frame.core.subscribe.call(null,G__12572));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"ROM data"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mecca.view.bankswitch_vals(file),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["00","00","00","00","00","00","00","00"], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This song does not use bankswitching."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Initializing from $080 at load address ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.load_address(file)),"."].join('')], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.number_input,"Register bank ",cljs.core.deref(bank),((function (bank){
return (function (p1__12571_SHARP_){
var G__12573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_bank,p1__12571_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12573) : re_frame.core.dispatch.call(null,G__12573));
});})(bank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),mecca.view.register_bank(file,cljs.core.deref(bank))))], null)], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,onclick], null),label], null);
});
mecca.view.file_import = (function mecca$view$file_import(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Import .nes file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Web parser for iNES file format"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,(function (e){
var dom = goog.object.get(e,"target");
var file = (function (){var G__12575 = dom;
var G__12576 = ["files",(0)];
return goog.object.getValueByKeys(G__12575,G__12576);
})();
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__12574_SHARP_){
var G__12577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,(function (){var G__12578 = (new Uint8Array(p1__12574_SHARP_.target.result));
return goog.crypt.byteArrayToHex(G__12578);
})().toUpperCase()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12577) : re_frame.core.dispatch.call(null,G__12577));
});})(dom,file,reader))
;
})], null)], null)], null)], null);
});
mecca.view.nes_file_QMARK_ = (function mecca$view$nes_file_QMARK_(file){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),file)),"4E45531A");
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = cljs.core.deref((function (){var G__12579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12579) : re_frame.core.subscribe.call(null,G__12579));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_import], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load example file",((function (file){
return (function (){
var G__12580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_upload,mecca.mario.mario_hex], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12580) : re_frame.core.dispatch.call(null,G__12580));
});})(file))
], null),(cljs.core.truth_(mecca.view.nes_file_QMARK_(file))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$green,"This is an NES file :)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"File info:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info,file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.rom_data,file], null)], null):null)], null);
});
