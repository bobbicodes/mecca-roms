// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mantra.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$burger_DASH_menu_QMARK_,false,cljs.core.cst$kw$selected_DASH_item,null,cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$loading_QMARK_,false,cljs.core.cst$kw$bank,(0),cljs.core.cst$kw$oscillator,null,cljs.core.cst$kw$note,null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_bank,(function (db,p__13138){
var vec__13139 = p__13138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var bank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,bank);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_bank,(function (db,p__13142){
var vec__13143 = p__13142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loading,(function (db,p__13146){
var vec__13147 = p__13146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13147,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13147,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$loading_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file_DASH_upload,null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_bank,(function (db,p__13150){
var vec__13151 = p__13150;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13151,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13151,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bank,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_item,(function (db,p__13154){
var vec__13155 = p__13154;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_item,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_menu,(function (db,p__13158){
var vec__13159 = p__13158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13159,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13159,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13162){
var vec__13163 = p__13162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(0),null);
var bpm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,(mantra.core.set_tempo.cljs$core$IFn$_invoke$arity$1 ? mantra.core.set_tempo.cljs$core$IFn$_invoke$arity$1(bpm) : mantra.core.set_tempo.call(null,bpm)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_note,(function (db,p__13166){
var vec__13167 = p__13166;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(0),null);
var osc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(2),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(3),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$note,(function (){var G__13170 = osc;
var G__13171 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pitch,pitch,cljs.core.cst$kw$duration,duration], null);
return (mantra.core.play_note.cljs$core$IFn$_invoke$arity$2 ? mantra.core.play_note.cljs$core$IFn$_invoke$arity$2(G__13170,G__13171) : mantra.core.play_note.call(null,G__13170,G__13171));
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hide_DASH_menu,(function (db,p__13172){
var vec__13173 = p__13172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13173,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13173,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_menu,(function (db,p__13176){
var vec__13177 = p__13176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__13180){
var vec__13181 = p__13180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13181,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13181,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$create_DASH_oscillator,(function (db,p__13184){
var vec__13185 = p__13184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13185,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$oscillator,(function (){var G__13188 = cljs.core.cst$kw$type;
var G__13189 = cljs.core.cst$kw$square;
return (mantra.core.osc.cljs$core$IFn$_invoke$arity$2 ? mantra.core.osc.cljs$core$IFn$_invoke$arity$2(G__13188,G__13189) : mantra.core.osc.call(null,G__13188,G__13189));
})());
}));
