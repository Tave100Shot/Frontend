import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import MemberList from "../../components/manage/member/memberList";

// Letter 메인 페이지
const ManageMember = () => {

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterContainer>
        <MemberList/>
      </ml.LetterContainer>
    </mm.ManageContainer>
  )
}
export default ManageMember;