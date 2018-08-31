import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  static propTypes={
      todo: PropTypes.object,
      onDeleteTodo:PropTypes.func,
      onFinishTodo:PropTypes.func,
      index:PropTypes.number

  }
  constructor(){
      super();
      this.state={
          tip:''
      }
  }

  handleDeleteTodo(){
    if(this.props.onDeleteTodo){
        this.props.onDeleteTodo(this.props.index)
    }
  }
  handleFinishTodo(){
      if(this.props.onFinishTodo){
          this.props.onFinishTodo(this.props.index)
      }
  }

  render () {
    return (
            <div className='todo'>

                <div className="todo-content">{this.props.todo.todo}</div>
                <em className="todo-date">截止日期：{this.props.todo.deadline}</em>
                <button className="input-button-finish" onClick={this.handleFinishTodo.bind(this)}>完成</button>
                <button className="input-button-delete" onClick={this.handleDeleteTodo.bind(this)}>删除</button>
            </div>
    )
  }
}

export default Todo