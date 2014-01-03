define([], function() {
  var tmp = {
    columns: [
      {
        title: 'column1',
        items: [
          { 
            'description': 'This is a description'
          },
          { 
            'description': 'This is another description'
          }
        ]  
      },
      {
        title: 'column2',
        items: []
      },
      {
        title: 'column3',
        items: [
          { 
            'description': 'This is a third description'
          }
        ]
      }
    ]
  };

  return {
    getData: function(cb) {
      return cb(tmp);
    }
  };
});
