var LOCAL_STORAGE_KEY = "todoList";

var list = function(){
	return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || ['Test'];
};

var store = function(todo){

	var data = list().concat([todo]);

	window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data));

	return data;
};

var TodoApp = React.createClass({
  getInitialState: function() {
  	return {data: list()};
  },
  onSave:function(todo){
    this.setState({data:store(todo)});
  },
  render: function() {
    return (
    	<div>
      		<h1>TodoApp</h1>
          <TodoForm onSave={this.onSave}/>
          <hr/>
      		<TodoList data={this.state.data}/>
      	</div>
    );
  }
});