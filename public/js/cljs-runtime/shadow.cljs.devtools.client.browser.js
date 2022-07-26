goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23190 = arguments.length;
var i__5770__auto___23191 = (0);
while(true){
if((i__5770__auto___23191 < len__5769__auto___23190)){
args__5775__auto__.push((arguments[i__5770__auto___23191]));

var G__23192 = (i__5770__auto___23191 + (1));
i__5770__auto___23191 = G__23192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22718){
var G__22719 = cljs.core.first(seq22718);
var seq22718__$1 = cljs.core.next(seq22718);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22719,seq22718__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22723 = cljs.core.seq(sources);
var chunk__22724 = null;
var count__22725 = (0);
var i__22726 = (0);
while(true){
if((i__22726 < count__22725)){
var map__22734 = chunk__22724.cljs$core$IIndexed$_nth$arity$2(null,i__22726);
var map__22734__$1 = cljs.core.__destructure_map(map__22734);
var src = map__22734__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22734__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22735){var e_23193 = e22735;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23193);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23193.message)].join('')));
}

var G__23194 = seq__22723;
var G__23195 = chunk__22724;
var G__23196 = count__22725;
var G__23197 = (i__22726 + (1));
seq__22723 = G__23194;
chunk__22724 = G__23195;
count__22725 = G__23196;
i__22726 = G__23197;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22723);
if(temp__5804__auto__){
var seq__22723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22723__$1);
var G__23198 = cljs.core.chunk_rest(seq__22723__$1);
var G__23199 = c__5568__auto__;
var G__23200 = cljs.core.count(c__5568__auto__);
var G__23201 = (0);
seq__22723 = G__23198;
chunk__22724 = G__23199;
count__22725 = G__23200;
i__22726 = G__23201;
continue;
} else {
var map__22739 = cljs.core.first(seq__22723__$1);
var map__22739__$1 = cljs.core.__destructure_map(map__22739);
var src = map__22739__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22740){var e_23202 = e22740;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23202);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23202.message)].join('')));
}

var G__23203 = cljs.core.next(seq__22723__$1);
var G__23204 = null;
var G__23205 = (0);
var G__23206 = (0);
seq__22723 = G__23203;
chunk__22724 = G__23204;
count__22725 = G__23205;
i__22726 = G__23206;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22744 = cljs.core.seq(js_requires);
var chunk__22745 = null;
var count__22746 = (0);
var i__22747 = (0);
while(true){
if((i__22747 < count__22746)){
var js_ns = chunk__22745.cljs$core$IIndexed$_nth$arity$2(null,i__22747);
var require_str_23207 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23207);


var G__23208 = seq__22744;
var G__23209 = chunk__22745;
var G__23210 = count__22746;
var G__23211 = (i__22747 + (1));
seq__22744 = G__23208;
chunk__22745 = G__23209;
count__22746 = G__23210;
i__22747 = G__23211;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22744);
if(temp__5804__auto__){
var seq__22744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22744__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22744__$1);
var G__23212 = cljs.core.chunk_rest(seq__22744__$1);
var G__23213 = c__5568__auto__;
var G__23214 = cljs.core.count(c__5568__auto__);
var G__23215 = (0);
seq__22744 = G__23212;
chunk__22745 = G__23213;
count__22746 = G__23214;
i__22747 = G__23215;
continue;
} else {
var js_ns = cljs.core.first(seq__22744__$1);
var require_str_23216 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23216);


