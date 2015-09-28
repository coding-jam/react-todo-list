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
			  		<input ref="todoInput" type="text" className="form-control" id="textInput" placeholder="Add Todo..."/>
			  	</div>
			  	<div className="col-sm-4">
			  		<button type="button" className="btn btn-default" onClick={this.saveTodo}>
			  			Save
			  		</button>
			  	</div>
			  </div>
			</div>
		);
	}
});