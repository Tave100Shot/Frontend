import * as mm from "../../../styles/manage/manageMainStyle"
import * as ml from "../../../styles/manage/manageLetterStyle"
import AllLetterItem from "./allLetterItem";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";
import { SetDevLetter } from "../../../redux/actions/letterAction";



const DevLetterList = () => {
  const dispatch = useDispatch();
  
  let devLetterArray = useSelector( (state)=>{ return state.devLetterList } );
  const storedToken = localStorage.getItem('accessToken');

  const onLoadMore = () => {

    // DEV-Letter 글 조회 추가 API 호출
    axios.get('/api/admin/newsletter?inputCategory=DEV_LETTER', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      console.log(response.data.result.newsletterResponses);
      const devLetterArray = response.data.result.newsletterResponses;

      // Redux State 내에 결과값 저장
      dispatch(SetDevLetter(devLetterArray));

    })
    .catch(error => {
      console.error(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
    });
  };
  
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
                newsletterId = {letterId.newsletterId}
                title = {letterId.title}
                writtenTime = {letterId.writtenTime}
              />
            )
          })}
      </mm.ManageSmallList>
    </ml.HalfLetterContainer>
  )

}
export default DevLetterList;