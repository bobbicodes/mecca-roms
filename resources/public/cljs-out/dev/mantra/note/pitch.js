// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.note.pitch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('music_theory.pitch');
/**
 * If given a number (e.g. 440), returns the number, which will be interpreted
 * as a frequency in Hz.
 * 
 * If given something else (e.g. a string or keyword like "C#5" or :C#5),
 * returns the result of calling `music-theory.pitch/note->hz` on it to get the
 * frequency in Hz.
 */
mantra.note.pitch.parse_pitch = (function mantra$note$pitch$parse_pitch(x){
if(typeof x === 'number'){
return x;
} else {
return music_theory.pitch.note__GT_hz(x);
}
});
