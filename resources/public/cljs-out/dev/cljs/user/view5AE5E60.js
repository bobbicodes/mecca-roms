// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('mecca.subs');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('goog.object');
goog.require('goog.crypt');
goog.require('mecca.asterix');
mecca.view.offset = (function mecca$view$offset(n){
var file = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.core.drop.call(null,n,cljs.core.partition.call(null,(2),cljs.core.deref.call(null,file)))));
});
mecca.view.offsets = (function mecca$view$offsets(from,to){
var file = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null));
return cljs.core.map.call(null,((function (file){
return (function (p1__30878_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__30878_SHARP_);
});})(file))
,cljs.core.partition.call(null,(2),cljs.core.take.call(null,(((2) * to) - ((2) * from)),cljs.core.drop.call(null,((2) * from),cljs.core.deref.call(null,file)))));
});
mecca.view.hex__GT_ascii = (function mecca$view$hex__GT_ascii(s){
return goog.crypt.byteArrayToString(goog.crypt.hexToByteArray(cljs.core.apply.call(null,cljs.core.str,s)));
});
mecca.view.header = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(46)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(78)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(110),(112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(122),(123)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(124)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(125)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(125),(126)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(129)], null)], null);
mecca.view.offsets_table = (function mecca$view$offsets_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.tg","table.tg",518442995),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0pky","th.tg-0pky",348732701),"Offset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"Hex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.tg-0lax","th.tg-0lax",754432994),"ASCII"], null)], null),(function (){var iter__4324__auto__ = (function mecca$view$offsets_table_$_iter__30879(s__30880){
return (new cljs.core.LazySeq(null,(function (){
var s__30880__$1 = s__30880;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30880__$1);
if(temp__5457__auto__){
var s__30880__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30880__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__30880__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__30882 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__30881 = (0);
while(true){
if((i__30881 < size__4323__auto__)){
var vec__30883 = cljs.core._nth.call(null,c__4322__auto__,i__30881);
var from = cljs.core.nth.call(null,vec__30883,(0),null);
var to = cljs.core.nth.call(null,vec__30883,(1),null);
cljs.core.chunk_append.call(null,b__30882,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.offsets.call(null,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.offsets.call(null,from,to))], null)], null));

var G__30889 = (i__30881 + (1));
i__30881 = G__30889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30882),mecca$view$offsets_table_$_iter__30879.call(null,cljs.core.chunk_rest.call(null,s__30880__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30882),null);
}
} else {
var vec__30886 = cljs.core.first.call(null,s__30880__$2);
var from = cljs.core.nth.call(null,vec__30886,(0),null);
var to = cljs.core.nth.call(null,vec__30886,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(from.toString((16)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",mecca.view.offsets.call(null,from,to)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.tg-hmp3","td.tg-hmp3",1162069958),mecca.view.hex__GT_ascii.call(null,mecca.view.offsets.call(null,from,to))], null)], null),mecca$view$offsets_table_$_iter__30879.call(null,cljs.core.rest.call(null,s__30880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.view.header);
})()], null);
});
mecca.view.file_info = (function mecca$view$file_info(){
var file = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)], null));
var valid_QMARK_ = cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(10),cljs.core.deref.call(null,file))),"4E45534D1A");
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((valid_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.green","h4.green",-24768633),"Valid NSF file :)"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Header:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Version number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset.call(null,(5)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Total songs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset.call(null,(6)))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Starting song: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offset.call(null,(7)))].join('')))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Load address (lo, hi): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets.call(null,(8),(10)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Init address (lo, hi): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets.call(null,(10),(12)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Play address (lo, hi): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.offsets.call(null,(12),(14)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.offsets_table], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Hex dump:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,file))].join('')], null)], null);
});
mecca.view.file_import = (function mecca$view$file_import(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Import NSF file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Web parser for NES Sound Format"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input","input#input",-1134984774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var dom = goog.object.get(event,"target");
var file = goog.object.getValueByKeys(dom,["files",(0)]);
var reader = (new FileReader());
reader.readAsArrayBuffer(file);

return reader.onload = ((function (dom,file,reader){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),goog.crypt.byteArrayToHex((new Uint8Array(e.target.result))).toUpperCase()], null));
});})(dom,file,reader))
;
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),mecca.asterix.asterix_hex], null));
})], null),"Load example file"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_import], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.file_info], null)], null);
});

//# sourceMappingURL=view5AE5E60.js.map
