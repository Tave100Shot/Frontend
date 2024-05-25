import { useNavigate } from "react-router-dom";
import * as ml from "../../../styles/manage/manageLetterStyle";
import * as mm from "../../../styles/manage/manageMainStyle";
import * as mem from "../../../styles/manage/manageMemberStyle";
// import * as ml from "../../../styles/manage/manageLetterStyle";
// import * as mm from "../../../styles/manage/manageMainStyle"
import MemberHeader from "../member/memberHeader";

const MemberList = () => {
  const navigate = useNavigate();
  const moveToAllLetter = () => navigate('/manager/letter/all');
  return (
    <mem.MemberContainer>
      <div className="topBar">
        <h1>회원 명단</h1>
        <div>
          <button className="AllLetterBtn" onClick={moveToAllLetter}>See All</button>
          <button className="AllLetterBtn">Search</button>
        </div>
      </div>
      <mem.ManageMemberList>
        <MemberHeader/>
        <MemberHeader/>
        <MemberHeader/>
        <MemberHeader/>
        <MemberHeader/>
        <MemberHeader/>
     </mem.ManageMemberList>
    </mem.MemberContainer>
  )
}
export default MemberList;