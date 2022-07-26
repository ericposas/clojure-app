goog.provide('project.core');
var module$node_modules$axios$index=shadow.js.require("module$node_modules$axios$index", {});
project.core.state = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Do axios fetch with js module
 */
project.core.do_axios_js = (function project$core$do_axios_js(){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___13191__auto__){
return promesa.protocols._bind(promesa.protocols._promise(module$myJSLib.jsGet("http://localhost:5984/players/_design/players/_view/all",project.config.api_creds)),(function (response){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___13176__auto__){
return promesa.protocols._promise(cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["successful JS/Clojurescript interop\n\n","data from JS api call:\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13470){
var map__13471 = p__13470;
var map__13471__$1 = cljs.core.__destructure_map(map__13471);
var abilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13471__$1,new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13471__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"abilities","abilities",-1471386226),abilities], null)]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))))], 0)));
}));
}));
}));
});
/**
 * Gets reframe state key :players -- the list of Smash chars
 */
project.core._players = (function project$core$_players(){
return cljs.core.deref((function (){var G__13472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13472) : re_frame.core.subscribe.call(null,G__13472));
})());
});
project.core.app = (function project$core$app(){
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"char-name","char-name",-493262177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derived-state","derived-state",2122544324)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13474) : re_frame.core.subscribe.call(null,G__13474));
})())))," "].join('');
var abilities = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"char-abilities","char-abilities",484674094).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derived-state","derived-state",2122544324)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13476) : re_frame.core.subscribe.call(null,G__13476));
})())));
var chosen_ability = cljs.core.deref((function (){var G__13477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-random-ability","current-random-ability",-1301523493)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13477) : re_frame.core.subscribe.call(null,G__13477));
})());
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,["status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13479) : re_frame.core.subscribe.call(null,G__13479));
})()))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,cljs.core.count(project.core._players())," Smash characters loaded: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),project.core._players())))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.fetch_data_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),abilities], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.rand_ability_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ability","ability",1440715336),chosen_ability], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.loopy_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
project.core.start = (function project$core$start(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app started"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('project.core.start', project.core.start);

//# sourceMappingURL=project.core.js.map
