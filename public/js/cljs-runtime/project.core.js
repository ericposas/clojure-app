goog.provide('project.core');
project.core.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.PersistentVector.EMPTY], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),(function (state,p__15479){
var vec__15480 = p__15479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15480,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15480,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"characters","characters",-163867197),data);
}));
var G__15483_15503 = new cljs.core.Keyword(null,"characters","characters",-163867197);
var G__15484_15504 = (function (state){
return new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15483_15503,G__15484_15504) : re_frame.core.reg_sub.call(null,G__15483_15503,G__15484_15504));
project.core.get_character_list = (function project$core$get_character_list(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/characters",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__15485_SHARP_){
var G__15488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),p1__15485_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15488) : re_frame.core.dispatch.call(null,G__15488));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__15486_SHARP_,p2__15487_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__15486_SHARP_,p2__15487_SHARP_], 0));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null)], null)], 0));
});
project.core.move_list = (function project$core$move_list(move){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15490 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__15490.cljs$core$IFn$_invoke$arity$1 ? fexpr__15490.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15490.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15491 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__15491.cljs$core$IFn$_invoke$arity$1 ? fexpr__15491.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15491.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__15492 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15492.cljs$core$IFn$_invoke$arity$1 ? fexpr__15492.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15492.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15493 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15493.cljs$core$IFn$_invoke$arity$1 ? fexpr__15493.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15493.call(null,move));
})()], null)], null):null)], null);
});
project.core.character_list = (function project$core$character_list(character){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return project.core.get_character_list();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),["Character: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character))].join('')], null),(function (){var iter__5523__auto__ = (function project$core$character_list_$_iter__15494(s__15495){
return (new cljs.core.LazySeq(null,(function (){
var s__15495__$1 = s__15495;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15495__$1);
if(temp__5804__auto__){
var s__15495__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15495__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15495__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15497 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15496 = (0);
while(true){
if((i__15496 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__15496);
cljs.core.chunk_append(b__15497,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.move_list,move], null)], null));

var G__15505 = (i__15496 + (1));
i__15496 = G__15505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15497),project$core$character_list_$_iter__15494(cljs.core.chunk_rest(s__15495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15497),null);
}
} else {
var move = cljs.core.first(s__15495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.move_list,move], null)], null),project$core$character_list_$_iter__15494(cljs.core.rest(s__15495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(character));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
project.core.app = (function project$core$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),"Application"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return project.core.get_character_list();
})], null),"Load Characters"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),(function (){var characters = cljs.core.deref((function (){var G__15498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15498) : re_frame.core.subscribe.call(null,G__15498));
})());
var iter__5523__auto__ = (function project$core$app_$_iter__15499(s__15500){
return (new cljs.core.LazySeq(null,(function (){
var s__15500__$1 = s__15500;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15500__$1);
if(temp__5804__auto__){
var s__15500__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15500__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15500__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15502 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15501 = (0);
while(true){
if((i__15501 < size__5522__auto__)){
var character = cljs.core._nth(c__5521__auto__,i__15501);
cljs.core.chunk_append(b__15502,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.character_list,character], null)], null));

var G__15506 = (i__15501 + (1));
i__15501 = G__15506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15502),project$core$app_$_iter__15499(cljs.core.chunk_rest(s__15500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15502),null);
}
} else {
var character = cljs.core.first(s__15500__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.character_list,character], null)], null),project$core$app_$_iter__15499(cljs.core.rest(s__15500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(characters);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
project.core.start = (function project$core$start(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app started"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('project.core.start', project.core.start);

//# sourceMappingURL=project.core.js.map
