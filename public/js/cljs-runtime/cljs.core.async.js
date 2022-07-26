goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17859 = arguments.length;
switch (G__17859) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17860 = (function (f,blockable,meta17861){
this.f = f;
this.blockable = blockable;
this.meta17861 = meta17861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17862,meta17861__$1){
var self__ = this;
var _17862__$1 = this;
return (new cljs.core.async.t_cljs$core$async17860(self__.f,self__.blockable,meta17861__$1));
}));

(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17862){
var self__ = this;
var _17862__$1 = this;
return self__.meta17861;
}));

(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17861","meta17861",-2135832754,null)], null);
}));

(cljs.core.async.t_cljs$core$async17860.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17860");

(cljs.core.async.t_cljs$core$async17860.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17860");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17860.
 */
cljs.core.async.__GT_t_cljs$core$async17860 = (function cljs$core$async$__GT_t_cljs$core$async17860(f__$1,blockable__$1,meta17861){
return (new cljs.core.async.t_cljs$core$async17860(f__$1,blockable__$1,meta17861));
});

}

return (new cljs.core.async.t_cljs$core$async17860(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17868 = arguments.length;
switch (G__17868) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17871 = arguments.length;
switch (G__17871) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17874 = arguments.length;
switch (G__17874) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20008 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20008) : fn1.call(null,val_20008));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20008) : fn1.call(null,val_20008));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___20010 = n;
var x_20011 = (0);
while(true){
if((x_20011 < n__5636__auto___20010)){
(a[x_20011] = x_20011);

var G__20012 = (x_20011 + (1));
x_20011 = G__20012;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17881 = (function (flag,meta17882){
this.flag = flag;
this.meta17882 = meta17882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17883,meta17882__$1){
var self__ = this;
var _17883__$1 = this;
return (new cljs.core.async.t_cljs$core$async17881(self__.flag,meta17882__$1));
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17883){
var self__ = this;
var _17883__$1 = this;
return self__.meta17882;
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17882","meta17882",1624842847,null)], null);
}));

(cljs.core.async.t_cljs$core$async17881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17881");

(cljs.core.async.t_cljs$core$async17881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17881.
 */
cljs.core.async.__GT_t_cljs$core$async17881 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17881(flag__$1,meta17882){
return (new cljs.core.async.t_cljs$core$async17881(flag__$1,meta17882));
});

}

return (new cljs.core.async.t_cljs$core$async17881(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17885 = (function (flag,cb,meta17886){
this.flag = flag;
this.cb = cb;
this.meta17886 = meta17886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17887,meta17886__$1){
var self__ = this;
var _17887__$1 = this;
return (new cljs.core.async.t_cljs$core$async17885(self__.flag,self__.cb,meta17886__$1));
}));

(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17887){
var self__ = this;
var _17887__$1 = this;
return self__.meta17886;
}));

(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17886","meta17886",-264616359,null)], null);
}));

(cljs.core.async.t_cljs$core$async17885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17885");

(cljs.core.async.t_cljs$core$async17885.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17885.
 */
cljs.core.async.__GT_t_cljs$core$async17885 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17885(flag__$1,cb__$1,meta17886){
return (new cljs.core.async.t_cljs$core$async17885(flag__$1,cb__$1,meta17886));
});

}

