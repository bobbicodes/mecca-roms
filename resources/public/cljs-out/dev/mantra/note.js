// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.note');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mantra.osc');
goog.require('mantra.note.duration');
goog.require('mantra.note.pitch');
goog.require('chronoid.core');
mantra.note.play_note_STAR_ = (function mantra$note$play_note_STAR_(osc_model,p__10408){
var map__10409 = p__10408;
var map__10409__$1 = ((((!((map__10409 == null)))?(((((map__10409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10409):map__10409);
var note_model = map__10409__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10409__$1,cljs.core.cst$kw$pitch);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10409__$1,cljs.core.cst$kw$duration);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10409__$1,cljs.core.cst$kw$volume);
var map__10411 = mantra.osc.osc_STAR_(osc_model);
var map__10411__$1 = ((((!((map__10411 == null)))?(((((map__10411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10411):map__10411);
var osc_impl = map__10411__$1;
var osc_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10411__$1,cljs.core.cst$kw$osc_DASH_node);
var gain_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10411__$1,cljs.core.cst$kw$gain_DASH_node);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10411__$1,cljs.core.cst$kw$clock);
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
return chronoid.core.set_timeout_BANG_(clock,((function (duration_ms,map__10411,map__10411__$1,osc_impl,osc_node,gain_node,clock,map__10409,map__10409__$1,note_model,pitch,duration,volume){
return (function (){
return mantra.osc.stop_osc(osc_impl);
});})(duration_ms,map__10411,map__10411__$1,osc_impl,osc_node,gain_node,clock,map__10409,map__10409__$1,note_model,pitch,duration,volume))
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
mantra.note.play_notes_STAR_ = (function mantra$note$play_notes_STAR_(p__10413,notes,play_fn){
var map__10414 = p__10413;
var map__10414__$1 = ((((!((map__10414 == null)))?(((((map__10414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10414):map__10414);
var osc_model = map__10414__$1;
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10414__$1,cljs.core.cst$kw$clock);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__10414,map__10414__$1,osc_model,clock){
return (function (timeout,p__10416){
var map__10417 = p__10416;
var map__10417__$1 = ((((!((map__10417 == null)))?(((((map__10417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10417):map__10417);
var note_model = map__10417__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10417__$1,cljs.core.cst$kw$pitch);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10417__$1,cljs.core.cst$kw$duration);
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10417__$1,cljs.core.cst$kw$volume);
if(cljs.core.truth_(pitch)){
chronoid.core.set_timeout_BANG_(clock,((function (map__10417,map__10417__$1,note_model,pitch,duration,volume,map__10414,map__10414__$1,osc_model,clock){
return (function (){
return (play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note_model) : play_fn.call(null,osc_model,note_model));
});})(map__10417,map__10417__$1,note_model,pitch,duration,volume,map__10414,map__10414__$1,osc_model,clock))
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
});})(map__10414,map__10414__$1,osc_model,clock))
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
var seq__10419 = cljs.core.seq(notes);
var chunk__10420 = null;
var count__10421 = (0);
var i__10422 = (0);
while(true){
if((i__10422 < count__10421)){
var map__10423 = chunk__10420.cljs$core$IIndexed$_nth$arity$2(null,i__10422);
var map__10423__$1 = ((((!((map__10423 == null)))?(((((map__10423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10423):map__10423);
var note = map__10423__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10423__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_(pitch)){
(play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note) : play_fn.call(null,osc_model,note));
} else {
}


var G__10427 = seq__10419;
var G__10428 = chunk__10420;
var G__10429 = count__10421;
var G__10430 = (i__10422 + (1));
seq__10419 = G__10427;
chunk__10420 = G__10428;
count__10421 = G__10429;
i__10422 = G__10430;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__10419);
if(temp__5457__auto__){
var seq__10419__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10419__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__10419__$1);
var G__10431 = cljs.core.chunk_rest(seq__10419__$1);
var G__10432 = c__4351__auto__;
var G__10433 = cljs.core.count(c__4351__auto__);
var G__10434 = (0);
seq__10419 = G__10431;
chunk__10420 = G__10432;
count__10421 = G__10433;
i__10422 = G__10434;
continue;
} else {
var map__10425 = cljs.core.first(seq__10419__$1);
var map__10425__$1 = ((((!((map__10425 == null)))?(((((map__10425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10425):map__10425);
var note = map__10425__$1;
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10425__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_(pitch)){
(play_fn.cljs$core$IFn$_invoke$arity$2 ? play_fn.cljs$core$IFn$_invoke$arity$2(osc_model,note) : play_fn.call(null,osc_model,note));
} else {
}


var G__10435 = cljs.core.next(seq__10419__$1);
var G__10436 = null;
var G__10437 = (0);
var G__10438 = (0);
seq__10419 = G__10435;
chunk__10420 = G__10436;
count__10421 = G__10437;
i__10422 = G__10438;
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
