/** @jsx React.DOM */
define(['react'], function(React) {
  
  var HelloMessage = React.createClass({
      render: function() {
            return <div>{'Hello ' + this.props.name}</div>;
       }
  });

  return HelloMessage;
});
