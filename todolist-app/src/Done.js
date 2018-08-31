import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Done extends Component {
  static propTypes={
      done: PropTypes.object,
      onDeleteDone:PropTypes.func,
      index:PropTypes.number

  }
  constructor(){
    super();
    this.state={
      duration:''
    }
  }

  handleDeleteDone(index){
    if(this.props.onDeleteDone){
        this.props.onDeleteDone(this.props.index)
    }
  }
  componentWillMount () {
    this._calculateTime()
    this._timer = setInterval(
      this._calculateTime.bind(this),
      5000
    )
  }
  _calculateTime(){
    var temp='';
    if(this.props.done){
      const duration=(+Date.now() - this.props.done.finishtime) / 1000
      if(duration>60) temp=Math.round(duration / 60)+"min前"
      else temp=Math.round(Math.max(duration, 1))+"秒前"
    }
    this.setState({
      duration:temp
    })
  }


  render () {
    return (
            <div className='done'>
                <div className="done-content">{this.props.done.todo}</div>
                <div className="done-tip">完成于：{this.state.duration}</div>

                <button className="input-button-done" onClick={this.handleDeleteDone.bind(this)}>删除</button>
            </div>
    )
  }
}

export default Done