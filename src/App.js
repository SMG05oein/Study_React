import './App.css';
import Box from './component/Box';

//가위바위보 게임
function App() {
  return (
    <div>
      <div className="main" >
      <Box />
      <Box title="컴퓨터"/>
      </div>
        <div className="btn">
          <button>가위</button>
          <button>바위</button>
          <button>보</button>
        </div>
    </div>
  );
}

export default App;