var G__23217 = cljs.core.next(seq__22744__$1);
var G__23218 = null;
var G__23219 = (0);
var G__23220 = (0);
seq__22744 = G__23217;
chunk__22745 = G__23218;
count__22746 = G__23219;
i__22747 = G__23220;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22750){
var map__22751 = p__22750;
var map__22751__$1 = cljs.core.__destructure_map(map__22751);
var msg = map__22751__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22751__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22753(s__22754){
return (new cljs.core.LazySeq(null,(function (){
var s__22754__$1 = s__22754;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22754__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22759 = cljs.core.first(xs__6360__auto__);
var map__22759__$1 = cljs.core.__destructure_map(map__22759);
var src = map__22759__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22759__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22759__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22754__$1,map__22759,map__22759__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22751,map__22751__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22753_$_iter__22755(s__22756){
return (new cljs.core.LazySeq(null,((function (s__22754__$1,map__22759,map__22759__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22751,map__22751__$1,msg,info,reload_info){
return (function (){
var s__22756__$1 = s__22756;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22756__$1);
if(temp__5804__auto____$1){
var s__22756__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22756__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22756__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22758 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22757 = (0);
while(true){
if((i__22757 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22757);
cljs.core.chunk_append(b__22758,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23221 = (i__22757 + (1));
i__22757 = G__23221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22758),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22753_$_iter__22755(cljs.core.chunk_rest(s__22756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22758),null);
}
} else {
var warning = cljs.core.first(s__22756__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22753_$_iter__22755(cljs.core.rest(s__22756__$2)));
}
} else {
return null;
}
break;
}
});})(s__22754__$1,map__22759,map__22759__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22751,map__22751__$1,msg,info,reload_info))
,null,null));
});})(s__22754__$1,map__22759,map__22759__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22751,map__22751__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22753(cljs.core.rest(s__22754__$1)));
} else {
var G__23222 = cljs.core.rest(s__22754__$1);
s__22754__$1 = G__23222;
continue;
}
} else {
var G__23223 = cljs.core.rest(s__22754__$1);
s__22754__$1 = G__23223;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22763_23224 = cljs.core.seq(warnings);
var chunk__22764_23225 = null;
var count__22765_23226 = (0);
var i__22766_23227 = (0);
while(true){
if((i__22766_23227 < count__22765_23226)){
var map__22769_23228 = chunk__22764_23225.cljs$core$IIndexed$_nth$arity$2(null,i__22766_23227);
var map__22769_23229__$1 = cljs.core.__destructure_map(map__22769_23228);
var w_23230 = map__22769_23229__$1;
var msg_23231__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769_23229__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769_23229__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769_23229__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22769_23229__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23234)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23232),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23233),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23231__$1)].join(''));


var G__23235 = seq__22763_23224;
var G__23236 = chunk__22764_23225;
var G__23237 = count__22765_23226;
var G__23238 = (i__22766_23227 + (1));
seq__22763_23224 = G__23235;
chunk__22764_23225 = G__23236;
count__22765_23226 = G__23237;
i__22766_23227 = G__23238;
continue;
} else {
var temp__5804__auto___23239 = cljs.core.seq(seq__22763_23224);
if(temp__5804__auto___23239){
var seq__22763_23240__$1 = temp__5804__auto___23239;
if(cljs.core.chunked_seq_QMARK_(seq__22763_23240__$1)){
var c__5568__auto___23241 = cljs.core.chunk_first(seq__22763_23240__$1);
var G__23242 = cljs.core.chunk_rest(seq__22763_23240__$1);
var G__23243 = c__5568__auto___23241;
var G__23244 = cljs.core.count(c__5568__auto___23241);
var G__23245 = (0);
seq__22763_23224 = G__23242;
chunk__22764_23225 = G__23243;
count__22765_23226 = G__23244;
i__22766_23227 = G__23245;
continue;
} else {
var map__22770_23246 = cljs.core.first(seq__22763_23240__$1);
var map__22770_23247__$1 = cljs.core.__destructure_map(map__22770_23246);
var w_23248 = map__22770_23247__$1;
var msg_23249__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22770_23247__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22770_23247__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22770_23247__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22770_23247__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23252)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23250),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23251),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23249__$1)].join(''));


