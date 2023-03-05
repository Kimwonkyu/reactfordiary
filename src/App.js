import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

//우선은 dummy로 List를 만들어 일기 리스트에 뿌려본다.
// const dummyList = [
//     {
//         id : 1,
//         author : "댄댄댄",
//         content : "하이",
//         emotion: 5,
//         created_date: new Date().getTime()
//     },
//     {
//         id : 2,
//         author : "댄댄댄2",
//         content : "하이2",
//         emotion: 2,
//         created_date: new Date().getTime()
//     },
//     {
//         id : 3,
//         author : "댄댄댄3",
//         content : "하이3",
//         emotion: 4,
//         created_date: new Date().getTime()
//     },
//     {
//         id : 4,
//         author : "댄댄댄4",
//         content : "하이4",
//         emotion: 1,
//         created_date: new Date().getTime()
//     },
//     {
//         id : 5,
//         author : "댄댄댄5",
//         content : "하이5",
//         emotion: 5,
//         created_date: new Date().getTime()
//     }
// ]


const App =() => {
    //state를 이용하여 같은 레벨인 diarylist와 diaryitem간의 data이동을 할 수 있게 한다.
    const [data,setData] = useState([]);//배열로 값을 받는다

    const dataId = useRef(0)

    //새로운 일기를 추가하는 변수를 생성
    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id : dataId.current,
        };
        dataId.current +=1;//id 값이 다음에는 증가를 해야하기 때문
        setData([newItem, ...data]);//상태값을 변경 할 수 있는 setData
    };

  return (
      <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data}/>{/*dummyList를 prop으로 전달 ==> dummy 삭제*/}
      </div>
  )
}

export default App;