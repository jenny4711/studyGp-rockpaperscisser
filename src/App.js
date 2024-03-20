import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { choice } from './utils/choice';
function App() {
  const [userSelect,setUserSelect]=useState(null)
  const [computerSelect,setComputerSelect]=useState(null)
  const [result,setResult]=useState("")
  const [start,setStart]=useState(false)
 const play=(userChoice)=>{
  setStart(true)
  setUserSelect(choice[userChoice])
let computerChoice=randomChoice()
setComputerSelect(computerChoice)
let finalResult=judgement(choice[userChoice],computerChoice)
setResult(finalResult)
  
 };
 const judgement=(user,computer)=>{
  let userChoice=user.name
  let computerChoice=computer.name
if(userChoice === computerChoice)return 'TIE'
else if(userChoice === 'rock')return computerChoice === 'scissor'?'win':'lose'
else if(userChoice === 'scissor')return computerChoice ==='paper'?'win':'lose'
else if(userChoice ==='paper')return computerChoice === 'rock'?'win':'lose'
 }
const randomChoice=()=>{
  let itemArray = Object.keys(choice) //객체의 키값만 뽑아서 array 로 만들어주는 함수이다.

  let randomItem=Math.floor(Math.random()*itemArray.length);
  let final = itemArray[randomItem]
  
  return choice[final]
}
  
  return (
    <div className='App'>
      <h1>가위 바위 보</h1>
      <div className='game'>
    <div className="main">
      <Box start={start} user={'You'} result={result === 'win'?'win':(result ==='lose'?'lose':'tie')} item={userSelect}/>
      <Box start={start} user={'Computer'} result={result ==='win'?'lose':(result ==='lose'?'win':'tie')} item={computerSelect}/>
    </div>
    <div className='Btns' >
      <button onClick={()=>play("scissor")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCn2leEIpH_ZiItC5OYvzuovtDOwEJjJpGbn9bxuGy5CL0J4m3wT_VGs0YPZPfI0uWUHc&usqp=CAU'/></button>
      <button onClick={()=>play("rock")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qf0Cx2RF1t8E2CvBv3rlLokMAPerExNukiYjzW6gauslKFMhClVdlqXVo7tCBATt898&usqp=CAU'/></button>
      <button onClick={()=>play("paper")}><img className='btnImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTbbrGVZtq0U6Eb0BE06g5gLmK1PmtShNm3aZlNPKJ5Ty6-8B8VjMeHQqCeYbSZaRv8c&usqp=CAU'/></button>
    </div>
    </div>
    </div>
  );
}

export default App;
