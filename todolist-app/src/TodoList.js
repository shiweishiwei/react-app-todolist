import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

class TodoList extends Component{
    static propTypes={
        todos:PropTypes.array,
        onDeleteTodo:PropTypes.func,
        onFinishTodo:PropTypes.func
    }
    static defaultProps={
        todos:[]
    }

    handleDeleteTodo(index){
        if(this.props.onDeleteTodo){
            this.props.onDeleteTodo(index)
        }
    }
    handleFinishTodo(index){
        if(this.props.onFinishTodo){
            this.props.onFinishTodo(index)
        }
    }
    render(){
        return(
            <div className="show">
                <div className="counter">{this.props.todos.length}</div>
                {this.props.todos.map((todo,i)=><Todo todo={todo} key={i} index={i} onFinishTodo={this.handleFinishTodo.bind(this)} onDeleteTodo={this.handleDeleteTodo.bind(this)}/>)}
            </div>
        )
    }
}
export default TodoList;