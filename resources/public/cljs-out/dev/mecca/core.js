// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.subs');
goog.require('mecca.view');
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));
mecca.core.get_app_element = (function mecca$core$get_app_element(){
return goog.dom.getElement("app");
});
mecca.core.mount = (function mecca$core$mount(el){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.mecca], null),el);
});
mecca.core.mount_app_element = (function mecca$core$mount_app_element(){
var temp__5457__auto__ = mecca.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return mecca.core.mount.call(null,el);
} else {
return null;
}
});
mecca.core.mount_app_element.call(null);
mecca.core.on_reload = (function mecca$core$on_reload(){
return mecca.core.mount_app_element.call(null);
});
mecca.core.init = (function mecca$core$init(){
return mecca.core.mount_app_element.call(null);
});
goog.exportSymbol('mecca.core.init', mecca.core.init);

//# sourceMappingURL=core.js.map
