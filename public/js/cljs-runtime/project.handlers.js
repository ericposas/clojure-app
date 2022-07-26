goog.provide('project.handlers');
/**
 * Handler after GET players/_view/all request is sent
 */
project.handlers.get_players_handler = (function project$handlers$get_players_handler(response){
var G__12760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-players-in-app-state","store-players-in-app-state",1082787195),response], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12760) : re_frame.core.dispatch.call(null,G__12760));
});
/**
 * Handles errors for GET players/_view/all
 */
project.handlers.get_players_errors = (function project$handlers$get_players_errors(status,code){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([status,code], 0));
});

//# sourceMappingURL=project.handlers.js.map