var G__23253 = cljs.core.next(seq__22763_23240__$1);
var G__23254 = null;
var G__23255 = (0);
var G__23256 = (0);
seq__22763_23224 = G__23253;
chunk__22764_23225 = G__23254;
count__22765_23226 = G__23255;
i__22766_23227 = G__23256;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22749_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22749_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22778){
var map__22781 = p__22778;
var map__22781__$1 = cljs.core.__destructure_map(map__22781);
var msg = map__22781__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22785 = cljs.core.seq(updates);
var chunk__22787 = null;
var count__22788 = (0);
var i__22789 = (0);
while(true){
if((i__22789 < count__22788)){
var path = chunk__22787.cljs$core$IIndexed$_nth$arity$2(null,i__22789);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23023_23257 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23027_23258 = null;
var count__23028_23259 = (0);
var i__23029_23260 = (0);
while(true){
if((i__23029_23260 < count__23028_23259)){
var node_23261 = chunk__23027_23258.cljs$core$IIndexed$_nth$arity$2(null,i__23029_23260);
if(cljs.core.not(node_23261.shadow$old)){
var path_match_23262 = shadow.cljs.devtools.client.browser.match_paths(node_23261.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23262)){
var new_link_23263 = (function (){var G__23078 = node_23261.cloneNode(true);
G__23078.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23262),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23078;
})();
(node_23261.shadow$old = true);

(new_link_23263.onload = ((function (seq__23023_23257,chunk__23027_23258,count__23028_23259,i__23029_23260,seq__22785,chunk__22787,count__22788,i__22789,new_link_23263,path_match_23262,node_23261,path,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__23080_23264 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23083_23265 = null;
var count__23084_23266 = (0);
var i__23085_23267 = (0);
while(true){
if((i__23085_23267 < count__23084_23266)){
var map__23096_23268 = chunk__23083_23265.cljs$core$IIndexed$_nth$arity$2(null,i__23085_23267);
var map__23096_23269__$1 = cljs.core.__destructure_map(map__23096_23268);
var task_23270 = map__23096_23269__$1;
var fn_str_23271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096_23269__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23096_23269__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23273 = goog.getObjectByName(fn_str_23271,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23272)].join(''));

(fn_obj_23273.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23273.cljs$core$IFn$_invoke$arity$2(path,new_link_23263) : fn_obj_23273.call(null,path,new_link_23263));


var G__23274 = seq__23080_23264;
var G__23275 = chunk__23083_23265;
var G__23276 = count__23084_23266;
var G__23277 = (i__23085_23267 + (1));
seq__23080_23264 = G__23274;
chunk__23083_23265 = G__23275;
count__23084_23266 = G__23276;
i__23085_23267 = G__23277;
continue;
} else {
var temp__5804__auto___23278 = cljs.core.seq(seq__23080_23264);
if(temp__5804__auto___23278){
var seq__23080_23279__$1 = temp__5804__auto___23278;
if(cljs.core.chunked_seq_QMARK_(seq__23080_23279__$1)){
var c__5568__auto___23280 = cljs.core.chunk_first(seq__23080_23279__$1);
var G__23281 = cljs.core.chunk_rest(seq__23080_23279__$1);
var G__23282 = c__5568__auto___23280;
var G__23283 = cljs.core.count(c__5568__auto___23280);
var G__23284 = (0);
seq__23080_23264 = G__23281;
chunk__23083_23265 = G__23282;
count__23084_23266 = G__23283;
i__23085_23267 = G__23284;
continue;
} else {
var map__23098_23285 = cljs.core.first(seq__23080_23279__$1);
var map__23098_23286__$1 = cljs.core.__destructure_map(map__23098_23285);
var task_23287 = map__23098_23286__$1;
var fn_str_23288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098_23286__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098_23286__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23290 = goog.getObjectByName(fn_str_23288,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23289)].join(''));

(fn_obj_23290.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23290.cljs$core$IFn$_invoke$arity$2(path,new_link_23263) : fn_obj_23290.call(null,path,new_link_23263));


var G__23291 = cljs.core.next(seq__23080_23279__$1);
var G__23292 = null;
var G__23293 = (0);
var G__23294 = (0);
seq__23080_23264 = G__23291;
chunk__23083_23265 = G__23292;
count__23084_23266 = G__23293;
i__23085_23267 = G__23294;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23261);
});})(seq__23023_23257,chunk__23027_23258,count__23028_23259,i__23029_23260,seq__22785,chunk__22787,count__22788,i__22789,new_link_23263,path_match_23262,node_23261,path,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23262], 0));

goog.dom.insertSiblingAfter(new_link_23263,node_23261);


var G__23295 = seq__23023_23257;
var G__23296 = chunk__23027_23258;
var G__23297 = count__23028_23259;
var G__23298 = (i__23029_23260 + (1));
seq__23023_23257 = G__23295;
chunk__23027_23258 = G__23296;
count__23028_23259 = G__23297;
i__23029_23260 = G__23298;
continue;
} else {
var G__23299 = seq__23023_23257;
var G__23300 = chunk__23027_23258;
var G__23301 = count__23028_23259;
var G__23302 = (i__23029_23260 + (1));
seq__23023_23257 = G__23299;
chunk__23027_23258 = G__23300;
count__23028_23259 = G__23301;
i__23029_23260 = G__23302;
continue;
}
} else {
var G__23303 = seq__23023_23257;
var G__23304 = chunk__23027_23258;
var G__23305 = count__23028_23259;
var G__23306 = (i__23029_23260 + (1));
seq__23023_23257 = G__23303;
chunk__23027_23258 = G__23304;
count__23028_23259 = G__23305;
i__23029_23260 = G__23306;
continue;
}
} else {
var temp__5804__auto___23307 = cljs.core.seq(seq__23023_23257);
if(temp__5804__auto___23307){
var seq__23023_23308__$1 = temp__5804__auto___23307;
if(cljs.core.chunked_seq_QMARK_(seq__23023_23308__$1)){
var c__5568__auto___23309 = cljs.core.chunk_first(seq__23023_23308__$1);
var G__23310 = cljs.core.chunk_rest(seq__23023_23308__$1);
var G__23311 = c__5568__auto___23309;
var G__23312 = cljs.core.count(c__5568__auto___23309);
var G__23313 = (0);
seq__23023_23257 = G__23310;
chunk__23027_23258 = G__23311;
count__23028_23259 = G__23312;
i__23029_23260 = G__23313;
continue;
} else {
var node_23314 = cljs.core.first(seq__23023_23308__$1);
if(cljs.core.not(node_23314.shadow$old)){
var path_match_23315 = shadow.cljs.devtools.client.browser.match_paths(node_23314.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23315)){
var new_link_23316 = (function (){var G__23105 = node_23314.cloneNode(true);
G__23105.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23315),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23105;
})();
(node_23314.shadow$old = true);

(new_link_23316.onload = ((function (seq__23023_23257,chunk__23027_23258,count__23028_23259,i__23029_23260,seq__22785,chunk__22787,count__22788,i__22789,new_link_23316,path_match_23315,node_23314,seq__23023_23308__$1,temp__5804__auto___23307,path,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__23106_23317 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23108_23318 = null;
var count__23109_23319 = (0);
var i__23110_23320 = (0);
while(true){
if((i__23110_23320 < count__23109_23319)){
var map__23114_23321 = chunk__23108_23318.cljs$core$IIndexed$_nth$arity$2(null,i__23110_23320);
var map__23114_23322__$1 = cljs.core.__destructure_map(map__23114_23321);
var task_23323 = map__23114_23322__$1;
var fn_str_23324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23114_23322__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23114_23322__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23326 = goog.getObjectByName(fn_str_23324,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23325)].join(''));

(fn_obj_23326.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23326.cljs$core$IFn$_invoke$arity$2(path,new_link_23316) : fn_obj_23326.call(null,path,new_link_23316));


var G__23327 = seq__23106_23317;
var G__23328 = chunk__23108_23318;
var G__23329 = count__23109_23319;
var G__23330 = (i__23110_23320 + (1));
seq__23106_23317 = G__23327;
chunk__23108_23318 = G__23328;
count__23109_23319 = G__23329;
i__23110_23320 = G__23330;
continue;
} else {
var temp__5804__auto___23331__$1 = cljs.core.seq(seq__23106_23317);
if(temp__5804__auto___23331__$1){
var seq__23106_23332__$1 = temp__5804__auto___23331__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23106_23332__$1)){
var c__5568__auto___23333 = cljs.core.chunk_first(seq__23106_23332__$1);
var G__23334 = cljs.core.chunk_rest(seq__23106_23332__$1);
var G__23335 = c__5568__auto___23333;
var G__23336 = cljs.core.count(c__5568__auto___23333);
var G__23337 = (0);
seq__23106_23317 = G__23334;
chunk__23108_23318 = G__23335;
count__23109_23319 = G__23336;
i__23110_23320 = G__23337;
continue;
} else {
var map__23115_23338 = cljs.core.first(seq__23106_23332__$1);
var map__23115_23339__$1 = cljs.core.__destructure_map(map__23115_23338);
var task_23340 = map__23115_23339__$1;
var fn_str_23341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23115_23339__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23115_23339__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23343 = goog.getObjectByName(fn_str_23341,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23342)].join(''));

(fn_obj_23343.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23343.cljs$core$IFn$_invoke$arity$2(path,new_link_23316) : fn_obj_23343.call(null,path,new_link_23316));


var G__23344 = cljs.core.next(seq__23106_23332__$1);
var G__23345 = null;
var G__23346 = (0);
var G__23347 = (0);
seq__23106_23317 = G__23344;
chunk__23108_23318 = G__23345;
count__23109_23319 = G__23346;
i__23110_23320 = G__23347;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23314);
});})(seq__23023_23257,chunk__23027_23258,count__23028_23259,i__23029_23260,seq__22785,chunk__22787,count__22788,i__22789,new_link_23316,path_match_23315,node_23314,seq__23023_23308__$1,temp__5804__auto___23307,path,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23315], 0));

