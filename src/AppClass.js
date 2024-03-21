import React, { Component } from 'react'
import BoxClass from './BoxClass'
import { choice } from './utils/choice'
import './App.css'
export default class AppClass extends Component {
  constructor(props){
    super(props)
    this.state={
      userSelect:null,
      computerSelect:null,
      result:0,
      start:false,
      
    }
  }
  play=(userChoice)=>{
this.setState({start:true,userSelect:choice[userChoice]})
let computerChoice=this.randomChoice()
this.setState({computerSelect:computerChoice})
let finalResult=this.judgement(choice[userChoice],computerChoice)
this.setState({result:finalResult})
  }
  judgement=(user,computer)=>{
    let userChoice=user.name
  let computerChoice=computer.name
if(userChoice === computerChoice)return 'TIE'
else if(userChoice === 'rock')return computerChoice === 'scissor'?'win':'lose'
else if(userChoice === 'scissor')return computerChoice ==='paper'?'win':'lose'
else if(userChoice ==='paper')return computerChoice === 'rock'?'win':'lose'
  }
  randomChoice=()=>{
    let itemArray = Object.keys(choice) //객체의 키값만 뽑아서 array 로 만들어주는 함수이다.

  let randomItem=Math.floor(Math.random()*itemArray.length);
  let final = itemArray[randomItem]
  
  return choice[final]
  }
  // increase=()=>{
  //   this.setState({counter2:this.state.counter2 +1,value:this.state.value+1})
  // }
  render() {
    return (
      <div className='App'>
      <h1>가위 바위 보</h1>
      <div className='game'>
    <div className="main">
      <BoxClass start={this.state.start} user={'You'} result={this.state.result === 'win'?'win':(this.state.result ==='lose'?'lose':'tie')} item={this.state.userSelect}/>
      <BoxClass start={this.state.start} user={'Computer'} result={this.state.result ==='win'?'lose':(this.state.result ==='lose'?'win':'tie')} item={this.state.computerSelect}/>
    </div>
    <div className='Btns' >
      <button onClick={()=>this.play("scissor")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCn2leEIpH_ZiItC5OYvzuovtDOwEJjJpGbn9bxuGy5CL0J4m3wT_VGs0YPZPfI0uWUHc&usqp=CAU'/></button>
      <button onClick={()=>this.play("rock")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qf0Cx2RF1t8E2CvBv3rlLokMAPerExNukiYjzW6gauslKFMhClVdlqXVo7tCBATt898&usqp=CAU'/></button>
      <button onClick={()=>this.play("paper")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTbbrGVZtq0U6Eb0BE06g5gLmK1PmtShNm3aZlNPKJ5Ty6-8B8VjMeHQqCeYbSZaRv8c&usqp=CAU'/></button>
    </div>
    </div>
    </div>
    )
  }
}
