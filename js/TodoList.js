var TodoList = React.createClass({
	render: function() {
		var items = this.props.data.map(function(todo,i) {
			return (<Todo key={i} onDeleteCallback={this.props.onDeleteCallback} value={todo}></Todo>);
		},this);
		return (<table className="table">{items}</table>);
	}
});