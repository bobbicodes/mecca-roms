// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x23314_23315 = value;
x23314_23315.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x23317_23318 = value;
x23317_23318.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x23320_23321 = value;
x23320_23321.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__3938__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__3938__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23328 = arguments.length;
var i__4532__auto___23329 = (0);
while(true){
if((i__4532__auto___23329 < len__4531__auto___23328)){
args__4534__auto__.push((arguments[i__4532__auto___23329]));

var G__23330 = (i__4532__auto___23329 + (1));
i__4532__auto___23329 = G__23330;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__23324_23331 = cljs.core.seq.call(null,items);
var chunk__23325_23332 = null;
var count__23326_23333 = (0);
var i__23327_23334 = (0);
while(true){
if((i__23327_23334 < count__23326_23333)){
var item_23335 = cljs.core._nth.call(null,chunk__23325_23332,i__23327_23334);
if(!((item_23335 == null))){
if(cljs.core.coll_QMARK_.call(null,item_23335)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_23335)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_23335));
}
} else {
}


var G__23336 = seq__23324_23331;
var G__23337 = chunk__23325_23332;
var G__23338 = count__23326_23333;
var G__23339 = (i__23327_23334 + (1));
seq__23324_23331 = G__23336;
chunk__23325_23332 = G__23337;
count__23326_23333 = G__23338;
i__23327_23334 = G__23339;
continue;
} else {
var temp__5457__auto___23340 = cljs.core.seq.call(null,seq__23324_23331);
if(temp__5457__auto___23340){
var seq__23324_23341__$1 = temp__5457__auto___23340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23324_23341__$1)){
var c__4351__auto___23342 = cljs.core.chunk_first.call(null,seq__23324_23341__$1);
var G__23343 = cljs.core.chunk_rest.call(null,seq__23324_23341__$1);
var G__23344 = c__4351__auto___23342;
var G__23345 = cljs.core.count.call(null,c__4351__auto___23342);
var G__23346 = (0);
seq__23324_23331 = G__23343;
chunk__23325_23332 = G__23344;
count__23326_23333 = G__23345;
i__23327_23334 = G__23346;
continue;
} else {
var item_23347 = cljs.core.first.call(null,seq__23324_23341__$1);
if(!((item_23347 == null))){
if(cljs.core.coll_QMARK_.call(null,item_23347)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_23347)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_23347));
}
} else {
}


var G__23348 = cljs.core.next.call(null,seq__23324_23341__$1);
var G__23349 = null;
var G__23350 = (0);
var G__23351 = (0);
seq__23324_23331 = G__23348;
chunk__23325_23332 = G__23349;
count__23326_23333 = G__23350;
i__23327_23334 = G__23351;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq23323){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23323));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23359 = arguments.length;
var i__4532__auto___23360 = (0);
while(true){
if((i__4532__auto___23360 < len__4531__auto___23359)){
args__4534__auto__.push((arguments[i__4532__auto___23360]));

var G__23361 = (i__4532__auto___23360 + (1));
i__4532__auto___23360 = G__23361;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__23355_23362 = cljs.core.seq.call(null,children);
var chunk__23356_23363 = null;
var count__23357_23364 = (0);
var i__23358_23365 = (0);
while(true){
if((i__23358_23365 < count__23357_23364)){
var child_23366 = cljs.core._nth.call(null,chunk__23356_23363,i__23358_23365);
if(!((child_23366 == null))){
if(cljs.core.coll_QMARK_.call(null,child_23366)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_23366))));
} else {
var temp__5455__auto___23367 = devtools.formatters.helpers.pref.call(null,child_23366);
if(cljs.core.truth_(temp__5455__auto___23367)){
var child_value_23368 = temp__5455__auto___23367;
template.push(child_value_23368);
} else {
}
}
} else {
}


