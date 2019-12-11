// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.roms');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('re_frame.core');
mecca.roms.hex_bytes = (function mecca$roms$hex_bytes(var_args){
var G__17306 = arguments.length;
switch (G__17306) {
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
return mecca.roms.hex_bytes.call(null,file,n,(n + (1)));
});

mecca.roms.hex_bytes.cljs$core$IFn$_invoke$arity$3 = (function (file,from,to){
return cljs.core.map.call(null,(function (p1__17304_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__17304_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.take.call(null,(((2) * to) - ((2) * from)),cljs.core.drop.call(null,((2) * from),file))));
});

mecca.roms.hex_bytes.cljs$lang$maxFixedArity = 3;

mecca.roms.format_hex = (function mecca$roms$format_hex(s){
var length = cljs.core.count.call(null,s);
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((4) - length),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
mecca.roms.format_bin = (function mecca$roms$format_bin(n){
var bin = parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')).toString((2));
var length = cljs.core.count.call(null,bin);
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((8) - length),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bin)].join('');
});
mecca.roms.nth_bit = (function mecca$roms$nth_bit(hex,n){
return parseInt(cljs.core.nth.call(null,cljs.core.reverse.call(null,mecca.roms.format_bin.call(null,hex)),n));
});
mecca.roms.word = (function mecca$roms$word(file,offset){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.roms.hex_bytes.call(null,file,(offset + (1))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,mecca.roms.hex_bytes.call(null,file,offset)))].join('');
});
mecca.roms.hex__GT_ascii = (function mecca$roms$hex__GT_ascii(s){
return goog.crypt.byteArrayToString(goog.crypt.hexToByteArray(cljs.core.apply.call(null,cljs.core.str,s)));
});
mecca.roms.smc_title = (function mecca$roms$smc_title(file){
return mecca.roms.hex__GT_ascii.call(null,cljs.core.apply.call(null,cljs.core.str,mecca.roms.hex_bytes.call(null,file,(33216),(33237))));
});
mecca.roms.nes_file_QMARK_ = (function mecca$roms$nes_file_QMARK_(file){
return cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),file)),"4E45531A");
});
/**
 * Size of PRG ROM (in 16 KB units)
 */
mecca.roms.prg_rom_size = (function mecca$roms$prg_rom_size(file){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * mecca.roms.hex_bytes.call(null,file,(4)))),"KB"].join('');
});
mecca.roms.nes_offsets = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),(function (p1__17308_SHARP_){
return ["Hex to ASCII: ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.hex__GT_ascii.call(null,p1__17308_SHARP_)),"\""].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),(function (p1__17309_SHARP_){
return ["PRG ROM size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((16) * parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17309_SHARP_))].join(''))))," KB (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17309_SHARP_))].join('')))," 16K block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17309_SHARP_))].join(''))))?null:"s")),")"].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),(function (p1__17310_SHARP_){
return ["CHR ROM size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) * parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17310_SHARP_))].join(''))))," KB (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17310_SHARP_))].join('')))," 8K block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),parseInt(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__17310_SHARP_))].join(''))))?null:"s")),")"].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),(function (p1__17311_SHARP_){
return ["Hex to binary: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.format_bin.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_)),(0))))?"Bit 0 set - This game uses vertical mirroring (horizontal arrangement). ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_)),(1))))?"Bit 1 set - This cartridge contains battery-backed PRG RAM ($6000-7FFF) or other persistent memory. ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_)),(2))))?"Bit 2 set - This game contains a 512-byte trainer at $7000-$71FF (stored before PRG data). ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_)),(3))))?"Bit 3 set - Ignore mirroring control or above mirroring bit; instead provide four-screen VRAM. ":null)),"The lower mapper nybble is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (bit){
return mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17311_SHARP_)),bit);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(6),(5),(4)], null))))].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null),(function (p1__17312_SHARP_){
return ["Hex to binary: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.roms.format_bin.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_)),(0))))?"Bit 0 set - VS Unisystem. ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_)),(1))))?"Bit 1 set - PlayChoice-10 (8KB of Hint Screen data stored after CHR data) ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_)),(2)))) && (cljs.core._EQ_.call(null,(1),mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_)),(3))))))?"Bits 2 and 3 set - flags 8-15 are in NES 2.0 format. ":null)),"The upper mapper nybble is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (bit){
return mecca.roms.nth_bit.call(null,parseInt(cljs.core.first.call(null,p1__17312_SHARP_)),bit);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(6),(5),(4)], null))))].join('');
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9)], null),cljs.core.first], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10)], null),cljs.core.first], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),cljs.core.first], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(15)], null),(function (p1__17313_SHARP_){
return ["Ripped by (or zeros): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,p1__17313_SHARP_))].join('');
})], null)], null);
mecca.roms.rom_bank = (function mecca$roms$rom_bank(file,n){
var offsets = cljs.core.take.call(null,(2),cljs.core.drop.call(null,n,cljs.core.iterate.call(null,(function (p1__17314_SHARP_){
return ((8192) + p1__17314_SHARP_);
}),(0))));
return mecca.roms.hex_bytes.call(null,file,cljs.core.first.call(null,offsets),cljs.core.last.call(null,offsets));
});

//# sourceMappingURL=roms.js.map
