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
var G__10137 = (total_beats + (beats * factor));
var G__10138 = (factor * 0.5);
var G__10139 = (dots__$1 - (1));
total_beats = G__10137;
factor = G__10138;
dots__$1 = G__10139;
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
mantra.note.duration.note_lengths = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mantra.note.duration.base_note_lengths,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10140(s__10141){
return (new cljs.core.LazySeq(null,(function (){
var s__10141__$1 = s__10141;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10141__$1);
if(temp__5457__auto__){
var s__10141__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10141__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10141__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10143 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10142 = (0);
while(true){
if((i__10142 < size__4323__auto__)){
var vec__10144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10144,(1),null);
cljs.core.chunk_append(b__10143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(1))], null));

var G__10200 = (i__10142 + (1));
i__10142 = G__10200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10143),mantra$note$duration$iter__10140(cljs.core.chunk_rest(s__10141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10143),null);
}
} else {
var vec__10147 = cljs.core.first(s__10141__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10147,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(1))], null),mantra$note$duration$iter__10140(cljs.core.rest(s__10141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10150(s__10151){
return (new cljs.core.LazySeq(null,(function (){
var s__10151__$1 = s__10151;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10151__$1);
if(temp__5457__auto__){
var s__10151__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10151__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10151__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10153 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10152 = (0);
while(true){
if((i__10152 < size__4323__auto__)){
var vec__10154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10152);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10154,(1),null);
cljs.core.chunk_append(b__10153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["double-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(2))], null));

var G__10201 = (i__10152 + (1));
i__10152 = G__10201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10153),mantra$note$duration$iter__10150(cljs.core.chunk_rest(s__10151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10153),null);
}
} else {
var vec__10157 = cljs.core.first(s__10151__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["double-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(2))], null),mantra$note$duration$iter__10150(cljs.core.rest(s__10151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10160(s__10161){
return (new cljs.core.LazySeq(null,(function (){
var s__10161__$1 = s__10161;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10161__$1);
if(temp__5457__auto__){
var s__10161__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10161__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10161__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10163 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10162 = (0);
while(true){
if((i__10162 < size__4323__auto__)){
var vec__10164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10162);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10164,(1),null);
cljs.core.chunk_append(b__10163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triple-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(3))], null));

var G__10202 = (i__10162 + (1));
i__10162 = G__10202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10163),mantra$note$duration$iter__10160(cljs.core.chunk_rest(s__10161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10163),null);
}
} else {
var vec__10167 = cljs.core.first(s__10161__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10167,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["triple-dotted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join('')),mantra.note.duration.dotted(v,(3))], null),mantra$note$duration$iter__10160(cljs.core.rest(s__10161__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10170(s__10171){
return (new cljs.core.LazySeq(null,(function (){
var s__10171__$1 = s__10171;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10171__$1);
if(temp__5457__auto__){
var s__10171__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10171__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10171__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10173 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10172 = (0);
while(true){
if((i__10172 < size__4323__auto__)){
var vec__10174 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,(1),null);
cljs.core.chunk_append(b__10173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-triplet"].join('')),mantra.note.duration.tuplet(v,(3))], null));

var G__10203 = (i__10172 + (1));
i__10172 = G__10203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10173),mantra$note$duration$iter__10170(cljs.core.chunk_rest(s__10171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10173),null);
}
} else {
var vec__10177 = cljs.core.first(s__10171__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10177,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-triplet"].join('')),mantra.note.duration.tuplet(v,(3))], null),mantra$note$duration$iter__10170(cljs.core.rest(s__10171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10180(s__10181){
return (new cljs.core.LazySeq(null,(function (){
var s__10181__$1 = s__10181;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10181__$1);
if(temp__5457__auto__){
var s__10181__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10181__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10181__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10183 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10182 = (0);
while(true){
if((i__10182 < size__4323__auto__)){
var vec__10184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10182);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10184,(1),null);
cljs.core.chunk_append(b__10183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-quintuplet"].join('')),mantra.note.duration.tuplet(v,(5))], null));

var G__10204 = (i__10182 + (1));
i__10182 = G__10204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10183),mantra$note$duration$iter__10180(cljs.core.chunk_rest(s__10181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10183),null);
}
} else {
var vec__10187 = cljs.core.first(s__10181__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10187,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-quintuplet"].join('')),mantra.note.duration.tuplet(v,(5))], null),mantra$note$duration$iter__10180(cljs.core.rest(s__10181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mantra.note.duration.base_note_lengths);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function mantra$note$duration$iter__10190(s__10191){
return (new cljs.core.LazySeq(null,(function (){
var s__10191__$1 = s__10191;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10191__$1);
if(temp__5457__auto__){
var s__10191__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10191__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10191__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10193 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10192 = (0);
while(true){
if((i__10192 < size__4323__auto__)){
var vec__10194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10192);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(1),null);
cljs.core.chunk_append(b__10193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-septuplet"].join('')),mantra.note.duration.tuplet(v,(7))], null));

var G__10205 = (i__10192 + (1));
i__10192 = G__10205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10193),mantra$note$duration$iter__10190(cljs.core.chunk_rest(s__10191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10193),null);
}
} else {
var vec__10197 = cljs.core.first(s__10191__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10197,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"-septuplet"].join('')),mantra.note.duration.tuplet(v,(7))], null),mantra$note$duration$iter__10190(cljs.core.rest(s__10191__$2)));
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
var G__10206 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(duration);
return (mantra.note.duration.parse_duration.cljs$core$IFn$_invoke$arity$1 ? mantra.note.duration.parse_duration.cljs$core$IFn$_invoke$arity$1(G__10206) : mantra.note.duration.parse_duration.call(null,G__10206));
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
