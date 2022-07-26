var module$node_modules$axios$index = shadow.js.require("module$node_modules$axios$index", {});
const {default:axios$$module$myJSLib} = module$node_modules$axios$index.default;
var aFunction$$module$myJSLib = () => {
  console.log("logging..");
};
var jsGet$$module$myJSLib = async(url, auth) => {
  try {
    const response = await module$node_modules$axios$index.default.default.get(url, {headers:{"content-type":"application/json", authorization:auth}});
    return response.data;
  } catch (error) {
    return {error:"Error occurred in axios fetch!"};
  }
};
/** @const */ 
var module$myJSLib = {};
/** @const */ 
module$myJSLib.aFunction = aFunction$$module$myJSLib;
/** @const */ 
module$myJSLib.jsGet = jsGet$$module$myJSLib;

$CLJS.module$myJSLib=module$myJSLib;
//# sourceMappingURL=module$myJSLib.js.map
