//입력값을 처리하기 위해 useState를 사용한다.
//Dom 요소에 접근하기 위해 useRef라는 리엑트의 기능을 사용한다.
import {useRef, useState} from "react";

const DiaryEditor =({onCreate}) => {
    //요소에 접근하려는 목적은 작성자와, 본문이 비어있을 경우 alert을 사용하기 보다 포커스를 해주기 위함
    const  authorInput = useRef();
    const  contentInput = useRef();

    //*** 앞으로 동작이 비슷한 state끼리 묶을 예정이다. 효율성을 위해 아래 코드 작성***
    const [state, setState] = useState({
       author:"",
       content:"",
       emotion:1,
    });

    //아래 onChange의 이벤트 핸들러도 중복이 되니까 이것도 단순화 시켜야 한다.
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    //저장버튼 만들기
    const handleSubmit = ()=> {
        //작성자를 반드시 입력 받도록 수정
        if(state.author.length < 1){
            //alert("작성자는 최소 1글자 이상 입력해주세요");
            //focus (위 alert은 이제 필요 없어짐)
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 5 ){
            //alert("일기 본문은 최소 5글자 이상 입력해주세요");
            //focus
            contentInput.current.focus();//content에도 포커스 기능 넣어주기
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장성공");
        //작성된 내용은 초기화 해야한다
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    };


    //처음 선언부 삭제
    //1. 작성자를 넣기 위해 선언 (input 테그에 작성자를 넣기 위해 author를 지정 그리고 상태변화를 나타내기 위해 setAuthor 지정
    //const [author, setAuthor] = useState("");
    //const [content,setContent] = useState("");//본문에 작성할 내용을 위해 content변수 선언

    //className을 최상위 태크와 맞춰준다 (찾기 편하라고..CSS)
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
                   ref={authorInput} //이걸로 input 태크에 접근이 가능해짐
                   name="author"
                   value={state.author}

                //onchange에 대한 핸들러 함수를 생성했으니 setState에서는 이 핸들러를 받도록 변경
/*                   onChange={(e) =>{
                   setState({
                       //!**선언하는 값 ex.author등등이 만약 100개가 넘는다면 현재 위치로 예를 들자면
                       //author하나만 바꾸면 되는데 다른 변수들을 다 적는건 낭비이다 따라서
                       //필요한 변수만 변경하도록 하고 아래 ...을 써서 다른 "객체"는 그대로 받도록 단순화 시킨다.
                       ...state,
                       //author가 변하니까 타켓의 벨류가 넘어온다
                       author: e.target.value,
                       //content는 변함이 없으니 state의 content이다.
                       //content: state.content, --> 여기서는 author만 변경되기 때문에 삭제한데 ...state로 대체
                   });
                   //아래 호출부는 삭제하고 setState로 변경
                   //setAuthor(e.target.value);//상태를 그 값이 변경 될때마다 업데이트
            }
            }*/
                   onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
                ref={contentInput}
                name="content"
                value={state.content}

                //onchange에 대한 핸들러 함수를 생성했으니 setState에서는 이 핸들러를 받도록 변경
/*                   onChange={(e) =>{
                   setState({
                       //여기는 content가 변하는 부분이기 때문에 author는 그대로 둠
                       //author: state.author,
                       ...state,//여기서도 필요한건 content 만 필요하기 때문에 이렇게 객체롤 통으로 받는다.
                       content: e.target.value
                   });
                   //아래 호출부는 삭제하고 setState로 변경
                   //setContent(e.target.value);
            }
            }*/
              onChange={handleChangeState}
            />

        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>

    </div>;
};

export default DiaryEditor;