import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";
import { useSelector } from "react-redux";

const DevLetterList = () => {
  let devLetterArray = useSelector( (state)=>{ return state.devLetterList } );
  console.log(devLetterArray);

  
  return (
    <ml.HalfLetterContainer>
      <div className="topBar">
        <h1>DEV Letter.</h1>
      </div>
      <mm.ManageSmallList>
        {devLetterArray
          .map((letterId) => {
            return (
              <AllLetterItem
                title = {letterId.title}
                content = {letterId.content}
                writtenTime = {letterId.writtenTime}
              />
            )
          })

        }
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )

}
export default DevLetterList;