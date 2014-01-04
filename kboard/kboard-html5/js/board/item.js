/** @jsx React.DOM */
define(['jquery', 'jquery-ui', 'react'], function($, ui, React) {
  return React.createClass({
    render: function() {
      return (
        <li className="item">
          {this.props.data.description}
        </li>
      );
    }
  });
});