goog.dom.insertSiblingAfter(new_link_23316,node_23314);


var G__23348 = cljs.core.next(seq__23023_23308__$1);
var G__23349 = null;
var G__23350 = (0);
var G__23351 = (0);
seq__23023_23257 = G__23348;
chunk__23027_23258 = G__23349;
count__23028_23259 = G__23350;
i__23029_23260 = G__23351;
continue;
} else {
var G__23352 = cljs.core.next(seq__23023_23308__$1);
var G__23353 = null;
var G__23354 = (0);
var G__23355 = (0);
seq__23023_23257 = G__23352;
chunk__23027_23258 = G__23353;
count__23028_23259 = G__23354;
i__23029_23260 = G__23355;
continue;
}
} else {
var G__23356 = cljs.core.next(seq__23023_23308__$1);
var G__23357 = null;
var G__23358 = (0);
var G__23359 = (0);
seq__23023_23257 = G__23356;
chunk__23027_23258 = G__23357;
count__23028_23259 = G__23358;
i__23029_23260 = G__23359;
continue;
}
}
} else {
}
}
break;
}


var G__23360 = seq__22785;
var G__23361 = chunk__22787;
var G__23362 = count__22788;
var G__23363 = (i__22789 + (1));
seq__22785 = G__23360;
chunk__22787 = G__23361;
count__22788 = G__23362;
i__22789 = G__23363;
continue;
} else {
var G__23364 = seq__22785;
var G__23365 = chunk__22787;
var G__23366 = count__22788;
var G__23367 = (i__22789 + (1));
seq__22785 = G__23364;
chunk__22787 = G__23365;
count__22788 = G__23366;
i__22789 = G__23367;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22785);
if(temp__5804__auto__){
var seq__22785__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22785__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22785__$1);
var G__23368 = cljs.core.chunk_rest(seq__22785__$1);
var G__23369 = c__5568__auto__;
var G__23370 = cljs.core.count(c__5568__auto__);
var G__23371 = (0);
seq__22785 = G__23368;
chunk__22787 = G__23369;
count__22788 = G__23370;
i__22789 = G__23371;
continue;
} else {
var path = cljs.core.first(seq__22785__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23116_23372 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23120_23373 = null;
var count__23121_23374 = (0);
var i__23122_23375 = (0);
while(true){
if((i__23122_23375 < count__23121_23374)){
var node_23376 = chunk__23120_23373.cljs$core$IIndexed$_nth$arity$2(null,i__23122_23375);
if(cljs.core.not(node_23376.shadow$old)){
var path_match_23377 = shadow.cljs.devtools.client.browser.match_paths(node_23376.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23377)){
var new_link_23378 = (function (){var G__23148 = node_23376.cloneNode(true);
G__23148.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23377),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23148;
})();
(node_23376.shadow$old = true);

(new_link_23378.onload = ((function (seq__23116_23372,chunk__23120_23373,count__23121_23374,i__23122_23375,seq__22785,chunk__22787,count__22788,i__22789,new_link_23378,path_match_23377,node_23376,path,seq__22785__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__23149_23379 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23151_23380 = null;
var count__23152_23381 = (0);
var i__23153_23382 = (0);
while(true){
if((i__23153_23382 < count__23152_23381)){
var map__23157_23383 = chunk__23151_23380.cljs$core$IIndexed$_nth$arity$2(null,i__23153_23382);
var map__23157_23384__$1 = cljs.core.__destructure_map(map__23157_23383);
var task_23385 = map__23157_23384__$1;
var fn_str_23386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23157_23384__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23157_23384__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23388 = goog.getObjectByName(fn_str_23386,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23387)].join(''));

(fn_obj_23388.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23388.cljs$core$IFn$_invoke$arity$2(path,new_link_23378) : fn_obj_23388.call(null,path,new_link_23378));


var G__23389 = seq__23149_23379;
var G__23390 = chunk__23151_23380;
var G__23391 = count__23152_23381;
var G__23392 = (i__23153_23382 + (1));
seq__23149_23379 = G__23389;
chunk__23151_23380 = G__23390;
count__23152_23381 = G__23391;
i__23153_23382 = G__23392;
continue;
} else {
var temp__5804__auto___23393__$1 = cljs.core.seq(seq__23149_23379);
if(temp__5804__auto___23393__$1){
var seq__23149_23394__$1 = temp__5804__auto___23393__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23149_23394__$1)){
var c__5568__auto___23395 = cljs.core.chunk_first(seq__23149_23394__$1);
var G__23396 = cljs.core.chunk_rest(seq__23149_23394__$1);
var G__23397 = c__5568__auto___23395;
var G__23398 = cljs.core.count(c__5568__auto___23395);
var G__23399 = (0);
seq__23149_23379 = G__23396;
chunk__23151_23380 = G__23397;
count__23152_23381 = G__23398;
i__23153_23382 = G__23399;
continue;
} else {
var map__23158_23400 = cljs.core.first(seq__23149_23394__$1);
var map__23158_23401__$1 = cljs.core.__destructure_map(map__23158_23400);
var task_23402 = map__23158_23401__$1;
var fn_str_23403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158_23401__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158_23401__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23405 = goog.getObjectByName(fn_str_23403,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23404)].join(''));

(fn_obj_23405.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23405.cljs$core$IFn$_invoke$arity$2(path,new_link_23378) : fn_obj_23405.call(null,path,new_link_23378));


var G__23406 = cljs.core.next(seq__23149_23394__$1);
var G__23407 = null;
var G__23408 = (0);
var G__23409 = (0);
seq__23149_23379 = G__23406;
chunk__23151_23380 = G__23407;
count__23152_23381 = G__23408;
i__23153_23382 = G__23409;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23376);
});})(seq__23116_23372,chunk__23120_23373,count__23121_23374,i__23122_23375,seq__22785,chunk__22787,count__22788,i__22789,new_link_23378,path_match_23377,node_23376,path,seq__22785__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23377], 0));

