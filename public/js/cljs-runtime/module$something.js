var module$node_modules$axios$index = shadow.js.require("module$node_modules$axios$index", {});
const {default:axios$$module$something} = module$node_modules$axios$index.default;
var aFunction$$module$something = () => {
  console.log("logging..");
};
var doAxiosThing$$module$something = (url, auth) => {
  module$node_modules$axios$index.default.default.get(url, {headers:{"content-type":"application/json", authorization:auth}});
};
/** @const */ 
var module$something = {};
/** @const */ 
module$something.aFunction = aFunction$$module$something;
/** @const */ 
module$something.doAxiosThing = doAxiosThing$$module$something;

$CLJS.module$something=module$something;
//# sourceMappingURL=module$something.js.map
