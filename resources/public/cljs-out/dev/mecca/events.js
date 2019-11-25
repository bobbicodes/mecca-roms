// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mantra.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$burger_DASH_menu_QMARK_,false,cljs.core.cst$kw$selected_DASH_item,null,cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$loading_QMARK_,false,cljs.core.cst$kw$bank,(0),cljs.core.cst$kw$oscillator,null,cljs.core.cst$kw$note,null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_bank,(function (db,p__13147){
var vec__13148 = p__13147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(0),null);
var bank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,bank);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_bank,(function (db,p__13151){
var vec__13152 = p__13151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loading,(function (db,p__13155){
var vec__13156 = p__13155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$loading_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file_DASH_upload,null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_bank,(function (db,p__13159){
var vec__13160 = p__13159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_item,(function (db,p__13163){
var vec__13164 = p__13163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_item,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_menu,(function (db,p__13167){
var vec__13168 = p__13167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13171){
var vec__13172 = p__13171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(0),null);
var bpm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,(mantra.core.set_tempo.cljs$core$IFn$_invoke$arity$1 ? mantra.core.set_tempo.cljs$core$IFn$_invoke$arity$1(bpm) : mantra.core.set_tempo.call(null,bpm)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_note,(function (db,p__13175){
var vec__13176 = p__13175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(0),null);
var osc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(2),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13176,(3),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$note,(function (){var G__13179 = osc;
var G__13180 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,pitch,cljs.core.cst$kw$duration,duration], null);
return (mantra.core.play_note.cljs$core$IFn$_invoke$arity$2 ? mantra.core.play_note.cljs$core$IFn$_invoke$arity$2(G__13179,G__13180) : mantra.core.play_note.call(null,G__13179,G__13180));
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hide_DASH_menu,(function (db,p__13181){
var vec__13182 = p__13181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_menu,(function (db,p__13185){
var vec__13186 = p__13185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13186,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13186,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__13189){
var vec__13190 = p__13189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$create_DASH_oscillator,(function (db,p__13193){
var vec__13194 = p__13193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13194,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13194,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$oscillator,(function (){var G__13197 = cljs.core.cst$kw$type;
var G__13198 = cljs.core.cst$kw$square;
return (mantra.core.osc.cljs$core$IFn$_invoke$arity$2 ? mantra.core.osc.cljs$core$IFn$_invoke$arity$2(G__13197,G__13198) : mantra.core.osc.call(null,G__13197,G__13198));
})());
}));
