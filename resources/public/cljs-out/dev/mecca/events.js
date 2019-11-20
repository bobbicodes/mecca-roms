// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$burger_DASH_menu_QMARK_,false,cljs.core.cst$kw$file_DASH_upload,null,cljs.core.cst$kw$register_DASH_bank,(0)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_bank,(function (db,p__12530){
var vec__12531 = p__12530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(0),null);
var bank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$register_DASH_bank,bank);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$show_DASH_menu,(function (db,p__12534){
var vec__12535 = p__12534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12535,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hide_DASH_menu,(function (db,p__12538){
var vec__12539 = p__12538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$burger_DASH_menu_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__12542){
var vec__12543 = p__12542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
