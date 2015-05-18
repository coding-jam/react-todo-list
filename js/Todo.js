var Todo = React.createClass({
  onDeleteClick:function(){
  	this.props.onDeleteCallback(this.props.value);
  },
  render: function() {
    return (
      <li>
      	{this.props.value}
      	<button onClick={this.onDeleteClick}>Cancella</button>
      </li>
    );
  }
});