goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22771 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22772 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22772);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22776 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22777 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22777);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22776);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22771);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22808 = arguments.length;
switch (G__22808) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22817 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22817,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22831_22869 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22832_22870 = null;
var count__22833_22871 = (0);
var i__22834_22872 = (0);
while(true){
if((i__22834_22872 < count__22833_22871)){
var vec__22850_22873 = chunk__22832_22870.cljs$core$IIndexed$_nth$arity$2(null,i__22834_22872);
var container_22874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850_22873,(0),null);
var comp_22875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850_22873,(1),null);
reagent.dom.re_render_component(comp_22875,container_22874);


var G__22882 = seq__22831_22869;
var G__22883 = chunk__22832_22870;
var G__22884 = count__22833_22871;
var G__22885 = (i__22834_22872 + (1));
seq__22831_22869 = G__22882;
chunk__22832_22870 = G__22883;
count__22833_22871 = G__22884;
i__22834_22872 = G__22885;
continue;
} else {
var temp__5804__auto___22886 = cljs.core.seq(seq__22831_22869);
if(temp__5804__auto___22886){
var seq__22831_22887__$1 = temp__5804__auto___22886;
if(cljs.core.chunked_seq_QMARK_(seq__22831_22887__$1)){
var c__5568__auto___22888 = cljs.core.chunk_first(seq__22831_22887__$1);
var G__22889 = cljs.core.chunk_rest(seq__22831_22887__$1);
var G__22890 = c__5568__auto___22888;
var G__22891 = cljs.core.count(c__5568__auto___22888);
var G__22892 = (0);
seq__22831_22869 = G__22889;
chunk__22832_22870 = G__22890;
count__22833_22871 = G__22891;
i__22834_22872 = G__22892;
continue;
} else {
var vec__22859_22893 = cljs.core.first(seq__22831_22887__$1);
var container_22894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22893,(0),null);
var comp_22895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859_22893,(1),null);
reagent.dom.re_render_component(comp_22895,container_22894);


var G__22901 = cljs.core.next(seq__22831_22887__$1);
var G__22902 = null;
var G__22903 = (0);
var G__22904 = (0);
seq__22831_22869 = G__22901;
chunk__22832_22870 = G__22902;
count__22833_22871 = G__22903;
i__22834_22872 = G__22904;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
