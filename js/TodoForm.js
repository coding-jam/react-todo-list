var TodoForm = React.createClass({
	saveTodo:function(){

		var inputComponent = React.findDOMNode(this.refs.todoInput);

		this.props.onSave(inputComponent.value);

		inputComponent.value = "";
	},
	render: function() {
		return (
			<div className="container">
			  <div className="row">
			  	<div className="col-sm-8">
			  		<input type="text" className="form-control" id="textInput" ref="todoInput" placeholder="Add Todo..."/>
			  	</div>
			  	<div className="col-sm-4">
			  		<button className="btn btn-default" onClick={this.saveTodo}>
			  			Save
			  		</button>
			  	</div>
			  </div>
			</div>
		);
	}
});