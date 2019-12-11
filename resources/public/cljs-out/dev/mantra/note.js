// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.note');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mantra.osc');
goog.require('mantra.note.duration');
goog.require('mantra.note.pitch');
goog.require('chronoid.core');
mantra.note.play_note_STAR_ = (function mantra$note$play_note_STAR_(osc_model,p__10399){
var map__10400 = p__10399;
var map__10400__$1 = ((((!((map__10400 == null)))?(((((map__10400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10400):map__10400);
var note_model = map__10400__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10400__$1,cljs.core.cst$kw$pitch);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10400__$1,cljs.core.cst$kw$duration);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10400__$1,cljs.core.cst$kw$volume);
var map__10402 = mantra.osc.osc_STAR_(osc_model);
var map__10402__$1 = ((((!((map__10402 == null)))?(((((map__10402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10402):map__10402);
var osc_impl = map__10402__$1;
var osc_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$osc_DASH_node);
var gain_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$gain_DASH_node);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10402__$1,cljs.core.cst$kw$clock);
mantra.osc.freq(osc_node,mantra.note.pitch.parse_pitch((function (){var or__3949__auto__ = pitch;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$freq.cljs$core$IFn$_invoke$arity$1(osc_model);
}
})()));

mantra.osc.gain_ramp(gain_node,(function (){var or__3949__auto__ = volume;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.cst$kw$gain.cljs$core$IFn$_invoke$arity$1(osc_model);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return (1);
}
}
})());

mantra.osc.start_osc(osc_impl);

if(cljs.core.truth_(duration)){
var duration_ms = mantra.note.duration.parse_duration(duration);
return chronoid.core.set_timeout_BANG_(clock,((function (duration_ms,map__10402,map__10402__$1,osc_impl,osc_node,gain_node,clock,map__10400,map__10400__$1,note_model,pitch,duration,volume){
return (function (){
return mantra.osc.stop_osc(osc_impl);
});})(duration_ms,map__10402,map__10402__$1,osc_impl,osc_node,gain_node,clock,map__10400,map__10400__$1,note_model,pitch,duration,volume))
,duration_ms);
} else {
return null;
}
});
/**
 * Uses a one-off oscillator to play a note.
 * 
 * Stops any currently playing oscillators belonging to `osc-model`.
 * 
 * If duration is present, the oscillator is stopped after `duration` ms.
 * 
 * Otherwise, the note rings out indefinitely, until the oscillator is stopped.
 */
mantra.note.play_note = (function mantra$note$play_note(osc_model,note_model){
mantra.osc.stop_osc(osc_model);

return mantra.note.play_note_STAR_(osc_model,note_model);
});
/**
 * Like `play-note`, but does not stop any currently playing oscillators.
 */
mantra.note.also_play_note = (function mantra$note$also_play_note(osc_model,note_model){
return mantra.note.play_note_STAR_(osc_model,note_model);
});
mantra.note.play_notes_STAR_ = (function mantra$note$play_notes_STAR_(p__10404,notes,play_fn){
var map__10405 = p__10404;
var map__10405__$1 = ((((!((map__10405 == null)))?(((((map__10405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10405):map__10405);
var osc_model = map__10405__$1;
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10405__$1,cljs.core.cst$kw$clock);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__10405,map__10405__$1,osc_model,clock){
return (function (timeout,p__10407){
var map__10408 = p__10407;
var map__10408__$1 = ((((!((map__10408 == null)))?(((((map__10408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10408):map__10408);
var note_model = map__10408__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10408__$1,cljs.core.cst$kw$pitch);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10408__$1,cljs.core.cst$kw$duration);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10408__$1,cljs.core.cst$kw$volume);
if(cljs.core.truth_(pitch)){
chronoid.core.set_timeout_BANG_(clock,((function (map__10408,map__10408__$1,note_model,pitch,duration,volume,map__10405,map__10405__$1,osc_model,clock){
return (function (){
return (play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note_model) : play_fn.call(null,osc_model,note_model));
});})(map__10408,map__10408__$1,note_model,pitch,duration,volume,map__10405,map__10405__$1,osc_model,clock))
,timeout);
} else {
}

var duration_ms = mantra.note.duration.parse_duration((function (){var or__3949__auto__ = duration;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})());
return (timeout + duration_ms);
});})(map__10405,map__10405__$1,osc_model,clock))
,(0),notes);
});
/**
 * Plays a sequence of notes, one after the other.
 * 
 * Stops any currently playing oscillators belonging to `osc-model`.
 * 
 * If pitch is omitted (or nil), the note is treated as a rest (a pause in the
 * sequence, the length of `duration`.
 */
mantra.note.play_notes = (function mantra$note$play_notes(osc_model,notes){
mantra.osc.stop_osc(osc_model);

return mantra.note.play_notes_STAR_(osc_model,notes,mantra.note.play_note);
});
/**
 * Like `play-notes`, but does not stop any currently playing oscillators.
 * 
 * Each note in `notes` does behave normally when played, i.e. if it has a
 * duration, it *will* stop after `duration` ms.
 */
mantra.note.also_play_notes = (function mantra$note$also_play_notes(osc_model,notes){
return mantra.note.play_notes_STAR_(osc_model,notes,mantra.note.also_play_note);
});
mantra.note.play_chord_STAR_ = (function mantra$note$play_chord_STAR_(osc_model,notes,play_fn){
var seq__10410 = cljs.core.seq(notes);
var chunk__10411 = null;
var count__10412 = (0);
var i__10413 = (0);
while(true){
if((i__10413 < count__10412)){
var map__10414 = chunk__10411.cljs$core$IIndexed$_nth$arity$2(null,i__10413);
var map__10414__$1 = ((((!((map__10414 == null)))?(((((map__10414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10414):map__10414);
var note = map__10414__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10414__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_(pitch)){
(play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note) : play_fn.call(null,osc_model,note));
} else {
}


var G__10418 = seq__10410;
var G__10419 = chunk__10411;
var G__10420 = count__10412;
var G__10421 = (i__10413 + (1));
seq__10410 = G__10418;
chunk__10411 = G__10419;
count__10412 = G__10420;
i__10413 = G__10421;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__10410);
if(temp__5720__auto__){
var seq__10410__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10410__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10410__$1);
var G__10422 = cljs.core.chunk_rest(seq__10410__$1);
var G__10423 = c__4351__auto__;
var G__10424 = cljs.core.count(c__4351__auto__);
var G__10425 = (0);
seq__10410 = G__10422;
chunk__10411 = G__10423;
count__10412 = G__10424;
i__10413 = G__10425;
continue;
} else {
var map__10416 = cljs.core.first(seq__10410__$1);
var map__10416__$1 = ((((!((map__10416 == null)))?(((((map__10416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10416):map__10416);
var note = map__10416__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10416__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_(pitch)){
(play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note) : play_fn.call(null,osc_model,note));
} else {
}


var G__10426 = cljs.core.next(seq__10410__$1);
var G__10427 = null;
var G__10428 = (0);
var G__10429 = (0);
seq__10410 = G__10426;
chunk__10411 = G__10427;
count__10412 = G__10428;
i__10413 = G__10429;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Plays a collection of notes simultaneously.
 * 
 * Stops any currently playing oscillators belonging to `osc-model`.
 */
mantra.note.play_chord = (function mantra$note$play_chord(osc_model,notes){
mantra.osc.stop_osc(osc_model);

return mantra.note.play_chord_STAR_(osc_model,notes,mantra.note.also_play_note);
});
/**
 * Like `play-chord`, but does not stop any currently playing oscillators.
 * 
 * Each note in `notes` does behave normally when played, i.e. if it has a
 * duration, it *will* stop after `duration` ms.
 */
mantra.note.also_play_chord = (function mantra$note$also_play_chord(osc_model,notes){
return mantra.note.play_chord_STAR_(osc_model,notes,mantra.note.also_play_note);
});
