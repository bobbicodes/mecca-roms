// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.examples.mario');
goog.require('mecca.examples.smw');
mecca.view.hex_bytes = (function mecca$view$hex_bytes(var_args){
var G__18376 = arguments.length;
switch (G__18376) {
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
return cljs.core.map.call(null,(function (p1__18374_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__18374_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.take.call(null,(((2) * to) - ((2) * from)),cljs.core.drop.call(null,((2) * from),file))));
});

mecca.view.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.view.word = (function mecca$view$word(file,offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,offset)))].join('');
});
.hex__GT_ascii = (function $hex__GT_ascii(s){
return crypt.byteArrayToString(crypt.hexToByteArray(cljs.core.apply.call(null,cljs.core.str,s)));
});
mecca.view.nes_offsets = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(15)], null)], null);
mecca.view.header_table = (function mecca$view$header_table(file,offsets){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.tg","table.tg",518442995),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0pky","th.tg-0pky",348732701),"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"ASCII"], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$view$header_table_$_iter__18396(s__18398){
return (new cljs.core.LazySeq(null,(function (){
var s__18398__$1 = s__18398;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18398__$1);
if(temp__5457__auto__){
var s__18398__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18398__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18398__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18400 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18399 = (0);
while(true){
if((i__18399 < size__4323__auto__)){
var vec__18401 = cljs.core._nth.call(null,c__4322__auto__,i__18399);
var from = cljs.core.nth.call(null,vec__18401,(0),null);
var to = cljs.core.nth.call(null,vec__18401,(1),null);
cljs.core.chunk_append.call(null,b__18400,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.hex_bytes.call(null,file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)));

var G__18407 = (i__18399 + (1));
i__18399 = G__18407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18400),mecca$view$header_table_$_iter__18396.call(null,cljs.core.chunk_rest.call(null,s__18398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18400),null);
}
} else {
var vec__18404 = cljs.core.first.call(null,s__18398__$2);
var from = cljs.core.nth.call(null,vec__18404,(0),null);
var to = cljs.core.nth.call(null,vec__18404,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.hex_bytes.call(null,file,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.hex_bytes.call(null,file,from,to))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null)], null)),mecca$view$header_table_$_iter__18396.call(null,cljs.core.rest.call(null,s__18398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,offsets);
})())], null)], null)], null);
});
mecca.view.file_info = (function mecca$view$file_info(file){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Size of PRG ROM (in 16 KB units): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(4))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Size of CHR ROM in 8 KB units (Value 0 means the board uses CHR RAM): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(5))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Flags 6 - Mapper, mirroring, battery, trainer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(6))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Flags 7 - Mapper, VS/Playchoice, NES 2.0: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(7))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Flags 8 - PRG-RAM size (rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(8))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Flags 9 - TV system (rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(9))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Flags 10 - TV system, PRG-RAM presence (unofficial, rarely used extension): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(10))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Unused padding (should be filled with zero, but some rippers put their name across bytes 7-15): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(11),(15))))].join('')], null)], null);
});
mecca.view.number_input = (function mecca$view$number_input(label,value,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"height","height",1025178622),"4%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
mecca.view.register_bank = (function mecca$view$register_bank(file,n){
var offsets = cljs.core.take.call(null,(2),cljs.core.drop.call(null,n,cljs.core.iterate.call(null,(function (p1__18410_SHARP_){
return ((8192) + p1__18410_SHARP_);
}),(0))));
return mecca.view.hex_bytes.call(null,file,cljs.core.first.call(null,offsets),cljs.core.last.call(null,offsets));
});
mecca.view.rom_data = (function mecca$view$rom_data(file){
var bank = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-bank","register-bank",-290192893)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"ROM data:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.number_input,"Select 8KB register bank: ",cljs.core.deref.call(null,bank),((function (bank){
return (function (p1__18412_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-bank","select-bank",-86546016),p1__18412_SHARP_.target.value], null));
});})(bank))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(30),new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.register_bank.call(null,file,parseInt(cljs.core.deref.call(null,bank))))),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null)], null)], null);
});
mecca.view.button = (function mecca$view$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),onclick], null),label], null);
});
mecca.view.file_upload = (function mecca$view$file_upload(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input","input#input",-1134984774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var dom = goog.object.get(e,"target");
var file = goog.object.getValueByKeys(dom,["files",(0)]);
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (p1__18417_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),goog.crypt.byteArrayToHex((new Uint8Array(p1__18417_SHARP_.target.result))).toUpperCase()], null));
});})(dom,file,reader))
;
})], null)], null)], null);
});
mecca.view.smc_title = (function mecca$view$smc_title(file){
return mecca.view.hex__GT_ascii.call(null,cljs.core.apply.call(null,cljs.core.str,mecca.view.hex_bytes.call(null,file,(33216),(33237))));
});
mecca.view.nes_file_QMARK_ = (function mecca$view$nes_file_QMARK_(file){
return cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),file)),"4E45531A");
});
mecca.view.burger_menu = (function mecca$view$burger_menu(){
var hover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (hover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(hover_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hover_QMARK_){
return (function (){
return console.log("burger clicked");
});})(hover_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(5),(10),"gray","#f7f6cf",(64),0.5,(0),(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?"visible":"hidden"),(64)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(32),new cljs.core.Keyword(null,"y","y",-1757859776),(54),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(54)], null),"\uD83C\uDF54"], null)], null);
});
;})(hover_QMARK_))
});
mecca.view.nav_bar = (function mecca$view$nav_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.parent","div.parent",-1514626954),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.wide","h1.wide",-590254927),"MECCA ROM Reader"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.narrow","div.narrow",-1452333732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.burger_menu], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
var file = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null)));
return ((function (file){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.nav_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload and inspect image sound and game data from Nintendo binaries"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_upload], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load NES file",((function (file){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),mecca.examples.mario.mario_hex], null));
});})(file))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.button,"Load SNES file",((function (file){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),mecca.examples.smw.smw_hex], null));
});})(file))
], null),(cljs.core.truth_(mecca.view.nes_file_QMARK_.call(null,file))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.green","h2.green",1338639749),"This is an NES file :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.header_table,file,mecca.view.nes_offsets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"File info:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info,file], null)], null):null),((cljs.core._EQ_.call(null," ",cljs.core.last.call(null,mecca.view.smc_title.call(null,file))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.green","h3.green",-1066935585),"This is a Super Magicom file :)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Title: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.green","span.green",-1576593544),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.smc_title.call(null,file))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ROM layout: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.green","span.green",-1576593544),(function (){var G__18418 = cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(33237)));
switch (G__18418) {
case "20":
return "LoROM";

break;
default:
return cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(33237)));

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cartridge type (ROM-only / with save-RAM): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(33238))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["ROM byte size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(33239))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["RAM byte size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.view.hex_bytes.call(null,file,(33240))))].join('')], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.rom_data,file], null)], null);
});
;})(file))
});

//# sourceMappingURL=view5AE5E60.js.map
