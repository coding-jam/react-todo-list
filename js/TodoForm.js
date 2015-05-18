var TodoForm = React.createClass({
	saveTodo:function(){

		var inputComponent = React.findDOMNode(this.refs.todoInput);

		this.props.onSave(inputComponent.value);

		inputComponent.value = "";
	},
	render: function() {
		return (
		 	<div>
		 		<input type="text" ref="todoInput"></input>
		 		<button onClick={this.saveTodo}>Save</button>
		 	</div>
		);
	}
});