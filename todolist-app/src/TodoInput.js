import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoInput extends Component{
    constructor(){
        super();
        this.state={
            todo:'',
            deadline:''
        }
    }
    static propTypes={
        onSubmit:PropTypes.func
    }
    componentDidMount(){
        this.input.focus();
    }

    handleTodochange(event){
        this.setState({
            todo:event.target.value
        })
    }
    handleDateChange(event){

        this.setState({
            deadline:event.target.value
        })
        
    }

    handleSubmit(){
        console.log(this.state)
        if(this.props.onSubmit){
            this.props.onSubmit(this.state)
        }
        this.setState({
            todo:''
        })
    }

    render(){
        return(
            <div>
            <div className='input-field'>
                <div className='input-tip-1' >请输入Todo:</div>
                <input className='input-area' value={this.state.todo} ref={(input) => this.input = input} onChange={this.handleTodochange.bind(this)}/>
                

            </div>
            <div className="date-field">
                <div className='input-tip-2'>请选择截止日期:</div>
                <input  className="date-input" type="date" value={this.state.deadline} onChange={this.handleDateChange.bind(this)} />
                <button className='input-button-confirm' onClick={this.handleSubmit.bind(this)}>确认</button>
            </div>
            </div>
        )
    }
}
export default TodoInput