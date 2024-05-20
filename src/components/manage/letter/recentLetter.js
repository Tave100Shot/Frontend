import { useNavigate } from "react-router-dom";
import * as ml from "../../../styles/manage/manageLetterStyle";
import * as mm from "../../../styles/manage/manageMainStyle"
import PaginationButton from "../paginationButton";
import RecentLetterItem from "./recentLetterItem";
import axios from "axios";
import { SetDevLetter, SetEmployLetter, SetRecentLetter } from "../../../redux/actions/letterAction";
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
        console.error(error);
        const errorCode = error.response.data.errorCode;
        console.log(errorCode);
    });
  }, []);
  
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