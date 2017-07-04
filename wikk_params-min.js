var wikk_params = ( function() {
var VERSION = "1.0.1";
var argv = {}; 
function getURLParameters()
{
var sURL = window.document.URL.toString();
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
var i = 0;
for (i = 0; i<arrURLParams.length; i++)
{
var sParam =  arrURLParams[i].split("=");
key = unescape(sParam[0]);
if (sParam[1] != "")
value = unescape(sParam[1]);
else
value = null;
if(argv[key] == null)
argv[key] = value;
else if(typeof argv[key] === 'string')
argv[key] = [ argv[key], value ];
else
argv[key].push(value);
}
}
}
function get_argv(key) {
return argv[key];
}
function version() { return VERSION }
return {
getURLParameters: getURLParameters,
get_argv: get_argv,
version: version
}
})();