goog.dom.insertSiblingAfter(new_link_23378,node_23376);


var G__23410 = seq__23116_23372;
var G__23411 = chunk__23120_23373;
var G__23412 = count__23121_23374;
var G__23413 = (i__23122_23375 + (1));
seq__23116_23372 = G__23410;
chunk__23120_23373 = G__23411;
count__23121_23374 = G__23412;
i__23122_23375 = G__23413;
continue;
} else {
var G__23414 = seq__23116_23372;
var G__23415 = chunk__23120_23373;
var G__23416 = count__23121_23374;
var G__23417 = (i__23122_23375 + (1));
seq__23116_23372 = G__23414;
chunk__23120_23373 = G__23415;
count__23121_23374 = G__23416;
i__23122_23375 = G__23417;
continue;
}
} else {
var G__23418 = seq__23116_23372;
var G__23419 = chunk__23120_23373;
var G__23420 = count__23121_23374;
var G__23421 = (i__23122_23375 + (1));
seq__23116_23372 = G__23418;
chunk__23120_23373 = G__23419;
count__23121_23374 = G__23420;
i__23122_23375 = G__23421;
continue;
}
} else {
var temp__5804__auto___23422__$1 = cljs.core.seq(seq__23116_23372);
if(temp__5804__auto___23422__$1){
var seq__23116_23423__$1 = temp__5804__auto___23422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23116_23423__$1)){
var c__5568__auto___23424 = cljs.core.chunk_first(seq__23116_23423__$1);
var G__23425 = cljs.core.chunk_rest(seq__23116_23423__$1);
var G__23426 = c__5568__auto___23424;
var G__23427 = cljs.core.count(c__5568__auto___23424);
var G__23428 = (0);
seq__23116_23372 = G__23425;
chunk__23120_23373 = G__23426;
count__23121_23374 = G__23427;
i__23122_23375 = G__23428;
continue;
} else {
var node_23429 = cljs.core.first(seq__23116_23423__$1);
if(cljs.core.not(node_23429.shadow$old)){
var path_match_23430 = shadow.cljs.devtools.client.browser.match_paths(node_23429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23430)){
var new_link_23431 = (function (){var G__23159 = node_23429.cloneNode(true);
G__23159.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23159;
})();
(node_23429.shadow$old = true);

(new_link_23431.onload = ((function (seq__23116_23372,chunk__23120_23373,count__23121_23374,i__23122_23375,seq__22785,chunk__22787,count__22788,i__22789,new_link_23431,path_match_23430,node_23429,seq__23116_23423__$1,temp__5804__auto___23422__$1,path,seq__22785__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__23160_23432 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23162_23433 = null;
var count__23163_23434 = (0);
var i__23164_23435 = (0);
while(true){
if((i__23164_23435 < count__23163_23434)){
var map__23168_23436 = chunk__23162_23433.cljs$core$IIndexed$_nth$arity$2(null,i__23164_23435);
var map__23168_23437__$1 = cljs.core.__destructure_map(map__23168_23436);
var task_23438 = map__23168_23437__$1;
var fn_str_23439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23168_23437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23168_23437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23441 = goog.getObjectByName(fn_str_23439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23440)].join(''));

(fn_obj_23441.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23441.cljs$core$IFn$_invoke$arity$2(path,new_link_23431) : fn_obj_23441.call(null,path,new_link_23431));


var G__23442 = seq__23160_23432;
var G__23443 = chunk__23162_23433;
var G__23444 = count__23163_23434;
var G__23445 = (i__23164_23435 + (1));
seq__23160_23432 = G__23442;
chunk__23162_23433 = G__23443;
count__23163_23434 = G__23444;
i__23164_23435 = G__23445;
continue;
} else {
var temp__5804__auto___23446__$2 = cljs.core.seq(seq__23160_23432);
if(temp__5804__auto___23446__$2){
var seq__23160_23447__$1 = temp__5804__auto___23446__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23160_23447__$1)){
var c__5568__auto___23448 = cljs.core.chunk_first(seq__23160_23447__$1);
var G__23449 = cljs.core.chunk_rest(seq__23160_23447__$1);
var G__23450 = c__5568__auto___23448;
var G__23451 = cljs.core.count(c__5568__auto___23448);
var G__23452 = (0);
seq__23160_23432 = G__23449;
chunk__23162_23433 = G__23450;
count__23163_23434 = G__23451;
i__23164_23435 = G__23452;
continue;
} else {
var map__23169_23453 = cljs.core.first(seq__23160_23447__$1);
var map__23169_23454__$1 = cljs.core.__destructure_map(map__23169_23453);
var task_23455 = map__23169_23454__$1;
var fn_str_23456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23169_23454__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23169_23454__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23458 = goog.getObjectByName(fn_str_23456,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23457)].join(''));

(fn_obj_23458.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23458.cljs$core$IFn$_invoke$arity$2(path,new_link_23431) : fn_obj_23458.call(null,path,new_link_23431));


var G__23459 = cljs.core.next(seq__23160_23447__$1);
var G__23460 = null;
var G__23461 = (0);
var G__23462 = (0);
seq__23160_23432 = G__23459;
chunk__23162_23433 = G__23460;
count__23163_23434 = G__23461;
i__23164_23435 = G__23462;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23429);
});})(seq__23116_23372,chunk__23120_23373,count__23121_23374,i__23122_23375,seq__22785,chunk__22787,count__22788,i__22789,new_link_23431,path_match_23430,node_23429,seq__23116_23423__$1,temp__5804__auto___23422__$1,path,seq__22785__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23430], 0));

