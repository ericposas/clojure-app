goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12427 = e.target.readyState;
var fexpr__12426 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12426.cljs$core$IFn$_invoke$arity$1 ? fexpr__12426.cljs$core$IFn$_invoke$arity$1(G__12427) : fexpr__12426.call(null,G__12427));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12441,handler){
var map__12442 = p__12441;
var map__12442__$1 = cljs.core.__destructure_map(map__12442);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12442__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12442__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12442__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12436_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12436_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12492 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12492)){
var response_type_12493 = temp__5804__auto___12492;
(this$__$1.responseType = cljs.core.name(response_type_12493));
} else {
}

var seq__12456_12494 = cljs.core.seq(headers);
var chunk__12457_12495 = null;
var count__12458_12496 = (0);
var i__12459_12497 = (0);
while(true){
if((i__12459_12497 < count__12458_12496)){
var vec__12473_12498 = chunk__12457_12495.cljs$core$IIndexed$_nth$arity$2(null,i__12459_12497);
var k_12499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473_12498,(0),null);
var v_12500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473_12498,(1),null);
this$__$1.setRequestHeader(k_12499,v_12500);


var G__12501 = seq__12456_12494;
var G__12502 = chunk__12457_12495;
var G__12503 = count__12458_12496;
var G__12504 = (i__12459_12497 + (1));
seq__12456_12494 = G__12501;
chunk__12457_12495 = G__12502;
count__12458_12496 = G__12503;
i__12459_12497 = G__12504;
continue;
} else {
var temp__5804__auto___12505 = cljs.core.seq(seq__12456_12494);
if(temp__5804__auto___12505){
var seq__12456_12506__$1 = temp__5804__auto___12505;
if(cljs.core.chunked_seq_QMARK_(seq__12456_12506__$1)){
var c__5568__auto___12507 = cljs.core.chunk_first(seq__12456_12506__$1);
var G__12508 = cljs.core.chunk_rest(seq__12456_12506__$1);
var G__12509 = c__5568__auto___12507;
var G__12510 = cljs.core.count(c__5568__auto___12507);
var G__12511 = (0);
seq__12456_12494 = G__12508;
chunk__12457_12495 = G__12509;
count__12458_12496 = G__12510;
i__12459_12497 = G__12511;
continue;
} else {
var vec__12483_12512 = cljs.core.first(seq__12456_12506__$1);
var k_12513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12483_12512,(0),null);
var v_12514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12483_12512,(1),null);
this$__$1.setRequestHeader(k_12513,v_12514);


var G__12515 = cljs.core.next(seq__12456_12506__$1);
var G__12516 = null;
var G__12517 = (0);
var G__12518 = (0);
seq__12456_12494 = G__12515;
chunk__12457_12495 = G__12516;
count__12458_12496 = G__12517;
i__12459_12497 = G__12518;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
