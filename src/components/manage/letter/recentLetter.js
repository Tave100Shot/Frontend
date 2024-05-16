import { useNavigate } from "react-router-dom";
import * as ml from "../../../styles/manage/manageLetterStyle";
import * as mm from "../../../styles/manage/manageMainStyle"
import PaginationButton from "../paginationButton";
import RecentLetterItem from "./recentLetterItem";
import axios from "axios";
import { SetDevLetter, SetEmployLetter } from "../../../redux/actions/letterAction";
import { useDispatch } from "react-redux";

const RecentLetter = () => {
  const navigate = useNavigate();

  // Letter 종류별 조회 페이지 이동
  const moveToAllLetter = () => {
    navigate('/manager/letter/all');  // 전체 보기 페이지로 이동
  }
  
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
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
     </mm.ManageSmallList>
     {/* <PaginationButton/> */}
    </ml.HalfLetterContainer>
  )
}
export default RecentLetter;