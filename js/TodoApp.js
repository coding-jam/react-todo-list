var TodoApp = React.createClass({
  getInitialState: function() {
  	return {data: todoRepository.list()};
  },
  onSave:function(todo){
    this.setState({data:todoRepository.store(todo)});
  },
  onDelete:function(todo){
    this.setState({data:todoRepository.remove(todo)});
  },
  render: function() {
    return (
    	<div>
    		<h1 className="text-center">TodoApp</h1>
        <TodoForm onSave={this.onSave}/>
        <hr/>
    		<TodoList onDeleteCallback={this.onDelete} data={this.state.data}/>
    	</div>
    );
  }
});
