import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Timer from './timer';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [showTime, setShowTimer] = useState(true);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setValue((prev) => prev + 1);
    // setValue(value+1); //set함수는 비동기이기에 여러번 호출되면 의도와 다른 결과를 출력 할 수도 있음
  };

  useEffect(() => {
    console.log("앱 시작");
  }, []); //매개변수 2개 콜백 함수 , 배열

  useEffect(() => {
    console.log("업데이트");
  }, [count, value]); //배열 안에 있는 state가 업데이트되면 콜백 함수도 호출 됨

  useEffect(() => {
    console.log("다른 일");
  }, [value]);

  

  return (
    <div className="App">
      {console.log("렌더링!")}
      <h1>{count}</h1>
      <h1>{value}</h1>
      <button onClick={handleClick}>증가</button>
      <button onClick={() => setShowTimer(prev => !prev)}>타이머 보이기</button>
      {showTime && <Timer />}
    </div>
  );
}

export default App;
