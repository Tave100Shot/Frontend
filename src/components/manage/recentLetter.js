import * as ml from "../../styles/manage/manageLetterStyle";
import * as mm from "../../styles/manage/manageMainStyle"
import RecentLetterItem from "./recentLetterItem";

const RecentLetter = () => {
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>Recent Letter.</h1>
        <div>
          <button className="AllLetterBtn">See All</button>
          <button className="AllLetterBtn">Search</button>
        </div>
      </div>
      <mm.ManageList>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
        <RecentLetterItem/>
     </mm.ManageList>
    </ml.HalfLetterContainer>
  )
}
export default RecentLetter;