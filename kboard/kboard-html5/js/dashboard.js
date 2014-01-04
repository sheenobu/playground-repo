/** @jsx React.DOM */
define(['react', 'jquery', 'kboard.client'], function(React, $, KboardRestClient) {
  return React.createClass({

    getInitialState: function() {
      return {};
    },

    componentWillMount: function() {
      var self = this;
      KboardRestClient.getBoards(function (data, err) {
        self.setState({data: data});
      });        
    },    

    render: function() {
      var boards = this.state.data.map(function (board) {
        return <li>{board}</li>;
      });

      return (<ul>
        {boards}
      </ul>);
    }
  });
});
