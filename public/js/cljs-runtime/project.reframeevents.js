goog.provide('project.reframeevents');
var G__13418_13457 = new cljs.core.Keyword(null,"status","status",-1997798413);
var G__13419_13458 = (function (state){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13418_13457,G__13419_13458) : re_frame.core.reg_sub.call(null,G__13418_13457,G__13419_13458));
var G__13420_13459 = new cljs.core.Keyword(null,"players","players",-1361554569);
var G__13421_13460 = (function (state){
return new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13420_13459,G__13421_13460) : re_frame.core.reg_sub.call(null,G__13420_13459,G__13421_13460));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"store-players-in-app-state","store-players-in-app-state",1082787195),(function (state,p__13422){
var vec__13423 = p__13422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423,(1),null);
var G__13426_13461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-status","set-status",-204214407),"done"], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13426_13461) : re_frame.core.dispatch.call(null,G__13426_13461));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(result));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-status","set-status",-204214407),(function (state,p__13427){
var vec__13428 = p__13427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13428,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13428,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"status","status",-1997798413),status);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-players","get-players",-504444108),(function (state,p__13431){
var vec__13432 = p__13431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13432,(0),null);
var creds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13432,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-players-with-js","get-players-with-js",-1604942951),creds], null);
}));
var G__13438_13462 = new cljs.core.Keyword(null,"get-players-from-couch","get-players-from-couch",-1129886475);
var G__13439_13463 = (function (auth){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5984/players/_design/players/_view/all",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__13435_SHARP_){
var G__13440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-players-in-app-state","store-players-in-app-state",1082787195),p1__13435_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13440) : re_frame.core.dispatch.call(null,G__13440));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__13436_SHARP_,p2__13437_SHARP_){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13436_SHARP_,p2__13437_SHARP_], 0));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),auth,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null)], null)], 0));

var G__13441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-status","set-status",-204214407),"retrieving.."], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13441) : re_frame.core.dispatch.call(null,G__13441));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13438_13462,G__13439_13463) : re_frame.core.reg_fx.call(null,G__13438_13462,G__13439_13463));
var G__13442_13464 = new cljs.core.Keyword(null,"get-players-with-js","get-players-with-js",-1604942951);
var G__13443_13465 = (function (auth){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___13191__auto__){
return promesa.protocols._bind(promesa.protocols._promise(module$myJSLib.jsGet("http://localhost:5984/players/_design/players/_view/all",auth)),(function (response){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___13176__auto__){
return promesa.protocols._bind(promesa.protocols._promise((function (){var G__13444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-status","set-status",-204214407),"fetching data..."], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13444) : re_frame.core.dispatch.call(null,G__13444));
})()),(function (___13175__auto__){
return promesa.protocols._promise((function (){var clj_json = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(clj_json))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["got an error in js axios fetch!"], 0));

var G__13445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-players-in-app-state","store-players-in-app-state",1082787195),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"error!"], null)], null)], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13445) : re_frame.core.dispatch.call(null,G__13445));
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["got response with imported js module and promesa promise resolver,\nused #(js->clj % :keywordize-keys true) to normalize clojure data structure"], 0));

var G__13446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-players-in-app-state","store-players-in-app-state",1082787195),clj_json], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13446) : re_frame.core.dispatch.call(null,G__13446));
}
})());
}));
}));
}));
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13442_13464,G__13443_13465) : re_frame.core.reg_fx.call(null,G__13442_13464,G__13443_13465));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-random-ability","set-new-random-ability",515082549),(function (state,p__13447){
var vec__13448 = p__13447;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(0),null);
var rand_abil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(1),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rand_abil], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"random-ability","random-ability",-1594740305),rand_abil);
}));
var G__13451_13466 = new cljs.core.Keyword(null,"derived-state","derived-state",2122544324);
var G__13452_13467 = (function (state){
var player_sub = cljs.core.deref((function (){var G__13453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13453) : re_frame.core.subscribe.call(null,G__13453));
})());
var rand_cnt = cljs.core.rand_int(cljs.core.count(player_sub));
var player_object = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(player_sub,rand_cnt));
var char_abilities = new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(player_object);
var char_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player_object);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-name","char-name",-493262177),char_name,new cljs.core.Keyword(null,"char-abilities","char-abilities",484674094),char_abilities], null);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13451_13466,G__13452_13467) : re_frame.core.reg_sub.call(null,G__13451_13466,G__13452_13467));
var G__13454_13468 = new cljs.core.Keyword(null,"current-random-ability","current-random-ability",-1301523493);
var G__13455_13469 = (function (state){
var abils = new cljs.core.Keyword(null,"char-abilities","char-abilities",484674094).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derived-state","derived-state",2122544324)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13456) : re_frame.core.subscribe.call(null,G__13456));
})()));
var rand_cnt = cljs.core.rand_int(cljs.core.count(abils));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(abils,rand_cnt);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13454_13468,G__13455_13469) : re_frame.core.reg_sub.call(null,G__13454_13468,G__13455_13469));

//# sourceMappingURL=project.reframeevents.js.map
