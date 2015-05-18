var TodoList = React.createClass({
	render: function() {
		var items = this.props.data.map(function(todo) {
			return (<Todo value={todo}></Todo>);
		});

		return (<ul>{items}</ul>);
	}
});