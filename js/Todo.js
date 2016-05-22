var Todo = React.createClass({
  onDeleteClick:function(){
  	this.props.onDeleteCallback(this.props.key);
  },
  render: function() {
    return (
      <tr>
        <td>
      	{this.props.value}
        <button className="pull-right btn btn-default" onClick={this.onDeleteClick}>
          Done
        </button>
        </td>
      </tr>
    );
  }
});
