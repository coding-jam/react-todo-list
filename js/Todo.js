var Todo = React.createClass({
  onDeleteClick:function(){
  	this.props.onDeleteCallback(this.props.value);
  },
  render: function() {
    return (
      <tr>
        <td>
      	{this.props.value}
        <button className="pull-right btn btn-default" onClick={this.onDeleteClick}>
          Delete
        </button>
        </td>
      </tr>
    );
  }
});