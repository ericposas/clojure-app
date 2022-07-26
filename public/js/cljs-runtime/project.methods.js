goog.provide('project.methods$');
project.methods$.map_characters_to_vec = (function project$methods$map_characters_to_vec(char$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(char$)));
});
project.methods$.some_arity_function = (function project$methods$some_arity_function(var_args){
var G__14507 = arguments.length;
switch (G__14507) {
case 1:
return project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$1 = (function (arg1){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is arity of one",arg1], 0));
}));

(project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$2 = (function (arg1,arg2){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is arity of two",arg1,arg2], 0));
}));

(project.methods$.some_arity_function.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is arity of 0 -- no args"], 0));
}));

(project.methods$.some_arity_function.cljs$lang$maxFixedArity = 2);

project.methods$.rest_args = (function project$methods$rest_args(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14516 = arguments.length;
var i__5770__auto___14517 = (0);
while(true){
if((i__5770__auto___14517 < len__5769__auto___14516)){
args__5775__auto__.push((arguments[i__5770__auto___14517]));

var G__14518 = (i__5770__auto___14517 + (1));
i__5770__auto___14517 = G__14518;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return project.methods$.rest_args.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(project.methods$.rest_args.cljs$core$IFn$_invoke$arity$variadic = (function (args_list){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args_list);
}));

(project.methods$.rest_args.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(project.methods$.rest_args.cljs$lang$applyTo = (function (seq14508){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14508));
}));

project.methods$.vec_destrucsh = (function project$methods$vec_destrucsh(p__14509){
var vec__14510 = p__14509;
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14510,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14510,(1),null);
var tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14510,(2),null);
return ["your args are: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [one,two,tree], null))].join('');
});
project.methods$.some_anon = (function project$methods$some_anon(p1__14513_SHARP_,p2__14514_SHARP_){
return (p1__14513_SHARP_ + p2__14514_SHARP_);
});
project.methods$.set_element = (function project$methods$set_element(id,vec_content){
return (document.getElementById(id).innerHTML = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",vec_content));
});
project.methods$.do_a_loopty_loop = (function project$methods$do_a_loopty_loop(list,callback){
var iter = (0);
var acc_list = cljs.core.PersistentVector.EMPTY;
while(true){
if(((iter + (1)) < cljs.core.count(list))){
(iter + (1));

var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(list,iter)));
var compiled_list_so_far = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_list,name);
var G__14519 = (iter + (1));
var G__14520 = compiled_list_so_far;
iter = G__14519;
acc_list = G__14520;
continue;
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["looping done!",acc_list], 0));

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(acc_list) : callback.call(null,acc_list));
}
break;
}
});

//# sourceMappingURL=project.methods.js.map
