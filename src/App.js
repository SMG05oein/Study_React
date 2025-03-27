import './App.css';
import Box from "./component/Box";

function App() {
  let i = 1;
  return (
    <div>
      <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} />
      <Box count = {i++} />
      <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} content = "음 신기한가?"/>
      <Box count = {i++} />
    </div>
  );
}

export default App;
