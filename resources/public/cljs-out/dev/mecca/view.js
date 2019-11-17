// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('mecca.subs');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.asterix');
mecca.view.hex_bytes = (function mecca$view$hex_bytes(var_args){
var G__13800 = arguments.length;
switch (G__13800) {
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
return mecca.view.hex_bytes.call(null,file,n,(n + (1)));
});

mecca.view.hex_bytes.cljs$core$IFn$_invoke$arity$3 = (function (file,from,to){
return cljs.core.map.call(null,(function (p1__13798_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__13798_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.take.call(null,(((2) * to) - ((2) * from)),cljs.core.drop.call(null,((2) * from),file))));
});

mecca.view.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.view.word = (function mecca$view$word(file,offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,offset)))].join('');
});
mecca.view.load_address = (function mecca$view$load_address(file){
return mecca.view.word.call(null,file,(8));
});
mecca.view.init_address = (function mecca$view$init_address(file){
return mecca.view.word.call(null,file,(10));
});
mecca.view.play_address = (function mecca$view$play_address(file){
return mecca.view.word.call(null,file,(12));
});
mecca.view.bankswitch_vals = (function mecca$view$bankswitch_vals(file){
return mecca.view.hex_bytes.call(null,file,(112),(120));
});
mecca.view.hex__GT_ascii = (function mecca$view$hex__GT_ascii(s){
return goog.crypt.byteArrayToString(goog.crypt.hexToByteArray(cljs.core.apply.call(null,cljs.core.str,s)));
});
mecca.view.header = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(46)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(78)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(110),(112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(126)], null)], null);
mecca.view.header_table = (function mecca$view$header_table(file){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.tg","table.tg",518442995),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0pky","th.tg-0pky",348732701),"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"ASCII"], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__13802(s__13803){
return (new cljs.core.LazySeq(null,(function (){
var s__13803__$1 = s__13803;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13803__$1);
if(temp__5457__auto__){
var s__13803__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13803__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13803__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13805 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13804 = (0);
while(true){
if((i__13804 < size__4323__auto__)){
var vec__13806 = cljs.core._nth.call(null,c__4322__auto__,i__13804);
var from = cljs.core.nth.call(null,vec__13806,(0),null);
var to = cljs.core.nth.call(null,vec__13806,(1),null);
cljs.core.chunk_append.call(null,b__13805,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.hex_bytes.call(null,file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)));

var G__13812 = (i__13804 + (1));
i__13804 = G__13812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13805),mecca$view$header_table_$_iter__13802.call(null,cljs.core.chunk_rest.call(null,s__13803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13805),null);
}
} else {
var vec__13809 = cljs.core.first.call(null,s__13803__$2);
var from = cljs.core.nth.call(null,vec__13809,(0),null);
var to = cljs.core.nth.call(null,vec__13809,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.hex_bytes.call(null,file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)),mecca$view$header_table_$_iter__13802.call(null,cljs.core.rest.call(null,s__13803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.view.header);
})())], null)], null)], null);
});
mecca.view.song_info = (function mecca$view$song_info(file){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Version number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(5))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Total songs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(6))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Starting song: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(7))))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Load address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.load_address.call(null,file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Init address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.init_address.call(null,file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Play address: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.play_address.call(null,file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Song name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,(14),(46))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Artist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,(46),(78))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Copyright: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,(78),(110))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Play speed (NTSC): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word.call(null,file,(110))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bankswitch init values: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.bankswitch_vals.call(null,file))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Play speed (PAL): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(mecca.view.word.call(null,file,(120))))," (in 1/1000000th sec ticks)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["PAL/NTSC: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(122))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Extra Sound Chip Support: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var byte$ = cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(123)));
var G__13813 = byte$;
switch (G__13813) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
mecca.view.register_banks = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(4223)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4223),(8318)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8318),(12413)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12413),(16508)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16508),(20603)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20603),(24698)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24698),(28793)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(28793),(32888)], null)], null);
mecca.view.register_bank = (function mecca$view$register_bank(file,n){
var offsets = cljs.core.get.call(null,mecca.view.register_banks,(n - (1)));
return mecca.view.hex_bytes.call(null,file,cljs.core.first.call(null,offsets),cljs.core.last.call(null,offsets));
});
mecca.view.music_data = (function mecca$view$music_data(file){
var bank = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-bank","register-bank",-290192893)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Music data"], null),((cljs.core._EQ_.call(null,mecca.view.bankswitch_vals.call(null,file),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["00","00","00","00","00","00","00","00"], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This song does not use bankswitching."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Initializing from $080 at load address ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.load_address.call(null,file)),"."].join('')], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.number_input,"Register bank ",cljs.core.deref.call(null,bank),((function (bank){
return (function (p1__13815_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-bank","select-bank",-86546016),p1__13815_SHARP_.target.value], null));
});})(bank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.interpose.call(null," ",cljs.core.partition.call(null,(2),mecca.view.register_bank.call(null,file,cljs.core.deref.call(null,bank))))], null)], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),onclick], null),label], null);
});
mecca.view.file_import = (function mecca$view$file_import(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Import NSF file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Web parser for NES Sound Format"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input","input#input",-1134984774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var dom = goog.object.get(e,"target");
var file = goog.object.getValueByKeys(dom,["files",(0)]);
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__13816_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),goog.crypt.byteArrayToHex((new Uint8Array(p1__13816_SHARP_.target.result))).toUpperCase()], null));
});})(dom,file,reader))
;
})], null)], null)], null)], null);
});
mecca.view.nsf_QMARK_ = (function mecca$view$nsf_QMARK_(file){
return cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(10),file)),"4E45534D1A");
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_import], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load example file",((function (file){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),mecca.asterix.asterix_hex], null));
});})(file))
], null),(cljs.core.truth_(mecca.view.nsf_QMARK_.call(null,file))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.green","h2.green",1338639749),"This is an NSF song :)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Song info:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.song_info,file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.music_data,file], null)], null):null)], null);
});

//# sourceMappingURL=view.js.map
