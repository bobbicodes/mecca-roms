// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),null,new cljs.core.Keyword(null,"register-bank","register-bank",-290192893),(1)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-bank","select-bank",-86546016),(function (db,p__10935){
var vec__10936 = p__10935;
var _ = cljs.core.nth.call(null,vec__10936,(0),null);
var bank = cljs.core.nth.call(null,vec__10936,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"register-bank","register-bank",-290192893),bank);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__10939){
var vec__10940 = p__10939;
var _ = cljs.core.nth.call(null,vec__10940,(0),null);
var file = cljs.core.nth.call(null,vec__10940,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));

//# sourceMappingURL=events.js.map
