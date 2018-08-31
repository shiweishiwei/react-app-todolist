import React, { Component } from 'react'
import Done from './Done'
import PropTypes from 'prop-types'

class DoneList extends Component{
    static propTypes={
        done:PropTypes.array,
        onDeleteDone:PropTypes.func
    }
    static defaultProps={
        done:[]
    }
    handleDeleteDone(index){
        if(this.props.onDeleteDone){
            this.props.onDeleteDone(index)
        }
    }

    render(){
        return(
            <div className="show-done">
                <div className="counter">{this.props.done.length}</div>
                {this.props.done.map((done,i)=><Done done={done} key={i} index={i} onDeleteDone={this.handleDeleteDone.bind(this)}/>)}
            </div>
        )
    }
}
export default DoneList;