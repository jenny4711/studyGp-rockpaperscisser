import React from 'react';
import './Box.css'
const Box = ({ start,user,result,item}) => {
console.log(result,'result!')
  return (
    <div className={result ==='win'?'win':(result ==='lose'?'lose':'Box')}>
      <h2 >{user}</h2>
      <img className='Box_img' src={item?.img}/>
      <h2>{start?result:""}</h2>
    </div>
  );
}

export default Box;
