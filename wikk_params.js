var wikk_params = ( function() {
  var VERSION = "1.0.0";
  var ARGV = {}; //Hash of params passed into x.html in URL. eg. x.html?a=b&c=d

  //Parsing parameters in an HTML file, so we can use an html file as a cgi
  //and populate the form based on args passed in.
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
              value = sParam[1];
              if(ARGV[key] == null)
                  ARGV[key] = value;
              else if(typeof ARGV[key] === 'string')
                  ARGV[key] = [ ARGV[key], value ];
              else 
                  ARGV[key].push(value);
          }
      }
  }

  //return a hash of key: function pairs, with the key being the same name as the function.
  //Hence call with web_ajax_module.function_name()
  return {
    getURLParameters: getURLParameters,
    ARGV: ARGV,
    VERSION: VERSION
  }
})();