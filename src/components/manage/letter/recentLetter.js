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
  const dispatch = useDispatch();


  // Letter 종류별 조회 페이지 이동
  const moveToAllLetter = () => {
    const storedToken = localStorage.getItem('accessToken');

    // 전체 글 조회 API 호출
    axios.get('/api/admin/newsletter?inputCategory=ALL', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      // console.log(response.data.result.newsletterResponses);
      const devLetterArray = response.data.result.newsletterResponses.filter(item => item.letterType === 'DEV_LETTER');
      const employLetterArray = response.data.result.newsletterResponses.filter(item => item.letterType === 'EMPLOYEE_LETTER');
      // console.log(devLetterArray);
      // console.log(employLetterArray);
      dispatch(SetDevLetter(devLetterArray));
      dispatch(SetEmployLetter(employLetterArray));
      navigate('/manager/letter/all');
    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      console.log(errorCode);

    });

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