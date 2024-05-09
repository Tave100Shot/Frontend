import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";

const EmployLetterList = () => {
  
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>EMPLOY Letter.</h1>
      </div>
      <mm.ManageSmallList>
        <AllLetterItem/>
        <AllLetterItem/>
        <AllLetterItem/>
        <AllLetterItem/>
        <AllLetterItem/>
        <AllLetterItem/>
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )

}
export default EmployLetterList;