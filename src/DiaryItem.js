import { useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
}) => {
  //수정버튼을 누르면 내용부가 변하면서 수정 가능하도록 변경하기 위해 state를 이용한다.
  //isEdit은 수정중인지 아닌지를 나타내는거다 따라서 초기값을 false로 지정함
  const [isEdit, setIsEdit] = useState(false);
  //에딧을 눌렀을때 isEdit의 상태를 변경시킬 수 있는 함수를 작성 "토글"
  const toggleIsEdit = () => setIsEdit(!isEdit);

  //수정되는 콘텐츠를 받기위한 함수
  //여기 초기값으로 content로 하는 이유는 수정버튼을 클릭했을때 내용이 나오도록 하기 위해
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  //삭제부의 코드가 길어서 가독성이 좋게 하기위해 함수로 뺀다
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;