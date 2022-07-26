goog.provide('project.components');
project.components.img_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"800px"], null);
project.components.rand_ability_component = (function project$components$rand_ability_component(p__15503){
var map__15504 = p__15503;
var map__15504__$1 = cljs.core.__destructure_map(map__15504);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ability = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15504__$1,new cljs.core.Keyword(null,"ability","ability",1440715336));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Selected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," random ability: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability)].join('')], null)], null);
});
/**
 * Gets img src string with conditionals depending on character
 */
project.components.get_img_src_string = (function project$components$get_img_src_string(name){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://cdn.gamer-network.net/2018/usgamer/",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(name),"Captain Falcon"))?"super-smash-bros-ultimate-captain-falcon-screen.png":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(name),"Fox McCloud"))?"super-smash-bros-ultimate-fox-.png":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(name),"Bayonetta"))?[clojure.string.trim(clojure.string.lower_case(name)),"-1.png"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(name),"Kirby"))?"kirby-ultimate.jpg.png":[clojure.string.trim(name),"-1.png"].join('')))))], null));
});
project.components.image_element = (function project$components$image_element(p__15505){
var map__15506 = p__15505;
var map__15506__$1 = cljs.core.__destructure_map(map__15506);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),project.components.get_img_src_string(name),new cljs.core.Keyword(null,"style","style",-496642736),project.components.img_style], null)], null)], null);
});
/**
 * A component that calls a "loop" "recur" function and sets some DOM content
 */
project.components.loopy_component = (function project$components$loopy_component(){
if((!((cljs.core.deref((function (){var G__15508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15508) : re_frame.core.subscribe.call(null,G__15508));
})()) == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"loop-div",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var players = cljs.core.deref((function (){var G__15509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15509) : re_frame.core.subscribe.call(null,G__15509));
})());
var cb = (function (p1__15507_SHARP_){
return project.methods$.set_element("loop-div",p1__15507_SHARP_);
});
return project.methods$.do_a_loopty_loop(players,cb);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),(function (){
return "loop thru chars";
})()], null);
} else {
return null;
}
});
project.components.fetch_data_button_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".9rem",new cljs.core.Keyword(null,"width","width",-384071477),"fit-content",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),".2rem .6rem",new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue"], null);
project.components.fetch_data_button = (function project$components$fetch_data_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__15510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-players","get-players",-504444108),project.config.api_creds], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15510) : re_frame.core.dispatch.call(null,G__15510));
}),new cljs.core.Keyword(null,"style","style",-496642736),project.components.fetch_data_button_style], null),"Fetch data"], null);
});

//# sourceMappingURL=project.components.js.map
