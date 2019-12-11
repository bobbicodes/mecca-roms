// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('music_theory.pitch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('music_theory.note');
goog.require('music_theory.pitch.tunings');
music_theory.pitch._STAR_reference_pitch_STAR_ = (440);
music_theory.pitch._STAR_tuning_system_STAR_ = cljs.core.cst$kw$equal;
music_theory.pitch._STAR_tonic_STAR_ = null;
music_theory.pitch._STAR_scale_type_STAR_ = cljs.core.cst$kw$major;
/**
 * Changes the reference pitch, which is the frequency of A4. (default: 440)
 */
music_theory.pitch.set_reference_pitch_BANG_ = (function music_theory$pitch$set_reference_pitch_BANG_(freq){
return music_theory.pitch._STAR_reference_pitch_STAR_ = freq;
});
/**
 * Sets the key, which is required by some tuning systems in order to calculate
 * the frequency of a note in Hz.
 */
music_theory.pitch.set_key_BANG_ = (function music_theory$pitch$set_key_BANG_(var_args){
var G__10352 = arguments.length;
switch (G__10352) {
case 1:
return music_theory.pitch.set_key_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return music_theory.pitch.set_key_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

music_theory.pitch.set_key_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tonic){
return music_theory.pitch.set_key_BANG_.cljs$core$IFn$_invoke$arity$2(tonic,cljs.core.cst$kw$major);
});

music_theory.pitch.set_key_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (tonic,scale_type){
music_theory.pitch._STAR_tonic_STAR_ = tonic;

return music_theory.pitch._STAR_scale_type_STAR_ = scale_type;
});

music_theory.pitch.set_key_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Changes the tuning system. (default: :equal)
 */
music_theory.pitch.set_tuning_system_BANG_ = (function music_theory$pitch$set_tuning_system_BANG_(system){
return music_theory.pitch._STAR_tuning_system_STAR_ = system;
});
/**
 * Converts a MIDI note (0-127) to its frequency in Hz.
 * 
 * Reference pitch is A440 by default. To calculate pitch based on an alternate
 * reference pitch (e.g. A430), set or bind *reference-pitch* to the frequency
 * of A4.
 * 
 * Tuning system is equal temperament by default. To calculate pitch based on
 * an alternate tuning system (e.g. well temperament), set or bind
 * *tuning-system* to a valid keyword representing that tuning system.
 */
music_theory.pitch.midi__GT_hz = (function music_theory$pitch$midi__GT_hz(midi_note){
if(cljs.core.integer_QMARK_(midi_note)){
} else {
throw (new Error("Assert failed: (integer? midi-note)"));
}

var _PERCENT_ = (function (){var G__10356 = music_theory.pitch._STAR_tuning_system_STAR_;
var G__10356__$1 = (((G__10356 instanceof cljs.core.Keyword))?G__10356.fqn:null);
switch (G__10356__$1) {
case "equal":
return music_theory.pitch.tunings.equal__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note);

break;
case "well":
return music_theory.pitch.tunings.werckmeister_iii__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note,music_theory.pitch._STAR_tonic_STAR_);

break;
case "werckmeister":
return music_theory.pitch.tunings.werckmeister_iii__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note,music_theory.pitch._STAR_tonic_STAR_);

break;
case "werckmeister-iii":
return music_theory.pitch.tunings.werckmeister_iii__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note,music_theory.pitch._STAR_tonic_STAR_);

break;
case "just":
return music_theory.pitch.tunings.just__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note,music_theory.pitch._STAR_tonic_STAR_);

break;
case "young":
return music_theory.pitch.tunings.young__GT_(music_theory.pitch._STAR_reference_pitch_STAR_,midi_note,music_theory.pitch._STAR_tonic_STAR_);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10356__$1)].join('')));

}
})();
if(!((_PERCENT_ < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? %))"));
}

return _PERCENT_;
});
/**
 * Converts a note in the form of a string or keyword (e.g. C#4, :Db5, A2) into
 * its frequency in hz.
 * 
 * Reference pitch is A440 by default. To calculate pitch based on an alternate
 * reference pitch (e.g. A430), bind *reference-pitch* to the frequency of A4.
 */
music_theory.pitch.note__GT_hz = (function music_theory$pitch$note__GT_hz(note){
var _PERCENT_ = music_theory.pitch.midi__GT_hz(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note(note)));
if(!((_PERCENT_ < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? %))"));
}

return _PERCENT_;
});
/**
 * Converts a frequency in Hz to the closest MIDI note.
 * 
 * Reference pitch is A440 by default. To calculate pitch based on an alternate
 * reference pitch (e.g. A430), set or bind *reference-pitch* to the frequency
 * of A4.
 * 
 * Tuning system is equal temperament by default. To calculate pitch based on
 * an alternate tuning system (e.g. well temperament), set or bind
 * *tuning-system* to a valid keyword representing that tuning system.
 */
music_theory.pitch.hz__GT_midi = (function music_theory$pitch$hz__GT_midi(freq){
if(typeof freq === 'number'){
} else {
throw (new Error("Assert failed: (number? freq)"));
}

if((freq > (0))){
} else {
throw (new Error("Assert failed: (pos? freq)"));
}

var _PERCENT_ = (function (){var G__10358 = music_theory.pitch._STAR_tuning_system_STAR_;
var G__10358__$1 = (((G__10358 instanceof cljs.core.Keyword))?G__10358.fqn:null);
switch (G__10358__$1) {
case "equal":
return music_theory.pitch.tunings._LT__equal(music_theory.pitch._STAR_reference_pitch_STAR_,freq);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10358__$1)].join('')));

}
})();
if(!((_PERCENT_ < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? %))"));
}

return _PERCENT_;
});
