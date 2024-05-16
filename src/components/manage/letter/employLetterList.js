import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";
import { useSelector } from "react-redux";

const EmployLetterList = () => {
  let employLetterArray = useSelector( (state)=>{ return state.employLetterList } );
  console.log(employLetterArray);
  
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>EMPLOY Letter.</h1>
      </div>
      <mm.ManageSmallList>
      {employLetterArray
          .map((letterId) => {
            return (
              <AllLetterItem
                title = {letterId.title}
                content = {letterId.content}
                writtenTime = {letterId.writtenTime}
              />
            )
          })}
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )

}
export default EmployLetterList;