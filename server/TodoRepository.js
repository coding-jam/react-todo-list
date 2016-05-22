var todoList = [];

var list = function(){
    return todoList;
};

var store = function(todo){
    todoList.push(todo);
    return todoList;
};

var remove = function(index){
    todoList.splice(index, 1);
    return todoList;
}

module.exports = {
    list:list,
    store:store,
    remove:remove
};
