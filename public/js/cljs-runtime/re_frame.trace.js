goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12410){
var map__12411 = p__12410;
var map__12411__$1 = cljs.core.__destructure_map(map__12411);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12411__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12411__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12411__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12411__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12412_12439 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12413_12440 = null;
var count__12414_12441 = (0);
var i__12415_12442 = (0);
while(true){
if((i__12415_12442 < count__12414_12441)){
var vec__12426_12443 = chunk__12413_12440.cljs$core$IIndexed$_nth$arity$2(null,i__12415_12442);
var k_12444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12426_12443,(0),null);
var cb_12445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12426_12443,(1),null);
try{var G__12430_12447 = cljs.core.deref(re_frame.trace.traces);
(cb_12445.cljs$core$IFn$_invoke$arity$1 ? cb_12445.cljs$core$IFn$_invoke$arity$1(G__12430_12447) : cb_12445.call(null,G__12430_12447));
}catch (e12429){var e_12448 = e12429;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12444,"while storing",cljs.core.deref(re_frame.trace.traces),e_12448], 0));
}

var G__12449 = seq__12412_12439;
var G__12450 = chunk__12413_12440;
var G__12451 = count__12414_12441;
var G__12452 = (i__12415_12442 + (1));
seq__12412_12439 = G__12449;
chunk__12413_12440 = G__12450;
count__12414_12441 = G__12451;
i__12415_12442 = G__12452;
continue;
} else {
var temp__5804__auto___12453 = cljs.core.seq(seq__12412_12439);
if(temp__5804__auto___12453){
var seq__12412_12454__$1 = temp__5804__auto___12453;
if(cljs.core.chunked_seq_QMARK_(seq__12412_12454__$1)){
var c__5568__auto___12455 = cljs.core.chunk_first(seq__12412_12454__$1);
var G__12456 = cljs.core.chunk_rest(seq__12412_12454__$1);
var G__12457 = c__5568__auto___12455;
var G__12458 = cljs.core.count(c__5568__auto___12455);
var G__12459 = (0);
seq__12412_12439 = G__12456;
chunk__12413_12440 = G__12457;
count__12414_12441 = G__12458;
i__12415_12442 = G__12459;
continue;
} else {
var vec__12431_12460 = cljs.core.first(seq__12412_12454__$1);
var k_12461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431_12460,(0),null);
var cb_12462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431_12460,(1),null);
try{var G__12435_12463 = cljs.core.deref(re_frame.trace.traces);
(cb_12462.cljs$core$IFn$_invoke$arity$1 ? cb_12462.cljs$core$IFn$_invoke$arity$1(G__12435_12463) : cb_12462.call(null,G__12435_12463));
}catch (e12434){var e_12464 = e12434;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12461,"while storing",cljs.core.deref(re_frame.trace.traces),e_12464], 0));
}

var G__12467 = cljs.core.next(seq__12412_12454__$1);
var G__12468 = null;
var G__12469 = (0);
var G__12470 = (0);
seq__12412_12439 = G__12467;
chunk__12413_12440 = G__12468;
count__12414_12441 = G__12469;
i__12415_12442 = G__12470;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