var G__23369 = seq__23355_23362;
var G__23370 = chunk__23356_23363;
var G__23371 = count__23357_23364;
var G__23372 = (i__23358_23365 + (1));
seq__23355_23362 = G__23369;
chunk__23356_23363 = G__23370;
count__23357_23364 = G__23371;
i__23358_23365 = G__23372;
continue;
} else {
var temp__5457__auto___23373 = cljs.core.seq.call(null,seq__23355_23362);
if(temp__5457__auto___23373){
var seq__23355_23374__$1 = temp__5457__auto___23373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23355_23374__$1)){
var c__4351__auto___23375 = cljs.core.chunk_first.call(null,seq__23355_23374__$1);
var G__23376 = cljs.core.chunk_rest.call(null,seq__23355_23374__$1);
var G__23377 = c__4351__auto___23375;
var G__23378 = cljs.core.count.call(null,c__4351__auto___23375);
var G__23379 = (0);
seq__23355_23362 = G__23376;
chunk__23356_23363 = G__23377;
count__23357_23364 = G__23378;
i__23358_23365 = G__23379;
continue;
} else {
var child_23380 = cljs.core.first.call(null,seq__23355_23374__$1);
if(!((child_23380 == null))){
if(cljs.core.coll_QMARK_.call(null,child_23380)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_23380))));
} else {
var temp__5455__auto___23381 = devtools.formatters.helpers.pref.call(null,child_23380);
if(cljs.core.truth_(temp__5455__auto___23381)){
var child_value_23382 = temp__5455__auto___23381;
template.push(child_value_23382);
} else {
}
}
} else {
}


var G__23383 = cljs.core.next.call(null,seq__23355_23374__$1);
var G__23384 = null;
var G__23385 = (0);
var G__23386 = (0);
seq__23355_23362 = G__23383;
chunk__23356_23363 = G__23384;
count__23357_23364 = G__23385;
i__23358_23365 = G__23386;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq23352){
var G__23353 = cljs.core.first.call(null,seq23352);
var seq23352__$1 = cljs.core.next.call(null,seq23352);
var G__23354 = cljs.core.first.call(null,seq23352__$1);
var seq23352__$2 = cljs.core.next.call(null,seq23352__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23353,G__23354,seq23352__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23389 = arguments.length;
var i__4532__auto___23390 = (0);
while(true){
if((i__4532__auto___23390 < len__4531__auto___23389)){
args__4534__auto__.push((arguments[i__4532__auto___23390]));

var G__23391 = (i__4532__auto___23390 + (1));
i__4532__auto___23390 = G__23391;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq23387){
var G__23388 = cljs.core.first.call(null,seq23387);
var seq23387__$1 = cljs.core.next.call(null,seq23387);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23388,seq23387__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23394 = arguments.length;
var i__4532__auto___23395 = (0);
while(true){
if((i__4532__auto___23395 < len__4531__auto___23394)){
args__4534__auto__.push((arguments[i__4532__auto___23395]));

var G__23396 = (i__4532__auto___23395 + (1));
i__4532__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq23392){
var G__23393 = cljs.core.first.call(null,seq23392);
var seq23392__$1 = cljs.core.next.call(null,seq23392);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23393,seq23392__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__23398 = arguments.length;
switch (G__23398) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj23400 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__3949__auto__ = start_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})()};
return obj23400;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23408 = arguments.length;
var i__4532__auto___23409 = (0);
while(true){
if((i__4532__auto___23409 < len__4531__auto___23408)){
args__4534__auto__.push((arguments[i__4532__auto___23409]));

var G__23410 = (i__4532__auto___23409 + (1));
i__4532__auto___23409 = G__23410;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23404){
var vec__23405 = p__23404;
var state_override_fn = cljs.core.nth.call(null,vec__23405,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq23402){
var G__23403 = cljs.core.first.call(null,seq23402);
var seq23402__$1 = cljs.core.next.call(null,seq23402);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23403,seq23402__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_23411 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_23411;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__23412 = name;
switch (G__23412) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__23414 = tag;
var html_tag = cljs.core.nth.call(null,vec__23414,(0),null);
var style = cljs.core.nth.call(null,vec__23414,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_23417 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_23417;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_23418 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_23419 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_23419;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_23418;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__23420 = initial_value;
var G__23421 = value.call(null);
initial_value = G__23420;
value = G__23421;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__23422 = initial_value;
var G__23423 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__23422;
value = G__23423;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__23424 = initial_value;
var G__23425 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__23424;
value = G__23425;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