return (new cljs.core.async.t_cljs$core$async17885(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17890_SHARP_){
var G__17893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17890_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17893) : fret.call(null,G__17893));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17891_SHARP_){
var G__17894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17891_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17894) : fret.call(null,G__17894));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20019 = (i + (1));
i = G__20019;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20023 = arguments.length;
var i__5770__auto___20024 = (0);
while(true){
if((i__5770__auto___20024 < len__5769__auto___20023)){
args__5775__auto__.push((arguments[i__5770__auto___20024]));

var G__20025 = (i__5770__auto___20024 + (1));
i__5770__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17898){
var map__17899 = p__17898;
var map__17899__$1 = cljs.core.__destructure_map(map__17899);
var opts = map__17899__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17896){
var G__17897 = cljs.core.first(seq17896);
var seq17896__$1 = cljs.core.next(seq17896);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17897,seq17896__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17902 = arguments.length;
switch (G__17902) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17763__auto___20027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_17928){
var state_val_17929 = (state_17928[(1)]);
if((state_val_17929 === (7))){
var inst_17924 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17931_20028 = state_17928__$1;
(statearr_17931_20028[(2)] = inst_17924);

(statearr_17931_20028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (1))){
var state_17928__$1 = state_17928;
var statearr_17932_20029 = state_17928__$1;
(statearr_17932_20029[(2)] = null);

(statearr_17932_20029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (4))){
var inst_17907 = (state_17928[(7)]);
var inst_17907__$1 = (state_17928[(2)]);
var inst_17908 = (inst_17907__$1 == null);
var state_17928__$1 = (function (){var statearr_17933 = state_17928;
(statearr_17933[(7)] = inst_17907__$1);

return statearr_17933;
})();
if(cljs.core.truth_(inst_17908)){
var statearr_17934_20030 = state_17928__$1;
(statearr_17934_20030[(1)] = (5));

} else {
var statearr_17935_20031 = state_17928__$1;
(statearr_17935_20031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (13))){
var state_17928__$1 = state_17928;
var statearr_17937_20032 = state_17928__$1;
(statearr_17937_20032[(2)] = null);

(statearr_17937_20032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (6))){
var inst_17907 = (state_17928[(7)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17928__$1,(11),to,inst_17907);
} else {
if((state_val_17929 === (3))){
var inst_17926 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17928__$1,inst_17926);
} else {
if((state_val_17929 === (12))){
var state_17928__$1 = state_17928;
var statearr_17938_20033 = state_17928__$1;
(statearr_17938_20033[(2)] = null);

(statearr_17938_20033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (2))){
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17928__$1,(4),from);
} else {
if((state_val_17929 === (11))){
var inst_17917 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
if(cljs.core.truth_(inst_17917)){
var statearr_17939_20034 = state_17928__$1;
(statearr_17939_20034[(1)] = (12));

} else {
var statearr_17940_20035 = state_17928__$1;
(statearr_17940_20035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (9))){
var state_17928__$1 = state_17928;
var statearr_17941_20036 = state_17928__$1;
(statearr_17941_20036[(2)] = null);

(statearr_17941_20036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (5))){
var state_17928__$1 = state_17928;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17942_20037 = state_17928__$1;
(statearr_17942_20037[(1)] = (8));

} else {
var statearr_17943_20038 = state_17928__$1;
(statearr_17943_20038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (14))){
var inst_17922 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17944_20039 = state_17928__$1;
(statearr_17944_20039[(2)] = inst_17922);

(statearr_17944_20039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (10))){
var inst_17914 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17945_20040 = state_17928__$1;
(statearr_17945_20040[(2)] = inst_17914);

(statearr_17945_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (8))){
var inst_17911 = cljs.core.async.close_BANG_(to);
var state_17928__$1 = state_17928;
var statearr_17947_20042 = state_17928__$1;
(statearr_17947_20042[(2)] = inst_17911);

(statearr_17947_20042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null,null];
(statearr_17948[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_17928){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_17928);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e17949){var ex__17223__auto__ = e17949;
var statearr_17950_20043 = state_17928;
(statearr_17950_20043[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_17928[(4)]))){
var statearr_17951_20045 = state_17928;
(statearr_17951_20045[(1)] = cljs.core.first((state_17928[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20046 = state_17928;
state_17928 = G__20046;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_17928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_17928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_17952 = f__17765__auto__();
(statearr_17952[(6)] = c__17763__auto___20027);

return statearr_17952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17954){
var vec__17955 = p__17954;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(1),null);
var job = vec__17955;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17763__auto___20047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_17962){
var state_val_17963 = (state_17962[(1)]);
if((state_val_17963 === (1))){
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17962__$1,(2),res,v);
} else {
if((state_val_17963 === (2))){
var inst_17959 = (state_17962[(2)]);
var inst_17960 = cljs.core.async.close_BANG_(res);
var state_17962__$1 = (function (){var statearr_17964 = state_17962;
(statearr_17964[(7)] = inst_17959);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17962__$1,inst_17960);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_17965 = [null,null,null,null,null,null,null,null];
(statearr_17965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__);

(statearr_17965[(1)] = (1));

return statearr_17965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1 = (function (state_17962){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_17962);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e17967){var ex__17223__auto__ = e17967;
var statearr_17968_20050 = state_17962;
(statearr_17968_20050[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_17962[(4)]))){
var statearr_17969_20051 = state_17962;
(statearr_17969_20051[(1)] = cljs.core.first((state_17962[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20052 = state_17962;
state_17962 = G__20052;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = function(state_17962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1.call(this,state_17962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_17970 = f__17765__auto__();
(statearr_17970[(6)] = c__17763__auto___20047);

return statearr_17970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17971){
var vec__17972 = p__17971;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17972,(1),null);
var job = vec__17972;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20056 = n;
var __20057 = (0);
while(true){
if((__20057 < n__5636__auto___20056)){
var G__17975_20059 = type;
var G__17975_20060__$1 = (((G__17975_20059 instanceof cljs.core.Keyword))?G__17975_20059.fqn:null);
switch (G__17975_20060__$1) {
case "compute":
var c__17763__auto___20062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20057,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = ((function (__20057,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function (state_17988){
var state_val_17989 = (state_17988[(1)]);
if((state_val_17989 === (1))){
var state_17988__$1 = state_17988;
var statearr_17991_20064 = state_17988__$1;
(statearr_17991_20064[(2)] = null);

(statearr_17991_20064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (2))){
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17988__$1,(4),jobs);
} else {
if((state_val_17989 === (3))){
var inst_17986 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17988__$1,inst_17986);
} else {
if((state_val_17989 === (4))){
var inst_17978 = (state_17988[(2)]);
var inst_17979 = process__$1(inst_17978);
var state_17988__$1 = state_17988;
if(cljs.core.truth_(inst_17979)){
var statearr_17992_20065 = state_17988__$1;
(statearr_17992_20065[(1)] = (5));

} else {
var statearr_17993_20066 = state_17988__$1;
(statearr_17993_20066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (5))){
var state_17988__$1 = state_17988;
var statearr_17994_20067 = state_17988__$1;
(statearr_17994_20067[(2)] = null);

(statearr_17994_20067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (6))){
var state_17988__$1 = state_17988;
var statearr_17995_20068 = state_17988__$1;
(statearr_17995_20068[(2)] = null);

(statearr_17995_20068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (7))){
var inst_17984 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17996_20069 = state_17988__$1;
(statearr_17996_20069[(2)] = inst_17984);

(statearr_17996_20069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20057,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
;
return ((function (__20057,switch__17219__auto__,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_17997 = [null,null,null,null,null,null,null];
(statearr_17997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__);

(statearr_17997[(1)] = (1));

return statearr_17997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1 = (function (state_17988){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_17988);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e17998){var ex__17223__auto__ = e17998;
var statearr_17999_20072 = state_17988;
(statearr_17999_20072[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_17988[(4)]))){
var statearr_18000_20073 = state_17988;
(statearr_18000_20073[(1)] = cljs.core.first((state_17988[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20074 = state_17988;
state_17988 = G__20074;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = function(state_17988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1.call(this,state_17988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__;
})()
;})(__20057,switch__17219__auto__,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
})();
var state__17766__auto__ = (function (){var statearr_18002 = f__17765__auto__();
(statearr_18002[(6)] = c__17763__auto___20062);

return statearr_18002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
});})(__20057,c__17763__auto___20062,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
);


break;
case "async":
var c__17763__auto___20075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20057,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = ((function (__20057,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function (state_18015){
var state_val_18016 = (state_18015[(1)]);
if((state_val_18016 === (1))){
var state_18015__$1 = state_18015;
var statearr_18017_20076 = state_18015__$1;
(statearr_18017_20076[(2)] = null);

(statearr_18017_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (2))){
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18015__$1,(4),jobs);
} else {
if((state_val_18016 === (3))){
var inst_18013 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18015__$1,inst_18013);
} else {
if((state_val_18016 === (4))){
var inst_18005 = (state_18015[(2)]);
var inst_18006 = async(inst_18005);
var state_18015__$1 = state_18015;
if(cljs.core.truth_(inst_18006)){
var statearr_18018_20077 = state_18015__$1;
(statearr_18018_20077[(1)] = (5));

} else {
var statearr_18019_20078 = state_18015__$1;
(statearr_18019_20078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (5))){
var state_18015__$1 = state_18015;
var statearr_18020_20079 = state_18015__$1;
(statearr_18020_20079[(2)] = null);

(statearr_18020_20079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (6))){
var state_18015__$1 = state_18015;
var statearr_18021_20080 = state_18015__$1;
(statearr_18021_20080[(2)] = null);

(statearr_18021_20080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (7))){
var inst_18011 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18022_20082 = state_18015__$1;
(statearr_18022_20082[(2)] = inst_18011);

(statearr_18022_20082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20057,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
;
return ((function (__20057,switch__17219__auto__,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_18024 = [null,null,null,null,null,null,null];
(statearr_18024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__);

(statearr_18024[(1)] = (1));

return statearr_18024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1 = (function (state_18015){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18015);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18025){var ex__17223__auto__ = e18025;
var statearr_18026_20084 = state_18015;
(statearr_18026_20084[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18015[(4)]))){
var statearr_18027_20085 = state_18015;
(statearr_18027_20085[(1)] = cljs.core.first((state_18015[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20086 = state_18015;
state_18015 = G__20086;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = function(state_18015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1.call(this,state_18015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__;
})()
;})(__20057,switch__17219__auto__,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
})();
var state__17766__auto__ = (function (){var statearr_18028 = f__17765__auto__();
(statearr_18028[(6)] = c__17763__auto___20075);

return statearr_18028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
});})(__20057,c__17763__auto___20075,G__17975_20059,G__17975_20060__$1,n__5636__auto___20056,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17975_20060__$1)].join('')));

}

var G__20087 = (__20057 + (1));
__20057 = G__20087;
continue;
} else {
}
break;
}

var c__17763__auto___20088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18052){
var state_val_18053 = (state_18052[(1)]);
if((state_val_18053 === (7))){
var inst_18048 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18054_20089 = state_18052__$1;
(statearr_18054_20089[(2)] = inst_18048);

(statearr_18054_20089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (1))){
var state_18052__$1 = state_18052;
var statearr_18055_20090 = state_18052__$1;
(statearr_18055_20090[(2)] = null);

(statearr_18055_20090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (4))){
var inst_18031 = (state_18052[(7)]);
var inst_18031__$1 = (state_18052[(2)]);
var inst_18032 = (inst_18031__$1 == null);
var state_18052__$1 = (function (){var statearr_18056 = state_18052;
(statearr_18056[(7)] = inst_18031__$1);

return statearr_18056;
})();
if(cljs.core.truth_(inst_18032)){
var statearr_18057_20091 = state_18052__$1;
(statearr_18057_20091[(1)] = (5));

} else {
var statearr_18058_20092 = state_18052__$1;
(statearr_18058_20092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (6))){
var inst_18031 = (state_18052[(7)]);
var inst_18036 = (state_18052[(8)]);
var inst_18036__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18038 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18040 = [inst_18031,inst_18036__$1];
var inst_18041 = (new cljs.core.PersistentVector(null,2,(5),inst_18038,inst_18040,null));
var state_18052__$1 = (function (){var statearr_18061 = state_18052;
(statearr_18061[(8)] = inst_18036__$1);

return statearr_18061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18052__$1,(8),jobs,inst_18041);
} else {
if((state_val_18053 === (3))){
var inst_18050 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18052__$1,inst_18050);
} else {
if((state_val_18053 === (2))){
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18052__$1,(4),from);
} else {
if((state_val_18053 === (9))){
var inst_18045 = (state_18052[(2)]);
var state_18052__$1 = (function (){var statearr_18062 = state_18052;
(statearr_18062[(9)] = inst_18045);

return statearr_18062;
})();
var statearr_18063_20094 = state_18052__$1;
(statearr_18063_20094[(2)] = null);

(statearr_18063_20094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (5))){
var inst_18034 = cljs.core.async.close_BANG_(jobs);
var state_18052__$1 = state_18052;
var statearr_18064_20096 = state_18052__$1;
(statearr_18064_20096[(2)] = inst_18034);

(statearr_18064_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (8))){
var inst_18036 = (state_18052[(8)]);
var inst_18043 = (state_18052[(2)]);
var state_18052__$1 = (function (){var statearr_18065 = state_18052;
(statearr_18065[(10)] = inst_18043);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18052__$1,(9),results,inst_18036);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_18066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__);

(statearr_18066[(1)] = (1));

return statearr_18066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1 = (function (state_18052){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18052);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18067){var ex__17223__auto__ = e18067;
var statearr_18068_20097 = state_18052;
(statearr_18068_20097[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18052[(4)]))){
var statearr_18069_20098 = state_18052;
(statearr_18069_20098[(1)] = cljs.core.first((state_18052[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20099 = state_18052;
state_18052 = G__20099;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = function(state_18052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1.call(this,state_18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18070 = f__17765__auto__();
(statearr_18070[(6)] = c__17763__auto___20088);

return statearr_18070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


var c__17763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18110){
var state_val_18111 = (state_18110[(1)]);
if((state_val_18111 === (7))){
var inst_18106 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18112_20100 = state_18110__$1;
(statearr_18112_20100[(2)] = inst_18106);

(statearr_18112_20100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (20))){
var state_18110__$1 = state_18110;
var statearr_18113_20101 = state_18110__$1;
(statearr_18113_20101[(2)] = null);

(statearr_18113_20101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (1))){
var state_18110__$1 = state_18110;
var statearr_18114_20102 = state_18110__$1;
(statearr_18114_20102[(2)] = null);

(statearr_18114_20102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (4))){
var inst_18073 = (state_18110[(7)]);
var inst_18073__$1 = (state_18110[(2)]);
var inst_18074 = (inst_18073__$1 == null);
var state_18110__$1 = (function (){var statearr_18115 = state_18110;
(statearr_18115[(7)] = inst_18073__$1);

return statearr_18115;
})();
if(cljs.core.truth_(inst_18074)){
var statearr_18116_20103 = state_18110__$1;
(statearr_18116_20103[(1)] = (5));

} else {
var statearr_18117_20104 = state_18110__$1;
(statearr_18117_20104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (15))){
var inst_18086 = (state_18110[(8)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(18),to,inst_18086);
} else {
if((state_val_18111 === (21))){
var inst_18101 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18118_20105 = state_18110__$1;
(statearr_18118_20105[(2)] = inst_18101);

(statearr_18118_20105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (13))){
var inst_18103 = (state_18110[(2)]);
var state_18110__$1 = (function (){var statearr_18119 = state_18110;
(statearr_18119[(9)] = inst_18103);

return statearr_18119;
})();
var statearr_18120_20106 = state_18110__$1;
(statearr_18120_20106[(2)] = null);

(statearr_18120_20106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (6))){
var inst_18073 = (state_18110[(7)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18110__$1,(11),inst_18073);
} else {
if((state_val_18111 === (17))){
var inst_18095 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
if(cljs.core.truth_(inst_18095)){
var statearr_18121_20108 = state_18110__$1;
(statearr_18121_20108[(1)] = (19));

} else {
var statearr_18124_20110 = state_18110__$1;
(statearr_18124_20110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (3))){
var inst_18108 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18110__$1,inst_18108);
} else {
if((state_val_18111 === (12))){
var inst_18083 = (state_18110[(10)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18110__$1,(14),inst_18083);
} else {
if((state_val_18111 === (2))){
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18110__$1,(4),results);
} else {
if((state_val_18111 === (19))){
var state_18110__$1 = state_18110;
var statearr_18126_20112 = state_18110__$1;
(statearr_18126_20112[(2)] = null);

(statearr_18126_20112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (11))){
var inst_18083 = (state_18110[(2)]);
var state_18110__$1 = (function (){var statearr_18130 = state_18110;
(statearr_18130[(10)] = inst_18083);

return statearr_18130;
})();
var statearr_18131_20113 = state_18110__$1;
(statearr_18131_20113[(2)] = null);

(statearr_18131_20113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (9))){
var state_18110__$1 = state_18110;
var statearr_18135_20115 = state_18110__$1;
(statearr_18135_20115[(2)] = null);

(statearr_18135_20115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (5))){
var state_18110__$1 = state_18110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18136_20117 = state_18110__$1;
(statearr_18136_20117[(1)] = (8));

} else {
var statearr_18137_20118 = state_18110__$1;
(statearr_18137_20118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (14))){
var inst_18088 = (state_18110[(11)]);
var inst_18086 = (state_18110[(8)]);
var inst_18086__$1 = (state_18110[(2)]);
var inst_18087 = (inst_18086__$1 == null);
var inst_18088__$1 = cljs.core.not(inst_18087);
var state_18110__$1 = (function (){var statearr_18138 = state_18110;
(statearr_18138[(11)] = inst_18088__$1);

(statearr_18138[(8)] = inst_18086__$1);

return statearr_18138;
})();
if(inst_18088__$1){
var statearr_18139_20119 = state_18110__$1;
(statearr_18139_20119[(1)] = (15));

} else {
var statearr_18140_20120 = state_18110__$1;
(statearr_18140_20120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (16))){
var inst_18088 = (state_18110[(11)]);
var state_18110__$1 = state_18110;
var statearr_18142_20121 = state_18110__$1;
(statearr_18142_20121[(2)] = inst_18088);

(statearr_18142_20121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (10))){
var inst_18080 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18146_20122 = state_18110__$1;
(statearr_18146_20122[(2)] = inst_18080);

(statearr_18146_20122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (18))){
var inst_18092 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18148_20123 = state_18110__$1;
(statearr_18148_20123[(2)] = inst_18092);

(statearr_18148_20123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (8))){
var inst_18077 = cljs.core.async.close_BANG_(to);
var state_18110__$1 = state_18110;
var statearr_18151_20124 = state_18110__$1;
(statearr_18151_20124[(2)] = inst_18077);

(statearr_18151_20124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_18154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__);

(statearr_18154[(1)] = (1));

return statearr_18154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1 = (function (state_18110){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18110);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18157){var ex__17223__auto__ = e18157;
var statearr_18159_20126 = state_18110;
(statearr_18159_20126[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18110[(4)]))){
var statearr_18160_20127 = state_18110;
(statearr_18160_20127[(1)] = cljs.core.first((state_18110[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20128 = state_18110;
state_18110 = G__20128;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__ = function(state_18110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1.call(this,state_18110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18163 = f__17765__auto__();
(statearr_18163[(6)] = c__17763__auto__);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

return c__17763__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18170 = arguments.length;
switch (G__18170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18203 = arguments.length;
switch (G__18203) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17763__auto___20136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18241){
var state_val_18243 = (state_18241[(1)]);
if((state_val_18243 === (7))){
var inst_18237 = (state_18241[(2)]);
var state_18241__$1 = state_18241;
var statearr_18248_20137 = state_18241__$1;
(statearr_18248_20137[(2)] = inst_18237);

(statearr_18248_20137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (1))){
var state_18241__$1 = state_18241;
var statearr_18252_20138 = state_18241__$1;
(statearr_18252_20138[(2)] = null);

(statearr_18252_20138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (4))){
var inst_18214 = (state_18241[(7)]);
var inst_18214__$1 = (state_18241[(2)]);
var inst_18216 = (inst_18214__$1 == null);
var state_18241__$1 = (function (){var statearr_18257 = state_18241;
(statearr_18257[(7)] = inst_18214__$1);

return statearr_18257;
})();
if(cljs.core.truth_(inst_18216)){
var statearr_18258_20139 = state_18241__$1;
(statearr_18258_20139[(1)] = (5));

} else {
var statearr_18260_20140 = state_18241__$1;
(statearr_18260_20140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (13))){
var state_18241__$1 = state_18241;
var statearr_18264_20141 = state_18241__$1;
(statearr_18264_20141[(2)] = null);

(statearr_18264_20141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (6))){
var inst_18214 = (state_18241[(7)]);
var inst_18222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18214) : p.call(null,inst_18214));
var state_18241__$1 = state_18241;
if(cljs.core.truth_(inst_18222)){
var statearr_18266_20142 = state_18241__$1;
(statearr_18266_20142[(1)] = (9));

} else {
var statearr_18271_20143 = state_18241__$1;
(statearr_18271_20143[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (3))){
var inst_18239 = (state_18241[(2)]);
var state_18241__$1 = state_18241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18241__$1,inst_18239);
} else {
if((state_val_18243 === (12))){
var state_18241__$1 = state_18241;
var statearr_18275_20144 = state_18241__$1;
(statearr_18275_20144[(2)] = null);

(statearr_18275_20144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (2))){
var state_18241__$1 = state_18241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18241__$1,(4),ch);
} else {
if((state_val_18243 === (11))){
var inst_18214 = (state_18241[(7)]);
var inst_18227 = (state_18241[(2)]);
var state_18241__$1 = state_18241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18241__$1,(8),inst_18227,inst_18214);
} else {
if((state_val_18243 === (9))){
var state_18241__$1 = state_18241;
var statearr_18282_20145 = state_18241__$1;
(statearr_18282_20145[(2)] = tc);

(statearr_18282_20145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (5))){
var inst_18218 = cljs.core.async.close_BANG_(tc);
var inst_18219 = cljs.core.async.close_BANG_(fc);
var state_18241__$1 = (function (){var statearr_18287 = state_18241;
(statearr_18287[(8)] = inst_18218);

return statearr_18287;
})();
var statearr_18288_20146 = state_18241__$1;
(statearr_18288_20146[(2)] = inst_18219);

(statearr_18288_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (14))){
var inst_18235 = (state_18241[(2)]);
var state_18241__$1 = state_18241;
var statearr_18293_20147 = state_18241__$1;
(statearr_18293_20147[(2)] = inst_18235);

(statearr_18293_20147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (10))){
var state_18241__$1 = state_18241;
var statearr_18295_20148 = state_18241__$1;
(statearr_18295_20148[(2)] = fc);

(statearr_18295_20148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18243 === (8))){
var inst_18230 = (state_18241[(2)]);
var state_18241__$1 = state_18241;
if(cljs.core.truth_(inst_18230)){
var statearr_18299_20154 = state_18241__$1;
(statearr_18299_20154[(1)] = (12));

} else {
var statearr_18301_20155 = state_18241__$1;
(statearr_18301_20155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_18306 = [null,null,null,null,null,null,null,null,null];
(statearr_18306[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_18306[(1)] = (1));

return statearr_18306;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_18241){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18241);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18308){var ex__17223__auto__ = e18308;
var statearr_18311_20157 = state_18241;
(statearr_18311_20157[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18241[(4)]))){
var statearr_18313_20162 = state_18241;
(statearr_18313_20162[(1)] = cljs.core.first((state_18241[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20163 = state_18241;
state_18241 = G__20163;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_18241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_18241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18319 = f__17765__auto__();
(statearr_18319[(6)] = c__17763__auto___20136);

return statearr_18319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18356){
var state_val_18357 = (state_18356[(1)]);
if((state_val_18357 === (7))){
var inst_18351 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18367_20164 = state_18356__$1;
(statearr_18367_20164[(2)] = inst_18351);

(statearr_18367_20164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (1))){
var inst_18328 = init;
var inst_18331 = inst_18328;
var state_18356__$1 = (function (){var statearr_18370 = state_18356;
(statearr_18370[(7)] = inst_18331);

return statearr_18370;
})();
var statearr_18371_20165 = state_18356__$1;
(statearr_18371_20165[(2)] = null);

(statearr_18371_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (4))){
var inst_18335 = (state_18356[(8)]);
var inst_18335__$1 = (state_18356[(2)]);
var inst_18336 = (inst_18335__$1 == null);
var state_18356__$1 = (function (){var statearr_18376 = state_18356;
(statearr_18376[(8)] = inst_18335__$1);

return statearr_18376;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18379_20170 = state_18356__$1;
(statearr_18379_20170[(1)] = (5));

} else {
var statearr_18381_20171 = state_18356__$1;
(statearr_18381_20171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (6))){
var inst_18335 = (state_18356[(8)]);
var inst_18331 = (state_18356[(7)]);
var inst_18340 = (state_18356[(9)]);
var inst_18340__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18331,inst_18335) : f.call(null,inst_18331,inst_18335));
var inst_18341 = cljs.core.reduced_QMARK_(inst_18340__$1);
var state_18356__$1 = (function (){var statearr_18386 = state_18356;
(statearr_18386[(9)] = inst_18340__$1);

return statearr_18386;
})();
if(inst_18341){
var statearr_18387_20175 = state_18356__$1;
(statearr_18387_20175[(1)] = (8));

} else {
var statearr_18389_20176 = state_18356__$1;
(statearr_18389_20176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (3))){
var inst_18354 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18356__$1,inst_18354);
} else {
if((state_val_18357 === (2))){
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18356__$1,(4),ch);
} else {
if((state_val_18357 === (9))){
var inst_18340 = (state_18356[(9)]);
var inst_18331 = inst_18340;
var state_18356__$1 = (function (){var statearr_18394 = state_18356;
(statearr_18394[(7)] = inst_18331);

return statearr_18394;
})();
var statearr_18395_20180 = state_18356__$1;
(statearr_18395_20180[(2)] = null);

(statearr_18395_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (5))){
var inst_18331 = (state_18356[(7)]);
var state_18356__$1 = state_18356;
var statearr_18399_20181 = state_18356__$1;
(statearr_18399_20181[(2)] = inst_18331);

(statearr_18399_20181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (10))){
var inst_18349 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18401_20182 = state_18356__$1;
(statearr_18401_20182[(2)] = inst_18349);

(statearr_18401_20182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (8))){
var inst_18340 = (state_18356[(9)]);
var inst_18343 = cljs.core.deref(inst_18340);
var state_18356__$1 = state_18356;
var statearr_18405_20186 = state_18356__$1;
(statearr_18405_20186[(2)] = inst_18343);

(statearr_18405_20186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17220__auto____0 = (function (){
var statearr_18407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18407[(0)] = cljs$core$async$reduce_$_state_machine__17220__auto__);

(statearr_18407[(1)] = (1));

return statearr_18407;
});
var cljs$core$async$reduce_$_state_machine__17220__auto____1 = (function (state_18356){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18356);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18411){var ex__17223__auto__ = e18411;
var statearr_18412_20187 = state_18356;
(statearr_18412_20187[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18356[(4)]))){
var statearr_18413_20191 = state_18356;
(statearr_18413_20191[(1)] = cljs.core.first((state_18356[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20192 = state_18356;
state_18356 = G__20192;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17220__auto__ = function(state_18356){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17220__auto____1.call(this,state_18356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17220__auto____0;
cljs$core$async$reduce_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17220__auto____1;
return cljs$core$async$reduce_$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18418 = f__17765__auto__();
(statearr_18418[(6)] = c__17763__auto__);

return statearr_18418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

return c__17763__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18429){
var state_val_18430 = (state_18429[(1)]);
if((state_val_18430 === (1))){
var inst_18424 = cljs.core.async.reduce(f__$1,init,ch);
var state_18429__$1 = state_18429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18429__$1,(2),inst_18424);
} else {
if((state_val_18430 === (2))){
var inst_18426 = (state_18429[(2)]);
var inst_18427 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18426) : f__$1.call(null,inst_18426));
var state_18429__$1 = state_18429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18429__$1,inst_18427);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17220__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17220__auto____0 = (function (){
var statearr_18431 = [null,null,null,null,null,null,null];
(statearr_18431[(0)] = cljs$core$async$transduce_$_state_machine__17220__auto__);

(statearr_18431[(1)] = (1));

return statearr_18431;
});
var cljs$core$async$transduce_$_state_machine__17220__auto____1 = (function (state_18429){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18429);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18432){var ex__17223__auto__ = e18432;
var statearr_18433_20200 = state_18429;
(statearr_18433_20200[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18429[(4)]))){
var statearr_18434_20201 = state_18429;
(statearr_18434_20201[(1)] = cljs.core.first((state_18429[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20202 = state_18429;
state_18429 = G__20202;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17220__auto__ = function(state_18429){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17220__auto____1.call(this,state_18429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17220__auto____0;
cljs$core$async$transduce_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17220__auto____1;
return cljs$core$async$transduce_$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18435 = f__17765__auto__();
(statearr_18435[(6)] = c__17763__auto__);

return statearr_18435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

return c__17763__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18437 = arguments.length;
switch (G__18437) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18462){
var state_val_18463 = (state_18462[(1)]);
if((state_val_18463 === (7))){
var inst_18444 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18464_20210 = state_18462__$1;
(statearr_18464_20210[(2)] = inst_18444);

(statearr_18464_20210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (1))){
var inst_18438 = cljs.core.seq(coll);
var inst_18439 = inst_18438;
var state_18462__$1 = (function (){var statearr_18465 = state_18462;
(statearr_18465[(7)] = inst_18439);

return statearr_18465;
})();
var statearr_18466_20211 = state_18462__$1;
(statearr_18466_20211[(2)] = null);

(statearr_18466_20211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (4))){
var inst_18439 = (state_18462[(7)]);
var inst_18442 = cljs.core.first(inst_18439);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18462__$1,(7),ch,inst_18442);
} else {
if((state_val_18463 === (13))){
var inst_18456 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18467_20215 = state_18462__$1;
(statearr_18467_20215[(2)] = inst_18456);

(statearr_18467_20215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (6))){
var inst_18447 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
if(cljs.core.truth_(inst_18447)){
var statearr_18468_20216 = state_18462__$1;
(statearr_18468_20216[(1)] = (8));

} else {
var statearr_18469_20217 = state_18462__$1;
(statearr_18469_20217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (3))){
var inst_18460 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18462__$1,inst_18460);
} else {
if((state_val_18463 === (12))){
var state_18462__$1 = state_18462;
var statearr_18472_20218 = state_18462__$1;
(statearr_18472_20218[(2)] = null);

(statearr_18472_20218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (2))){
var inst_18439 = (state_18462[(7)]);
var state_18462__$1 = state_18462;
if(cljs.core.truth_(inst_18439)){
var statearr_18473_20222 = state_18462__$1;
(statearr_18473_20222[(1)] = (4));

} else {
var statearr_18474_20223 = state_18462__$1;
(statearr_18474_20223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (11))){
var inst_18453 = cljs.core.async.close_BANG_(ch);
var state_18462__$1 = state_18462;
var statearr_18475_20224 = state_18462__$1;
(statearr_18475_20224[(2)] = inst_18453);

(statearr_18475_20224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (9))){
var state_18462__$1 = state_18462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18476_20226 = state_18462__$1;
(statearr_18476_20226[(1)] = (11));

} else {
var statearr_18481_20227 = state_18462__$1;
(statearr_18481_20227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (5))){
var inst_18439 = (state_18462[(7)]);
var state_18462__$1 = state_18462;
var statearr_18482_20228 = state_18462__$1;
(statearr_18482_20228[(2)] = inst_18439);

(statearr_18482_20228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (10))){
var inst_18458 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18487_20229 = state_18462__$1;
(statearr_18487_20229[(2)] = inst_18458);

(statearr_18487_20229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (8))){
var inst_18439 = (state_18462[(7)]);
var inst_18449 = cljs.core.next(inst_18439);
var inst_18439__$1 = inst_18449;
var state_18462__$1 = (function (){var statearr_18489 = state_18462;
(statearr_18489[(7)] = inst_18439__$1);

return statearr_18489;
})();
var statearr_18490_20231 = state_18462__$1;
(statearr_18490_20231[(2)] = null);

(statearr_18490_20231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_18491 = [null,null,null,null,null,null,null,null];
(statearr_18491[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_18491[(1)] = (1));

return statearr_18491;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_18462){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18462);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18492){var ex__17223__auto__ = e18492;
var statearr_18493_20237 = state_18462;
(statearr_18493_20237[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18462[(4)]))){
var statearr_18498_20238 = state_18462;
(statearr_18498_20238[(1)] = cljs.core.first((state_18462[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20239 = state_18462;
state_18462 = G__20239;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_18462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_18462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18503 = f__17765__auto__();
(statearr_18503[(6)] = c__17763__auto__);

return statearr_18503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

return c__17763__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18510 = arguments.length;
switch (G__18510) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20243 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20243(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20245 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20245(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20247 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20247(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20248 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20248(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18540 = (function (ch,cs,meta18541){
this.ch = ch;
this.cs = cs;
this.meta18541 = meta18541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18542,meta18541__$1){
var self__ = this;
var _18542__$1 = this;
return (new cljs.core.async.t_cljs$core$async18540(self__.ch,self__.cs,meta18541__$1));
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18542){
var self__ = this;
var _18542__$1 = this;
return self__.meta18541;
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18541","meta18541",1590526184,null)], null);
}));

(cljs.core.async.t_cljs$core$async18540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18540");

(cljs.core.async.t_cljs$core$async18540.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18540.
 */
cljs.core.async.__GT_t_cljs$core$async18540 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18540(ch__$1,cs__$1,meta18541){
return (new cljs.core.async.t_cljs$core$async18540(ch__$1,cs__$1,meta18541));
});

}

return (new cljs.core.async.t_cljs$core$async18540(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17763__auto___20269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18704){
var state_val_18705 = (state_18704[(1)]);
if((state_val_18705 === (7))){
var inst_18699 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18706_20271 = state_18704__$1;
(statearr_18706_20271[(2)] = inst_18699);

(statearr_18706_20271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (20))){
var inst_18596 = (state_18704[(7)]);
var inst_18609 = cljs.core.first(inst_18596);
var inst_18610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18609,(0),null);
var inst_18611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18609,(1),null);
var state_18704__$1 = (function (){var statearr_18711 = state_18704;
(statearr_18711[(8)] = inst_18610);

return statearr_18711;
})();
if(cljs.core.truth_(inst_18611)){
var statearr_18712_20276 = state_18704__$1;
(statearr_18712_20276[(1)] = (22));

} else {
var statearr_18713_20277 = state_18704__$1;
(statearr_18713_20277[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (27))){
var inst_18641 = (state_18704[(9)]);
var inst_18564 = (state_18704[(10)]);
var inst_18646 = (state_18704[(11)]);
var inst_18639 = (state_18704[(12)]);
var inst_18646__$1 = cljs.core._nth(inst_18639,inst_18641);
var inst_18647 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18646__$1,inst_18564,done);
var state_18704__$1 = (function (){var statearr_18717 = state_18704;
(statearr_18717[(11)] = inst_18646__$1);

return statearr_18717;
})();
if(cljs.core.truth_(inst_18647)){
var statearr_18718_20280 = state_18704__$1;
(statearr_18718_20280[(1)] = (30));

} else {
var statearr_18719_20282 = state_18704__$1;
(statearr_18719_20282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (1))){
var state_18704__$1 = state_18704;
var statearr_18721_20283 = state_18704__$1;
(statearr_18721_20283[(2)] = null);

(statearr_18721_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (24))){
var inst_18596 = (state_18704[(7)]);
var inst_18616 = (state_18704[(2)]);
var inst_18617 = cljs.core.next(inst_18596);
var inst_18574 = inst_18617;
var inst_18575 = null;
var inst_18576 = (0);
var inst_18577 = (0);
var state_18704__$1 = (function (){var statearr_18722 = state_18704;
(statearr_18722[(13)] = inst_18577);

(statearr_18722[(14)] = inst_18616);

(statearr_18722[(15)] = inst_18575);

(statearr_18722[(16)] = inst_18574);

(statearr_18722[(17)] = inst_18576);

return statearr_18722;
})();
var statearr_18723_20289 = state_18704__$1;
(statearr_18723_20289[(2)] = null);

(statearr_18723_20289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (39))){
var state_18704__$1 = state_18704;
var statearr_18730_20290 = state_18704__$1;
(statearr_18730_20290[(2)] = null);

(statearr_18730_20290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (4))){
var inst_18564 = (state_18704[(10)]);
var inst_18564__$1 = (state_18704[(2)]);
var inst_18565 = (inst_18564__$1 == null);
var state_18704__$1 = (function (){var statearr_18732 = state_18704;
(statearr_18732[(10)] = inst_18564__$1);

return statearr_18732;
})();
if(cljs.core.truth_(inst_18565)){
var statearr_18733_20291 = state_18704__$1;
(statearr_18733_20291[(1)] = (5));

} else {
var statearr_18734_20292 = state_18704__$1;
(statearr_18734_20292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (15))){
var inst_18577 = (state_18704[(13)]);
var inst_18575 = (state_18704[(15)]);
var inst_18574 = (state_18704[(16)]);
var inst_18576 = (state_18704[(17)]);
var inst_18592 = (state_18704[(2)]);
var inst_18593 = (inst_18577 + (1));
var tmp18724 = inst_18575;
var tmp18725 = inst_18574;
var tmp18726 = inst_18576;
var inst_18574__$1 = tmp18725;
var inst_18575__$1 = tmp18724;
var inst_18576__$1 = tmp18726;
var inst_18577__$1 = inst_18593;
var state_18704__$1 = (function (){var statearr_18735 = state_18704;
(statearr_18735[(18)] = inst_18592);

(statearr_18735[(13)] = inst_18577__$1);

(statearr_18735[(15)] = inst_18575__$1);

(statearr_18735[(16)] = inst_18574__$1);

(statearr_18735[(17)] = inst_18576__$1);

return statearr_18735;
})();
var statearr_18736_20297 = state_18704__$1;
(statearr_18736_20297[(2)] = null);

(statearr_18736_20297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (21))){
var inst_18620 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18740_20298 = state_18704__$1;
(statearr_18740_20298[(2)] = inst_18620);

(statearr_18740_20298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (31))){
var inst_18646 = (state_18704[(11)]);
var inst_18650 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18646);
var state_18704__$1 = state_18704;
var statearr_18741_20299 = state_18704__$1;
(statearr_18741_20299[(2)] = inst_18650);

(statearr_18741_20299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (32))){
var inst_18641 = (state_18704[(9)]);
var inst_18639 = (state_18704[(12)]);
var inst_18640 = (state_18704[(19)]);
var inst_18638 = (state_18704[(20)]);
var inst_18652 = (state_18704[(2)]);
var inst_18653 = (inst_18641 + (1));
var tmp18737 = inst_18639;
var tmp18738 = inst_18640;
var tmp18739 = inst_18638;
var inst_18638__$1 = tmp18739;
var inst_18639__$1 = tmp18737;
var inst_18640__$1 = tmp18738;
var inst_18641__$1 = inst_18653;
var state_18704__$1 = (function (){var statearr_18742 = state_18704;
(statearr_18742[(9)] = inst_18641__$1);

(statearr_18742[(12)] = inst_18639__$1);

(statearr_18742[(21)] = inst_18652);

(statearr_18742[(19)] = inst_18640__$1);

(statearr_18742[(20)] = inst_18638__$1);

return statearr_18742;
})();
var statearr_18743_20300 = state_18704__$1;
(statearr_18743_20300[(2)] = null);

(statearr_18743_20300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (40))){
var inst_18665 = (state_18704[(22)]);
var inst_18673 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18665);
var state_18704__$1 = state_18704;
var statearr_18744_20306 = state_18704__$1;
(statearr_18744_20306[(2)] = inst_18673);

(statearr_18744_20306[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (33))){
var inst_18656 = (state_18704[(23)]);
var inst_18658 = cljs.core.chunked_seq_QMARK_(inst_18656);
var state_18704__$1 = state_18704;
if(inst_18658){
var statearr_18749_20314 = state_18704__$1;
(statearr_18749_20314[(1)] = (36));

} else {
var statearr_18750_20315 = state_18704__$1;
(statearr_18750_20315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (13))){
var inst_18586 = (state_18704[(24)]);
var inst_18589 = cljs.core.async.close_BANG_(inst_18586);
var state_18704__$1 = state_18704;
var statearr_18751_20325 = state_18704__$1;
(statearr_18751_20325[(2)] = inst_18589);

(statearr_18751_20325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (22))){
var inst_18610 = (state_18704[(8)]);
var inst_18613 = cljs.core.async.close_BANG_(inst_18610);
var state_18704__$1 = state_18704;
var statearr_18753_20326 = state_18704__$1;
(statearr_18753_20326[(2)] = inst_18613);

(statearr_18753_20326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (36))){
var inst_18656 = (state_18704[(23)]);
var inst_18660 = cljs.core.chunk_first(inst_18656);
var inst_18661 = cljs.core.chunk_rest(inst_18656);
var inst_18662 = cljs.core.count(inst_18660);
var inst_18638 = inst_18661;
var inst_18639 = inst_18660;
var inst_18640 = inst_18662;
var inst_18641 = (0);
var state_18704__$1 = (function (){var statearr_18754 = state_18704;
(statearr_18754[(9)] = inst_18641);

(statearr_18754[(12)] = inst_18639);

(statearr_18754[(19)] = inst_18640);

(statearr_18754[(20)] = inst_18638);

return statearr_18754;
})();
var statearr_18755_20329 = state_18704__$1;
(statearr_18755_20329[(2)] = null);

(statearr_18755_20329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (41))){
var inst_18656 = (state_18704[(23)]);
var inst_18675 = (state_18704[(2)]);
var inst_18676 = cljs.core.next(inst_18656);
var inst_18638 = inst_18676;
var inst_18639 = null;
var inst_18640 = (0);
var inst_18641 = (0);
var state_18704__$1 = (function (){var statearr_18756 = state_18704;
(statearr_18756[(9)] = inst_18641);

(statearr_18756[(12)] = inst_18639);

(statearr_18756[(19)] = inst_18640);

(statearr_18756[(20)] = inst_18638);

(statearr_18756[(25)] = inst_18675);

return statearr_18756;
})();
var statearr_18757_20339 = state_18704__$1;
(statearr_18757_20339[(2)] = null);

(statearr_18757_20339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (43))){
var state_18704__$1 = state_18704;
var statearr_18758_20340 = state_18704__$1;
(statearr_18758_20340[(2)] = null);

(statearr_18758_20340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (29))){
var inst_18684 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18759_20346 = state_18704__$1;
(statearr_18759_20346[(2)] = inst_18684);

(statearr_18759_20346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (44))){
var inst_18693 = (state_18704[(2)]);
var state_18704__$1 = (function (){var statearr_18760 = state_18704;
(statearr_18760[(26)] = inst_18693);

return statearr_18760;
})();
var statearr_18761_20356 = state_18704__$1;
(statearr_18761_20356[(2)] = null);

(statearr_18761_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (6))){
var inst_18630 = (state_18704[(27)]);
var inst_18629 = cljs.core.deref(cs);
var inst_18630__$1 = cljs.core.keys(inst_18629);
var inst_18631 = cljs.core.count(inst_18630__$1);
var inst_18632 = cljs.core.reset_BANG_(dctr,inst_18631);
var inst_18637 = cljs.core.seq(inst_18630__$1);
var inst_18638 = inst_18637;
var inst_18639 = null;
var inst_18640 = (0);
var inst_18641 = (0);
var state_18704__$1 = (function (){var statearr_18762 = state_18704;
(statearr_18762[(9)] = inst_18641);

(statearr_18762[(12)] = inst_18639);

(statearr_18762[(19)] = inst_18640);

(statearr_18762[(20)] = inst_18638);

(statearr_18762[(28)] = inst_18632);

(statearr_18762[(27)] = inst_18630__$1);

return statearr_18762;
})();
var statearr_18765_20368 = state_18704__$1;
(statearr_18765_20368[(2)] = null);

(statearr_18765_20368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (28))){
var inst_18638 = (state_18704[(20)]);
var inst_18656 = (state_18704[(23)]);
var inst_18656__$1 = cljs.core.seq(inst_18638);
var state_18704__$1 = (function (){var statearr_18766 = state_18704;
(statearr_18766[(23)] = inst_18656__$1);

return statearr_18766;
})();
if(inst_18656__$1){
var statearr_18767_20376 = state_18704__$1;
(statearr_18767_20376[(1)] = (33));

} else {
var statearr_18768_20387 = state_18704__$1;
(statearr_18768_20387[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (25))){
var inst_18641 = (state_18704[(9)]);
var inst_18640 = (state_18704[(19)]);
var inst_18643 = (inst_18641 < inst_18640);
var inst_18644 = inst_18643;
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18644)){
var statearr_18769_20397 = state_18704__$1;
(statearr_18769_20397[(1)] = (27));

} else {
var statearr_18770_20398 = state_18704__$1;
(statearr_18770_20398[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (34))){
var state_18704__$1 = state_18704;
var statearr_18771_20399 = state_18704__$1;
(statearr_18771_20399[(2)] = null);

(statearr_18771_20399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (17))){
var state_18704__$1 = state_18704;
var statearr_18772_20400 = state_18704__$1;
(statearr_18772_20400[(2)] = null);

(statearr_18772_20400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (3))){
var inst_18701 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18704__$1,inst_18701);
} else {
if((state_val_18705 === (12))){
var inst_18625 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18773_20401 = state_18704__$1;
(statearr_18773_20401[(2)] = inst_18625);

(statearr_18773_20401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (2))){
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18704__$1,(4),ch);
} else {
if((state_val_18705 === (23))){
var state_18704__$1 = state_18704;
var statearr_18774_20409 = state_18704__$1;
(statearr_18774_20409[(2)] = null);

(statearr_18774_20409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (35))){
var inst_18682 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18775_20410 = state_18704__$1;
(statearr_18775_20410[(2)] = inst_18682);

(statearr_18775_20410[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (19))){
var inst_18596 = (state_18704[(7)]);
var inst_18600 = cljs.core.chunk_first(inst_18596);
var inst_18601 = cljs.core.chunk_rest(inst_18596);
var inst_18602 = cljs.core.count(inst_18600);
var inst_18574 = inst_18601;
var inst_18575 = inst_18600;
var inst_18576 = inst_18602;
var inst_18577 = (0);
var state_18704__$1 = (function (){var statearr_18776 = state_18704;
(statearr_18776[(13)] = inst_18577);

(statearr_18776[(15)] = inst_18575);

(statearr_18776[(16)] = inst_18574);

(statearr_18776[(17)] = inst_18576);

return statearr_18776;
})();
var statearr_18777_20415 = state_18704__$1;
(statearr_18777_20415[(2)] = null);

(statearr_18777_20415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (11))){
var inst_18596 = (state_18704[(7)]);
var inst_18574 = (state_18704[(16)]);
var inst_18596__$1 = cljs.core.seq(inst_18574);
var state_18704__$1 = (function (){var statearr_18778 = state_18704;
(statearr_18778[(7)] = inst_18596__$1);

return statearr_18778;
})();
if(inst_18596__$1){
var statearr_18779_20419 = state_18704__$1;
(statearr_18779_20419[(1)] = (16));

} else {
var statearr_18780_20424 = state_18704__$1;
(statearr_18780_20424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (9))){
var inst_18627 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18781_20428 = state_18704__$1;
(statearr_18781_20428[(2)] = inst_18627);

(statearr_18781_20428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (5))){
var inst_18572 = cljs.core.deref(cs);
var inst_18573 = cljs.core.seq(inst_18572);
var inst_18574 = inst_18573;
var inst_18575 = null;
var inst_18576 = (0);
var inst_18577 = (0);
var state_18704__$1 = (function (){var statearr_18782 = state_18704;
(statearr_18782[(13)] = inst_18577);

(statearr_18782[(15)] = inst_18575);

(statearr_18782[(16)] = inst_18574);

(statearr_18782[(17)] = inst_18576);

return statearr_18782;
})();
var statearr_18783_20429 = state_18704__$1;
(statearr_18783_20429[(2)] = null);

(statearr_18783_20429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (14))){
var state_18704__$1 = state_18704;
var statearr_18784_20430 = state_18704__$1;
(statearr_18784_20430[(2)] = null);

(statearr_18784_20430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (45))){
var inst_18690 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18785_20435 = state_18704__$1;
(statearr_18785_20435[(2)] = inst_18690);

(statearr_18785_20435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (26))){
var inst_18630 = (state_18704[(27)]);
var inst_18686 = (state_18704[(2)]);
var inst_18687 = cljs.core.seq(inst_18630);
var state_18704__$1 = (function (){var statearr_18786 = state_18704;
(statearr_18786[(29)] = inst_18686);

return statearr_18786;
})();
if(inst_18687){
var statearr_18787_20440 = state_18704__$1;
(statearr_18787_20440[(1)] = (42));

} else {
var statearr_18788_20441 = state_18704__$1;
(statearr_18788_20441[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (16))){
var inst_18596 = (state_18704[(7)]);
var inst_18598 = cljs.core.chunked_seq_QMARK_(inst_18596);
var state_18704__$1 = state_18704;
if(inst_18598){
var statearr_18789_20442 = state_18704__$1;
(statearr_18789_20442[(1)] = (19));

} else {
var statearr_18790_20443 = state_18704__$1;
(statearr_18790_20443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (38))){
var inst_18679 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18791_20448 = state_18704__$1;
(statearr_18791_20448[(2)] = inst_18679);

(statearr_18791_20448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (30))){
var state_18704__$1 = state_18704;
var statearr_18792_20449 = state_18704__$1;
(statearr_18792_20449[(2)] = null);

(statearr_18792_20449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (10))){
var inst_18577 = (state_18704[(13)]);
var inst_18575 = (state_18704[(15)]);
var inst_18585 = cljs.core._nth(inst_18575,inst_18577);
var inst_18586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18585,(0),null);
var inst_18587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18585,(1),null);
var state_18704__$1 = (function (){var statearr_18793 = state_18704;
(statearr_18793[(24)] = inst_18586);

return statearr_18793;
})();
if(cljs.core.truth_(inst_18587)){
var statearr_18794_20458 = state_18704__$1;
(statearr_18794_20458[(1)] = (13));

} else {
var statearr_18796_20459 = state_18704__$1;
(statearr_18796_20459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (18))){
var inst_18623 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18798_20461 = state_18704__$1;
(statearr_18798_20461[(2)] = inst_18623);

(statearr_18798_20461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (42))){
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18704__$1,(45),dchan);
} else {
if((state_val_18705 === (37))){
var inst_18564 = (state_18704[(10)]);
var inst_18656 = (state_18704[(23)]);
var inst_18665 = (state_18704[(22)]);
var inst_18665__$1 = cljs.core.first(inst_18656);
var inst_18670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18665__$1,inst_18564,done);
var state_18704__$1 = (function (){var statearr_18799 = state_18704;
(statearr_18799[(22)] = inst_18665__$1);

return statearr_18799;
})();
if(cljs.core.truth_(inst_18670)){
var statearr_18800_20466 = state_18704__$1;
(statearr_18800_20466[(1)] = (39));

} else {
var statearr_18801_20467 = state_18704__$1;
(statearr_18801_20467[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (8))){
var inst_18577 = (state_18704[(13)]);
var inst_18576 = (state_18704[(17)]);
var inst_18579 = (inst_18577 < inst_18576);
var inst_18580 = inst_18579;
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18580)){
var statearr_18804_20468 = state_18704__$1;
(statearr_18804_20468[(1)] = (10));

} else {
var statearr_18805_20469 = state_18704__$1;
(statearr_18805_20469[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17220__auto__ = null;
var cljs$core$async$mult_$_state_machine__17220__auto____0 = (function (){
var statearr_18806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18806[(0)] = cljs$core$async$mult_$_state_machine__17220__auto__);

(statearr_18806[(1)] = (1));

return statearr_18806;
});
var cljs$core$async$mult_$_state_machine__17220__auto____1 = (function (state_18704){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18704);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e18808){var ex__17223__auto__ = e18808;
var statearr_18810_20472 = state_18704;
(statearr_18810_20472[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18704[(4)]))){
var statearr_18811_20474 = state_18704;
(statearr_18811_20474[(1)] = cljs.core.first((state_18704[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20475 = state_18704;
state_18704 = G__20475;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17220__auto__ = function(state_18704){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17220__auto____1.call(this,state_18704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17220__auto____0;
cljs$core$async$mult_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17220__auto____1;
return cljs$core$async$mult_$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_18812 = f__17765__auto__();
(statearr_18812[(6)] = c__17763__auto___20269);

return statearr_18812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18814 = arguments.length;
switch (G__18814) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20486 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20486(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20489 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20489(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20495 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20495(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20497 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20497(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20498 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20498(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20502 = arguments.length;
var i__5770__auto___20504 = (0);
while(true){
if((i__5770__auto___20504 < len__5769__auto___20502)){
args__5775__auto__.push((arguments[i__5770__auto___20504]));

var G__20505 = (i__5770__auto___20504 + (1));
i__5770__auto___20504 = G__20505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18873){
var map__18874 = p__18873;
var map__18874__$1 = cljs.core.__destructure_map(map__18874);
var opts = map__18874__$1;
var statearr_18875_20513 = state;
(statearr_18875_20513[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18878_20515 = state;
(statearr_18878_20515[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18880_20516 = state;
(statearr_18880_20516[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18865){
var G__18866 = cljs.core.first(seq18865);
var seq18865__$1 = cljs.core.next(seq18865);
var G__18867 = cljs.core.first(seq18865__$1);
var seq18865__$2 = cljs.core.next(seq18865__$1);
var G__18868 = cljs.core.first(seq18865__$2);
var seq18865__$3 = cljs.core.next(seq18865__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18866,G__18867,G__18868,seq18865__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18884 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18885){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18885 = meta18885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18886,meta18885__$1){
var self__ = this;
var _18886__$1 = this;
return (new cljs.core.async.t_cljs$core$async18884(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18885__$1));
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18886){
var self__ = this;
var _18886__$1 = this;
return self__.meta18885;
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18884.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18885","meta18885",-543798647,null)], null);
}));

(cljs.core.async.t_cljs$core$async18884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18884");

(cljs.core.async.t_cljs$core$async18884.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18884.
 */
cljs.core.async.__GT_t_cljs$core$async18884 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18884(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18885){
return (new cljs.core.async.t_cljs$core$async18884(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18885));
});

}

return (new cljs.core.async.t_cljs$core$async18884(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17763__auto___20530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var inst_18924 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18924)){
var statearr_18970_20535 = state_18966__$1;
(statearr_18970_20535[(1)] = (8));

} else {
var statearr_18971_20536 = state_18966__$1;
(statearr_18971_20536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (20))){
var inst_18917 = (state_18966[(7)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18966__$1,(23),out,inst_18917);
} else {
if((state_val_18967 === (1))){
var inst_18895 = calc_state();
var inst_18896 = cljs.core.__destructure_map(inst_18895);
var inst_18897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18896,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18896,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18896,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18900 = inst_18895;
var state_18966__$1 = (function (){var statearr_18975 = state_18966;
(statearr_18975[(8)] = inst_18898);

(statearr_18975[(9)] = inst_18900);

(statearr_18975[(10)] = inst_18899);

(statearr_18975[(11)] = inst_18897);

return statearr_18975;
})();
var statearr_18976_20541 = state_18966__$1;
(statearr_18976_20541[(2)] = null);

(statearr_18976_20541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (24))){
var inst_18907 = (state_18966[(12)]);
var inst_18900 = inst_18907;
var state_18966__$1 = (function (){var statearr_18977 = state_18966;
(statearr_18977[(9)] = inst_18900);

return statearr_18977;
})();
var statearr_18978_20542 = state_18966__$1;
(statearr_18978_20542[(2)] = null);

(statearr_18978_20542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (4))){
var inst_18917 = (state_18966[(7)]);
var inst_18919 = (state_18966[(13)]);
var inst_18916 = (state_18966[(2)]);
var inst_18917__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18916,(0),null);
var inst_18918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18916,(1),null);
var inst_18919__$1 = (inst_18917__$1 == null);
var state_18966__$1 = (function (){var statearr_18979 = state_18966;
(statearr_18979[(7)] = inst_18917__$1);

(statearr_18979[(14)] = inst_18918);

(statearr_18979[(13)] = inst_18919__$1);

return statearr_18979;
})();
if(cljs.core.truth_(inst_18919__$1)){
var statearr_18980_20543 = state_18966__$1;
(statearr_18980_20543[(1)] = (5));

} else {
var statearr_18981_20544 = state_18966__$1;
(statearr_18981_20544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (15))){
var inst_18940 = (state_18966[(15)]);
var inst_18908 = (state_18966[(16)]);
var inst_18940__$1 = cljs.core.empty_QMARK_(inst_18908);
var state_18966__$1 = (function (){var statearr_18982 = state_18966;
(statearr_18982[(15)] = inst_18940__$1);

return statearr_18982;
})();
if(inst_18940__$1){
var statearr_18983_20545 = state_18966__$1;
(statearr_18983_20545[(1)] = (17));

} else {
var statearr_18984_20546 = state_18966__$1;
(statearr_18984_20546[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (21))){
var inst_18907 = (state_18966[(12)]);
var inst_18900 = inst_18907;
var state_18966__$1 = (function (){var statearr_18985 = state_18966;
(statearr_18985[(9)] = inst_18900);

return statearr_18985;
})();
var statearr_18986_20548 = state_18966__$1;
(statearr_18986_20548[(2)] = null);

(statearr_18986_20548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (13))){
var inst_18932 = (state_18966[(2)]);
var inst_18933 = calc_state();
var inst_18900 = inst_18933;
var state_18966__$1 = (function (){var statearr_18991 = state_18966;
(statearr_18991[(17)] = inst_18932);

(statearr_18991[(9)] = inst_18900);

return statearr_18991;
})();
var statearr_18992_20554 = state_18966__$1;
(statearr_18992_20554[(2)] = null);

(statearr_18992_20554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (22))){
var inst_18960 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18993_20559 = state_18966__$1;
(statearr_18993_20559[(2)] = inst_18960);

(statearr_18993_20559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (6))){
var inst_18918 = (state_18966[(14)]);
var inst_18922 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18918,change);
var state_18966__$1 = state_18966;
var statearr_18994_20565 = state_18966__$1;
(statearr_18994_20565[(2)] = inst_18922);

(statearr_18994_20565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (25))){
var state_18966__$1 = state_18966;
var statearr_18996_20566 = state_18966__$1;
(statearr_18996_20566[(2)] = null);

(statearr_18996_20566[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (17))){
var inst_18909 = (state_18966[(18)]);
var inst_18918 = (state_18966[(14)]);
var inst_18942 = (inst_18909.cljs$core$IFn$_invoke$arity$1 ? inst_18909.cljs$core$IFn$_invoke$arity$1(inst_18918) : inst_18909.call(null,inst_18918));
var inst_18943 = cljs.core.not(inst_18942);
var state_18966__$1 = state_18966;
var statearr_19000_20572 = state_18966__$1;
(statearr_19000_20572[(2)] = inst_18943);

(statearr_19000_20572[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (3))){
var inst_18964 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (12))){
var state_18966__$1 = state_18966;
var statearr_19001_20577 = state_18966__$1;
(statearr_19001_20577[(2)] = null);

(statearr_19001_20577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (2))){
var inst_18900 = (state_18966[(9)]);
var inst_18907 = (state_18966[(12)]);
var inst_18907__$1 = cljs.core.__destructure_map(inst_18900);
var inst_18908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18907__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18907__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18907__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18966__$1 = (function (){var statearr_19002 = state_18966;
(statearr_19002[(18)] = inst_18909);

(statearr_19002[(12)] = inst_18907__$1);

(statearr_19002[(16)] = inst_18908);

return statearr_19002;
})();
return cljs.core.async.ioc_alts_BANG_(state_18966__$1,(4),inst_18910);
} else {
if((state_val_18967 === (23))){
var inst_18951 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18951)){
var statearr_19003_20582 = state_18966__$1;
(statearr_19003_20582[(1)] = (24));

} else {
var statearr_19004_20583 = state_18966__$1;
(statearr_19004_20583[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (19))){
var inst_18946 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19005_20584 = state_18966__$1;
(statearr_19005_20584[(2)] = inst_18946);

(statearr_19005_20584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (11))){
var inst_18918 = (state_18966[(14)]);
var inst_18929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18918);
var state_18966__$1 = state_18966;
var statearr_19006_20585 = state_18966__$1;
(statearr_19006_20585[(2)] = inst_18929);

(statearr_19006_20585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (9))){
var inst_18936 = (state_18966[(19)]);
var inst_18918 = (state_18966[(14)]);
var inst_18908 = (state_18966[(16)]);
var inst_18936__$1 = (inst_18908.cljs$core$IFn$_invoke$arity$1 ? inst_18908.cljs$core$IFn$_invoke$arity$1(inst_18918) : inst_18908.call(null,inst_18918));
var state_18966__$1 = (function (){var statearr_19008 = state_18966;
(statearr_19008[(19)] = inst_18936__$1);

return statearr_19008;
})();
if(cljs.core.truth_(inst_18936__$1)){
var statearr_19010_20592 = state_18966__$1;
(statearr_19010_20592[(1)] = (14));

} else {
var statearr_19011_20593 = state_18966__$1;
(statearr_19011_20593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (5))){
var inst_18919 = (state_18966[(13)]);
var state_18966__$1 = state_18966;
var statearr_19012_20595 = state_18966__$1;
(statearr_19012_20595[(2)] = inst_18919);

(statearr_19012_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (14))){
var inst_18936 = (state_18966[(19)]);
var state_18966__$1 = state_18966;
var statearr_19013_20596 = state_18966__$1;
(statearr_19013_20596[(2)] = inst_18936);

(statearr_19013_20596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (26))){
var inst_18956 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19014_20598 = state_18966__$1;
(statearr_19014_20598[(2)] = inst_18956);

(statearr_19014_20598[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (16))){
var inst_18948 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18948)){
var statearr_19015_20599 = state_18966__$1;
(statearr_19015_20599[(1)] = (20));

} else {
var statearr_19016_20600 = state_18966__$1;
(statearr_19016_20600[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (10))){
var inst_18962 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19020_20601 = state_18966__$1;
(statearr_19020_20601[(2)] = inst_18962);

(statearr_19020_20601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (18))){
var inst_18940 = (state_18966[(15)]);
var state_18966__$1 = state_18966;
var statearr_19021_20602 = state_18966__$1;
(statearr_19021_20602[(2)] = inst_18940);

(statearr_19021_20602[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (8))){
var inst_18917 = (state_18966[(7)]);
var inst_18926 = (inst_18917 == null);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18926)){
var statearr_19022_20603 = state_18966__$1;
(statearr_19022_20603[(1)] = (11));

} else {
var statearr_19023_20604 = state_18966__$1;
(statearr_19023_20604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17220__auto__ = null;
var cljs$core$async$mix_$_state_machine__17220__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19024[(0)] = cljs$core$async$mix_$_state_machine__17220__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var cljs$core$async$mix_$_state_machine__17220__auto____1 = (function (state_18966){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19025){var ex__17223__auto__ = e19025;
var statearr_19026_20607 = state_18966;
(statearr_19026_20607[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_18966[(4)]))){
var statearr_19027_20608 = state_18966;
(statearr_19027_20608[(1)] = cljs.core.first((state_18966[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20609 = state_18966;
state_18966 = G__20609;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17220__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17220__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17220__auto____0;
cljs$core$async$mix_$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17220__auto____1;
return cljs$core$async$mix_$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19028 = f__17765__auto__();
(statearr_19028[(6)] = c__17763__auto___20530);

return statearr_19028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20633 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20633(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20638 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20638(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20670 = (function() {
var G__20671 = null;
var G__20671__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20671__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20671 = function(p,v){
switch(arguments.length){
case 1:
return G__20671__1.call(this,p);
case 2:
return G__20671__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20671.cljs$core$IFn$_invoke$arity$1 = G__20671__1;
G__20671.cljs$core$IFn$_invoke$arity$2 = G__20671__2;
return G__20671;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19030 = arguments.length;
switch (G__19030) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20670(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20670(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19033 = arguments.length;
switch (G__19033) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19031_SHARP_){
if(cljs.core.truth_((p1__19031_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19031_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19031_SHARP_.call(null,topic)))){
return p1__19031_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19031_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19035 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19036){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19036 = meta19036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19037,meta19036__$1){
var self__ = this;
var _19037__$1 = this;
return (new cljs.core.async.t_cljs$core$async19035(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19036__$1));
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19037){
var self__ = this;
var _19037__$1 = this;
return self__.meta19036;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19035.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19036","meta19036",-2103464874,null)], null);
}));

(cljs.core.async.t_cljs$core$async19035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19035");

(cljs.core.async.t_cljs$core$async19035.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19035.
 */
cljs.core.async.__GT_t_cljs$core$async19035 = (function cljs$core$async$__GT_t_cljs$core$async19035(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19036){
return (new cljs.core.async.t_cljs$core$async19035(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19036));
});

}

return (new cljs.core.async.t_cljs$core$async19035(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17763__auto___20701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19116){
var state_val_19117 = (state_19116[(1)]);
if((state_val_19117 === (7))){
var inst_19112 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19118_20702 = state_19116__$1;
(statearr_19118_20702[(2)] = inst_19112);

(statearr_19118_20702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (20))){
var state_19116__$1 = state_19116;
var statearr_19119_20705 = state_19116__$1;
(statearr_19119_20705[(2)] = null);

(statearr_19119_20705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (1))){
var state_19116__$1 = state_19116;
var statearr_19120_20706 = state_19116__$1;
(statearr_19120_20706[(2)] = null);

(statearr_19120_20706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (24))){
var inst_19095 = (state_19116[(7)]);
var inst_19104 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19095);
var state_19116__$1 = state_19116;
var statearr_19121_20707 = state_19116__$1;
(statearr_19121_20707[(2)] = inst_19104);

(statearr_19121_20707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (4))){
var inst_19047 = (state_19116[(8)]);
var inst_19047__$1 = (state_19116[(2)]);
var inst_19048 = (inst_19047__$1 == null);
var state_19116__$1 = (function (){var statearr_19136 = state_19116;
(statearr_19136[(8)] = inst_19047__$1);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19048)){
var statearr_19137_20710 = state_19116__$1;
(statearr_19137_20710[(1)] = (5));

} else {
var statearr_19138_20711 = state_19116__$1;
(statearr_19138_20711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (15))){
var inst_19089 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19145_20713 = state_19116__$1;
(statearr_19145_20713[(2)] = inst_19089);

(statearr_19145_20713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (21))){
var inst_19109 = (state_19116[(2)]);
var state_19116__$1 = (function (){var statearr_19146 = state_19116;
(statearr_19146[(9)] = inst_19109);

return statearr_19146;
})();
var statearr_19147_20714 = state_19116__$1;
(statearr_19147_20714[(2)] = null);

(statearr_19147_20714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (13))){
var inst_19071 = (state_19116[(10)]);
var inst_19073 = cljs.core.chunked_seq_QMARK_(inst_19071);
var state_19116__$1 = state_19116;
if(inst_19073){
var statearr_19148_20715 = state_19116__$1;
(statearr_19148_20715[(1)] = (16));

} else {
var statearr_19149_20716 = state_19116__$1;
(statearr_19149_20716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (22))){
var inst_19101 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19101)){
var statearr_19164_20717 = state_19116__$1;
(statearr_19164_20717[(1)] = (23));

} else {
var statearr_19165_20718 = state_19116__$1;
(statearr_19165_20718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (6))){
var inst_19047 = (state_19116[(8)]);
var inst_19097 = (state_19116[(11)]);
var inst_19095 = (state_19116[(7)]);
var inst_19095__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19047) : topic_fn.call(null,inst_19047));
var inst_19096 = cljs.core.deref(mults);
var inst_19097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19096,inst_19095__$1);
var state_19116__$1 = (function (){var statearr_19172 = state_19116;
(statearr_19172[(11)] = inst_19097__$1);

(statearr_19172[(7)] = inst_19095__$1);

return statearr_19172;
})();
if(cljs.core.truth_(inst_19097__$1)){
var statearr_19173_20719 = state_19116__$1;
(statearr_19173_20719[(1)] = (19));

} else {
var statearr_19174_20721 = state_19116__$1;
(statearr_19174_20721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (25))){
var inst_19106 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19175_20722 = state_19116__$1;
(statearr_19175_20722[(2)] = inst_19106);

(statearr_19175_20722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (17))){
var inst_19071 = (state_19116[(10)]);
var inst_19080 = cljs.core.first(inst_19071);
var inst_19081 = cljs.core.async.muxch_STAR_(inst_19080);
var inst_19082 = cljs.core.async.close_BANG_(inst_19081);
var inst_19083 = cljs.core.next(inst_19071);
var inst_19057 = inst_19083;
var inst_19058 = null;
var inst_19059 = (0);
var inst_19060 = (0);
var state_19116__$1 = (function (){var statearr_19178 = state_19116;
(statearr_19178[(12)] = inst_19057);

(statearr_19178[(13)] = inst_19082);

(statearr_19178[(14)] = inst_19058);

(statearr_19178[(15)] = inst_19060);

(statearr_19178[(16)] = inst_19059);

return statearr_19178;
})();
var statearr_19179_20723 = state_19116__$1;
(statearr_19179_20723[(2)] = null);

(statearr_19179_20723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (3))){
var inst_19114 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19116__$1,inst_19114);
} else {
if((state_val_19117 === (12))){
var inst_19091 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19181_20724 = state_19116__$1;
(statearr_19181_20724[(2)] = inst_19091);

(statearr_19181_20724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (2))){
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19116__$1,(4),ch);
} else {
if((state_val_19117 === (23))){
var state_19116__$1 = state_19116;
var statearr_19182_20729 = state_19116__$1;
(statearr_19182_20729[(2)] = null);

(statearr_19182_20729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (19))){
var inst_19047 = (state_19116[(8)]);
var inst_19097 = (state_19116[(11)]);
var inst_19099 = cljs.core.async.muxch_STAR_(inst_19097);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19116__$1,(22),inst_19099,inst_19047);
} else {
if((state_val_19117 === (11))){
var inst_19057 = (state_19116[(12)]);
var inst_19071 = (state_19116[(10)]);
var inst_19071__$1 = cljs.core.seq(inst_19057);
var state_19116__$1 = (function (){var statearr_19183 = state_19116;
(statearr_19183[(10)] = inst_19071__$1);

return statearr_19183;
})();
if(inst_19071__$1){
var statearr_19184_20732 = state_19116__$1;
(statearr_19184_20732[(1)] = (13));

} else {
var statearr_19185_20733 = state_19116__$1;
(statearr_19185_20733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (9))){
var inst_19093 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19189_20737 = state_19116__$1;
(statearr_19189_20737[(2)] = inst_19093);

(statearr_19189_20737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (5))){
var inst_19054 = cljs.core.deref(mults);
var inst_19055 = cljs.core.vals(inst_19054);
var inst_19056 = cljs.core.seq(inst_19055);
var inst_19057 = inst_19056;
var inst_19058 = null;
var inst_19059 = (0);
var inst_19060 = (0);
var state_19116__$1 = (function (){var statearr_19190 = state_19116;
(statearr_19190[(12)] = inst_19057);

(statearr_19190[(14)] = inst_19058);

(statearr_19190[(15)] = inst_19060);

(statearr_19190[(16)] = inst_19059);

return statearr_19190;
})();
var statearr_19191_20738 = state_19116__$1;
(statearr_19191_20738[(2)] = null);

(statearr_19191_20738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (14))){
var state_19116__$1 = state_19116;
var statearr_19195_20739 = state_19116__$1;
(statearr_19195_20739[(2)] = null);

(statearr_19195_20739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (16))){
var inst_19071 = (state_19116[(10)]);
var inst_19075 = cljs.core.chunk_first(inst_19071);
var inst_19076 = cljs.core.chunk_rest(inst_19071);
var inst_19077 = cljs.core.count(inst_19075);
var inst_19057 = inst_19076;
var inst_19058 = inst_19075;
var inst_19059 = inst_19077;
var inst_19060 = (0);
var state_19116__$1 = (function (){var statearr_19196 = state_19116;
(statearr_19196[(12)] = inst_19057);

(statearr_19196[(14)] = inst_19058);

(statearr_19196[(15)] = inst_19060);

(statearr_19196[(16)] = inst_19059);

return statearr_19196;
})();
var statearr_19197_20741 = state_19116__$1;
(statearr_19197_20741[(2)] = null);

(statearr_19197_20741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (10))){
var inst_19057 = (state_19116[(12)]);
var inst_19058 = (state_19116[(14)]);
var inst_19060 = (state_19116[(15)]);
var inst_19059 = (state_19116[(16)]);
var inst_19065 = cljs.core._nth(inst_19058,inst_19060);
var inst_19066 = cljs.core.async.muxch_STAR_(inst_19065);
var inst_19067 = cljs.core.async.close_BANG_(inst_19066);
var inst_19068 = (inst_19060 + (1));
var tmp19192 = inst_19057;
var tmp19193 = inst_19058;
var tmp19194 = inst_19059;
var inst_19057__$1 = tmp19192;
var inst_19058__$1 = tmp19193;
var inst_19059__$1 = tmp19194;
var inst_19060__$1 = inst_19068;
var state_19116__$1 = (function (){var statearr_19198 = state_19116;
(statearr_19198[(12)] = inst_19057__$1);

(statearr_19198[(14)] = inst_19058__$1);

(statearr_19198[(15)] = inst_19060__$1);

(statearr_19198[(17)] = inst_19067);

(statearr_19198[(16)] = inst_19059__$1);

return statearr_19198;
})();
var statearr_19199_20742 = state_19116__$1;
(statearr_19199_20742[(2)] = null);

(statearr_19199_20742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (18))){
var inst_19086 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19200_20743 = state_19116__$1;
(statearr_19200_20743[(2)] = inst_19086);

(statearr_19200_20743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (8))){
var inst_19060 = (state_19116[(15)]);
var inst_19059 = (state_19116[(16)]);
var inst_19062 = (inst_19060 < inst_19059);
var inst_19063 = inst_19062;
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19063)){
var statearr_19201_20747 = state_19116__$1;
(statearr_19201_20747[(1)] = (10));

} else {
var statearr_19202_20750 = state_19116__$1;
(statearr_19202_20750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19203[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19203[(1)] = (1));

return statearr_19203;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19116){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19116);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19204){var ex__17223__auto__ = e19204;
var statearr_19205_20751 = state_19116;
(statearr_19205_20751[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19116[(4)]))){
var statearr_19206_20756 = state_19116;
(statearr_19206_20756[(1)] = cljs.core.first((state_19116[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20757 = state_19116;
state_19116 = G__20757;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19207 = f__17765__auto__();
(statearr_19207[(6)] = c__17763__auto___20701);

return statearr_19207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19209 = arguments.length;
switch (G__19209) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19211 = arguments.length;
switch (G__19211) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19213 = arguments.length;
switch (G__19213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17763__auto___20778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19267){
var state_val_19268 = (state_19267[(1)]);
if((state_val_19268 === (7))){
var state_19267__$1 = state_19267;
var statearr_19269_20779 = state_19267__$1;
(statearr_19269_20779[(2)] = null);

(statearr_19269_20779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (1))){
var state_19267__$1 = state_19267;
var statearr_19270_20780 = state_19267__$1;
(statearr_19270_20780[(2)] = null);

(statearr_19270_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (4))){
var inst_19228 = (state_19267[(7)]);
var inst_19227 = (state_19267[(8)]);
var inst_19230 = (inst_19228 < inst_19227);
var state_19267__$1 = state_19267;
if(cljs.core.truth_(inst_19230)){
var statearr_19271_20784 = state_19267__$1;
(statearr_19271_20784[(1)] = (6));

} else {
var statearr_19272_20785 = state_19267__$1;
(statearr_19272_20785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (15))){
var inst_19253 = (state_19267[(9)]);
var inst_19258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19253);
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19267__$1,(17),out,inst_19258);
} else {
if((state_val_19268 === (13))){
var inst_19253 = (state_19267[(9)]);
var inst_19253__$1 = (state_19267[(2)]);
var inst_19254 = cljs.core.some(cljs.core.nil_QMARK_,inst_19253__$1);
var state_19267__$1 = (function (){var statearr_19273 = state_19267;
(statearr_19273[(9)] = inst_19253__$1);

return statearr_19273;
})();
if(cljs.core.truth_(inst_19254)){
var statearr_19274_20790 = state_19267__$1;
(statearr_19274_20790[(1)] = (14));

} else {
var statearr_19275_20791 = state_19267__$1;
(statearr_19275_20791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (6))){
var state_19267__$1 = state_19267;
var statearr_19276_20793 = state_19267__$1;
(statearr_19276_20793[(2)] = null);

(statearr_19276_20793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (17))){
var inst_19260 = (state_19267[(2)]);
var state_19267__$1 = (function (){var statearr_19280 = state_19267;
(statearr_19280[(10)] = inst_19260);

return statearr_19280;
})();
var statearr_19281_20797 = state_19267__$1;
(statearr_19281_20797[(2)] = null);

(statearr_19281_20797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (3))){
var inst_19265 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19267__$1,inst_19265);
} else {
if((state_val_19268 === (12))){
var _ = (function (){var statearr_19284 = state_19267;
(statearr_19284[(4)] = cljs.core.rest((state_19267[(4)])));

return statearr_19284;
})();
var state_19267__$1 = state_19267;
var ex19278 = (state_19267__$1[(2)]);
var statearr_19285_20800 = state_19267__$1;
(statearr_19285_20800[(5)] = ex19278);


if((ex19278 instanceof Object)){
var statearr_19287_20801 = state_19267__$1;
(statearr_19287_20801[(1)] = (11));

(statearr_19287_20801[(5)] = null);

} else {
throw ex19278;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (2))){
var inst_19226 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19227 = cnt;
var inst_19228 = (0);
var state_19267__$1 = (function (){var statearr_19289 = state_19267;
(statearr_19289[(7)] = inst_19228);

(statearr_19289[(11)] = inst_19226);

(statearr_19289[(8)] = inst_19227);

return statearr_19289;
})();
var statearr_19292_20802 = state_19267__$1;
(statearr_19292_20802[(2)] = null);

(statearr_19292_20802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (11))){
var inst_19232 = (state_19267[(2)]);
var inst_19233 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19267__$1 = (function (){var statearr_19293 = state_19267;
(statearr_19293[(12)] = inst_19232);

return statearr_19293;
})();
var statearr_19294_20804 = state_19267__$1;
(statearr_19294_20804[(2)] = inst_19233);

(statearr_19294_20804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (9))){
var inst_19228 = (state_19267[(7)]);
var _ = (function (){var statearr_19295 = state_19267;
(statearr_19295[(4)] = cljs.core.cons((12),(state_19267[(4)])));

return statearr_19295;
})();
var inst_19239 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19228) : chs__$1.call(null,inst_19228));
var inst_19240 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19228) : done.call(null,inst_19228));
var inst_19241 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19239,inst_19240);
var ___$1 = (function (){var statearr_19296 = state_19267;
(statearr_19296[(4)] = cljs.core.rest((state_19267[(4)])));

return statearr_19296;
})();
var state_19267__$1 = state_19267;
var statearr_19297_20809 = state_19267__$1;
(statearr_19297_20809[(2)] = inst_19241);

(statearr_19297_20809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (5))){
var inst_19251 = (state_19267[(2)]);
var state_19267__$1 = (function (){var statearr_19298 = state_19267;
(statearr_19298[(13)] = inst_19251);

return statearr_19298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19267__$1,(13),dchan);
} else {
if((state_val_19268 === (14))){
var inst_19256 = cljs.core.async.close_BANG_(out);
var state_19267__$1 = state_19267;
var statearr_19299_20810 = state_19267__$1;
(statearr_19299_20810[(2)] = inst_19256);

(statearr_19299_20810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (16))){
var inst_19263 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19300_20811 = state_19267__$1;
(statearr_19300_20811[(2)] = inst_19263);

(statearr_19300_20811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (10))){
var inst_19228 = (state_19267[(7)]);
var inst_19244 = (state_19267[(2)]);
var inst_19245 = (inst_19228 + (1));
var inst_19228__$1 = inst_19245;
var state_19267__$1 = (function (){var statearr_19301 = state_19267;
(statearr_19301[(7)] = inst_19228__$1);

(statearr_19301[(14)] = inst_19244);

return statearr_19301;
})();
var statearr_19302_20812 = state_19267__$1;
(statearr_19302_20812[(2)] = null);

(statearr_19302_20812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (8))){
var inst_19249 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19303_20813 = state_19267__$1;
(statearr_19303_20813[(2)] = inst_19249);

(statearr_19303_20813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19304[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19304[(1)] = (1));

return statearr_19304;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19267){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19267);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19305){var ex__17223__auto__ = e19305;
var statearr_19306_20816 = state_19267;
(statearr_19306_20816[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19267[(4)]))){
var statearr_19307_20817 = state_19267;
(statearr_19307_20817[(1)] = cljs.core.first((state_19267[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20818 = state_19267;
state_19267 = G__20818;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19311 = f__17765__auto__();
(statearr_19311[(6)] = c__17763__auto___20778);

return statearr_19311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19314 = arguments.length;
switch (G__19314) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___20821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19369){
var state_val_19370 = (state_19369[(1)]);
if((state_val_19370 === (7))){
var inst_19338 = (state_19369[(7)]);
var inst_19339 = (state_19369[(8)]);
var inst_19338__$1 = (state_19369[(2)]);
var inst_19339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19338__$1,(0),null);
var inst_19340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19338__$1,(1),null);
var inst_19341 = (inst_19339__$1 == null);
var state_19369__$1 = (function (){var statearr_19381 = state_19369;
(statearr_19381[(7)] = inst_19338__$1);

(statearr_19381[(9)] = inst_19340);

(statearr_19381[(8)] = inst_19339__$1);

return statearr_19381;
})();
if(cljs.core.truth_(inst_19341)){
var statearr_19385_20823 = state_19369__$1;
(statearr_19385_20823[(1)] = (8));

} else {
var statearr_19387_20824 = state_19369__$1;
(statearr_19387_20824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (1))){
var inst_19328 = cljs.core.vec(chs);
var inst_19329 = inst_19328;
var state_19369__$1 = (function (){var statearr_19391 = state_19369;
(statearr_19391[(10)] = inst_19329);

return statearr_19391;
})();
var statearr_19392_20825 = state_19369__$1;
(statearr_19392_20825[(2)] = null);

(statearr_19392_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (4))){
var inst_19329 = (state_19369[(10)]);
var state_19369__$1 = state_19369;
return cljs.core.async.ioc_alts_BANG_(state_19369__$1,(7),inst_19329);
} else {
if((state_val_19370 === (6))){
var inst_19362 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19395_20826 = state_19369__$1;
(statearr_19395_20826[(2)] = inst_19362);

(statearr_19395_20826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (3))){
var inst_19364 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19369__$1,inst_19364);
} else {
if((state_val_19370 === (2))){
var inst_19329 = (state_19369[(10)]);
var inst_19331 = cljs.core.count(inst_19329);
var inst_19332 = (inst_19331 > (0));
var state_19369__$1 = state_19369;
if(cljs.core.truth_(inst_19332)){
var statearr_19397_20829 = state_19369__$1;
(statearr_19397_20829[(1)] = (4));

} else {
var statearr_19398_20830 = state_19369__$1;
(statearr_19398_20830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (11))){
var inst_19329 = (state_19369[(10)]);
var inst_19355 = (state_19369[(2)]);
var tmp19396 = inst_19329;
var inst_19329__$1 = tmp19396;
var state_19369__$1 = (function (){var statearr_19399 = state_19369;
(statearr_19399[(11)] = inst_19355);

(statearr_19399[(10)] = inst_19329__$1);

return statearr_19399;
})();
var statearr_19400_20831 = state_19369__$1;
(statearr_19400_20831[(2)] = null);

(statearr_19400_20831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (9))){
var inst_19339 = (state_19369[(8)]);
var state_19369__$1 = state_19369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19369__$1,(11),out,inst_19339);
} else {
if((state_val_19370 === (5))){
var inst_19360 = cljs.core.async.close_BANG_(out);
var state_19369__$1 = state_19369;
var statearr_19401_20832 = state_19369__$1;
(statearr_19401_20832[(2)] = inst_19360);

(statearr_19401_20832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (10))){
var inst_19358 = (state_19369[(2)]);
var state_19369__$1 = state_19369;
var statearr_19402_20833 = state_19369__$1;
(statearr_19402_20833[(2)] = inst_19358);

(statearr_19402_20833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19370 === (8))){
var inst_19338 = (state_19369[(7)]);
var inst_19329 = (state_19369[(10)]);
var inst_19340 = (state_19369[(9)]);
var inst_19339 = (state_19369[(8)]);
var inst_19346 = (function (){var cs = inst_19329;
var vec__19334 = inst_19338;
var v = inst_19339;
var c = inst_19340;
return (function (p1__19312_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19312_SHARP_);
});
})();
var inst_19348 = cljs.core.filterv(inst_19346,inst_19329);
var inst_19329__$1 = inst_19348;
var state_19369__$1 = (function (){var statearr_19403 = state_19369;
(statearr_19403[(10)] = inst_19329__$1);

return statearr_19403;
})();
var statearr_19404_20838 = state_19369__$1;
(statearr_19404_20838[(2)] = null);

(statearr_19404_20838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19405[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19405[(1)] = (1));

return statearr_19405;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19369){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19369);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19406){var ex__17223__auto__ = e19406;
var statearr_19407_20839 = state_19369;
(statearr_19407_20839[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19369[(4)]))){
var statearr_19408_20840 = state_19369;
(statearr_19408_20840[(1)] = cljs.core.first((state_19369[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20841 = state_19369;
state_19369 = G__20841;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19409 = f__17765__auto__();
(statearr_19409[(6)] = c__17763__auto___20821);

return statearr_19409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19411 = arguments.length;
switch (G__19411) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___20848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19435){
var state_val_19436 = (state_19435[(1)]);
if((state_val_19436 === (7))){
var inst_19417 = (state_19435[(7)]);
var inst_19417__$1 = (state_19435[(2)]);
var inst_19418 = (inst_19417__$1 == null);
var inst_19419 = cljs.core.not(inst_19418);
var state_19435__$1 = (function (){var statearr_19439 = state_19435;
(statearr_19439[(7)] = inst_19417__$1);

return statearr_19439;
})();
if(inst_19419){
var statearr_19440_20851 = state_19435__$1;
(statearr_19440_20851[(1)] = (8));

} else {
var statearr_19441_20852 = state_19435__$1;
(statearr_19441_20852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (1))){
var inst_19412 = (0);
var state_19435__$1 = (function (){var statearr_19442 = state_19435;
(statearr_19442[(8)] = inst_19412);

return statearr_19442;
})();
var statearr_19443_20853 = state_19435__$1;
(statearr_19443_20853[(2)] = null);

(statearr_19443_20853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (4))){
var state_19435__$1 = state_19435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19435__$1,(7),ch);
} else {
if((state_val_19436 === (6))){
var inst_19430 = (state_19435[(2)]);
var state_19435__$1 = state_19435;
var statearr_19444_20855 = state_19435__$1;
(statearr_19444_20855[(2)] = inst_19430);

(statearr_19444_20855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (3))){
var inst_19432 = (state_19435[(2)]);
var inst_19433 = cljs.core.async.close_BANG_(out);
var state_19435__$1 = (function (){var statearr_19445 = state_19435;
(statearr_19445[(9)] = inst_19432);

return statearr_19445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19435__$1,inst_19433);
} else {
if((state_val_19436 === (2))){
var inst_19412 = (state_19435[(8)]);
var inst_19414 = (inst_19412 < n);
var state_19435__$1 = state_19435;
if(cljs.core.truth_(inst_19414)){
var statearr_19447_20856 = state_19435__$1;
(statearr_19447_20856[(1)] = (4));

} else {
var statearr_19458_20857 = state_19435__$1;
(statearr_19458_20857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (11))){
var inst_19412 = (state_19435[(8)]);
var inst_19422 = (state_19435[(2)]);
var inst_19423 = (inst_19412 + (1));
var inst_19412__$1 = inst_19423;
var state_19435__$1 = (function (){var statearr_19459 = state_19435;
(statearr_19459[(10)] = inst_19422);

(statearr_19459[(8)] = inst_19412__$1);

return statearr_19459;
})();
var statearr_19460_20861 = state_19435__$1;
(statearr_19460_20861[(2)] = null);

(statearr_19460_20861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (9))){
var state_19435__$1 = state_19435;
var statearr_19461_20862 = state_19435__$1;
(statearr_19461_20862[(2)] = null);

(statearr_19461_20862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (5))){
var state_19435__$1 = state_19435;
var statearr_19462_20864 = state_19435__$1;
(statearr_19462_20864[(2)] = null);

(statearr_19462_20864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (10))){
var inst_19427 = (state_19435[(2)]);
var state_19435__$1 = state_19435;
var statearr_19463_20866 = state_19435__$1;
(statearr_19463_20866[(2)] = inst_19427);

(statearr_19463_20866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (8))){
var inst_19417 = (state_19435[(7)]);
var state_19435__$1 = state_19435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19435__$1,(11),out,inst_19417);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19465[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19465[(1)] = (1));

return statearr_19465;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19435){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19435);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19466){var ex__17223__auto__ = e19466;
var statearr_19467_20873 = state_19435;
(statearr_19467_20873[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19435[(4)]))){
var statearr_19468_20874 = state_19435;
(statearr_19468_20874[(1)] = cljs.core.first((state_19435[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20875 = state_19435;
state_19435 = G__20875;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19470 = f__17765__auto__();
(statearr_19470[(6)] = c__17763__auto___20848);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19472 = (function (f,ch,meta19473){
this.f = f;
this.ch = ch;
this.meta19473 = meta19473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19474,meta19473__$1){
var self__ = this;
var _19474__$1 = this;
return (new cljs.core.async.t_cljs$core$async19472(self__.f,self__.ch,meta19473__$1));
}));

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19474){
var self__ = this;
var _19474__$1 = this;
return self__.meta19473;
}));

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19475 = (function (f,ch,meta19473,_,fn1,meta19476){
this.f = f;
this.ch = ch;
this.meta19473 = meta19473;
this._ = _;
this.fn1 = fn1;
this.meta19476 = meta19476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19477,meta19476__$1){
var self__ = this;
var _19477__$1 = this;
return (new cljs.core.async.t_cljs$core$async19475(self__.f,self__.ch,self__.meta19473,self__._,self__.fn1,meta19476__$1));
}));

(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19477){
var self__ = this;
var _19477__$1 = this;
return self__.meta19476;
}));

(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19471_SHARP_){
var G__19478 = (((p1__19471_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19471_SHARP_) : self__.f.call(null,p1__19471_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19478) : f1.call(null,G__19478));
});
}));

(cljs.core.async.t_cljs$core$async19475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19473","meta19473",1833875689,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19472","cljs.core.async/t_cljs$core$async19472",496299248,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19476","meta19476",1145830926,null)], null);
}));

(cljs.core.async.t_cljs$core$async19475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19475");

(cljs.core.async.t_cljs$core$async19475.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19475.
 */
cljs.core.async.__GT_t_cljs$core$async19475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19475(f__$1,ch__$1,meta19473__$1,___$2,fn1__$1,meta19476){
return (new cljs.core.async.t_cljs$core$async19475(f__$1,ch__$1,meta19473__$1,___$2,fn1__$1,meta19476));
});

}

return (new cljs.core.async.t_cljs$core$async19475(self__.f,self__.ch,self__.meta19473,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19479 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19479) : self__.f.call(null,G__19479));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19473","meta19473",1833875689,null)], null);
}));

(cljs.core.async.t_cljs$core$async19472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19472");

(cljs.core.async.t_cljs$core$async19472.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19472.
 */
cljs.core.async.__GT_t_cljs$core$async19472 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19472(f__$1,ch__$1,meta19473){
return (new cljs.core.async.t_cljs$core$async19472(f__$1,ch__$1,meta19473));
});

}

return (new cljs.core.async.t_cljs$core$async19472(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19483 = (function (f,ch,meta19484){
this.f = f;
this.ch = ch;
this.meta19484 = meta19484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19485,meta19484__$1){
var self__ = this;
var _19485__$1 = this;
return (new cljs.core.async.t_cljs$core$async19483(self__.f,self__.ch,meta19484__$1));
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19485){
var self__ = this;
var _19485__$1 = this;
return self__.meta19484;
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19484","meta19484",1793565277,null)], null);
}));

(cljs.core.async.t_cljs$core$async19483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19483");

(cljs.core.async.t_cljs$core$async19483.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19483.
 */
cljs.core.async.__GT_t_cljs$core$async19483 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19483(f__$1,ch__$1,meta19484){
return (new cljs.core.async.t_cljs$core$async19483(f__$1,ch__$1,meta19484));
});

}

return (new cljs.core.async.t_cljs$core$async19483(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19495 = (function (p,ch,meta19496){
this.p = p;
this.ch = ch;
this.meta19496 = meta19496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19497,meta19496__$1){
var self__ = this;
var _19497__$1 = this;
return (new cljs.core.async.t_cljs$core$async19495(self__.p,self__.ch,meta19496__$1));
}));

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19497){
var self__ = this;
var _19497__$1 = this;
return self__.meta19496;
}));

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19496","meta19496",867080545,null)], null);
}));

(cljs.core.async.t_cljs$core$async19495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19495");

(cljs.core.async.t_cljs$core$async19495.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19495.
 */
cljs.core.async.__GT_t_cljs$core$async19495 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19495(p__$1,ch__$1,meta19496){
return (new cljs.core.async.t_cljs$core$async19495(p__$1,ch__$1,meta19496));
});

}

return (new cljs.core.async.t_cljs$core$async19495(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19500 = arguments.length;
switch (G__19500) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___20904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19523){
var state_val_19524 = (state_19523[(1)]);
if((state_val_19524 === (7))){
var inst_19519 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19525_20905 = state_19523__$1;
(statearr_19525_20905[(2)] = inst_19519);

(statearr_19525_20905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (1))){
var state_19523__$1 = state_19523;
var statearr_19526_20906 = state_19523__$1;
(statearr_19526_20906[(2)] = null);

(statearr_19526_20906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (4))){
var inst_19503 = (state_19523[(7)]);
var inst_19503__$1 = (state_19523[(2)]);
var inst_19504 = (inst_19503__$1 == null);
var state_19523__$1 = (function (){var statearr_19528 = state_19523;
(statearr_19528[(7)] = inst_19503__$1);

return statearr_19528;
})();
if(cljs.core.truth_(inst_19504)){
var statearr_19529_20907 = state_19523__$1;
(statearr_19529_20907[(1)] = (5));

} else {
var statearr_19530_20908 = state_19523__$1;
(statearr_19530_20908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (6))){
var inst_19503 = (state_19523[(7)]);
var inst_19510 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19503) : p.call(null,inst_19503));
var state_19523__$1 = state_19523;
if(cljs.core.truth_(inst_19510)){
var statearr_19532_20909 = state_19523__$1;
(statearr_19532_20909[(1)] = (8));

} else {
var statearr_19533_20910 = state_19523__$1;
(statearr_19533_20910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (3))){
var inst_19521 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19523__$1,inst_19521);
} else {
if((state_val_19524 === (2))){
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19523__$1,(4),ch);
} else {
if((state_val_19524 === (11))){
var inst_19513 = (state_19523[(2)]);
var state_19523__$1 = state_19523;
var statearr_19534_20911 = state_19523__$1;
(statearr_19534_20911[(2)] = inst_19513);

(statearr_19534_20911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (9))){
var state_19523__$1 = state_19523;
var statearr_19535_20912 = state_19523__$1;
(statearr_19535_20912[(2)] = null);

(statearr_19535_20912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (5))){
var inst_19506 = cljs.core.async.close_BANG_(out);
var state_19523__$1 = state_19523;
var statearr_19536_20913 = state_19523__$1;
(statearr_19536_20913[(2)] = inst_19506);

(statearr_19536_20913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (10))){
var inst_19516 = (state_19523[(2)]);
var state_19523__$1 = (function (){var statearr_19537 = state_19523;
(statearr_19537[(8)] = inst_19516);

return statearr_19537;
})();
var statearr_19538_20916 = state_19523__$1;
(statearr_19538_20916[(2)] = null);

(statearr_19538_20916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19524 === (8))){
var inst_19503 = (state_19523[(7)]);
var state_19523__$1 = state_19523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19523__$1,(11),out,inst_19503);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19539 = [null,null,null,null,null,null,null,null,null];
(statearr_19539[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19539[(1)] = (1));

return statearr_19539;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19523){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19523);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19540){var ex__17223__auto__ = e19540;
var statearr_19541_20923 = state_19523;
(statearr_19541_20923[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19523[(4)]))){
var statearr_19543_20924 = state_19523;
(statearr_19543_20924[(1)] = cljs.core.first((state_19523[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20925 = state_19523;
state_19523 = G__20925;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19550 = f__17765__auto__();
(statearr_19550[(6)] = c__17763__auto___20904);

return statearr_19550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19553 = arguments.length;
switch (G__19553) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19635){
var state_val_19636 = (state_19635[(1)]);
if((state_val_19636 === (7))){
var inst_19631 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19638_20933 = state_19635__$1;
(statearr_19638_20933[(2)] = inst_19631);

(statearr_19638_20933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (20))){
var inst_19594 = (state_19635[(7)]);
var inst_19612 = (state_19635[(2)]);
var inst_19613 = cljs.core.next(inst_19594);
var inst_19580 = inst_19613;
var inst_19581 = null;
var inst_19582 = (0);
var inst_19583 = (0);
var state_19635__$1 = (function (){var statearr_19639 = state_19635;
(statearr_19639[(8)] = inst_19580);

(statearr_19639[(9)] = inst_19612);

(statearr_19639[(10)] = inst_19581);

(statearr_19639[(11)] = inst_19583);

(statearr_19639[(12)] = inst_19582);

return statearr_19639;
})();
var statearr_19640_20936 = state_19635__$1;
(statearr_19640_20936[(2)] = null);

(statearr_19640_20936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (1))){
var state_19635__$1 = state_19635;
var statearr_19641_20939 = state_19635__$1;
(statearr_19641_20939[(2)] = null);

(statearr_19641_20939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (4))){
var inst_19565 = (state_19635[(13)]);
var inst_19565__$1 = (state_19635[(2)]);
var inst_19567 = (inst_19565__$1 == null);
var state_19635__$1 = (function (){var statearr_19644 = state_19635;
(statearr_19644[(13)] = inst_19565__$1);

return statearr_19644;
})();
if(cljs.core.truth_(inst_19567)){
var statearr_19645_20941 = state_19635__$1;
(statearr_19645_20941[(1)] = (5));

} else {
var statearr_19646_20942 = state_19635__$1;
(statearr_19646_20942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (15))){
var state_19635__$1 = state_19635;
var statearr_19655_20943 = state_19635__$1;
(statearr_19655_20943[(2)] = null);

(statearr_19655_20943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (21))){
var state_19635__$1 = state_19635;
var statearr_19656_20944 = state_19635__$1;
(statearr_19656_20944[(2)] = null);

(statearr_19656_20944[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (13))){
var inst_19580 = (state_19635[(8)]);
var inst_19581 = (state_19635[(10)]);
var inst_19583 = (state_19635[(11)]);
var inst_19582 = (state_19635[(12)]);
var inst_19590 = (state_19635[(2)]);
var inst_19591 = (inst_19583 + (1));
var tmp19652 = inst_19580;
var tmp19653 = inst_19581;
var tmp19654 = inst_19582;
var inst_19580__$1 = tmp19652;
var inst_19581__$1 = tmp19653;
var inst_19582__$1 = tmp19654;
var inst_19583__$1 = inst_19591;
var state_19635__$1 = (function (){var statearr_19657 = state_19635;
(statearr_19657[(8)] = inst_19580__$1);

(statearr_19657[(14)] = inst_19590);

(statearr_19657[(10)] = inst_19581__$1);

(statearr_19657[(11)] = inst_19583__$1);

(statearr_19657[(12)] = inst_19582__$1);

return statearr_19657;
})();
var statearr_19659_20945 = state_19635__$1;
(statearr_19659_20945[(2)] = null);

(statearr_19659_20945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (22))){
var state_19635__$1 = state_19635;
var statearr_19663_20947 = state_19635__$1;
(statearr_19663_20947[(2)] = null);

(statearr_19663_20947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (6))){
var inst_19565 = (state_19635[(13)]);
var inst_19578 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19565) : f.call(null,inst_19565));
var inst_19579 = cljs.core.seq(inst_19578);
var inst_19580 = inst_19579;
var inst_19581 = null;
var inst_19582 = (0);
var inst_19583 = (0);
var state_19635__$1 = (function (){var statearr_19665 = state_19635;
(statearr_19665[(8)] = inst_19580);

(statearr_19665[(10)] = inst_19581);

(statearr_19665[(11)] = inst_19583);

(statearr_19665[(12)] = inst_19582);

return statearr_19665;
})();
var statearr_19666_20951 = state_19635__$1;
(statearr_19666_20951[(2)] = null);

(statearr_19666_20951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (17))){
var inst_19594 = (state_19635[(7)]);
var inst_19598 = cljs.core.chunk_first(inst_19594);
var inst_19606 = cljs.core.chunk_rest(inst_19594);
var inst_19607 = cljs.core.count(inst_19598);
var inst_19580 = inst_19606;
var inst_19581 = inst_19598;
var inst_19582 = inst_19607;
var inst_19583 = (0);
var state_19635__$1 = (function (){var statearr_19667 = state_19635;
(statearr_19667[(8)] = inst_19580);

(statearr_19667[(10)] = inst_19581);

(statearr_19667[(11)] = inst_19583);

(statearr_19667[(12)] = inst_19582);

return statearr_19667;
})();
var statearr_19668_20955 = state_19635__$1;
(statearr_19668_20955[(2)] = null);

(statearr_19668_20955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (3))){
var inst_19633 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19635__$1,inst_19633);
} else {
if((state_val_19636 === (12))){
var inst_19621 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19670_20960 = state_19635__$1;
(statearr_19670_20960[(2)] = inst_19621);

(statearr_19670_20960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (2))){
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19635__$1,(4),in$);
} else {
if((state_val_19636 === (23))){
var inst_19629 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19671_20961 = state_19635__$1;
(statearr_19671_20961[(2)] = inst_19629);

(statearr_19671_20961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (19))){
var inst_19616 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19679_20962 = state_19635__$1;
(statearr_19679_20962[(2)] = inst_19616);

(statearr_19679_20962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (11))){
var inst_19580 = (state_19635[(8)]);
var inst_19594 = (state_19635[(7)]);
var inst_19594__$1 = cljs.core.seq(inst_19580);
var state_19635__$1 = (function (){var statearr_19680 = state_19635;
(statearr_19680[(7)] = inst_19594__$1);

return statearr_19680;
})();
if(inst_19594__$1){
var statearr_19681_20963 = state_19635__$1;
(statearr_19681_20963[(1)] = (14));

} else {
var statearr_19682_20964 = state_19635__$1;
(statearr_19682_20964[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (9))){
var inst_19623 = (state_19635[(2)]);
var inst_19624 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19635__$1 = (function (){var statearr_19684 = state_19635;
(statearr_19684[(15)] = inst_19623);

return statearr_19684;
})();
if(cljs.core.truth_(inst_19624)){
var statearr_19685_20965 = state_19635__$1;
(statearr_19685_20965[(1)] = (21));

} else {
var statearr_19686_20966 = state_19635__$1;
(statearr_19686_20966[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (5))){
var inst_19570 = cljs.core.async.close_BANG_(out);
var state_19635__$1 = state_19635;
var statearr_19687_20967 = state_19635__$1;
(statearr_19687_20967[(2)] = inst_19570);

(statearr_19687_20967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (14))){
var inst_19594 = (state_19635[(7)]);
var inst_19596 = cljs.core.chunked_seq_QMARK_(inst_19594);
var state_19635__$1 = state_19635;
if(inst_19596){
var statearr_19688_20968 = state_19635__$1;
(statearr_19688_20968[(1)] = (17));

} else {
var statearr_19691_20969 = state_19635__$1;
(statearr_19691_20969[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (16))){
var inst_19619 = (state_19635[(2)]);
var state_19635__$1 = state_19635;
var statearr_19692_20970 = state_19635__$1;
(statearr_19692_20970[(2)] = inst_19619);

(statearr_19692_20970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19636 === (10))){
var inst_19581 = (state_19635[(10)]);
var inst_19583 = (state_19635[(11)]);
var inst_19588 = cljs.core._nth(inst_19581,inst_19583);
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19635__$1,(13),out,inst_19588);
} else {
if((state_val_19636 === (18))){
var inst_19594 = (state_19635[(7)]);
var inst_19610 = cljs.core.first(inst_19594);
var state_19635__$1 = state_19635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19635__$1,(20),out,inst_19610);
} else {
if((state_val_19636 === (8))){
var inst_19583 = (state_19635[(11)]);
var inst_19582 = (state_19635[(12)]);
var inst_19585 = (inst_19583 < inst_19582);
var inst_19586 = inst_19585;
var state_19635__$1 = state_19635;
if(cljs.core.truth_(inst_19586)){
var statearr_19695_20971 = state_19635__$1;
(statearr_19695_20971[(1)] = (10));

} else {
var statearr_19696_20972 = state_19635__$1;
(statearr_19696_20972[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____0 = (function (){
var statearr_19697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__);

(statearr_19697[(1)] = (1));

return statearr_19697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____1 = (function (state_19635){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19635);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19699){var ex__17223__auto__ = e19699;
var statearr_19700_20973 = state_19635;
(statearr_19700_20973[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19635[(4)]))){
var statearr_19701_20974 = state_19635;
(statearr_19701_20974[(1)] = cljs.core.first((state_19635[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20975 = state_19635;
state_19635 = G__20975;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__ = function(state_19635){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____1.call(this,state_19635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19703 = f__17765__auto__();
(statearr_19703[(6)] = c__17763__auto__);

return statearr_19703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));

return c__17763__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19705 = arguments.length;
switch (G__19705) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19711 = arguments.length;
switch (G__19711) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19714 = arguments.length;
switch (G__19714) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___20981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19751){
var state_val_19752 = (state_19751[(1)]);
if((state_val_19752 === (7))){
var inst_19746 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
var statearr_19753_20982 = state_19751__$1;
(statearr_19753_20982[(2)] = inst_19746);

(statearr_19753_20982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (1))){
var inst_19724 = null;
var state_19751__$1 = (function (){var statearr_19760 = state_19751;
(statearr_19760[(7)] = inst_19724);

return statearr_19760;
})();
var statearr_19761_20983 = state_19751__$1;
(statearr_19761_20983[(2)] = null);

(statearr_19761_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (4))){
var inst_19727 = (state_19751[(8)]);
var inst_19727__$1 = (state_19751[(2)]);
var inst_19728 = (inst_19727__$1 == null);
var inst_19729 = cljs.core.not(inst_19728);
var state_19751__$1 = (function (){var statearr_19762 = state_19751;
(statearr_19762[(8)] = inst_19727__$1);

return statearr_19762;
})();
if(inst_19729){
var statearr_19763_20990 = state_19751__$1;
(statearr_19763_20990[(1)] = (5));

} else {
var statearr_19764_20991 = state_19751__$1;
(statearr_19764_20991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (6))){
var state_19751__$1 = state_19751;
var statearr_19771_20992 = state_19751__$1;
(statearr_19771_20992[(2)] = null);

(statearr_19771_20992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (3))){
var inst_19748 = (state_19751[(2)]);
var inst_19749 = cljs.core.async.close_BANG_(out);
var state_19751__$1 = (function (){var statearr_19772 = state_19751;
(statearr_19772[(9)] = inst_19748);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19751__$1,inst_19749);
} else {
if((state_val_19752 === (2))){
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19751__$1,(4),ch);
} else {
if((state_val_19752 === (11))){
var inst_19727 = (state_19751[(8)]);
var inst_19737 = (state_19751[(2)]);
var inst_19724 = inst_19727;
var state_19751__$1 = (function (){var statearr_19773 = state_19751;
(statearr_19773[(10)] = inst_19737);

(statearr_19773[(7)] = inst_19724);

return statearr_19773;
})();
var statearr_19775_20997 = state_19751__$1;
(statearr_19775_20997[(2)] = null);

(statearr_19775_20997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (9))){
var inst_19727 = (state_19751[(8)]);
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19751__$1,(11),out,inst_19727);
} else {
if((state_val_19752 === (5))){
var inst_19727 = (state_19751[(8)]);
var inst_19724 = (state_19751[(7)]);
var inst_19731 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19727,inst_19724);
var state_19751__$1 = state_19751;
if(inst_19731){
var statearr_19778_20998 = state_19751__$1;
(statearr_19778_20998[(1)] = (8));

} else {
var statearr_19779_20999 = state_19751__$1;
(statearr_19779_20999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (10))){
var inst_19743 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
var statearr_19780_21000 = state_19751__$1;
(statearr_19780_21000[(2)] = inst_19743);

(statearr_19780_21000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (8))){
var inst_19724 = (state_19751[(7)]);
var tmp19776 = inst_19724;
var inst_19724__$1 = tmp19776;
var state_19751__$1 = (function (){var statearr_19781 = state_19751;
(statearr_19781[(7)] = inst_19724__$1);

return statearr_19781;
})();
var statearr_19782_21001 = state_19751__$1;
(statearr_19782_21001[(2)] = null);

(statearr_19782_21001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19783[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19783[(1)] = (1));

return statearr_19783;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19751){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19751);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19789){var ex__17223__auto__ = e19789;
var statearr_19790_21002 = state_19751;
(statearr_19790_21002[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19751[(4)]))){
var statearr_19791_21003 = state_19751;
(statearr_19791_21003[(1)] = cljs.core.first((state_19751[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_19751;
state_19751 = G__21004;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19797 = f__17765__auto__();
(statearr_19797[(6)] = c__17763__auto___20981);

return statearr_19797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19799 = arguments.length;
switch (G__19799) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___21008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19844){
var state_val_19845 = (state_19844[(1)]);
if((state_val_19845 === (7))){
var inst_19840 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19846_21010 = state_19844__$1;
(statearr_19846_21010[(2)] = inst_19840);

(statearr_19846_21010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (1))){
var inst_19802 = (new Array(n));
var inst_19803 = inst_19802;
var inst_19804 = (0);
var state_19844__$1 = (function (){var statearr_19847 = state_19844;
(statearr_19847[(7)] = inst_19803);

(statearr_19847[(8)] = inst_19804);

return statearr_19847;
})();
var statearr_19848_21012 = state_19844__$1;
(statearr_19848_21012[(2)] = null);

(statearr_19848_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (4))){
var inst_19807 = (state_19844[(9)]);
var inst_19807__$1 = (state_19844[(2)]);
var inst_19809 = (inst_19807__$1 == null);
var inst_19814 = cljs.core.not(inst_19809);
var state_19844__$1 = (function (){var statearr_19850 = state_19844;
(statearr_19850[(9)] = inst_19807__$1);

return statearr_19850;
})();
if(inst_19814){
var statearr_19854_21014 = state_19844__$1;
(statearr_19854_21014[(1)] = (5));

} else {
var statearr_19855_21015 = state_19844__$1;
(statearr_19855_21015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (15))){
var inst_19834 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19856_21016 = state_19844__$1;
(statearr_19856_21016[(2)] = inst_19834);

(statearr_19856_21016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (13))){
var state_19844__$1 = state_19844;
var statearr_19857_21017 = state_19844__$1;
(statearr_19857_21017[(2)] = null);

(statearr_19857_21017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (6))){
var inst_19804 = (state_19844[(8)]);
var inst_19830 = (inst_19804 > (0));
var state_19844__$1 = state_19844;
if(cljs.core.truth_(inst_19830)){
var statearr_19858_21020 = state_19844__$1;
(statearr_19858_21020[(1)] = (12));

} else {
var statearr_19859_21021 = state_19844__$1;
(statearr_19859_21021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (3))){
var inst_19842 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19844__$1,inst_19842);
} else {
if((state_val_19845 === (12))){
var inst_19803 = (state_19844[(7)]);
var inst_19832 = cljs.core.vec(inst_19803);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19844__$1,(15),out,inst_19832);
} else {
if((state_val_19845 === (2))){
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19844__$1,(4),ch);
} else {
if((state_val_19845 === (11))){
var inst_19824 = (state_19844[(2)]);
var inst_19825 = (new Array(n));
var inst_19803 = inst_19825;
var inst_19804 = (0);
var state_19844__$1 = (function (){var statearr_19870 = state_19844;
(statearr_19870[(7)] = inst_19803);

(statearr_19870[(10)] = inst_19824);

(statearr_19870[(8)] = inst_19804);

return statearr_19870;
})();
var statearr_19871_21024 = state_19844__$1;
(statearr_19871_21024[(2)] = null);

(statearr_19871_21024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (9))){
var inst_19803 = (state_19844[(7)]);
var inst_19822 = cljs.core.vec(inst_19803);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19844__$1,(11),out,inst_19822);
} else {
if((state_val_19845 === (5))){
var inst_19807 = (state_19844[(9)]);
var inst_19803 = (state_19844[(7)]);
var inst_19804 = (state_19844[(8)]);
var inst_19817 = (state_19844[(11)]);
var inst_19816 = (inst_19803[inst_19804] = inst_19807);
var inst_19817__$1 = (inst_19804 + (1));
var inst_19818 = (inst_19817__$1 < n);
var state_19844__$1 = (function (){var statearr_19872 = state_19844;
(statearr_19872[(12)] = inst_19816);

(statearr_19872[(11)] = inst_19817__$1);

return statearr_19872;
})();
if(cljs.core.truth_(inst_19818)){
var statearr_19873_21025 = state_19844__$1;
(statearr_19873_21025[(1)] = (8));

} else {
var statearr_19874_21026 = state_19844__$1;
(statearr_19874_21026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (14))){
var inst_19837 = (state_19844[(2)]);
var inst_19838 = cljs.core.async.close_BANG_(out);
var state_19844__$1 = (function (){var statearr_19876 = state_19844;
(statearr_19876[(13)] = inst_19837);

return statearr_19876;
})();
var statearr_19877_21027 = state_19844__$1;
(statearr_19877_21027[(2)] = inst_19838);

(statearr_19877_21027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (10))){
var inst_19828 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
var statearr_19881_21030 = state_19844__$1;
(statearr_19881_21030[(2)] = inst_19828);

(statearr_19881_21030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (8))){
var inst_19803 = (state_19844[(7)]);
var inst_19817 = (state_19844[(11)]);
var tmp19875 = inst_19803;
var inst_19803__$1 = tmp19875;
var inst_19804 = inst_19817;
var state_19844__$1 = (function (){var statearr_19882 = state_19844;
(statearr_19882[(7)] = inst_19803__$1);

(statearr_19882[(8)] = inst_19804);

return statearr_19882;
})();
var statearr_19883_21031 = state_19844__$1;
(statearr_19883_21031[(2)] = null);

(statearr_19883_21031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19884[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19884[(1)] = (1));

return statearr_19884;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19844){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19844);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19885){var ex__17223__auto__ = e19885;
var statearr_19886_21032 = state_19844;
(statearr_19886_21032[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19844[(4)]))){
var statearr_19887_21033 = state_19844;
(statearr_19887_21033[(1)] = cljs.core.first((state_19844[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21034 = state_19844;
state_19844 = G__21034;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19888 = f__17765__auto__();
(statearr_19888[(6)] = c__17763__auto___21008);

return statearr_19888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19890 = arguments.length;
switch (G__19890) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17763__auto___21040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17765__auto__ = (function (){var switch__17219__auto__ = (function (state_19935){
var state_val_19936 = (state_19935[(1)]);
if((state_val_19936 === (7))){
var inst_19931 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
var statearr_19937_21045 = state_19935__$1;
(statearr_19937_21045[(2)] = inst_19931);

(statearr_19937_21045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (1))){
var inst_19891 = [];
var inst_19892 = inst_19891;
var inst_19893 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19935__$1 = (function (){var statearr_19938 = state_19935;
(statearr_19938[(7)] = inst_19892);

(statearr_19938[(8)] = inst_19893);

return statearr_19938;
})();
var statearr_19939_21046 = state_19935__$1;
(statearr_19939_21046[(2)] = null);

(statearr_19939_21046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (4))){
var inst_19896 = (state_19935[(9)]);
var inst_19896__$1 = (state_19935[(2)]);
var inst_19897 = (inst_19896__$1 == null);
var inst_19898 = cljs.core.not(inst_19897);
var state_19935__$1 = (function (){var statearr_19940 = state_19935;
(statearr_19940[(9)] = inst_19896__$1);

return statearr_19940;
})();
if(inst_19898){
var statearr_19941_21048 = state_19935__$1;
(statearr_19941_21048[(1)] = (5));

} else {
var statearr_19943_21052 = state_19935__$1;
(statearr_19943_21052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (15))){
var inst_19892 = (state_19935[(7)]);
var inst_19923 = cljs.core.vec(inst_19892);
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19935__$1,(18),out,inst_19923);
} else {
if((state_val_19936 === (13))){
var inst_19918 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
var statearr_19944_21053 = state_19935__$1;
(statearr_19944_21053[(2)] = inst_19918);

(statearr_19944_21053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (6))){
var inst_19892 = (state_19935[(7)]);
var inst_19920 = inst_19892.length;
var inst_19921 = (inst_19920 > (0));
var state_19935__$1 = state_19935;
if(cljs.core.truth_(inst_19921)){
var statearr_19945_21058 = state_19935__$1;
(statearr_19945_21058[(1)] = (15));

} else {
var statearr_19949_21059 = state_19935__$1;
(statearr_19949_21059[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (17))){
var inst_19928 = (state_19935[(2)]);
var inst_19929 = cljs.core.async.close_BANG_(out);
var state_19935__$1 = (function (){var statearr_19950 = state_19935;
(statearr_19950[(10)] = inst_19928);

return statearr_19950;
})();
var statearr_19951_21060 = state_19935__$1;
(statearr_19951_21060[(2)] = inst_19929);

(statearr_19951_21060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (3))){
var inst_19933 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19935__$1,inst_19933);
} else {
if((state_val_19936 === (12))){
var inst_19892 = (state_19935[(7)]);
var inst_19911 = cljs.core.vec(inst_19892);
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19935__$1,(14),out,inst_19911);
} else {
if((state_val_19936 === (2))){
var state_19935__$1 = state_19935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19935__$1,(4),ch);
} else {
if((state_val_19936 === (11))){
var inst_19892 = (state_19935[(7)]);
var inst_19896 = (state_19935[(9)]);
var inst_19900 = (state_19935[(11)]);
var inst_19908 = inst_19892.push(inst_19896);
var tmp19952 = inst_19892;
var inst_19892__$1 = tmp19952;
var inst_19893 = inst_19900;
var state_19935__$1 = (function (){var statearr_19953 = state_19935;
(statearr_19953[(7)] = inst_19892__$1);

(statearr_19953[(8)] = inst_19893);

(statearr_19953[(12)] = inst_19908);

return statearr_19953;
})();
var statearr_19957_21063 = state_19935__$1;
(statearr_19957_21063[(2)] = null);

(statearr_19957_21063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (9))){
var inst_19893 = (state_19935[(8)]);
var inst_19904 = cljs.core.keyword_identical_QMARK_(inst_19893,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19935__$1 = state_19935;
var statearr_19958_21065 = state_19935__$1;
(statearr_19958_21065[(2)] = inst_19904);

(statearr_19958_21065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (5))){
var inst_19896 = (state_19935[(9)]);
var inst_19893 = (state_19935[(8)]);
var inst_19901 = (state_19935[(13)]);
var inst_19900 = (state_19935[(11)]);
var inst_19900__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19896) : f.call(null,inst_19896));
var inst_19901__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19900__$1,inst_19893);
var state_19935__$1 = (function (){var statearr_19959 = state_19935;
(statearr_19959[(13)] = inst_19901__$1);

(statearr_19959[(11)] = inst_19900__$1);

return statearr_19959;
})();
if(inst_19901__$1){
var statearr_19960_21069 = state_19935__$1;
(statearr_19960_21069[(1)] = (8));

} else {
var statearr_19961_21070 = state_19935__$1;
(statearr_19961_21070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (14))){
var inst_19896 = (state_19935[(9)]);
var inst_19900 = (state_19935[(11)]);
var inst_19913 = (state_19935[(2)]);
var inst_19914 = [];
var inst_19915 = inst_19914.push(inst_19896);
var inst_19892 = inst_19914;
var inst_19893 = inst_19900;
var state_19935__$1 = (function (){var statearr_19962 = state_19935;
(statearr_19962[(7)] = inst_19892);

(statearr_19962[(14)] = inst_19913);

(statearr_19962[(8)] = inst_19893);

(statearr_19962[(15)] = inst_19915);

return statearr_19962;
})();
var statearr_19963_21071 = state_19935__$1;
(statearr_19963_21071[(2)] = null);

(statearr_19963_21071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (16))){
var state_19935__$1 = state_19935;
var statearr_19964_21072 = state_19935__$1;
(statearr_19964_21072[(2)] = null);

(statearr_19964_21072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (10))){
var inst_19906 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
if(cljs.core.truth_(inst_19906)){
var statearr_19965_21073 = state_19935__$1;
(statearr_19965_21073[(1)] = (11));

} else {
var statearr_19966_21074 = state_19935__$1;
(statearr_19966_21074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (18))){
var inst_19925 = (state_19935[(2)]);
var state_19935__$1 = state_19935;
var statearr_19967_21076 = state_19935__$1;
(statearr_19967_21076[(2)] = inst_19925);

(statearr_19967_21076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19936 === (8))){
var inst_19901 = (state_19935[(13)]);
var state_19935__$1 = state_19935;
var statearr_19968_21077 = state_19935__$1;
(statearr_19968_21077[(2)] = inst_19901);

(statearr_19968_21077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17220__auto__ = null;
var cljs$core$async$state_machine__17220__auto____0 = (function (){
var statearr_19969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19969[(0)] = cljs$core$async$state_machine__17220__auto__);

(statearr_19969[(1)] = (1));

return statearr_19969;
});
var cljs$core$async$state_machine__17220__auto____1 = (function (state_19935){
while(true){
var ret_value__17221__auto__ = (function (){try{while(true){
var result__17222__auto__ = switch__17219__auto__(state_19935);
if(cljs.core.keyword_identical_QMARK_(result__17222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17222__auto__;
}
break;
}
}catch (e19970){var ex__17223__auto__ = e19970;
var statearr_19971_21078 = state_19935;
(statearr_19971_21078[(2)] = ex__17223__auto__);


if(cljs.core.seq((state_19935[(4)]))){
var statearr_19972_21081 = state_19935;
(statearr_19972_21081[(1)] = cljs.core.first((state_19935[(4)])));

} else {
throw ex__17223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21084 = state_19935;
state_19935 = G__21084;
continue;
} else {
return ret_value__17221__auto__;
}
break;
}
});
cljs$core$async$state_machine__17220__auto__ = function(state_19935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17220__auto____1.call(this,state_19935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17220__auto____0;
cljs$core$async$state_machine__17220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17220__auto____1;
return cljs$core$async$state_machine__17220__auto__;
})()
})();
var state__17766__auto__ = (function (){var statearr_19973 = f__17765__auto__();
(statearr_19973[(6)] = c__17763__auto___21040);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17766__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
