var TodoApp = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    onSave:function(todo){
        var that = this;
        todoRepository.store(todo).then(function(response){
            debugger;
            that.setState({
                data:response.data
            });
        });
    },
    onDelete:function(index){
        var that = this;
        todoRepository.remove(index).then(function(response){
            that.setState({
                data:response.data
            });
        });
    },
    componentDidMount:function(){
        var that = this;
        todoRepository.list().then(function(response){
            that.setState({
                data:response.data
            });
        });
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
