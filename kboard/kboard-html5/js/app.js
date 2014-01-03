/** @jsx React.DOM */
define(['react', 'jquery', 'jsx!js/column'], function(React, $, Column) {
  return React.createClass({
    render: function() {
      var columnNodes = this.props.data.columns.map(function(column) {
        return <Column data={column} />;
      });
      return (
        <div className="row"> 
            {columnNodes}
        </div>
      );
    }
  });
});
