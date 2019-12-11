// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('music_theory.note');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
music_theory.note.Note = (function (number,__meta,__extmap,__hash){
this.number = number;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
music_theory.note.Note.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

music_theory.note.Note.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10201,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10205 = k10201;
var G__10205__$1 = (((G__10205 instanceof cljs.core.Keyword))?G__10205.fqn:null);
switch (G__10205__$1) {
case "number":
return self__.number;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10201,else__4206__auto__);

}
});

music_theory.note.Note.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#music-theory.note.Note{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$number,self__.number],null))], null),self__.__extmap));
});

music_theory.note.Note.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10200){
var self__ = this;
var G__10200__$1 = this;
return (new cljs.core.RecordIter((0),G__10200__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$number], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

music_theory.note.Note.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

music_theory.note.Note.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new music_theory.note.Note(self__.number,self__.__meta,self__.__extmap,self__.__hash));
});

music_theory.note.Note.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

music_theory.note.Note.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__10206 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2092078955 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__10206(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

music_theory.note.Note.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10202,other10203){
var self__ = this;
var this10202__$1 = this;
return ((!((other10203 == null))) && ((this10202__$1.constructor === other10203.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10202__$1.number,other10203.number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10202__$1.__extmap,other10203.__extmap)));
});

music_theory.note.Note.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$number,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new music_theory.note.Note(self__.number,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

music_theory.note.Note.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10200){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10207 = cljs.core.keyword_identical_QMARK_;
var expr__10208 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__10210 = cljs.core.cst$kw$number;
var G__10211 = expr__10208;
return (pred__10207.cljs$core$IFn$_invoke$arity$2 ? pred__10207.cljs$core$IFn$_invoke$arity$2(G__10210,G__10211) : pred__10207.call(null,G__10210,G__10211));
})())){
return (new music_theory.note.Note(G__10200,self__.__meta,self__.__extmap,null));
} else {
return (new music_theory.note.Note(self__.number,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__10200),null));
}
});

music_theory.note.Note.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$number,self__.number,null))], null),self__.__extmap));
});

music_theory.note.Note.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10200){
var self__ = this;
var this__4202__auto____$1 = this;
return (new music_theory.note.Note(self__.number,G__10200,self__.__extmap,self__.__hash));
});

music_theory.note.Note.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

music_theory.note.Note.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$number], null);
});

music_theory.note.Note.cljs$lang$type = true;

music_theory.note.Note.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"music-theory.note/Note",null,(1),null));
});

music_theory.note.Note.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"music-theory.note/Note");
});

/**
 * Positional factory function for music-theory.note/Note.
 */
music_theory.note.__GT_Note = (function music_theory$note$__GT_Note(number){
return (new music_theory.note.Note(number,null,null,null));
});

/**
 * Factory function for music-theory.note/Note, taking a map of keywords to field values.
 */
music_theory.note.map__GT_Note = (function music_theory$note$map__GT_Note(G__10204){
var extmap__4236__auto__ = (function (){var G__10212 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__10204,cljs.core.cst$kw$number);
if(cljs.core.record_QMARK_(G__10204)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10212);
} else {
return G__10212;
}
})();
return (new music_theory.note.Note(cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(G__10204),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

music_theory.note.intervals = cljs.core.PersistentHashMap.fromArrays(["d","f","e","G","E","C","F","B","a","b","g","A","D","c"],[(2),(5),(4),(7),(4),(0),(5),(11),(9),(11),(7),(9),(2),(0)]);
/**
 * Creates a Note record, which represents a note as an unbounded MIDI note
 * number, from a string or keyword describing the note in scientific pitch
 * notation, i.e. a letter and (optionally) any number of sharps and flats.
 * 
 * e.g. C#5, Dbb4, E0
 */
music_theory.note.__GT_note = (function music_theory$note$__GT_note(x){
var s = cljs.core.name(x);
var vec__10214 = cljs.core.rest(cljs.core.re_matches(/([A-Ga-g])([#b]*)(-?\d+)/,s));
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10214,(0),null);
var accs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10214,(1),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10214,(2),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = letter;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = accs;
if(cljs.core.truth_(and__3938__auto____$1)){
return octave;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var octave__$1 = Number(octave);
var base_note = (((music_theory.note.intervals.cljs$core$IFn$_invoke$arity$1 ? music_theory.note.intervals.cljs$core$IFn$_invoke$arity$1(letter) : music_theory.note.intervals.call(null,letter)) + (octave__$1 * (12))) + (12));
return music_theory.note.__GT_Note(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (octave__$1,base_note,s,vec__10214,letter,accs,octave){
return (function (note_number,accidental){
var G__10217 = accidental;
switch (G__10217) {
case "#":
return (note_number + (1));

break;
case "b":
return (note_number - (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10217)].join('')));

}
});})(octave__$1,base_note,s,vec__10214,letter,accs,octave))
,base_note,accs));
} else {
throw (new Error("Invalid note format."));
}
});
/**
 * Converts a note in the form of a string or keyword (e.g. C#4, :Db5, A2) into
 * the corresponding MIDI note number.
 * 
 * Throws an assertion error if the note is outside the range of MIDI notes
 * (0-127).
 */
music_theory.note.note__GT_midi = (function music_theory$note$note__GT_midi(note){
var _PERCENT_ = cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note(note));
if(((((0) <= _PERCENT_)) && ((_PERCENT_ <= (127))))){
} else {
throw (new Error("Assert failed: (<= 0 % 127)"));
}

return _PERCENT_;
});
/**
 * Returns the octave of a note.
 */
music_theory.note.octave = (function music_theory$note$octave(note){
var note__$1 = ((typeof note === 'number')?note:cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note(note)));
var note__$2 = (((note__$1 < (12)))?(note__$1 - (11)):note__$1);
return cljs.core.quot((note__$2 - (12)),(12));
});
/**
 * Given a tonic (e.g. A) and a note (e.g. C#), returns a number from 0-11
 * representing the position of the note (e.g. 4) relative to the tonic.
 */
music_theory.note.note_position = (function music_theory$note$note_position(tonic,note){
var tonic_n = cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tonic)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))].join('')));
var note_n = ((typeof note === 'number')?((!(((((24) <= note)) && ((note <= (35))))))?((12) + cljs.core.rem(note,(24))):note):cljs.core.cst$kw$number.cljs$core$IFn$_invoke$arity$1(music_theory.note.__GT_note([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(note)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))].join(''))));
var note_n__$1 = (((note_n < tonic_n))?(note_n + (12)):note_n);
return (note_n__$1 - tonic_n);
});
