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
  	console.log(list());
    return {data: list()};
  },
  render: function() {
    return (
    	<div>
      		<h1>TodoApp</h1>
      		<TodoList data={this.state.data}></TodoList>
      	</div>
    );
  }
});