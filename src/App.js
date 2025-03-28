import './App.css';
import Box from './component/Box';
import { useState } from 'react'; // 수정된 부분

//가위바위보 선택
const choice = {
  rock: {
    name: '주먹',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-WOCZo6ekK9IykrJPTMu3CaZVMvTtJwuqw&s"
  },
  scissors: {
    name: '가위',
    img:"https://cdn.imweb.me/thumbnail/20200515/f5f09c900eed0.png"
  },
  paper: {
    name: '보',
    img:"data:image/jpeg;base64,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"
  }
}

//가위바위보 게임
function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserChoice(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerChoice(choice[computerChoice]); //choice 객체에 computerChoice를 넣어서 키값으로 가져옴
    setResult(judgement(choice[userChoice], choice[computerChoice]));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아 배열로 만듬

    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    // console.log(final);

    return final;
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "비겼습니다";
    } else if (user.name === "가위" && computer.name === "보" || user.name === "바위" && computer.name === "가위" ||user.name === "보" && computer.name === "바위") {
      return "이겼습니다";
    } else {
      return "졌습니다";
    }
  };

  return (
    <div>
      <div className="main" > 
      <Box item={userChoice} result={result}/>
      <Box title="컴퓨터" item={computerChoice} result={result}/>
      </div>

      <div className="btn">
        {/*리액트 주의사항 함수는 콜백함수 형태로 하자*/}
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
