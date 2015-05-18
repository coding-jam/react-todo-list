var LOCAL_STORAGE_KEY = "todoList";

var listTodo = function(){
	return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || ['Test'];
};

var storeTodo = function(todo){

	var data = listTodo().concat([todo]);

	window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data));

	return data;
};

var deleteTodo = function(todo){
  var data = _.without(listTodo(),todo);

  window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data));

  return data;
};

var TodoApp = React.createClass({
  getInitialState: function() {
  	return {data: listTodo()};
  },
  onSave:function(todo){
    this.setState({data:storeTodo(todo)});
  },
  onDelete:function(todo){
    this.setState({data:deleteTodo(todo)});
  },
  render: function() {
    return (
    	<div>
      		<h1>TodoApp</h1>
          <TodoForm onSave={this.onSave}/>
          <hr/>
      		<TodoList onDeleteCallback={this.onDelete} data={this.state.data}/>
      	</div>
    );
  }
});