goog.dom.insertSiblingAfter(new_link_23431,node_23429);


var G__23463 = cljs.core.next(seq__23116_23423__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23116_23372 = G__23463;
chunk__23120_23373 = G__23464;
count__23121_23374 = G__23465;
i__23122_23375 = G__23466;
continue;
} else {
var G__23467 = cljs.core.next(seq__23116_23423__$1);
var G__23468 = null;
var G__23469 = (0);
var G__23470 = (0);
seq__23116_23372 = G__23467;
chunk__23120_23373 = G__23468;
count__23121_23374 = G__23469;
i__23122_23375 = G__23470;
continue;
}
} else {
var G__23471 = cljs.core.next(seq__23116_23423__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23116_23372 = G__23471;
chunk__23120_23373 = G__23472;
count__23121_23374 = G__23473;
i__23122_23375 = G__23474;
continue;
}
}
} else {
}
}
break;
}


var G__23475 = cljs.core.next(seq__22785__$1);
var G__23476 = null;
var G__23477 = (0);
var G__23478 = (0);
seq__22785 = G__23475;
chunk__22787 = G__23476;
count__22788 = G__23477;
i__22789 = G__23478;
continue;
} else {
var G__23479 = cljs.core.next(seq__22785__$1);
var G__23480 = null;
var G__23481 = (0);
var G__23482 = (0);
seq__22785 = G__23479;
chunk__22787 = G__23480;
count__22788 = G__23481;
i__22789 = G__23482;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__23170){
var map__23171 = p__23170;
var map__23171__$1 = cljs.core.__destructure_map(map__23171);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23171__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__23172){
var map__23173 = p__23172;
var map__23173__$1 = cljs.core.__destructure_map(map__23173);
var _ = map__23173__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23174,done,error){
var map__23175 = p__23174;
var map__23175__$1 = cljs.core.__destructure_map(map__23175);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23176,done,error){
var map__23177 = p__23176;
var map__23177__$1 = cljs.core.__destructure_map(map__23177);
var msg = map__23177__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23178){
var map__23179 = p__23178;
var map__23179__$1 = cljs.core.__destructure_map(map__23179);
var src = map__23179__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23180 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23180) : done.call(null,G__23180));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23181){
var map__23182 = p__23181;
var map__23182__$1 = cljs.core.__destructure_map(map__23182);
var msg__$1 = map__23182__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23183){var ex = e23183;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23184){
var map__23185 = p__23184;
var map__23185__$1 = cljs.core.__destructure_map(map__23185);
var env = map__23185__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23186){
var map__23187 = p__23186;
var map__23187__$1 = cljs.core.__destructure_map(map__23187);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23188){
var map__23189 = p__23188;
var map__23189__$1 = cljs.core.__destructure_map(map__23189);
var svc = map__23189__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23189__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
