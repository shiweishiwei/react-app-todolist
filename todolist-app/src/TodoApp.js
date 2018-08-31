import React,{Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import DoneList from './DoneList'

class TodoApp extends Component{
    constructor(){
        super();
        this.state={
            todos:[],
            done:[]
        }
    }
    handleDeleteTodo(index){
        const newtodos=this.state.todos;
        newtodos.splice(index, 1)
        this.setState({
            todos: newtodos
        })

    }
    handleFinishTodo(index){
        const newtodos=this.state.todos;
        const newdone=this.state.done;
        const item=this.state.todos[index];
        newtodos.splice(index, 1)
        var newitem={...item,finishtime:new Date().getTime()}
        newdone.push(newitem)
        this.setState({
            todos: newtodos,
            done:newdone
        })
        
    }
    handleDeleteDone(index){
        const newdone=this.state.done;
        newdone.splice(index, 1)
        this.setState({
            done: newdone
        })

    }
    handleSubmitTodo(todo){
        if(!todo) return alert("不能为空")
        this.state.todos.push(todo)
        this.setState({
            todos:this.state.todos
        })
       
    }

    render(){
        return(
            <div>
            <TodoInput onSubmit={this.handleSubmitTodo.bind(this)}/>
            <TodoList todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo.bind(this)} onFinishTodo={this.handleFinishTodo.bind(this)}/>
            <DoneList done={this.state.done} onDeleteDone={this.handleDeleteDone.bind(this)}/>
            </div>
        )
    }
}

export default TodoApp;