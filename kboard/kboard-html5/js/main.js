requirejs.config({
  "baseUrl": "./",
  "paths": {
    "jquery":"bower_components/jquery/jquery.min",
    "jquery-ui":"bower_components/jquery-ui/ui/jquery-ui",
    "react": "bower_components/react/react.min",
    "jsx":"bower_components/require-jsx/jsx",
    "JSXTransformer":"http://dragon.ak.fbcdn.net/hphotos-ak-prn1/851547_221914424655081_22271_n",
    "kboard.client": '/api/client'
  },
  "shim": {
    JSXTransformer: {
      exports: "JSXTransformer"
    },
    'kboard.client': {
      exports: 'KboardRestClient'
    }
  }
});

define(['jquery', 'react','kboard.client', 'js/data'], 
  function($, React, KboardRestClient, Data) {
    KboardRestClient.authenticate(function (data, err) {
      if(data == true && err == undefined) {

        // successful login. Render board app
        
        require(['jsx!js/board/app'], function(BoardApplication) {
          Data.getData(function (data) {
            React.renderComponent(
              BoardApplication({'data': data}),
                document.getElementById('content'));
          });
        });
        
        /*
        require(['jsx!js/dashboard'], function(Dashboard) {
          React.renderComponent(
            Dashboard(), document.getElementById('content'));
        });
        */
      
      }else{

        // failed login. Render login app.
        require(['jsx!js/login'], function(Login) {
          React.renderComponent(
            Login(), document.getElementById('content'));
        });
        
      }
    });
  }
);


