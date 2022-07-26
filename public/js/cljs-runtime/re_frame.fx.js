goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12695 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12696 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12696);

try{try{var seq__12698 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12699 = null;
var count__12700 = (0);
var i__12701 = (0);
while(true){
if((i__12701 < count__12700)){
var vec__12711 = chunk__12699.cljs$core$IIndexed$_nth$arity$2(null,i__12701);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12711,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12711,(1),null);
var temp__5802__auto___12772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12772)){
var effect_fn_12773 = temp__5802__auto___12772;
(effect_fn_12773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12774 = seq__12698;
var G__12775 = chunk__12699;
var G__12776 = count__12700;
var G__12777 = (i__12701 + (1));
seq__12698 = G__12774;
chunk__12699 = G__12775;
count__12700 = G__12776;
i__12701 = G__12777;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12698);
if(temp__5804__auto__){
var seq__12698__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12698__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12698__$1);
var G__12778 = cljs.core.chunk_rest(seq__12698__$1);
var G__12779 = c__5568__auto__;
var G__12780 = cljs.core.count(c__5568__auto__);
var G__12781 = (0);
seq__12698 = G__12778;
chunk__12699 = G__12779;
count__12700 = G__12780;
i__12701 = G__12781;
continue;
} else {
var vec__12715 = cljs.core.first(seq__12698__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715,(1),null);
var temp__5802__auto___12782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12782)){
var effect_fn_12783 = temp__5802__auto___12782;
(effect_fn_12783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12784 = cljs.core.next(seq__12698__$1);
var G__12785 = null;
var G__12786 = (0);
var G__12787 = (0);
seq__12698 = G__12784;
chunk__12699 = G__12785;
count__12700 = G__12786;
i__12701 = G__12787;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12390__auto___12788 = re_frame.interop.now();
var duration__12391__auto___12789 = (end__12390__auto___12788 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12391__auto___12789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12390__auto___12788);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12695);
}} else {
var seq__12719 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12720 = null;
var count__12721 = (0);
var i__12722 = (0);
while(true){
if((i__12722 < count__12721)){
var vec__12732 = chunk__12720.cljs$core$IIndexed$_nth$arity$2(null,i__12722);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12732,(1),null);
var temp__5802__auto___12790 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12790)){
var effect_fn_12791 = temp__5802__auto___12790;
(effect_fn_12791.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12791.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12791.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12792 = seq__12719;
var G__12793 = chunk__12720;
var G__12794 = count__12721;
var G__12795 = (i__12722 + (1));
seq__12719 = G__12792;
chunk__12720 = G__12793;
count__12721 = G__12794;
i__12722 = G__12795;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12719);
if(temp__5804__auto__){
var seq__12719__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12719__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12719__$1);
var G__12796 = cljs.core.chunk_rest(seq__12719__$1);
var G__12797 = c__5568__auto__;
var G__12798 = cljs.core.count(c__5568__auto__);
var G__12799 = (0);
seq__12719 = G__12796;
chunk__12720 = G__12797;
count__12721 = G__12798;
i__12722 = G__12799;
continue;
} else {
var vec__12736 = cljs.core.first(seq__12719__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(1),null);
var temp__5802__auto___12800 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___12800)){
var effect_fn_12801 = temp__5802__auto___12800;
(effect_fn_12801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12801.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12802 = cljs.core.next(seq__12719__$1);
var G__12803 = null;
var G__12804 = (0);
var G__12805 = (0);
seq__12719 = G__12802;
chunk__12720 = G__12803;
count__12721 = G__12804;
i__12722 = G__12805;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__12739 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12740 = null;
var count__12741 = (0);
var i__12742 = (0);
while(true){
if((i__12742 < count__12741)){
var map__12746 = chunk__12740.cljs$core$IIndexed$_nth$arity$2(null,i__12742);
var map__12746__$1 = cljs.core.__destructure_map(map__12746);
var effect = map__12746__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12746__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12746__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12739,chunk__12740,count__12741,i__12742,map__12746,map__12746__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12739,chunk__12740,count__12741,i__12742,map__12746,map__12746__$1,effect,ms,dispatch))
,ms);
}


