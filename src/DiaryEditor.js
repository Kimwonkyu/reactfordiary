//입력값을 처리하기 위해 useState를 사용한다.
import {useState} from "react";

const DiaryEditor =() => {
    //1. 작성자를 넣기 위해 선언
    const [author, setAuthor] = useState("");
    //className을 최상위 태크와 맞춰준다 (찾기 편하라고..CSS)
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input/>
        </div>
    </div>;
};

export default DiaryEditor;