// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('music_theory.pitch.tunings');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('music_theory.note');
/**
 * Equal temperament: so convenient, yet so ugly.
 */
music_theory.pitch.tunings.equal__GT_ = (function music_theory$pitch$tunings$equal__GT_(ref_pitch,midi_note){
return (ref_pitch * (function (){var G__10235 = (2);
var G__10236 = ((midi_note - (69)) / 12.0);
return Math.pow(G__10235,G__10236);
})());
});
music_theory.pitch.tunings._LT__equal = (function music_theory$pitch$tunings$_LT__equal(ref_pitch,freq){
var log2 = (function music_theory$pitch$tunings$_LT__equal_$_log2(n){
return (Math.log(n) / Math.log((2)));
});
var G__10237 = ((69) + ((12) * log2((freq / ref_pitch))));
return Math.round(G__10237);
});
/**
 * A higher-order function that creates a tuning function for a well-tempered
 * tuning system, given a list of 12 ratios.
 */
music_theory.pitch.tunings.well__GT_ = (function music_theory$pitch$tunings$well__GT_(ratios){
return (function (ref_pitch,midi_note,tonic){
if(cljs.core.truth_(tonic)){
} else {
throw (new Error(["Assert failed: ","Well-tempered tunings are based on a tonic note; *tonic* cannot be nil.","\n","tonic"].join('')));
}

var octave = music_theory.note.octave(midi_note);
var base_note = cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tonic)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join('')));
var base_hz = music_theory.pitch.tunings.equal__GT_(ref_pitch,base_note);
var below_QMARK_ = (midi_note < base_note);
var n = music_theory.note.note_position(tonic,midi_note);
var ratio = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ratios,n);
var freq = (base_hz * ratio);
if(below_QMARK_){
return (freq / 2.0);
} else {
return freq;
}
});
});
/**
 * A higher-order function that creates a reverse tuning function for a
 * well-tempered tuning system, given a list of 12 ratios.
 */
music_theory.pitch.tunings._LT__well = (function music_theory$pitch$tunings$_LT__well(ratios){
return (function (ref_pitch,freq,tonic){
if(cljs.core.truth_(tonic)){
return null;
} else {
throw (new Error(["Assert failed: ","Well-tempered tunings are based on a tonic note; *tonic* cannot be nil.","\n","tonic"].join('')));
}
});
});
music_theory.pitch.tunings.werckmeister_iii_ratios = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),((256) / (243)),(((64) / (81)) * Math.sqrt((2))),((32) / (27)),(((256) / (243)) * Math.pow((2),0.25)),((4) / (3)),((1024) / (729)),(((8) / (9)) * Math.pow((8),0.25)),((128) / (81)),(((1024) / (729)) * Math.pow((2),0.25)),((16) / (9)),(((128) / (81)) * Math.pow((2),0.25))], null);
/**
 * Werckmeister I (III): 'correct temperament' based on 1/4 comma divisions
 * (source: https://en.wikipedia.org/wiki/Werckmeister_temperament)
 * 
 * Uses equal temperament as the standard for finding the starting pitch, based
 * on the reference pitch and the tonic, then uses the Werckmeister III ratios
 * to tune based on the tonic.
 */
music_theory.pitch.tunings.werckmeister_iii__GT_ = (function music_theory$pitch$tunings$werckmeister_iii__GT_(ref_pitch,midi_note,tonic){
var f = music_theory.pitch.tunings.well__GT_(music_theory.pitch.tunings.werckmeister_iii_ratios);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(ref_pitch,midi_note,tonic) : f.call(null,ref_pitch,midi_note,tonic));
});
music_theory.pitch.tunings._LT__werckmeister_iii = (function music_theory$pitch$tunings$_LT__werckmeister_iii(ref_pitch,frequency,tonic){
if(cljs.core.truth_(tonic)){
} else {
throw (new Error(["Assert failed: ","Well-tempered tunings are based on a tonic note; *tonic* cannot be nil.","\n","tonic"].join('')));
}

return "TODO";
});
music_theory.pitch.tunings.just_ratios = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),((16) / (15)),((9) / (8)),((6) / (5)),((5) / (4)),((4) / (3)),((45) / (32)),((3) / (2)),((8) / (5)),((5) / (3)),((9) / (5)),((15) / (8))], null);
/**
 * Just intonation is any musical tuning in which the frequencies of the notes
 * are related by ratios of small whole numbers.
 * (source: https://en.wikipedia.org/wiki/Just_intonation)
 * 
 * There are a lot of variations on these ratios. These ones were picked
 * somewhat arbitrarily as a good general example of just intonation.
 * (ref: http://www.sfu.ca/sonic-studio/handbook/Just_Tuning.html)
 */
music_theory.pitch.tunings.just__GT_ = (function music_theory$pitch$tunings$just__GT_(ref_pitch,midi_note,tonic){
var f = music_theory.pitch.tunings.well__GT_(music_theory.pitch.tunings.just_ratios);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(ref_pitch,midi_note,tonic) : f.call(null,ref_pitch,midi_note,tonic));
});
music_theory.pitch.tunings._LT__just = (function music_theory$pitch$tunings$_LT__just(ref_pitch,frequency,tonic){
if(cljs.core.truth_(tonic)){
} else {
throw (new Error(["Assert failed: ","Well-tempered tunings are based on a tonic note; *tonic* cannot be nil.","\n","tonic"].join('')));
}

return "TODO";
});
music_theory.pitch.tunings.young_ratios = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),((567) / (512)),((9) / (8)),((147) / (128)),((21) / (16)),((1323) / (1024)),((189) / (128)),((3) / (2)),((49) / (32)),((7) / (4)),((441) / (256)),((63) / (32))], null);
/**
 * The piano tuning used by La Monte Young in his composition The Well-Tuned
 * Piano. It is a form of just intonation based on a modified seven-limit
 * tuning process.
 * (source: https://en.wikipedia.org/wiki/The_Well-Tuned_Piano#Tuning)
 * 
 * Interestingly, this scale does not uniformly ascend. A couple notes are
 * actually lower in pitch than the next note up. This is so that all perfect
 * fifths (3/2 ratios) will be spelled as perfect fifths on the keyboard.
 * (source: http://www.kylegann.com/wtp.html)
 */
music_theory.pitch.tunings.young__GT_ = (function music_theory$pitch$tunings$young__GT_(ref_pitch,midi_note,tonic){
var f = music_theory.pitch.tunings.well__GT_(music_theory.pitch.tunings.young_ratios);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(ref_pitch,midi_note,tonic) : f.call(null,ref_pitch,midi_note,tonic));
});
music_theory.pitch.tunings._LT__young = (function music_theory$pitch$tunings$_LT__young(ref_pitch,frequency,tonic){
if(cljs.core.truth_(tonic)){
} else {
throw (new Error(["Assert failed: ","Well-tempered tunings are based on a tonic note; *tonic* cannot be nil.","\n","tonic"].join('')));
}

return "TODO";
});
