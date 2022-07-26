goog.provide('handlers.core');
handlers.core.ajax_handler = (function handlers$core$ajax_handler(data){
var G__13427_13431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-random-int","set-random-int",376074162),cljs.core.rand_int(cljs.core.count(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13427_13431) : re_frame.core.dispatch.call(null,G__13427_13431));

var G__13428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-player-values","set-player-values",471378231),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13428) : re_frame.core.dispatch.call(null,G__13428));
});
handlers.core.error_handler = (function handlers$core$error_handler(p__13429){
var map__13430 = p__13429;
var map__13430__$1 = cljs.core.__destructure_map(map__13430);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});

//# sourceMappingURL=handlers.core.js.map
