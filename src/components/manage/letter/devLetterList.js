import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetDevLetter } from "../../../redux/actions/letterAction";
import { useEffect, useState, useRef } from "react";

const DevLetterList = () => {
  const dispatch = useDispatch();
  
  let devLetterArray = useSelector( (state)=>{ return state.devLetterList } );
  const storedToken = localStorage.getItem('accessToken');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMoreData) {
          setPage((prevPage) => prevPage + 1);
          onLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading, hasMoreData]);

  const onLoadMore = () => {
    setIsLoading(true);

    // DEV-Letter 글 조회 추가 API 호출
    axios.get(`/api/admin/newsletter?inputCategory=DEV_LETTER&page=${page}`, {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      // console.log(response.data.result.newsletterResponses);
      const newDevLetterArray = response.data.result.newsletterResponses;
      console.log('newDevLetterArray : ', newDevLetterArray);

      // Redux State 내에 결과값 저장
      dispatch(SetDevLetter([...devLetterArray, ...newDevLetterArray]));
      setIsLoading(false);

      // 더 이상 데이터가 없으면 hasMoreData를 false로 설정
      if (newDevLetterArray.length === 0) {
        setHasMoreData(false);
      }
    })
    .catch(error => {
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode ==='JWT_4010') {
        alert('로그인 유지 시간이 만료되었습니다. 다시 로그인 해주세요 :)')
      } else {
        alert('문제가 발생했습니다. 다시 로그인 해주세요 :)')
      }
      setIsLoading(false);
    });
  };
  
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
                key={letterId.id}
                newsletterId = {letterId.newsletterId}
                title = {letterId.title}
                writtenTime = {letterId.writtenTime}
              />
            )
          })}
        {isLoading && <p className="loading"></p>}
        <div ref={observerRef} style={{height : "1rem"}}></div>
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )
}

export default DevLetterList;
