requirejs.config({
  "baseUrl": "./",
  "paths": {
    "jquery":"bower_components/jquery/jquery.min",
    "jquery-ui":"bower_components/jquery-ui/ui/jquery-ui",
    "react": "bower_components/react/react.min",
    "jsx":"bower_components/require-jsx/jsx",
    "JSXTransformer":"http://dragon.ak.fbcdn.net/hphotos-ak-prn1/851547_221914424655081_22271_n.js"
  },
  "shim": {
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  }
});

define(['jquery', 'react', 'js/data', 'jsx!js/app'], 
  function($, React, Data, Application) {
    Data.getData(function (data) {
      React.renderComponent(
        Application({'data': data}),
          document.getElementById('content'));
    });
  });


