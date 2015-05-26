var todoRepository = todoRepository || {};

(function() {
    var LOCAL_STORAGE_KEY = "todoList";

	todoRepository.list = function(){
		return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || ['Test'];
	};

	todoRepository.store = function(todo){

		var data = todoRepository.list().concat([todo]);

		window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data));

		return data;
	};

	todoRepository.delete = function(todo){
	  var data = _.without(todoRepository.list(),todo);

	  window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data));

	  return data;
	};
}());