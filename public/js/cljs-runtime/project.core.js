goog.provide('project.core');
project.core.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.PersistentVector.EMPTY], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),(function (state,p__16443){
var vec__16444 = p__16443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16444,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16444,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"characters","characters",-163867197),data);
}));
var G__16447_16455 = new cljs.core.Keyword(null,"characters","characters",-163867197);
var G__16448_16456 = (function (state){
return new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__16447_16455,G__16448_16456) : re_frame.core.reg_sub.call(null,G__16447_16455,G__16448_16456));
project.core.app = (function project$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-2rem"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.centered-content","div.centered-content",1731260639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),(function (){var characters = cljs.core.deref((function (){var G__16449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16449) : re_frame.core.subscribe.call(null,G__16449));
})());
var iter__5523__auto__ = (function project$core$app_$_iter__16450(s__16451){
return (new cljs.core.LazySeq(null,(function (){
var s__16451__$1 = s__16451;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16451__$1);
if(temp__5804__auto__){
var s__16451__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16451__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16451__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16453 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16452 = (0);
while(true){
if((i__16452 < size__5522__auto__)){
var character = cljs.core._nth(c__5521__auto__,i__16452);
cljs.core.chunk_append(b__16453,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.character_list,character], null)], null));

var G__16457 = (i__16452 + (1));
i__16452 = G__16457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16453),project$core$app_$_iter__16450(cljs.core.chunk_rest(s__16451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16453),null);
}
} else {
var character = cljs.core.first(s__16451__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.components.character_list,character], null)], null),project$core$app_$_iter__16450(cljs.core.rest(s__16451__$2)));
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
project.core.app_wrapper = cljs.core.with_meta(project.core.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["getting character list.."], 0));

return project.components.get_character_list();
})], null));
project.core.start = (function project$core$start(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app started"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project.core.app_wrapper], null),document.getElementById("app"));
});
goog.exportSymbol('project.core.start', project.core.start);

//# sourceMappingURL=project.core.js.map
