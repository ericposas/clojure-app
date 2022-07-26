goog.provide('lein_reagent_reframe.core');
lein_reagent_reframe.core.some_toks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.random_uuid,cljs.core.range.cljs$core$IFn$_invoke$arity$1((200)));
lein_reagent_reframe.core.calculaysh = (function lein_reagent_reframe$core$calculaysh(n){
var v = (n * cljs.core.rand_int((1000)));
return v;
});
lein_reagent_reframe.core.mapped_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lein_reagent_reframe.core.calculaysh,cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lein_reagent_reframe.core.mapped_vals], 0));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array(lein_reagent_reframe.core.mapped_vals),(2))], 0));
lein_reagent_reframe.core.log_a_map = (function lein_reagent_reframe$core$log_a_map(sequence){
var mapped = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lein_reagent_reframe.core.calculaysh,sequence);
var seq__12401 = cljs.core.seq(mapped);
var chunk__12402 = null;
var count__12403 = (0);
var i__12404 = (0);
while(true){
if((i__12404 < count__12403)){
var x = chunk__12402.cljs$core$IIndexed$_nth$arity$2(null,i__12404);
console.log(x);


var G__12450 = seq__12401;
var G__12451 = chunk__12402;
var G__12452 = count__12403;
var G__12453 = (i__12404 + (1));
seq__12401 = G__12450;
chunk__12402 = G__12451;
count__12403 = G__12452;
i__12404 = G__12453;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12401);
if(temp__5804__auto__){
var seq__12401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12401__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12401__$1);
var G__12454 = cljs.core.chunk_rest(seq__12401__$1);
var G__12455 = c__5568__auto__;
var G__12456 = cljs.core.count(c__5568__auto__);
var G__12457 = (0);
seq__12401 = G__12454;
chunk__12402 = G__12455;
count__12403 = G__12456;
i__12404 = G__12457;
continue;
} else {
var x = cljs.core.first(seq__12401__$1);
console.log(x);


var G__12458 = cljs.core.next(seq__12401__$1);
var G__12459 = null;
var G__12460 = (0);
var G__12461 = (0);
seq__12401 = G__12458;
chunk__12402 = G__12459;
count__12403 = G__12460;
i__12404 = G__12461;
continue;
}
} else {
return null;
}
}
break;
}
});
lein_reagent_reframe.core.log_3_toks = (function lein_reagent_reframe$core$log_3_toks(){
var seq__12405 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
var chunk__12406 = null;
var count__12407 = (0);
var i__12408 = (0);
while(true){
if((i__12408 < count__12407)){
var n = chunk__12406.cljs$core$IIndexed$_nth$arity$2(null,i__12408);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array(lein_reagent_reframe.core.some_toks),n)], 0));


var G__12462 = seq__12405;
var G__12463 = chunk__12406;
var G__12464 = count__12407;
var G__12465 = (i__12408 + (1));
seq__12405 = G__12462;
chunk__12406 = G__12463;
count__12407 = G__12464;
i__12408 = G__12465;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12405);
if(temp__5804__auto__){
var seq__12405__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12405__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12405__$1);
var G__12466 = cljs.core.chunk_rest(seq__12405__$1);
var G__12467 = c__5568__auto__;
var G__12468 = cljs.core.count(c__5568__auto__);
var G__12469 = (0);
seq__12405 = G__12466;
chunk__12406 = G__12467;
count__12407 = G__12468;
i__12408 = G__12469;
continue;
} else {
var n = cljs.core.first(seq__12405__$1);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array(lein_reagent_reframe.core.some_toks),n)], 0));


var G__12470 = cljs.core.next(seq__12405__$1);
var G__12471 = null;
var G__12472 = (0);
var G__12473 = (0);
seq__12405 = G__12470;
chunk__12406 = G__12471;
count__12407 = G__12472;
i__12408 = G__12473;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__12409_12474 = new cljs.core.Keyword(null,"get-token","get-token",-1638293316);
var G__12410_12475 = (function (p__12411,_){
var map__12412 = p__12411;
var map__12412__$1 = cljs.core.__destructure_map(map__12412);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12412__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
return token;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12409_12474,G__12410_12475) : re_frame.core.reg_sub.call(null,G__12409_12474,G__12410_12475));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (state,p__12413){
var vec__12414 = p__12413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(0),null);
var init_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"players","players",-1361554569),init_state);
}));
var G__12417_12476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278),cljs.core.PersistentArrayMap.EMPTY], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12417_12476) : re_frame.core.dispatch.call(null,G__12417_12476));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-random-token","set-random-token",-429707809),(function (db,p__12418){
var vec__12419 = p__12418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(1),null);
var new_token = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.rand_nth(lein_reagent_reframe.core.some_toks));
var custom_token = (((!((arg == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"token","token",-1211463215),arg):null);
if((!((custom_token == null)))){
return custom_token;
} else {
return new_token;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-player-values","set-player-values",471378231),(function (state,p__12422){
var vec__12423 = p__12422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(1),null);
var mapped_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lein_reagent_reframe.core.map_characters_to_abilities,values);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mapped_values], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"players","players",-1361554569),mapped_values);
}));
var G__12426_12477 = new cljs.core.Keyword(null,"return-all-state","return-all-state",-1540826041);
var G__12427_12478 = (function (state,p__12428){
var vec__12429 = p__12428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12429,(0),null);
var map__12432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12429,(1),null);
var map__12432__$1 = cljs.core.__destructure_map(map__12432);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12432__$1,new cljs.core.Keyword(null,"test","test",577538877));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));

