goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17469,res){
var map__17471 = p__17469;
var map__17471__$1 = cljs.core.__destructure_map(map__17471);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17471__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17471__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17474 = res;
var G__17474__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17474,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17474);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17474__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17474__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17483 = arguments.length;
switch (G__17483) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17496,msg,handlers,timeout_after_ms){
var map__17498 = p__17496;
var map__17498__$1 = cljs.core.__destructure_map(map__17498);
var runtime = map__17498__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17498__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17749 = arguments.length;
var i__5770__auto___17750 = (0);
while(true){
if((i__5770__auto___17750 < len__5769__auto___17749)){
args__5775__auto__.push((arguments[i__5770__auto___17750]));

var G__17751 = (i__5770__auto___17750 + (1));
i__5770__auto___17750 = G__17751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17522,ev,args){
var map__17523 = p__17522;
var map__17523__$1 = cljs.core.__destructure_map(map__17523);
var runtime = map__17523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17530 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17533 = null;
var count__17534 = (0);
var i__17535 = (0);
while(true){
if((i__17535 < count__17534)){
var ext = chunk__17533.cljs$core$IIndexed$_nth$arity$2(null,i__17535);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17755 = seq__17530;
var G__17756 = chunk__17533;
var G__17757 = count__17534;
var G__17758 = (i__17535 + (1));
seq__17530 = G__17755;
chunk__17533 = G__17756;
count__17534 = G__17757;
i__17535 = G__17758;
continue;
} else {
var G__17759 = seq__17530;
var G__17760 = chunk__17533;
var G__17761 = count__17534;
var G__17762 = (i__17535 + (1));
seq__17530 = G__17759;
chunk__17533 = G__17760;
count__17534 = G__17761;
i__17535 = G__17762;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17530);
if(temp__5804__auto__){
var seq__17530__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17530__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17530__$1);
var G__17767 = cljs.core.chunk_rest(seq__17530__$1);
var G__17768 = c__5568__auto__;
var G__17769 = cljs.core.count(c__5568__auto__);
var G__17770 = (0);
seq__17530 = G__17767;
chunk__17533 = G__17768;
count__17534 = G__17769;
i__17535 = G__17770;
continue;
} else {
var ext = cljs.core.first(seq__17530__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17771 = cljs.core.next(seq__17530__$1);
var G__17772 = null;
var G__17773 = (0);
var G__17774 = (0);
seq__17530 = G__17771;
chunk__17533 = G__17772;
count__17534 = G__17773;
i__17535 = G__17774;
continue;
} else {
var G__17775 = cljs.core.next(seq__17530__$1);
var G__17776 = null;
var G__17777 = (0);
var G__17778 = (0);
seq__17530 = G__17775;
chunk__17533 = G__17776;
count__17534 = G__17777;
i__17535 = G__17778;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17511){
var G__17512 = cljs.core.first(seq17511);
var seq17511__$1 = cljs.core.next(seq17511);
var G__17513 = cljs.core.first(seq17511__$1);
var seq17511__$2 = cljs.core.next(seq17511__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17512,G__17513,seq17511__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17556,p__17557){
var map__17558 = p__17556;
var map__17558__$1 = cljs.core.__destructure_map(map__17558);
var runtime = map__17558__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17558__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17559 = p__17557;
var map__17559__$1 = cljs.core.__destructure_map(map__17559);
var msg = map__17559__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17559__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17561 = cljs.core.deref(state_ref);
var map__17561__$1 = cljs.core.__destructure_map(map__17561);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17561__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17561__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17565){
var map__17566 = p__17565;
var map__17566__$1 = cljs.core.__destructure_map(map__17566);
var runtime = map__17566__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17567,msg){
var map__17568 = p__17567;
var map__17568__$1 = cljs.core.__destructure_map(map__17568);
var runtime = map__17568__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17568__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17572,key,p__17573){
var map__17574 = p__17572;
var map__17574__$1 = cljs.core.__destructure_map(map__17574);
var state = map__17574__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17574__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17575 = p__17573;
var map__17575__$1 = cljs.core.__destructure_map(map__17575);
var spec = map__17575__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17583,key,spec){
var map__17590 = p__17583;
var map__17590__$1 = cljs.core.__destructure_map(map__17590);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17602_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17602_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17603_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17603_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17604_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17604_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17605_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17605_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17606_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17606_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17611,key){
var map__17612 = p__17611;
var map__17612__$1 = cljs.core.__destructure_map(map__17612);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17635,msg){
var map__17636 = p__17635;
var map__17636__$1 = cljs.core.__destructure_map(map__17636);
var runtime = map__17636__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17676,p__17677){
var map__17682 = p__17676;
var map__17682__$1 = cljs.core.__destructure_map(map__17682);
var runtime = map__17682__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17683 = p__17677;
var map__17683__$1 = cljs.core.__destructure_map(map__17683);
var msg = map__17683__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17683__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17683__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17689 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17691 = null;
var count__17692 = (0);
var i__17693 = (0);
while(true){
if((i__17693 < count__17692)){
var map__17724 = chunk__17691.cljs$core$IIndexed$_nth$arity$2(null,i__17693);
var map__17724__$1 = cljs.core.__destructure_map(map__17724);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17724__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17826 = seq__17689;
var G__17827 = chunk__17691;
var G__17828 = count__17692;
var G__17829 = (i__17693 + (1));
seq__17689 = G__17826;
chunk__17691 = G__17827;
count__17692 = G__17828;
i__17693 = G__17829;
continue;
} else {
var G__17830 = seq__17689;
var G__17831 = chunk__17691;
var G__17832 = count__17692;
var G__17833 = (i__17693 + (1));
seq__17689 = G__17830;
chunk__17691 = G__17831;
count__17692 = G__17832;
i__17693 = G__17833;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17689);
if(temp__5804__auto__){
var seq__17689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17689__$1);
var G__17834 = cljs.core.chunk_rest(seq__17689__$1);
var G__17835 = c__5568__auto__;
var G__17836 = cljs.core.count(c__5568__auto__);
var G__17837 = (0);
seq__17689 = G__17834;
chunk__17691 = G__17835;
count__17692 = G__17836;
i__17693 = G__17837;
continue;
} else {
var map__17734 = cljs.core.first(seq__17689__$1);
var map__17734__$1 = cljs.core.__destructure_map(map__17734);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17734__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17838 = cljs.core.next(seq__17689__$1);
var G__17839 = null;
var G__17840 = (0);
var G__17841 = (0);
seq__17689 = G__17838;
chunk__17691 = G__17839;
count__17692 = G__17840;
i__17693 = G__17841;
continue;
} else {
var G__17843 = cljs.core.next(seq__17689__$1);
var G__17844 = null;
var G__17845 = (0);
var G__17846 = (0);
seq__17689 = G__17843;
chunk__17691 = G__17844;
count__17692 = G__17845;
i__17693 = G__17846;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map