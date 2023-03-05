import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

//우선은 dummy로 List를 만들어 일기 리스트에 뿌려본다.
const dummyList = [
    {
        id : 1,
        author : "댄댄댄",
        content : "하이",
        emotion: 5,
        created_date: new Date().getTime()
    },
    {
        id : 2,
        author : "댄댄댄2",
        content : "하이2",
        emotion: 2,
        created_date: new Date().getTime()
    },
    {
        id : 3,
        author : "댄댄댄3",
        content : "하이3",
        emotion: 4,
        created_date: new Date().getTime()
    },
    {
        id : 4,
        author : "댄댄댄4",
        content : "하이4",
        emotion: 1,
        created_date: new Date().getTime()
    },
    {
        id : 5,
        author : "댄댄댄5",
        content : "하이5",
        emotion: 5,
        created_date: new Date().getTime()
    }
]


const App =() => {
  return (
      <div className="App">
        <DiaryEditor/>
        <DiaryList diaryList={dummyList}/>{/*dummyList를 prop으로 전달*/}
      </div>
  )
}

export default App;