import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";
import { SetDevLetter } from "../../../redux/actions/letterAction";
import { useEffect, useState } from "react";



const DevLetterList = () => {
  const dispatch = useDispatch();
  
  let devLetterArray = useSelector( (state)=>{ return state.devLetterList } );
  const storedToken = localStorage.getItem('accessToken');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onLoadMore = () => {

    // DEV-Letter 글 조회 추가 API 호출
    axios.get('/api/admin/newsletter?inputCategory=DEV_LETTER', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      console.log(response.data.result.newsletterResponses);
      const devLetterArray = response.data.result.newsletterResponses;

      // Redux State 내에 결과값 저장
      dispatch(SetDevLetter(devLetterArray));

    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
    });
  };
  /*
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  /*
  handleObserver: 교차점이 발생했을 때 실행되는 콜백 함수.
  entries: 교차점 정보를 담는 배열
  isIntersecting: 교차점(intersection)이 발생한 요소의 상태
  교차점이 발생하면 page 1 증가
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0, //  Intersection Observer의 옵션, 0일 때는 교차점이 한 번만 발생해도 실행, 1은 모든 영역이 교차해야 콜백 함수가 실행.
    });
    // 최하단 요소를 관찰 대상으로 지정함
    const observerTarget = document.getElementById("observer");
    // 관찰 시작
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);
  */
  
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>DEV Letter.</h1>
      </div>
      <mm.ManageSmallList>
        {devLetterArray
          .map((letterId) => {
            return (
              <AllLetterItem
                newsletterId = {letterId.newsletterId}
                title = {letterId.title}
                writtenTime = {letterId.writtenTime}
              />
            )
          })}
          {isLoading && <p>Loading</p>}
          <div id="observer" style={{height : "1rem"}}></div>
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )

}
export default DevLetterList;