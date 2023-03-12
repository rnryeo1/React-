/* esLint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {


  //state 새로고침 없어도 변경됨.
  //중요한 data는 state로 관리 
  let [글제목,글제목변경] = useState(['남자 코트 추천','우동맛집','파이썬독학']); 
  let [따봉, 따봉변경] = useState(0);
  let posts = '맛집';

  function 제목바꾸기(){
    var newArray = [...글제목]; //deep copy 
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
      <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>★</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>


      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}


export default App;
