//입력값을 처리하기 위해 useState를 사용한다.
import {useState} from "react";

const DiaryEditor =() => {
    //1. 작성자를 넣기 위해 선언 (input 테그에 작성자를 넣기 위해 author를 지정 그리고 상태변화를 나타내기 위해 setAuthor 지정
    const [author, setAuthor] = useState("DAN");
    //className을 최상위 태크와 맞춰준다 (찾기 편하라고..CSS)
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input value={author}
                   onChange={(e) =>{console.log(e.target.value);
                   setAuthor(e.target.value);//상태를 그 값이 변경 될때마다 업데이트
            }
            }/>
        </div>
    </div>;
};

export default DiaryEditor;