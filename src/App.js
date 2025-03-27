import './App.css';
// import Box from "./component/Box";
import {useState} from 'react';

function App() {
  let counter = 0;
  /*useState의 매개변수는 초기값을 나타냄
  반환값은 배열이며 각각 초기값, 초기값을 변경해주는 함수
  함수 반환값은 비동기함수임*/
  const [counter2, setCounter2] = useState(0); 

  const increase = () => {
    counter++;
    setCounter2(counter2+1); //counter2++은 안 됨
  }

  const decrease = () => {
    setCounter2(counter2-1);
  }

  return (
    <div>
      {/* <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} />
      <Box count = {i++} />
      <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} /> */}
      <div>{counter2}</div>
      <button onClick={increase}>증가 버튼</button>
      <button onClick={decrease}>감소 버튼</button>
    </div>
  );
}

export default App;
