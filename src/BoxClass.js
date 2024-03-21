import React, { Component } from 'react'
import './component/Box.css'
export default class BoxClass extends Component {
  render() {
    return (
      <div className={this.props.result ==='win'?'win':(this.props.result ==='lose'?'lose':'Box')}>
      <h2 >{this.props.user}</h2>
      <img className='Box_img' src={this.props.item?.img}/>
      <h2>{this.props.start?this.props.result:""}</h2>
    </div>
    )
  }
}
