goog.provide('project.core');
project.core.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.PersistentVector.EMPTY], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),(function (state,p__15206){
var vec__15207 = p__15206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15207,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15207,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"characters","characters",-163867197),data);
}));
var G__15210_15249 = new cljs.core.Keyword(null,"characters","characters",-163867197);
var G__15211_15250 = (function (state){
return new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(state);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__15210_15249,G__15211_15250) : re_frame.core.reg_sub.call(null,G__15210_15249,G__15211_15250));
project.core.get_character_list = (function project$core$get_character_list(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/characters",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__15212_SHARP_){
var G__15215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-characters","set-characters",-360643235),p1__15212_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15215) : re_frame.core.dispatch.call(null,G__15215));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__15213_SHARP_,p2__15214_SHARP_){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__15213_SHARP_,p2__15214_SHARP_], 0));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null)], null)], 0));
});
project.core.app = (function project$core$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),"Application"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return project.core.get_character_list();
})], null),"Load Characters"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"arial","arial",-48492964)], null)], null),(function (){var characters = cljs.core.deref((function (){var G__15216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15216) : re_frame.core.subscribe.call(null,G__15216));
})());
var iter__5523__auto__ = (function project$core$app_$_iter__15217(s__15218){
return (new cljs.core.LazySeq(null,(function (){
var s__15218__$1 = s__15218;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15218__$1);
if(temp__5804__auto__){
var s__15218__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15218__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15218__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15220 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15219 = (0);
while(true){
if((i__15219 < size__5522__auto__)){
var character = cljs.core._nth(c__5521__auto__,i__15219);
cljs.core.chunk_append(b__15220,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters){
return (function (){
return project.core.get_character_list();
});})(i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),["Character: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character))].join('')], null),(function (){var iter__5523__auto__ = ((function (i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters){
return (function project$core$app_$_iter__15217_$_iter__15221(s__15222){
return (new cljs.core.LazySeq(null,((function (i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters){
return (function (){
var s__15222__$1 = s__15222;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15222__$1);
if(temp__5804__auto____$1){
var s__15222__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15222__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__15222__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__15224 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__15223 = (0);
while(true){
if((i__15223 < size__5522__auto____$1)){
var move = cljs.core._nth(c__5521__auto____$1,i__15223);
cljs.core.chunk_append(b__15224,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15226 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__15226.cljs$core$IFn$_invoke$arity$1 ? fexpr__15226.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15226.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15227 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__15227.cljs$core$IFn$_invoke$arity$1 ? fexpr__15227.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15227.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__15228 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15228.cljs$core$IFn$_invoke$arity$1 ? fexpr__15228.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15228.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15229 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15229.cljs$core$IFn$_invoke$arity$1 ? fexpr__15229.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15229.call(null,move));
})()], null)], null):null)], null));

var G__15251 = (i__15223 + (1));
i__15223 = G__15251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15224),project$core$app_$_iter__15217_$_iter__15221(cljs.core.chunk_rest(s__15222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15224),null);
}
} else {
var move = cljs.core.first(s__15222__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15231 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__15231.cljs$core$IFn$_invoke$arity$1 ? fexpr__15231.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15231.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15232 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__15232.cljs$core$IFn$_invoke$arity$1 ? fexpr__15232.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15232.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__15233 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15233.cljs$core$IFn$_invoke$arity$1 ? fexpr__15233.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15233.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15234 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15234.cljs$core$IFn$_invoke$arity$1 ? fexpr__15234.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15234.call(null,move));
})()], null)], null):null)], null),project$core$app_$_iter__15217_$_iter__15221(cljs.core.rest(s__15222__$2)));
}
} else {
return null;
}
break;
}
});})(i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters))
,null,null));
});})(i__15219,character,c__5521__auto__,size__5522__auto__,b__15220,s__15218__$2,temp__5804__auto__,characters))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(character));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__15252 = (i__15219 + (1));
i__15219 = G__15252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15220),project$core$app_$_iter__15217(cljs.core.chunk_rest(s__15218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15220),null);
}
} else {
var character = cljs.core.first(s__15218__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (character,s__15218__$2,temp__5804__auto__,characters){
return (function (){
return project.core.get_character_list();
});})(character,s__15218__$2,temp__5804__auto__,characters))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)], null),["Character: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character))].join('')], null),(function (){var iter__5523__auto__ = ((function (character,s__15218__$2,temp__5804__auto__,characters){
return (function project$core$app_$_iter__15217_$_iter__15235(s__15236){
return (new cljs.core.LazySeq(null,(function (){
var s__15236__$1 = s__15236;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15236__$1);
if(temp__5804__auto____$1){
var s__15236__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15236__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15236__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15238 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15237 = (0);
while(true){
if((i__15237 < size__5522__auto__)){
var move = cljs.core._nth(c__5521__auto__,i__15237);
cljs.core.chunk_append(b__15238,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15240 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__15240.cljs$core$IFn$_invoke$arity$1 ? fexpr__15240.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15240.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15241 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__15241.cljs$core$IFn$_invoke$arity$1 ? fexpr__15241.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15241.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__15242 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15242.cljs$core$IFn$_invoke$arity$1 ? fexpr__15242.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15242.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15243 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15243.cljs$core$IFn$_invoke$arity$1 ? fexpr__15243.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15243.call(null,move));
})()], null)], null):null)], null));

var G__15253 = (i__15237 + (1));
i__15237 = G__15253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15238),project$core$app_$_iter__15217_$_iter__15235(cljs.core.chunk_rest(s__15236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15238),null);
}
} else {
var move = cljs.core.first(s__15236__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(character)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),".5rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__15245 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move name");
return (fexpr__15245.cljs$core$IFn$_invoke$arity$1 ? fexpr__15245.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15245.call(null,move));
})()),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15246 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("move description");
return (fexpr__15246.cljs$core$IFn$_invoke$arity$1 ? fexpr__15246.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15246.call(null,move));
})()], null),(((!((new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Damage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"damage","damage",970520018).cljs$core$IFn$_invoke$arity$1(move))].join('')], null):null),(((!(((function (){var fexpr__15247 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15247.cljs$core$IFn$_invoke$arity$1 ? fexpr__15247.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15247.call(null,move));
})() == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Attributes: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var fexpr__15248 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("attack attributes");
return (fexpr__15248.cljs$core$IFn$_invoke$arity$1 ? fexpr__15248.cljs$core$IFn$_invoke$arity$1(move) : fexpr__15248.call(null,move));
})()], null)], null):null)], null),project$core$app_$_iter__15217_$_iter__15235(cljs.core.rest(s__15236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(character,s__15218__$2,temp__5804__auto__,characters))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"abilities","abilities",-1471386226).cljs$core$IFn$_invoke$arity$1(character));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),project$core$app_$_iter__15217(cljs.core.rest(s__15218__$2)));
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
