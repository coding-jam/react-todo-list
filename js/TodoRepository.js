var list = function(){
    return axios.get('http://localhost:3000/api/todo');
};

var store = function(todo){
    return axios.post('http://localhost:3000/api/todo',{
        todo:todo
    });
};

var remove = function(index){
    return axios.delete('http://localhost:3000/api/todo/' + index);
}

var todoRepository = todoRepository || {};

(function() {
    todoRepository.list = list;
	todoRepository.store = store;
	todoRepository.remove = remove;
}());
