var todoList = [];

var list = function(){
    return todoList;
};

var store = function(todo){
    todoList.push(todo);
};

var remove = function(todo){
    todoList = _.without(todoList,todo);
}

module.exports = {
    list:list,
    store:store,
    remove:remove
};
