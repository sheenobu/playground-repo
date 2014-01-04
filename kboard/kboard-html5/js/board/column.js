/** @jsx React.DOM */
define(['react', 'jquery', 'jsx!js/board/item'], function(React, $, Item) {
  return React.createClass({
    componentDidMount: function() {
      $('.slist').sortable({
        connectWith: '.slist',
        receive: function(event,ui) {
          console.log(ui);
        }});
    },
    render: function() {
      var itemNodes = this.props.data.items.map(function(item) {
        return <Item data={item} />
      });
      return (
        <div className="column col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">{this.props.data.title}</div>
            <div className="panel-body">
              <ul className="slist">
                {itemNodes}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  });
});