return state;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12426_12477,G__12427_12478) : re_frame.core.reg_sub.call(null,G__12426_12477,G__12427_12478));
lein_reagent_reframe.core.extract_by_position_in_list = (function lein_reagent_reframe$core$extract_by_position_in_list(n){
var state = cljs.core.deref((function (){var G__12433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return-all-state","return-all-state",-1540826041)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12433) : re_frame.core.subscribe.call(null,G__12433));
})());
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(state)),n);
return entry;
});
lein_reagent_reframe.core.get_players_count = (function lein_reagent_reframe$core$get_players_count(){
return cljs.core.count(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return-all-state","return-all-state",-1540826041)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12434) : re_frame.core.subscribe.call(null,G__12434));
})())));
});
var G__12435_12479 = new cljs.core.Keyword(null,"get-random-int","get-random-int",-906026374);
var G__12436_12480 = (function (p__12437){
var map__12438 = p__12437;
var map__12438__$1 = cljs.core.__destructure_map(map__12438);
var random_int = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12438__$1,new cljs.core.Keyword(null,"random-int","random-int",715636240));
return random_int;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__12435_12479,G__12436_12480) : re_frame.core.reg_sub.call(null,G__12435_12479,G__12436_12480));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-random-int","set-random-int",376074162),(function (db,p__12439){
var vec__12440 = p__12439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12440,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"random-int","random-int",715636240),value);
}));
lein_reagent_reframe.core.ajax_handler = (function lein_reagent_reframe$core$ajax_handler(data){
var G__12443_12481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-random-int","set-random-int",376074162),cljs.core.rand_int(cljs.core.count(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12443_12481) : re_frame.core.dispatch.call(null,G__12443_12481));

var G__12444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-player-values","set-player-values",471378231),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12444) : re_frame.core.dispatch.call(null,G__12444));
});
lein_reagent_reframe.core.error_handler = (function lein_reagent_reframe$core$error_handler(p__12445){
var map__12446 = p__12445;
var map__12446__$1 = cljs.core.__destructure_map(map__12446);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12446__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12446__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
lein_reagent_reframe.core.button_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
/**
 * Processes players in our application state and returns a formatted string
 */
lein_reagent_reframe.core.player_subscription = (function lein_reagent_reframe$core$player_subscription(){
var players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return-all-state","return-all-state",-1540826041)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12447) : re_frame.core.subscribe.call(null,G__12447));
})()))),(0));
var player_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lein_reagent_reframe.core.extract_by_position_in_list(cljs.core.deref((function (){var G__12448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-random-int","get-random-int",-906026374)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12448) : re_frame.core.subscribe.call(null,G__12448));
})())));
var player_abilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lein_reagent_reframe.core.extract_by_position_in_list(cljs.core.deref((function (){var G__12449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-random-int","get-random-int",-906026374)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12449) : re_frame.core.subscribe.call(null,G__12449));
})())),new cljs.core.Keyword(null,"abilities","abilities",-1471386226));
var update_abilities = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_name,"Fox McCloud"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(player_abilities,"Team Starfox"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_name,"Capt. Falcon"))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(player_abilities,"Blue Falcon"):player_abilities));
if((!((players == null)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("'",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_name,"s"], null)),"abilities are: ",update_abilities], null));
} else {
return null;
}
});
lein_reagent_reframe.core.home_page = (function lein_reagent_reframe$core$home_page(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lein_reagent_reframe.core.log_3_toks();
})], null),"Log first 3 toks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rand_nth(lein_reagent_reframe.core.some_toks)], 0));
})], null),"Log random tok"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:5984/players/_design/players/_view/all",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Accept","Accept",791341676),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),"Basic YWRtaW46cGFzcw=="], null),new cljs.core.Keyword(null,"handler","handler",-195596612),lein_reagent_reframe.core.ajax_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),lein_reagent_reframe.core.error_handler], null)], 0));
}),new cljs.core.Keyword(null,"style","style",-496642736),lein_reagent_reframe.core.button_style], null),"Get a random character value from the CouchDB docs"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lein_reagent_reframe.core.player_subscription()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
lein_reagent_reframe.core.mount_root = (function lein_reagent_reframe$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lein_reagent_reframe.core.home_page], null),document.getElementById("app"));
});
lein_reagent_reframe.core.init_BANG_ = (function lein_reagent_reframe$core$init_BANG_(){
return lein_reagent_reframe.core.mount_root();
});
goog.exportSymbol('lein_reagent_reframe.core.init_BANG_', lein_reagent_reframe.core.init_BANG_);

//# sourceMappingURL=lein_reagent_reframe.core.js.map
