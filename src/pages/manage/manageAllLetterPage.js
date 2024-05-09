import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
const ManageAllLetter = () => {

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterContainer>

      </ml.LetterContainer>
    </mm.ManageContainer>
  )
}
export default ManageAllLetter;