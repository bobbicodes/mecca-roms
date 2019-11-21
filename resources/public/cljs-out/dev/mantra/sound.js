// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.sound');
goog.require('cljs.core');
goog.require('cljs.core.constants');
mantra.sound._STAR_audio_context_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
mantra.sound.create_audio_context = (function mantra$sound$create_audio_context(){
var constructor$ = (function (){var or__3949__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window.webkitAudioContext;
}
})();
return cljs.core.reset_BANG_(mantra.sound._STAR_audio_context_STAR_,(new constructor$()));
});
