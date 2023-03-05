import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App =() => {
  return (
      <div className="App">
        <DiaryEditor/>
        <DiaryList/>
      </div>
  )
}

export default App;