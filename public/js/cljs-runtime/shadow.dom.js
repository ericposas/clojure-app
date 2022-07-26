goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21301 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21301(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21305 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21305(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20017 = coll;
var G__20018 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20017,G__20018) : shadow.dom.lazy_native_coll_seq.call(null,G__20017,G__20018));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20049 = arguments.length;
switch (G__20049) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20063 = arguments.length;
switch (G__20063) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__20071 = arguments.length;
switch (G__20071) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__20083 = arguments.length;
switch (G__20083) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__20095 = arguments.length;
switch (G__20095) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20109 = arguments.length;
switch (G__20109) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20125){if((e20125 instanceof Object)){
var e = e20125;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20125;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20131 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20132 = null;
var count__20133 = (0);
var i__20134 = (0);
while(true){
if((i__20134 < count__20133)){
var el = chunk__20132.cljs$core$IIndexed$_nth$arity$2(null,i__20134);
var handler_21344__$1 = ((function (seq__20131,chunk__20132,count__20133,i__20134,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20131,chunk__20132,count__20133,i__20134,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21344__$1);


var G__21345 = seq__20131;
var G__21346 = chunk__20132;
var G__21347 = count__20133;
var G__21348 = (i__20134 + (1));
seq__20131 = G__21345;
chunk__20132 = G__21346;
count__20133 = G__21347;
i__20134 = G__21348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20131);
if(temp__5804__auto__){
var seq__20131__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20131__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20131__$1);
var G__21350 = cljs.core.chunk_rest(seq__20131__$1);
var G__21351 = c__5568__auto__;
var G__21352 = cljs.core.count(c__5568__auto__);
var G__21353 = (0);
seq__20131 = G__21350;
chunk__20132 = G__21351;
count__20133 = G__21352;
i__20134 = G__21353;
continue;
} else {
var el = cljs.core.first(seq__20131__$1);
var handler_21354__$1 = ((function (seq__20131,chunk__20132,count__20133,i__20134,el,seq__20131__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20131,chunk__20132,count__20133,i__20134,el,seq__20131__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21354__$1);


var G__21355 = cljs.core.next(seq__20131__$1);
var G__21356 = null;
var G__21357 = (0);
var G__21358 = (0);
seq__20131 = G__21355;
chunk__20132 = G__21356;
count__20133 = G__21357;
i__20134 = G__21358;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20156 = arguments.length;
switch (G__20156) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20166 = cljs.core.seq(events);
var chunk__20167 = null;
var count__20168 = (0);
var i__20169 = (0);
while(true){
if((i__20169 < count__20168)){
var vec__20183 = chunk__20167.cljs$core$IIndexed$_nth$arity$2(null,i__20169);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20183,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21374 = seq__20166;
var G__21375 = chunk__20167;
var G__21376 = count__20168;
var G__21377 = (i__20169 + (1));
seq__20166 = G__21374;
chunk__20167 = G__21375;
count__20168 = G__21376;
i__20169 = G__21377;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20166);
if(temp__5804__auto__){
var seq__20166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20166__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20166__$1);
var G__21378 = cljs.core.chunk_rest(seq__20166__$1);
var G__21379 = c__5568__auto__;
var G__21380 = cljs.core.count(c__5568__auto__);
var G__21381 = (0);
seq__20166 = G__21378;
chunk__20167 = G__21379;
count__20168 = G__21380;
i__20169 = G__21381;
continue;
} else {
var vec__20188 = cljs.core.first(seq__20166__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21384 = cljs.core.next(seq__20166__$1);
var G__21385 = null;
var G__21386 = (0);
var G__21387 = (0);
seq__20166 = G__21384;
chunk__20167 = G__21385;
count__20168 = G__21386;
i__20169 = G__21387;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20193 = cljs.core.seq(styles);
var chunk__20194 = null;
var count__20195 = (0);
var i__20196 = (0);
while(true){
if((i__20196 < count__20195)){
var vec__20207 = chunk__20194.cljs$core$IIndexed$_nth$arity$2(null,i__20196);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20207,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21393 = seq__20193;
var G__21394 = chunk__20194;
var G__21395 = count__20195;
var G__21396 = (i__20196 + (1));
seq__20193 = G__21393;
chunk__20194 = G__21394;
count__20195 = G__21395;
i__20196 = G__21396;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20193);
if(temp__5804__auto__){
var seq__20193__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20193__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20193__$1);
var G__21398 = cljs.core.chunk_rest(seq__20193__$1);
var G__21399 = c__5568__auto__;
var G__21400 = cljs.core.count(c__5568__auto__);
var G__21401 = (0);
seq__20193 = G__21398;
chunk__20194 = G__21399;
count__20195 = G__21400;
i__20196 = G__21401;
continue;
} else {
var vec__20212 = cljs.core.first(seq__20193__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21403 = cljs.core.next(seq__20193__$1);
var G__21404 = null;
var G__21405 = (0);
var G__21406 = (0);
seq__20193 = G__21403;
chunk__20194 = G__21404;
count__20195 = G__21405;
i__20196 = G__21406;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20221_21407 = key;
var G__20221_21408__$1 = (((G__20221_21407 instanceof cljs.core.Keyword))?G__20221_21407.fqn:null);
switch (G__20221_21408__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21411 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21411,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21411,"aria-");
}
})())){
el.setAttribute(ks_21411,value);
} else {
(el[ks_21411] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20259){
var map__20260 = p__20259;
var map__20260__$1 = cljs.core.__destructure_map(map__20260);
var props = map__20260__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20260__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20265 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20270 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20270,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20270;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20281 = arguments.length;
switch (G__20281) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20301){
var vec__20307 = p__20301;
var seq__20308 = cljs.core.seq(vec__20307);
var first__20309 = cljs.core.first(seq__20308);
var seq__20308__$1 = cljs.core.next(seq__20308);
var nn = first__20309;
var first__20309__$1 = cljs.core.first(seq__20308__$1);
var seq__20308__$2 = cljs.core.next(seq__20308__$1);
var np = first__20309__$1;
var nc = seq__20308__$2;
var node = vec__20307;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20327 = nn;
var G__20328 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20327,G__20328) : create_fn.call(null,G__20327,G__20328));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20337 = nn;
var G__20338 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20337,G__20338) : create_fn.call(null,G__20337,G__20338));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20357 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20357,(1),null);
var seq__20360_21427 = cljs.core.seq(node_children);
var chunk__20361_21428 = null;
var count__20362_21429 = (0);
var i__20363_21430 = (0);
while(true){
if((i__20363_21430 < count__20362_21429)){
var child_struct_21431 = chunk__20361_21428.cljs$core$IIndexed$_nth$arity$2(null,i__20363_21430);
var children_21432 = shadow.dom.dom_node(child_struct_21431);
if(cljs.core.seq_QMARK_(children_21432)){
var seq__20480_21433 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21432));
var chunk__20482_21434 = null;
var count__20483_21435 = (0);
var i__20484_21436 = (0);
while(true){
if((i__20484_21436 < count__20483_21435)){
var child_21437 = chunk__20482_21434.cljs$core$IIndexed$_nth$arity$2(null,i__20484_21436);
if(cljs.core.truth_(child_21437)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21437);


var G__21438 = seq__20480_21433;
var G__21439 = chunk__20482_21434;
var G__21440 = count__20483_21435;
var G__21441 = (i__20484_21436 + (1));
seq__20480_21433 = G__21438;
chunk__20482_21434 = G__21439;
count__20483_21435 = G__21440;
i__20484_21436 = G__21441;
continue;
} else {
var G__21442 = seq__20480_21433;
var G__21443 = chunk__20482_21434;
var G__21444 = count__20483_21435;
var G__21445 = (i__20484_21436 + (1));
seq__20480_21433 = G__21442;
chunk__20482_21434 = G__21443;
count__20483_21435 = G__21444;
i__20484_21436 = G__21445;
continue;
}
} else {
var temp__5804__auto___21448 = cljs.core.seq(seq__20480_21433);
if(temp__5804__auto___21448){
var seq__20480_21451__$1 = temp__5804__auto___21448;
if(cljs.core.chunked_seq_QMARK_(seq__20480_21451__$1)){
var c__5568__auto___21452 = cljs.core.chunk_first(seq__20480_21451__$1);
var G__21453 = cljs.core.chunk_rest(seq__20480_21451__$1);
var G__21454 = c__5568__auto___21452;
var G__21455 = cljs.core.count(c__5568__auto___21452);
var G__21456 = (0);
seq__20480_21433 = G__21453;
chunk__20482_21434 = G__21454;
count__20483_21435 = G__21455;
i__20484_21436 = G__21456;
continue;
} else {
var child_21460 = cljs.core.first(seq__20480_21451__$1);
if(cljs.core.truth_(child_21460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21460);


var G__21461 = cljs.core.next(seq__20480_21451__$1);
var G__21462 = null;
var G__21463 = (0);
var G__21464 = (0);
seq__20480_21433 = G__21461;
chunk__20482_21434 = G__21462;
count__20483_21435 = G__21463;
i__20484_21436 = G__21464;
continue;
} else {
var G__21465 = cljs.core.next(seq__20480_21451__$1);
var G__21466 = null;
var G__21467 = (0);
var G__21468 = (0);
seq__20480_21433 = G__21465;
chunk__20482_21434 = G__21466;
count__20483_21435 = G__21467;
i__20484_21436 = G__21468;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21432);
}


var G__21470 = seq__20360_21427;
var G__21471 = chunk__20361_21428;
var G__21472 = count__20362_21429;
var G__21473 = (i__20363_21430 + (1));
seq__20360_21427 = G__21470;
chunk__20361_21428 = G__21471;
count__20362_21429 = G__21472;
i__20363_21430 = G__21473;
continue;
} else {
var temp__5804__auto___21474 = cljs.core.seq(seq__20360_21427);
if(temp__5804__auto___21474){
var seq__20360_21475__$1 = temp__5804__auto___21474;
if(cljs.core.chunked_seq_QMARK_(seq__20360_21475__$1)){
var c__5568__auto___21476 = cljs.core.chunk_first(seq__20360_21475__$1);
var G__21477 = cljs.core.chunk_rest(seq__20360_21475__$1);
var G__21478 = c__5568__auto___21476;
var G__21479 = cljs.core.count(c__5568__auto___21476);
var G__21480 = (0);
seq__20360_21427 = G__21477;
chunk__20361_21428 = G__21478;
count__20362_21429 = G__21479;
i__20363_21430 = G__21480;
continue;
} else {
var child_struct_21481 = cljs.core.first(seq__20360_21475__$1);
var children_21482 = shadow.dom.dom_node(child_struct_21481);
if(cljs.core.seq_QMARK_(children_21482)){
var seq__20507_21483 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21482));
var chunk__20509_21484 = null;
var count__20510_21485 = (0);
var i__20511_21486 = (0);
while(true){
if((i__20511_21486 < count__20510_21485)){
var child_21487 = chunk__20509_21484.cljs$core$IIndexed$_nth$arity$2(null,i__20511_21486);
if(cljs.core.truth_(child_21487)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21487);


var G__21488 = seq__20507_21483;
var G__21489 = chunk__20509_21484;
var G__21490 = count__20510_21485;
var G__21491 = (i__20511_21486 + (1));
seq__20507_21483 = G__21488;
chunk__20509_21484 = G__21489;
count__20510_21485 = G__21490;
i__20511_21486 = G__21491;
continue;
} else {
var G__21495 = seq__20507_21483;
var G__21496 = chunk__20509_21484;
var G__21497 = count__20510_21485;
var G__21498 = (i__20511_21486 + (1));
seq__20507_21483 = G__21495;
chunk__20509_21484 = G__21496;
count__20510_21485 = G__21497;
i__20511_21486 = G__21498;
continue;
}
} else {
var temp__5804__auto___21499__$1 = cljs.core.seq(seq__20507_21483);
if(temp__5804__auto___21499__$1){
var seq__20507_21500__$1 = temp__5804__auto___21499__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20507_21500__$1)){
var c__5568__auto___21501 = cljs.core.chunk_first(seq__20507_21500__$1);
var G__21502 = cljs.core.chunk_rest(seq__20507_21500__$1);
var G__21503 = c__5568__auto___21501;
var G__21504 = cljs.core.count(c__5568__auto___21501);
var G__21505 = (0);
seq__20507_21483 = G__21502;
chunk__20509_21484 = G__21503;
count__20510_21485 = G__21504;
i__20511_21486 = G__21505;
continue;
} else {
var child_21507 = cljs.core.first(seq__20507_21500__$1);
if(cljs.core.truth_(child_21507)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21507);


var G__21508 = cljs.core.next(seq__20507_21500__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__20507_21483 = G__21508;
chunk__20509_21484 = G__21509;
count__20510_21485 = G__21510;
i__20511_21486 = G__21511;
continue;
} else {
var G__21512 = cljs.core.next(seq__20507_21500__$1);
var G__21513 = null;
var G__21514 = (0);
var G__21515 = (0);
seq__20507_21483 = G__21512;
chunk__20509_21484 = G__21513;
count__20510_21485 = G__21514;
i__20511_21486 = G__21515;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21482);
}


var G__21516 = cljs.core.next(seq__20360_21475__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__20360_21427 = G__21516;
chunk__20361_21428 = G__21517;
count__20362_21429 = G__21518;
i__20363_21430 = G__21519;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20555 = cljs.core.seq(node);
var chunk__20556 = null;
var count__20557 = (0);
var i__20558 = (0);
while(true){
if((i__20558 < count__20557)){
var n = chunk__20556.cljs$core$IIndexed$_nth$arity$2(null,i__20558);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21522 = seq__20555;
var G__21523 = chunk__20556;
var G__21524 = count__20557;
var G__21525 = (i__20558 + (1));
seq__20555 = G__21522;
chunk__20556 = G__21523;
count__20557 = G__21524;
i__20558 = G__21525;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20555);
if(temp__5804__auto__){
var seq__20555__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20555__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20555__$1);
var G__21526 = cljs.core.chunk_rest(seq__20555__$1);
var G__21527 = c__5568__auto__;
var G__21528 = cljs.core.count(c__5568__auto__);
var G__21529 = (0);
seq__20555 = G__21526;
chunk__20556 = G__21527;
count__20557 = G__21528;
i__20558 = G__21529;
continue;
} else {
var n = cljs.core.first(seq__20555__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21530 = cljs.core.next(seq__20555__$1);
var G__21531 = null;
var G__21532 = (0);
var G__21533 = (0);
seq__20555 = G__21530;
chunk__20556 = G__21531;
count__20557 = G__21532;
i__20558 = G__21533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20594 = arguments.length;
switch (G__20594) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20606 = arguments.length;
switch (G__20606) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20675 = arguments.length;
switch (G__20675) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21546 = arguments.length;
var i__5770__auto___21547 = (0);
while(true){
if((i__5770__auto___21547 < len__5769__auto___21546)){
args__5775__auto__.push((arguments[i__5770__auto___21547]));

var G__21548 = (i__5770__auto___21547 + (1));
i__5770__auto___21547 = G__21548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20725_21549 = cljs.core.seq(nodes);
var chunk__20726_21550 = null;
var count__20727_21551 = (0);
var i__20728_21552 = (0);
while(true){
if((i__20728_21552 < count__20727_21551)){
var node_21553 = chunk__20726_21550.cljs$core$IIndexed$_nth$arity$2(null,i__20728_21552);
fragment.appendChild(shadow.dom._to_dom(node_21553));


var G__21554 = seq__20725_21549;
var G__21555 = chunk__20726_21550;
var G__21556 = count__20727_21551;
var G__21557 = (i__20728_21552 + (1));
seq__20725_21549 = G__21554;
chunk__20726_21550 = G__21555;
count__20727_21551 = G__21556;
i__20728_21552 = G__21557;
continue;
} else {
var temp__5804__auto___21558 = cljs.core.seq(seq__20725_21549);
if(temp__5804__auto___21558){
var seq__20725_21559__$1 = temp__5804__auto___21558;
if(cljs.core.chunked_seq_QMARK_(seq__20725_21559__$1)){
var c__5568__auto___21560 = cljs.core.chunk_first(seq__20725_21559__$1);
var G__21561 = cljs.core.chunk_rest(seq__20725_21559__$1);
var G__21562 = c__5568__auto___21560;
var G__21563 = cljs.core.count(c__5568__auto___21560);
var G__21564 = (0);
seq__20725_21549 = G__21561;
chunk__20726_21550 = G__21562;
count__20727_21551 = G__21563;
i__20728_21552 = G__21564;
continue;
} else {
var node_21565 = cljs.core.first(seq__20725_21559__$1);
fragment.appendChild(shadow.dom._to_dom(node_21565));


var G__21566 = cljs.core.next(seq__20725_21559__$1);
var G__21567 = null;
var G__21568 = (0);
var G__21569 = (0);
seq__20725_21549 = G__21566;
chunk__20726_21550 = G__21567;
count__20727_21551 = G__21568;
i__20728_21552 = G__21569;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20720));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20752_21570 = cljs.core.seq(scripts);
var chunk__20753_21571 = null;
var count__20754_21572 = (0);
var i__20755_21573 = (0);
while(true){
if((i__20755_21573 < count__20754_21572)){
var vec__20772_21574 = chunk__20753_21571.cljs$core$IIndexed$_nth$arity$2(null,i__20755_21573);
var script_tag_21575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20772_21574,(0),null);
var script_body_21576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20772_21574,(1),null);
eval(script_body_21576);


var G__21577 = seq__20752_21570;
var G__21578 = chunk__20753_21571;
var G__21579 = count__20754_21572;
var G__21580 = (i__20755_21573 + (1));
seq__20752_21570 = G__21577;
chunk__20753_21571 = G__21578;
count__20754_21572 = G__21579;
i__20755_21573 = G__21580;
continue;
} else {
var temp__5804__auto___21582 = cljs.core.seq(seq__20752_21570);
if(temp__5804__auto___21582){
var seq__20752_21583__$1 = temp__5804__auto___21582;
if(cljs.core.chunked_seq_QMARK_(seq__20752_21583__$1)){
var c__5568__auto___21584 = cljs.core.chunk_first(seq__20752_21583__$1);
var G__21585 = cljs.core.chunk_rest(seq__20752_21583__$1);
var G__21586 = c__5568__auto___21584;
var G__21587 = cljs.core.count(c__5568__auto___21584);
var G__21588 = (0);
seq__20752_21570 = G__21585;
chunk__20753_21571 = G__21586;
count__20754_21572 = G__21587;
i__20755_21573 = G__21588;
continue;
} else {
var vec__20786_21589 = cljs.core.first(seq__20752_21583__$1);
var script_tag_21590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786_21589,(0),null);
var script_body_21591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786_21589,(1),null);
eval(script_body_21591);


var G__21592 = cljs.core.next(seq__20752_21583__$1);
var G__21593 = null;
var G__21594 = (0);
var G__21595 = (0);
seq__20752_21570 = G__21592;
chunk__20753_21571 = G__21593;
count__20754_21572 = G__21594;
i__20755_21573 = G__21595;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20792){
var vec__20794 = p__20792;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20794,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20806 = arguments.length;
switch (G__20806) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20834 = cljs.core.seq(style_keys);
var chunk__20835 = null;
var count__20836 = (0);
var i__20837 = (0);
while(true){
if((i__20837 < count__20836)){
var it = chunk__20835.cljs$core$IIndexed$_nth$arity$2(null,i__20837);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21604 = seq__20834;
var G__21605 = chunk__20835;
var G__21606 = count__20836;
var G__21607 = (i__20837 + (1));
seq__20834 = G__21604;
chunk__20835 = G__21605;
count__20836 = G__21606;
i__20837 = G__21607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20834);
if(temp__5804__auto__){
var seq__20834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20834__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20834__$1);
var G__21608 = cljs.core.chunk_rest(seq__20834__$1);
var G__21609 = c__5568__auto__;
var G__21610 = cljs.core.count(c__5568__auto__);
var G__21611 = (0);
seq__20834 = G__21608;
chunk__20835 = G__21609;
count__20836 = G__21610;
i__20837 = G__21611;
continue;
} else {
var it = cljs.core.first(seq__20834__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21612 = cljs.core.next(seq__20834__$1);
var G__21613 = null;
var G__21614 = (0);
var G__21615 = (0);
seq__20834 = G__21612;
chunk__20835 = G__21613;
count__20836 = G__21614;
i__20837 = G__21615;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20845,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20859 = k20845;
var G__20859__$1 = (((G__20859 instanceof cljs.core.Keyword))?G__20859.fqn:null);
switch (G__20859__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20845,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20868){
var vec__20870 = p__20868;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20870,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20870,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20844){
var self__ = this;
var G__20844__$1 = this;
return (new cljs.core.RecordIter((0),G__20844__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20846,other20847){
var self__ = this;
var this20846__$1 = this;
return (((!((other20847 == null)))) && ((((this20846__$1.constructor === other20847.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20846__$1.x,other20847.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20846__$1.y,other20847.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20846__$1.__extmap,other20847.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20845){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20897 = k20845;
var G__20897__$1 = (((G__20897 instanceof cljs.core.Keyword))?G__20897.fqn:null);
switch (G__20897__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20845);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20844){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20901 = cljs.core.keyword_identical_QMARK_;
var expr__20902 = k__5352__auto__;
if(cljs.core.truth_((pred__20901.cljs$core$IFn$_invoke$arity$2 ? pred__20901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20902) : pred__20901.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20902)))){
return (new shadow.dom.Coordinate(G__20844,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20901.cljs$core$IFn$_invoke$arity$2 ? pred__20901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20902) : pred__20901.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20902)))){
return (new shadow.dom.Coordinate(self__.x,G__20844,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20844),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20844){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20844,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20850){
var extmap__5385__auto__ = (function (){var G__20920 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20850,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20850)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20920);
} else {
return G__20920;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20850),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20850),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20935,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20946 = k20935;
var G__20946__$1 = (((G__20946 instanceof cljs.core.Keyword))?G__20946.fqn:null);
switch (G__20946__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20935,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20956){
var vec__20957 = p__20956;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20957,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20957,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20934){
var self__ = this;
var G__20934__$1 = this;
return (new cljs.core.RecordIter((0),G__20934__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20937,other20938){
var self__ = this;
var this20937__$1 = this;
return (((!((other20938 == null)))) && ((((this20937__$1.constructor === other20938.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20937__$1.w,other20938.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20937__$1.h,other20938.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20937__$1.__extmap,other20938.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20935){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20985 = k20935;
var G__20985__$1 = (((G__20985 instanceof cljs.core.Keyword))?G__20985.fqn:null);
switch (G__20985__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20935);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20934){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20993 = cljs.core.keyword_identical_QMARK_;
var expr__20994 = k__5352__auto__;
if(cljs.core.truth_((pred__20993.cljs$core$IFn$_invoke$arity$2 ? pred__20993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20994) : pred__20993.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20994)))){
return (new shadow.dom.Size(G__20934,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20993.cljs$core$IFn$_invoke$arity$2 ? pred__20993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20994) : pred__20993.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20994)))){
return (new shadow.dom.Size(self__.w,G__20934,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20934),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20934){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20934,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20940){
var extmap__5385__auto__ = (function (){var G__21009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20940,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20940)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21009);
} else {
return G__21009;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20940),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20940),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21651 = (i + (1));
var G__21652 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21651;
ret = G__21652;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21047){
var vec__21049 = p__21047;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21049,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21062 = arguments.length;
switch (G__21062) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21656 = ps;
var G__21657 = (i + (1));
el__$1 = G__21656;
i = G__21657;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__21102 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21105_21666 = cljs.core.seq(props);
var chunk__21106_21667 = null;
var count__21107_21668 = (0);
var i__21108_21669 = (0);
while(true){
if((i__21108_21669 < count__21107_21668)){
var vec__21120_21670 = chunk__21106_21667.cljs$core$IIndexed$_nth$arity$2(null,i__21108_21669);
var k_21671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120_21670,(0),null);
var v_21672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21120_21670,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21671);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21671),v_21672);


var G__21673 = seq__21105_21666;
var G__21674 = chunk__21106_21667;
var G__21675 = count__21107_21668;
var G__21676 = (i__21108_21669 + (1));
seq__21105_21666 = G__21673;
chunk__21106_21667 = G__21674;
count__21107_21668 = G__21675;
i__21108_21669 = G__21676;
continue;
} else {
var temp__5804__auto___21677 = cljs.core.seq(seq__21105_21666);
if(temp__5804__auto___21677){
var seq__21105_21678__$1 = temp__5804__auto___21677;
if(cljs.core.chunked_seq_QMARK_(seq__21105_21678__$1)){
var c__5568__auto___21679 = cljs.core.chunk_first(seq__21105_21678__$1);
var G__21680 = cljs.core.chunk_rest(seq__21105_21678__$1);
var G__21681 = c__5568__auto___21679;
var G__21682 = cljs.core.count(c__5568__auto___21679);
var G__21683 = (0);
seq__21105_21666 = G__21680;
chunk__21106_21667 = G__21681;
count__21107_21668 = G__21682;
i__21108_21669 = G__21683;
continue;
} else {
var vec__21142_21684 = cljs.core.first(seq__21105_21678__$1);
var k_21685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21142_21684,(0),null);
var v_21686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21142_21684,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21685);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21685),v_21686);


var G__21687 = cljs.core.next(seq__21105_21678__$1);
var G__21688 = null;
var G__21689 = (0);
var G__21690 = (0);
seq__21105_21666 = G__21687;
chunk__21106_21667 = G__21688;
count__21107_21668 = G__21689;
i__21108_21669 = G__21690;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__21154 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154,(1),null);
var seq__21161_21691 = cljs.core.seq(node_children);
var chunk__21163_21692 = null;
var count__21164_21693 = (0);
var i__21165_21694 = (0);
while(true){
if((i__21165_21694 < count__21164_21693)){
var child_struct_21695 = chunk__21163_21692.cljs$core$IIndexed$_nth$arity$2(null,i__21165_21694);
if((!((child_struct_21695 == null)))){
if(typeof child_struct_21695 === 'string'){
var text_21696 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21696),child_struct_21695].join(''));
} else {
var children_21697 = shadow.dom.svg_node(child_struct_21695);
if(cljs.core.seq_QMARK_(children_21697)){
var seq__21213_21699 = cljs.core.seq(children_21697);
var chunk__21215_21700 = null;
var count__21216_21701 = (0);
var i__21217_21702 = (0);
while(true){
if((i__21217_21702 < count__21216_21701)){
var child_21706 = chunk__21215_21700.cljs$core$IIndexed$_nth$arity$2(null,i__21217_21702);
if(cljs.core.truth_(child_21706)){
node.appendChild(child_21706);


var G__21707 = seq__21213_21699;
var G__21708 = chunk__21215_21700;
var G__21709 = count__21216_21701;
var G__21710 = (i__21217_21702 + (1));
seq__21213_21699 = G__21707;
chunk__21215_21700 = G__21708;
count__21216_21701 = G__21709;
i__21217_21702 = G__21710;
continue;
} else {
var G__21712 = seq__21213_21699;
var G__21713 = chunk__21215_21700;
var G__21714 = count__21216_21701;
var G__21715 = (i__21217_21702 + (1));
seq__21213_21699 = G__21712;
chunk__21215_21700 = G__21713;
count__21216_21701 = G__21714;
i__21217_21702 = G__21715;
continue;
}
} else {
var temp__5804__auto___21716 = cljs.core.seq(seq__21213_21699);
if(temp__5804__auto___21716){
var seq__21213_21718__$1 = temp__5804__auto___21716;
if(cljs.core.chunked_seq_QMARK_(seq__21213_21718__$1)){
var c__5568__auto___21721 = cljs.core.chunk_first(seq__21213_21718__$1);
var G__21723 = cljs.core.chunk_rest(seq__21213_21718__$1);
var G__21724 = c__5568__auto___21721;
var G__21725 = cljs.core.count(c__5568__auto___21721);
var G__21726 = (0);
seq__21213_21699 = G__21723;
chunk__21215_21700 = G__21724;
count__21216_21701 = G__21725;
i__21217_21702 = G__21726;
continue;
} else {
var child_21728 = cljs.core.first(seq__21213_21718__$1);
if(cljs.core.truth_(child_21728)){
node.appendChild(child_21728);


var G__21729 = cljs.core.next(seq__21213_21718__$1);
var G__21730 = null;
var G__21731 = (0);
var G__21732 = (0);
seq__21213_21699 = G__21729;
chunk__21215_21700 = G__21730;
count__21216_21701 = G__21731;
i__21217_21702 = G__21732;
continue;
} else {
var G__21733 = cljs.core.next(seq__21213_21718__$1);
var G__21734 = null;
var G__21735 = (0);
var G__21736 = (0);
seq__21213_21699 = G__21733;
chunk__21215_21700 = G__21734;
count__21216_21701 = G__21735;
i__21217_21702 = G__21736;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21697);
}
}


var G__21738 = seq__21161_21691;
var G__21739 = chunk__21163_21692;
var G__21740 = count__21164_21693;
var G__21741 = (i__21165_21694 + (1));
seq__21161_21691 = G__21738;
chunk__21163_21692 = G__21739;
count__21164_21693 = G__21740;
i__21165_21694 = G__21741;
continue;
} else {
var G__21742 = seq__21161_21691;
var G__21743 = chunk__21163_21692;
var G__21744 = count__21164_21693;
var G__21745 = (i__21165_21694 + (1));
seq__21161_21691 = G__21742;
chunk__21163_21692 = G__21743;
count__21164_21693 = G__21744;
i__21165_21694 = G__21745;
continue;
}
} else {
var temp__5804__auto___21746 = cljs.core.seq(seq__21161_21691);
if(temp__5804__auto___21746){
var seq__21161_21747__$1 = temp__5804__auto___21746;
if(cljs.core.chunked_seq_QMARK_(seq__21161_21747__$1)){
var c__5568__auto___21748 = cljs.core.chunk_first(seq__21161_21747__$1);
var G__21749 = cljs.core.chunk_rest(seq__21161_21747__$1);
var G__21750 = c__5568__auto___21748;
var G__21751 = cljs.core.count(c__5568__auto___21748);
var G__21752 = (0);
seq__21161_21691 = G__21749;
chunk__21163_21692 = G__21750;
count__21164_21693 = G__21751;
i__21165_21694 = G__21752;
continue;
} else {
var child_struct_21754 = cljs.core.first(seq__21161_21747__$1);
if((!((child_struct_21754 == null)))){
if(typeof child_struct_21754 === 'string'){
var text_21756 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21756),child_struct_21754].join(''));
} else {
var children_21757 = shadow.dom.svg_node(child_struct_21754);
if(cljs.core.seq_QMARK_(children_21757)){
var seq__21235_21758 = cljs.core.seq(children_21757);
var chunk__21237_21759 = null;
var count__21238_21760 = (0);
var i__21239_21761 = (0);
while(true){
if((i__21239_21761 < count__21238_21760)){
var child_21762 = chunk__21237_21759.cljs$core$IIndexed$_nth$arity$2(null,i__21239_21761);
if(cljs.core.truth_(child_21762)){
node.appendChild(child_21762);


var G__21764 = seq__21235_21758;
var G__21765 = chunk__21237_21759;
var G__21766 = count__21238_21760;
var G__21767 = (i__21239_21761 + (1));
seq__21235_21758 = G__21764;
chunk__21237_21759 = G__21765;
count__21238_21760 = G__21766;
i__21239_21761 = G__21767;
continue;
} else {
var G__21769 = seq__21235_21758;
var G__21770 = chunk__21237_21759;
var G__21771 = count__21238_21760;
var G__21772 = (i__21239_21761 + (1));
seq__21235_21758 = G__21769;
chunk__21237_21759 = G__21770;
count__21238_21760 = G__21771;
i__21239_21761 = G__21772;
continue;
}
} else {
var temp__5804__auto___21773__$1 = cljs.core.seq(seq__21235_21758);
if(temp__5804__auto___21773__$1){
var seq__21235_21777__$1 = temp__5804__auto___21773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21235_21777__$1)){
var c__5568__auto___21778 = cljs.core.chunk_first(seq__21235_21777__$1);
var G__21779 = cljs.core.chunk_rest(seq__21235_21777__$1);
var G__21780 = c__5568__auto___21778;
var G__21781 = cljs.core.count(c__5568__auto___21778);
var G__21782 = (0);
seq__21235_21758 = G__21779;
chunk__21237_21759 = G__21780;
count__21238_21760 = G__21781;
i__21239_21761 = G__21782;
continue;
} else {
var child_21784 = cljs.core.first(seq__21235_21777__$1);
if(cljs.core.truth_(child_21784)){
node.appendChild(child_21784);


var G__21786 = cljs.core.next(seq__21235_21777__$1);
var G__21787 = null;
var G__21788 = (0);
var G__21789 = (0);
seq__21235_21758 = G__21786;
chunk__21237_21759 = G__21787;
count__21238_21760 = G__21788;
i__21239_21761 = G__21789;
continue;
} else {
var G__21790 = cljs.core.next(seq__21235_21777__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21235_21758 = G__21790;
chunk__21237_21759 = G__21791;
count__21238_21760 = G__21792;
i__21239_21761 = G__21793;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21757);
}
}


var G__21794 = cljs.core.next(seq__21161_21747__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21161_21691 = G__21794;
chunk__21163_21692 = G__21795;
count__21164_21693 = G__21796;
i__21165_21694 = G__21797;
continue;
} else {
var G__21798 = cljs.core.next(seq__21161_21747__$1);
var G__21799 = null;
var G__21800 = (0);
var G__21801 = (0);
seq__21161_21691 = G__21798;
chunk__21163_21692 = G__21799;
count__21164_21693 = G__21800;
i__21165_21694 = G__21801;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21804 = arguments.length;
var i__5770__auto___21805 = (0);
while(true){
if((i__5770__auto___21805 < len__5769__auto___21804)){
args__5775__auto__.push((arguments[i__5770__auto___21805]));

var G__21806 = (i__5770__auto___21805 + (1));
i__5770__auto___21805 = G__21806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21241){
var G__21242 = cljs.core.first(seq21241);
var seq21241__$1 = cljs.core.next(seq21241);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21242,seq21241__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21249 = arguments.length;
switch (G__21249) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17763__auto___21811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_21261){
var state_val_21262 = (state_21261[(1)]);
if((state_val_21262 === (1))){
var state_21261__$1 = state_21261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21261__$1,(2),once_or_cleanup);
} else {
if((state_val_21262 === (2))){
var inst_21258 = (state_21261[(2)]);
var inst_21259 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21261__$1 = (function (){var statearr_21264 = state_21261;
(statearr_21264[(7)] = inst_21258);

return statearr_21264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21261__$1,inst_21259);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17220__auto__ = null;
var shadow$dom$state_machine__17220__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = shadow$dom$state_machine__17220__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var shadow$dom$state_machine__17220__auto____1 = (function (state_21261){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_21261);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e21273){var ex__17223__auto__ = e21273;
var statearr_21274_21818 = state_21261;
(statearr_21274_21818[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_21261[(4)]))){
var statearr_21275_21820 = state_21261;
(statearr_21275_21820[(1)] = cljs.core.first((state_21261[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21821 = state_21261;
state_21261 = G__21821;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
shadow$dom$state_machine__17220__auto__ = function(state_21261){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17220__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17220__auto____1.call(this,state_21261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17220__auto____0;
shadow$dom$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17220__auto____1;
return shadow$dom$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_21280 = f__17765__auto__();
(statearr_21280[(6)] = c__17763__auto___21811);

return statearr_21280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
