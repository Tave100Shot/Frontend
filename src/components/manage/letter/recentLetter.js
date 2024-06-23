import { useNavigate } from "react-router-dom";
import * as ml from "../../../styles/manage/manageLetterStyle";
import * as mm from "../../../styles/manage/manageMainStyle"
import RecentLetterItem from "./recentLetterItem";
import axios from "axios";
import {  SetRecentLetter } from "../../../redux/actions/letterAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const RecentLetter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let recentLetterArray = useSelector( (state)=>{ return state.recentLetterList } );


  // Letter 종류별 조회 페이지 이동
  const moveToAllLetter = () => {
    navigate('/manager/letter/all');  // 전체 보기 페이지로 이동
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    const apiUrl = `/api/admin/newsletter/recent`;
    
    axios.get(apiUrl,{
        headers : {
          Authorization : `Bearer ${storedToken}`
        }})
    .then(response => {
        const recentLetterArray = response.data.result.newsletterSingleResponses;
        dispatch(SetRecentLetter(recentLetterArray));
    })
    .catch(error => {
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode ==='JWT_4001') {
        alert('JWT Token이 올바르지 않습니다.. 다시 로그인 해주세요 :)')
      } 
      else if(errorCode ==='JWT_4010') {
        alert('로그인 유지 시간이 만료되었습니다. 다시 로그인 해주세요 :)')
      }
      else if(errorCode ==='SERVER_500') {
        alert('알 수 없는 서버 에러입니다.')
      } else {
        alert('문제가 발생했습니다. 다시 로그인 부탁드립니다 :)')
      }
    });
  }, [dispatch]);
  
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>Recent Letter.</h1>
        <div>
          <button className="AllLetterBtn" onClick={moveToAllLetter}>See All</button>
          <button className="AllLetterBtn">Search</button>
        </div>
      </div>
      <mm.ManageSmallList>
        {recentLetterArray
          .map((letterId) => {
            return (
              <RecentLetterItem
                newsletterId = {letterId.newsletterId}
                title = {letterId.title}
                letterType = {letterId.letterType}
                writtenTime = {letterId.writtenTime}
              />
            )
          })}
     </mm.ManageSmallList>
     {/* <PaginationButton/> */}
    </ml.HalfLetterContainer>
  )
}
export default RecentLetter;