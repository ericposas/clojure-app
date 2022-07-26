goog.provide('project.core');
project.core.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.PersistentVector.EMPTY], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),(function (state,p__14892){
var vec__14893 = p__14892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"characters","characters",-163867197),data);
}));
var G__14896_14935 = new cljs.core.Keyword(null,"characters","characters",-163867197);
var G__14897_14936 = (function (state){
return new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__14896_14935,G__14897_14936) : re_frame.core.reg_sub.call(null,G__14896_14935,G__14897_14936));
project.core.get_character_list = (function project$core$get_character_list(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/characters",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14898_SHARP_){
var G__14901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),p1__14898_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14901) : re_frame.core.dispatch.call(null,G__14901));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14899_SHARP_,p2__14900_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14899_SHARP_,p2__14900_SHARP_], 0));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null)], null)], 0));
});
project.core.app = (function project$core$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),"Application"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return project.core.get_character_list();
})], null),"API call"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),(function (){var characters = cljs.core.deref((function (){var G__14902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14902) : re_frame.core.subscribe.call(null,G__14902));
})());
var iter__5523__auto__ = (function project$core$app_$_iter__14903(s__14904){
return (new cljs.core.LazySeq(null,(function (){
var s__14904__$1 = s__14904;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14904__$1);
if(temp__5804__auto__){
var s__14904__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14904__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14904__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14906 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14905 = (0);
while(true){
if((i__14905 < size__5522__auto__)){
var character = cljs.core._nth(c__5521__auto__,i__14905);
cljs.core.chunk_append(b__14906,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(character)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),["Character: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character))].join('')], null),(function (){var iter__5523__auto__ = ((function (i__14905,character,c__5521__auto__,size__5522__auto__,b__14906,s__14904__$2,temp__5804__auto__,characters){
return (function project$core$app_$_iter__14903_$_iter__14907(s__14908){
return (new cljs.core.LazySeq(null,((function (i__14905,character,c__5521__auto__,size__5522__auto__,b__14906,s__14904__$2,temp__5804__auto__,characters){
return (function (){
var s__14908__$1 = s__14908;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14908__$1);
if(temp__5804__auto____$1){
var s__14908__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14908__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__14908__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__14910 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__14909 = (0);
while(true){
if((i__14909 < size__5522__auto____$1)){
var move = cljs.core._nth(c__5521__auto____$1,i__14909);
cljs.core.chunk_append(b__14910,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14912 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__14912.cljs$core$IFn$_invoke$arity$1 ? fexpr__14912.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14912.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14913 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__14913.cljs$core$IFn$_invoke$arity$1 ? fexpr__14913.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14913.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__14914 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14914.cljs$core$IFn$_invoke$arity$1 ? fexpr__14914.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14914.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14915 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14915.cljs$core$IFn$_invoke$arity$1 ? fexpr__14915.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14915.call(null,move));
})()], null)], null):null)], null));

var G__14937 = (i__14909 + (1));
i__14909 = G__14937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14910),project$core$app_$_iter__14903_$_iter__14907(cljs.core.chunk_rest(s__14908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14910),null);
}
} else {
var move = cljs.core.first(s__14908__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14917 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__14917.cljs$core$IFn$_invoke$arity$1 ? fexpr__14917.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14917.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14918 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__14918.cljs$core$IFn$_invoke$arity$1 ? fexpr__14918.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14918.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__14919 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14919.cljs$core$IFn$_invoke$arity$1 ? fexpr__14919.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14919.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14920 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14920.cljs$core$IFn$_invoke$arity$1 ? fexpr__14920.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14920.call(null,move));
})()], null)], null):null)], null),project$core$app_$_iter__14903_$_iter__14907(cljs.core.rest(s__14908__$2)));
}
} else {
return null;
}
break;
}
});})(i__14905,character,c__5521__auto__,size__5522__auto__,b__14906,s__14904__$2,temp__5804__auto__,characters))
,null,null));
});})(i__14905,character,c__5521__auto__,size__5522__auto__,b__14906,s__14904__$2,temp__5804__auto__,characters))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(character));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__14938 = (i__14905 + (1));
i__14905 = G__14938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14906),project$core$app_$_iter__14903(cljs.core.chunk_rest(s__14904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14906),null);
}
} else {
var character = cljs.core.first(s__14904__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(character)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),["Character: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character))].join('')], null),(function (){var iter__5523__auto__ = ((function (character,s__14904__$2,temp__5804__auto__,characters){
return (function project$core$app_$_iter__14903_$_iter__14921(s__14922){
return (new cljs.core.LazySeq(null,(function (){
var s__14922__$1 = s__14922;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14922__$1);
if(temp__5804__auto____$1){
var s__14922__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14922__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14922__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14924 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14923 = (0);
while(true){
if((i__14923 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__14923);
cljs.core.chunk_append(b__14924,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14926 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__14926.cljs$core$IFn$_invoke$arity$1 ? fexpr__14926.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14926.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14927 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__14927.cljs$core$IFn$_invoke$arity$1 ? fexpr__14927.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14927.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__14928 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14928.cljs$core$IFn$_invoke$arity$1 ? fexpr__14928.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14928.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14929 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14929.cljs$core$IFn$_invoke$arity$1 ? fexpr__14929.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14929.call(null,move));
})()], null)], null):null)], null));

var G__14939 = (i__14923 + (1));
i__14923 = G__14939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14924),project$core$app_$_iter__14903_$_iter__14921(cljs.core.chunk_rest(s__14922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14924),null);
}
} else {
var move = cljs.core.first(s__14922__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__14931 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__14931.cljs$core$IFn$_invoke$arity$1 ? fexpr__14931.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14931.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14932 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__14932.cljs$core$IFn$_invoke$arity$1 ? fexpr__14932.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14932.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__14933 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14933.cljs$core$IFn$_invoke$arity$1 ? fexpr__14933.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14933.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__14934 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__14934.cljs$core$IFn$_invoke$arity$1 ? fexpr__14934.cljs$core$IFn$_invoke$arity$1(move) : fexpr__14934.call(null,move));
})()], null)], null):null)], null),project$core$app_$_iter__14903_$_iter__14921(cljs.core.rest(s__14922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(character,s__14904__$2,temp__5804__auto__,characters))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(character));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),project$core$app_$_iter__14903(cljs.core.rest(s__14904__$2)));
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
