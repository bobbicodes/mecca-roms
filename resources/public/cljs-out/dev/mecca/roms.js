// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.roms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.crypt');
mecca.roms.hex_bytes = (function mecca$roms$hex_bytes(var_args){
var G__12580 = arguments.length;
switch (G__12580) {
case 2:
return mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2 = (function (file,n){
return mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,n,(n + (1)));
});

mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3 = (function (file,from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12578_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__12578_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.take.cljs$core$IFn$_invoke$arity$2((((2) * to) - ((2) * from)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((2) * from),file))));
});

mecca.roms.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.roms.word = (function mecca$roms$word(file,offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,(offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$2(file,offset)))].join('');
});
mecca.roms.hex__GT_ascii = (function mecca$roms$hex__GT_ascii(s){
var G__12582 = (function (){var G__12583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
return goog.crypt.hexToByteArray(G__12583);
})();
return goog.crypt.byteArrayToString(G__12582);
});
mecca.roms.smc_title = (function mecca$roms$smc_title(file){
return mecca.roms.hex__GT_ascii(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,(33216),(33237))));
});
mecca.roms.nes_file_QMARK_ = (function mecca$roms$nes_file_QMARK_(file){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),file)),"4E45531A");
});
mecca.roms.nes_offsets = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(15)], null)], null);
mecca.roms.rom_bank = (function mecca$roms$rom_bank(file,n){
var offsets = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate((function (p1__12584_SHARP_){
return ((8192) + p1__12584_SHARP_);
}),(0))));
return mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3(file,cljs.core.first(offsets),cljs.core.last(offsets));
});
