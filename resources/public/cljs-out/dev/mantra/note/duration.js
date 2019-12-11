// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mantra.note.duration');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mantra.time');
/**
 * Returns the theoretical new note length when a note-length is given the
 * specified number of dots.
 * 
 * e.g. given that quarter = 4, dotted quarter = 2-2/3
 */
mantra.note.duration.dotted = (function mantra$note$duration$dotted(note_length,dots){
var beats = ((4) / note_length);
var total_beats = beats;
var factor = 0.5;
var dots__$1 = dots;
while(true){
if((dots__$1 > (0))){
var G__10128 = (total_beats + (beats * factor));
var G__10129 = (factor * 0.5);
var G__10130 = (dots__$1 - (1));
total_beats = G__10128;
factor = G__10129;
dots__$1 = G__10130;
continue;
} else {
return ((4) / total_beats);
}
break;
}
});
/**
 * Returns the theoretical new note longeth when a note-length is made into a
 * tuplet of n (i.e. for note-length 4, n 3, a quarter note triplet).
 * 
 * e.g. quarter = 4, quarter note triplet = 6
 */
mantra.note.duration.tuplet = (function mantra$note$duration$tuplet(note_length,n){
return (n * (note_length / (2)));
});
mantra.note.duration.base_note_lengths = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$quarter,cljs.core.cst$kw$eighth,cljs.core.cst$kw$hundred_DASH_twenty_DASH_eighth,cljs.core.cst$kw$thirty_DASH_second,cljs.core.cst$kw$half,cljs.core.cst$kw$sixteenth,cljs.core.cst$kw$whole,cljs.core.cst$kw$sixty_DASH_fourth,cljs.core.cst$kw$double_DASH_whole],[(4),(8),(128),(32),(2),(16),(1),(64),0.5]),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$quaver,cljs.core.cst$kw$breve,cljs.core.cst$kw$semihemidemisemiquaver,cljs.core.cst$kw$semibreve,cljs.core.cst$kw$hemidemisemiquaver,cljs.core.cst$kw$crotchet,cljs.core.cst$kw$demisemiquaver,cljs.core.cst$kw$semiquaver,cljs.core.cst$kw$minim],[(8),0.5,(128),(1),(64),(4),(32),(16),(2)])], 0));
mantra.note.duration.note_lengths = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mantra.note.duration.base_note_lengths,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10131(s__10132){
return (new cljs.core.LazySeq(null,(function (){
var s__10132__$1 = s__10132;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10132__$1);
if(temp__5720__auto__){
var s__10132__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10132__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10132__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10134 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10133 = (0);
while(true){
if((i__10133 < size__4323__auto__)){
var vec__10135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10133);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10135,(1),null);
cljs.core.chunk_append(b__10134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(1))], null));

var G__10191 = (i__10133 + (1));
i__10133 = G__10191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10134),mantra$note$duration$iter__10131(cljs.core.chunk_rest(s__10132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10134),null);
}
} else {
var vec__10138 = cljs.core.first(s__10132__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10138,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(1))], null),mantra$note$duration$iter__10131(cljs.core.rest(s__10132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10141(s__10142){
return (new cljs.core.LazySeq(null,(function (){
var s__10142__$1 = s__10142;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10142__$1);
if(temp__5720__auto__){
var s__10142__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10142__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10142__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10144 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10143 = (0);
while(true){
if((i__10143 < size__4323__auto__)){
var vec__10145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10143);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10145,(1),null);
cljs.core.chunk_append(b__10144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["double-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(2))], null));

var G__10192 = (i__10143 + (1));
i__10143 = G__10192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10144),mantra$note$duration$iter__10141(cljs.core.chunk_rest(s__10142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10144),null);
}
} else {
var vec__10148 = cljs.core.first(s__10142__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["double-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(2))], null),mantra$note$duration$iter__10141(cljs.core.rest(s__10142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10151(s__10152){
return (new cljs.core.LazySeq(null,(function (){
var s__10152__$1 = s__10152;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10152__$1);
if(temp__5720__auto__){
var s__10152__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10152__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10152__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10154 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10153 = (0);
while(true){
if((i__10153 < size__4323__auto__)){
var vec__10155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10153);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10155,(1),null);
cljs.core.chunk_append(b__10154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triple-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(3))], null));

var G__10193 = (i__10153 + (1));
i__10153 = G__10193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10154),mantra$note$duration$iter__10151(cljs.core.chunk_rest(s__10152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10154),null);
}
} else {
var vec__10158 = cljs.core.first(s__10152__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10158,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triple-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(3))], null),mantra$note$duration$iter__10151(cljs.core.rest(s__10152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10161(s__10162){
return (new cljs.core.LazySeq(null,(function (){
var s__10162__$1 = s__10162;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10162__$1);
if(temp__5720__auto__){
var s__10162__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10162__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10162__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10164 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10163 = (0);
while(true){
if((i__10163 < size__4323__auto__)){
var vec__10165 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10163);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10165,(1),null);
cljs.core.chunk_append(b__10164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-triplet"].join('')),mantra.note.duration.tuplet(v,(3))], null));

var G__10194 = (i__10163 + (1));
i__10163 = G__10194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10164),mantra$note$duration$iter__10161(cljs.core.chunk_rest(s__10162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10164),null);
}
} else {
var vec__10168 = cljs.core.first(s__10162__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10168,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-triplet"].join('')),mantra.note.duration.tuplet(v,(3))], null),mantra$note$duration$iter__10161(cljs.core.rest(s__10162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10171(s__10172){
return (new cljs.core.LazySeq(null,(function (){
var s__10172__$1 = s__10172;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10172__$1);
if(temp__5720__auto__){
var s__10172__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10172__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10172__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10174 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10173 = (0);
while(true){
if((i__10173 < size__4323__auto__)){
var vec__10175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10173);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10175,(1),null);
cljs.core.chunk_append(b__10174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-quintuplet"].join('')),mantra.note.duration.tuplet(v,(5))], null));

var G__10195 = (i__10173 + (1));
i__10173 = G__10195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10174),mantra$note$duration$iter__10171(cljs.core.chunk_rest(s__10172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10174),null);
}
} else {
var vec__10178 = cljs.core.first(s__10172__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-quintuplet"].join('')),mantra.note.duration.tuplet(v,(5))], null),mantra$note$duration$iter__10171(cljs.core.rest(s__10172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10181(s__10182){
return (new cljs.core.LazySeq(null,(function (){
var s__10182__$1 = s__10182;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10182__$1);
if(temp__5720__auto__){
var s__10182__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10182__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10182__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10184 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10183 = (0);
while(true){
if((i__10183 < size__4323__auto__)){
var vec__10185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10183);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10185,(1),null);
cljs.core.chunk_append(b__10184,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-septuplet"].join('')),mantra.note.duration.tuplet(v,(7))], null));

var G__10196 = (i__10183 + (1));
i__10183 = G__10196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10184),mantra$note$duration$iter__10181(cljs.core.chunk_rest(s__10182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10184),null);
}
} else {
var vec__10188 = cljs.core.first(s__10182__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10188,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-septuplet"].join('')),mantra.note.duration.tuplet(v,(7))], null),mantra$note$duration$iter__10181(cljs.core.rest(s__10182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})())], 0));
mantra.note.duration.note_length__GT_duration = (function mantra$note$duration$note_length__GT_duration(nl){
var beats = ((4) / nl);
var beat_duration = ((1000) * ((60) / cljs.core.deref(mantra.time._STAR_tempo_STAR_)));
return (beats * beat_duration);
});
mantra.note.duration.parse_duration = (function mantra$note$duration$parse_duration(duration){
if(typeof duration === 'number'){
return duration;
} else {
if((duration instanceof cljs.core.Keyword)){
if(cljs.core.contains_QMARK_(mantra.note.duration.note_lengths,duration)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)," is not a valid note length."].join('')),"\n","(contains? note-lengths duration)"].join('')));
}

return mantra.note.duration.note_length__GT_duration((mantra.note.duration.note_lengths.cljs$core$IFn$_invoke$arity$1 ? mantra.note.duration.note_lengths.cljs$core$IFn$_invoke$arity$1(duration) : mantra.note.duration.note_lengths.call(null,duration)));
} else {
if(typeof duration === 'string'){
var G__10197 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(duration);
return (mantra.note.duration.parse_duration.cljs$core$IFn$_invoke$arity$1 ? mantra.note.duration.parse_duration.cljs$core$IFn$_invoke$arity$1(G__10197) : mantra.note.duration.parse_duration.call(null,G__10197));
} else {
if(cljs.core.sequential_QMARK_(duration)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mantra.note.duration.parse_duration,duration));
} else {
return null;
}
}
}
}
});
