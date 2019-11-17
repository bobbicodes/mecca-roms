// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$register_DASH_bank,(1)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_bank,(function (db,p__12530){
var vec__12531 = p__12530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(0),null);
var bank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$register_DASH_bank,bank);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__12534){
var vec__12535 = p__12534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
