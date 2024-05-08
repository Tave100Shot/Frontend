import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import RecentLetter from "../../components/manage/recentLetter";
import LetterCalender from "../../components/manage/letterCalender";
const ManageLetter = () => {

  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterContainer>
        <RecentLetter/>
        <LetterCalender/>
      </ml.LetterContainer>
    </mm.ManageContainer>
  )
}
export default ManageLetter;