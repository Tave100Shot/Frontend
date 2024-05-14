import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import DevLetterList from "../../components/manage/letter/devLetterList";
import EmployLetterList from "../../components/manage/letter/employLetterList";
const ManageAllLetter = () => {

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterContainer>
        <DevLetterList/>
        <EmployLetterList/>
      </ml.LetterContainer>
    </mm.ManageContainer>
  )
}
export default ManageAllLetter;