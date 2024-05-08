import { useNavigate } from "react-router-dom";
import * as ml from "../../styles/manage/manageLetterStyle";
import * as mm from "../../styles/manage/manageMainStyle"
import PaginationButton from "./paginationButton";
import RecentLetterItem from "./recentLetterItem";

const RecentLetter = () => {
  const navigate = useNavigate();
  const moveToAllLetter = () => navigate('/manage/letter/all');
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
     <PaginationButton/>
    </ml.HalfLetterContainer>
  )
}
export default RecentLetter;