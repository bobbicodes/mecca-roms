// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26135){
var map__26136 = p__26135;
var map__26136__$1 = ((((!((map__26136 == null)))?(((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26136):map__26136);
var m = map__26136__$1;
var n = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26138_26160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26139_26161 = null;
var count__26140_26162 = (0);
var i__26141_26163 = (0);
while(true){
if((i__26141_26163 < count__26140_26162)){
var f_26164 = cljs.core._nth.call(null,chunk__26139_26161,i__26141_26163);
cljs.core.println.call(null,"  ",f_26164);


var G__26165 = seq__26138_26160;
var G__26166 = chunk__26139_26161;
var G__26167 = count__26140_26162;
var G__26168 = (i__26141_26163 + (1));
seq__26138_26160 = G__26165;
chunk__26139_26161 = G__26166;
count__26140_26162 = G__26167;
i__26141_26163 = G__26168;
continue;
} else {
var temp__5457__auto___26169 = cljs.core.seq.call(null,seq__26138_26160);
if(temp__5457__auto___26169){
var seq__26138_26170__$1 = temp__5457__auto___26169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26138_26170__$1)){
var c__4351__auto___26171 = cljs.core.chunk_first.call(null,seq__26138_26170__$1);
var G__26172 = cljs.core.chunk_rest.call(null,seq__26138_26170__$1);
var G__26173 = c__4351__auto___26171;
var G__26174 = cljs.core.count.call(null,c__4351__auto___26171);
var G__26175 = (0);
seq__26138_26160 = G__26172;
chunk__26139_26161 = G__26173;
count__26140_26162 = G__26174;
i__26141_26163 = G__26175;
continue;
} else {
var f_26176 = cljs.core.first.call(null,seq__26138_26170__$1);
cljs.core.println.call(null,"  ",f_26176);


var G__26177 = cljs.core.next.call(null,seq__26138_26170__$1);
var G__26178 = null;
var G__26179 = (0);
var G__26180 = (0);
seq__26138_26160 = G__26177;
chunk__26139_26161 = G__26178;
count__26140_26162 = G__26179;
i__26141_26163 = G__26180;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26181 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26181);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26181)))?cljs.core.second.call(null,arglists_26181):arglists_26181));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26142_26182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26143_26183 = null;
var count__26144_26184 = (0);
var i__26145_26185 = (0);
while(true){
if((i__26145_26185 < count__26144_26184)){
var vec__26146_26186 = cljs.core._nth.call(null,chunk__26143_26183,i__26145_26185);
var name_26187 = cljs.core.nth.call(null,vec__26146_26186,(0),null);
var map__26149_26188 = cljs.core.nth.call(null,vec__26146_26186,(1),null);
var map__26149_26189__$1 = ((((!((map__26149_26188 == null)))?(((((map__26149_26188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26149_26188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26149_26188):map__26149_26188);
var doc_26190 = cljs.core.get.call(null,map__26149_26189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26191 = cljs.core.get.call(null,map__26149_26189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26187);

cljs.core.println.call(null," ",arglists_26191);

if(cljs.core.truth_(doc_26190)){
cljs.core.println.call(null," ",doc_26190);
} else {
}


var G__26192 = seq__26142_26182;
var G__26193 = chunk__26143_26183;
var G__26194 = count__26144_26184;
var G__26195 = (i__26145_26185 + (1));
seq__26142_26182 = G__26192;
chunk__26143_26183 = G__26193;
count__26144_26184 = G__26194;
i__26145_26185 = G__26195;
continue;
} else {
var temp__5457__auto___26196 = cljs.core.seq.call(null,seq__26142_26182);
if(temp__5457__auto___26196){
var seq__26142_26197__$1 = temp__5457__auto___26196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26142_26197__$1)){
var c__4351__auto___26198 = cljs.core.chunk_first.call(null,seq__26142_26197__$1);
var G__26199 = cljs.core.chunk_rest.call(null,seq__26142_26197__$1);
var G__26200 = c__4351__auto___26198;
var G__26201 = cljs.core.count.call(null,c__4351__auto___26198);
var G__26202 = (0);
seq__26142_26182 = G__26199;
chunk__26143_26183 = G__26200;
count__26144_26184 = G__26201;
i__26145_26185 = G__26202;
continue;
} else {
var vec__26151_26203 = cljs.core.first.call(null,seq__26142_26197__$1);
var name_26204 = cljs.core.nth.call(null,vec__26151_26203,(0),null);
var map__26154_26205 = cljs.core.nth.call(null,vec__26151_26203,(1),null);
var map__26154_26206__$1 = ((((!((map__26154_26205 == null)))?(((((map__26154_26205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26154_26205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26154_26205):map__26154_26205);
var doc_26207 = cljs.core.get.call(null,map__26154_26206__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26208 = cljs.core.get.call(null,map__26154_26206__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26204);

cljs.core.println.call(null," ",arglists_26208);

if(cljs.core.truth_(doc_26207)){
cljs.core.println.call(null," ",doc_26207);
} else {
}


var G__26209 = cljs.core.next.call(null,seq__26142_26197__$1);
var G__26210 = null;
var G__26211 = (0);
var G__26212 = (0);
seq__26142_26182 = G__26209;
chunk__26143_26183 = G__26210;
count__26144_26184 = G__26211;
i__26145_26185 = G__26212;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__26156 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26157 = null;
var count__26158 = (0);
var i__26159 = (0);
while(true){
if((i__26159 < count__26158)){
var role = cljs.core._nth.call(null,chunk__26157,i__26159);
var temp__5457__auto___26213__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26213__$1)){
var spec_26214 = temp__5457__auto___26213__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26214));
} else {
}


var G__26215 = seq__26156;
var G__26216 = chunk__26157;
var G__26217 = count__26158;
var G__26218 = (i__26159 + (1));
seq__26156 = G__26215;
chunk__26157 = G__26216;
count__26158 = G__26217;
i__26159 = G__26218;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26156);
if(temp__5457__auto____$1){
var seq__26156__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26156__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26156__$1);
var G__26219 = cljs.core.chunk_rest.call(null,seq__26156__$1);
var G__26220 = c__4351__auto__;
var G__26221 = cljs.core.count.call(null,c__4351__auto__);
var G__26222 = (0);
seq__26156 = G__26219;
chunk__26157 = G__26220;
count__26158 = G__26221;
i__26159 = G__26222;
continue;
} else {
var role = cljs.core.first.call(null,seq__26156__$1);
var temp__5457__auto___26223__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26223__$2)){
var spec_26224 = temp__5457__auto___26223__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26224));
} else {
}


var G__26225 = cljs.core.next.call(null,seq__26156__$1);
var G__26226 = null;
var G__26227 = (0);
var G__26228 = (0);
seq__26156 = G__26225;
chunk__26157 = G__26226;
count__26158 = G__26227;
i__26159 = G__26228;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
