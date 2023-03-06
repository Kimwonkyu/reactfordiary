import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {/*리액트에서는 .map을 리스트에서 사용하여 JSX 요소 목록을 랜더링할 때 유용하게 사용*/}
        {diaryList.map((it) => (
          /*리스트는 이제 아이템에서 받아오도록 변경, 내용은 스프레드 연산자를 이용하여 모두 받음*/
          <DiaryItem key={it.id} {...it} ondDelete={onDelete} />
          /*<div key={it.id}>
                        <div>작성자 : {it.author}</div>
                        <div>일기 : {it.content}</div>
                        <div>감정 : {it.emotion}</div>
                        <div>작성시간(ms) : {it.created_date}</div>
                    </div>*/
        ))}
      </div>
    </div>
  );
};

//만약에 data리스트가 넘어오지 않을 경우를 대비하여 default값을 지정한다.
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;