var G__12807 = seq__12739;
var G__12808 = chunk__12740;
var G__12809 = count__12741;
var G__12810 = (i__12742 + (1));
seq__12739 = G__12807;
chunk__12740 = G__12808;
count__12741 = G__12809;
i__12742 = G__12810;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12739);
if(temp__5804__auto__){
var seq__12739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12739__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12739__$1);
var G__12812 = cljs.core.chunk_rest(seq__12739__$1);
var G__12813 = c__5568__auto__;
var G__12814 = cljs.core.count(c__5568__auto__);
var G__12815 = (0);
seq__12739 = G__12812;
chunk__12740 = G__12813;
count__12741 = G__12814;
i__12742 = G__12815;
continue;
} else {
var map__12747 = cljs.core.first(seq__12739__$1);
var map__12747__$1 = cljs.core.__destructure_map(map__12747);
var effect = map__12747__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12747__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12747__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12739,chunk__12740,count__12741,i__12742,map__12747,map__12747__$1,effect,ms,dispatch,seq__12739__$1,temp__5804__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12739,chunk__12740,count__12741,i__12742,map__12747,map__12747__$1,effect,ms,dispatch,seq__12739__$1,temp__5804__auto__))
,ms);
}


var G__12816 = cljs.core.next(seq__12739__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12739 = G__12816;
chunk__12740 = G__12817;
count__12741 = G__12818;
i__12742 = G__12819;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12749 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12750 = null;
var count__12751 = (0);
var i__12752 = (0);
while(true){
if((i__12752 < count__12751)){
var event = chunk__12750.cljs$core$IIndexed$_nth$arity$2(null,i__12752);
re_frame.router.dispatch(event);


var G__12820 = seq__12749;
var G__12821 = chunk__12750;
var G__12822 = count__12751;
var G__12823 = (i__12752 + (1));
seq__12749 = G__12820;
chunk__12750 = G__12821;
count__12751 = G__12822;
i__12752 = G__12823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12749);
if(temp__5804__auto__){
var seq__12749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12749__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12749__$1);
var G__12824 = cljs.core.chunk_rest(seq__12749__$1);
var G__12825 = c__5568__auto__;
var G__12826 = cljs.core.count(c__5568__auto__);
var G__12827 = (0);
seq__12749 = G__12824;
chunk__12750 = G__12825;
count__12751 = G__12826;
i__12752 = G__12827;
continue;
} else {
var event = cljs.core.first(seq__12749__$1);
re_frame.router.dispatch(event);


var G__12829 = cljs.core.next(seq__12749__$1);
var G__12830 = null;
var G__12831 = (0);
var G__12832 = (0);
seq__12749 = G__12829;
chunk__12750 = G__12830;
count__12751 = G__12831;
i__12752 = G__12832;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12756 = cljs.core.seq(value);
var chunk__12757 = null;
var count__12758 = (0);
var i__12759 = (0);
while(true){
if((i__12759 < count__12758)){
var event = chunk__12757.cljs$core$IIndexed$_nth$arity$2(null,i__12759);
clear_event(event);


var G__12834 = seq__12756;
var G__12835 = chunk__12757;
var G__12836 = count__12758;
var G__12837 = (i__12759 + (1));
seq__12756 = G__12834;
chunk__12757 = G__12835;
count__12758 = G__12836;
i__12759 = G__12837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12756);
if(temp__5804__auto__){
var seq__12756__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12756__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12756__$1);
var G__12838 = cljs.core.chunk_rest(seq__12756__$1);
var G__12839 = c__5568__auto__;
var G__12840 = cljs.core.count(c__5568__auto__);
var G__12841 = (0);
seq__12756 = G__12838;
chunk__12757 = G__12839;
count__12758 = G__12840;
i__12759 = G__12841;
continue;
} else {
var event = cljs.core.first(seq__12756__$1);
clear_event(event);


var G__12842 = cljs.core.next(seq__12756__$1);
var G__12843 = null;
var G__12844 = (0);
var G__12845 = (0);
seq__12756 = G__12842;
chunk__12757 = G__12843;
count__12758 = G__12844;
i__12759 = G__12845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
