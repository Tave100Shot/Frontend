import * as mem from "../../../styles/manage/manageMemberStyle";
// import * as ml from "../../../styles/manage/manageLetterStyle";
// import * as mm from "../../../styles/manage/manageMainStyle"
import MemberHeader from "../member/memberHeader";

const MemberList = () => {
  return (
    <mem.MemberContainer>
      <div className="topBar">
        <h1>회원 명단</h1>
        <div>
          <button className="AllLetterBtn" >See All</button>
          <button className="AllLetterBtn">Search</button>
        </div>
      </div>
      <mem.ManageMemberList>
        <MemberHeader/>
     </mem.ManageMemberList>
    </mem.MemberContainer>
  )
}
export default MemberList;