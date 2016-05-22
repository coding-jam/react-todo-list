var todoList = [];

var list = function(){
    return todoList;
};

var store = function(todo){
    todoList.push(todo);
    return todoList;
};

var remove = function(todo){
    todoList = _.without(todoList,todo);
    return todoList;
}

var todoRepository = todoRepository || {};

(function() {
    todoRepository.list = list;
	todoRepository.store = store;
	todoRepository.remove = remove;
}());
