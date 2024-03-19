import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { choice } from './utils/choice';
function App() {
  const [userSelect,setUserSelect]=useState(null)
  const [computerSelect,setComputerSelect]=useState(null)
  const [result,setResult]=useState("")
 const play=(userChoice)=>{
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
    <>
    <div className="main">
      <Box user={'You'} result={result === 'win'?'win':(result ==='lose'?'lose':'tie')} item={userSelect}/>
      <Box user={'Computer'} result={result ==='win'?'lose':(result ==='lose'?'win':'tie')} item={computerSelect}/>
    </div>
    <div className='Btns' >
      <button onClick={()=>play("scissor")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    </>
  );
}

export default App;
