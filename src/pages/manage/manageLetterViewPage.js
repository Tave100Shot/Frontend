import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import closeIcon from "../../assets/imgs/close.png"
import RecentLetter from "../../components/manage/letter/recentLetter";
import LetterCalender from "../../components/manage/letter/letterCalender";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Letter 상세 보기 페이지
const ManageLetterView = () => {//변수 할당시켜서 사용
  const navigate = useNavigate();

  let letterInfoList = useSelector( (state)=>{ return state.letterInfo } );

  const moveToBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };


  return (
    <mm.ManageContainer>
      <HeaderManage/>
      <ml.LetterViewkContainer>
        <div className="letter-header">
          <div className="letter-info">
            <p>{letterInfoList.letterType}</p>
            <p>|</p>
            <p className="letter-title">{letterInfoList.title}</p>
          </div>
          <div className="letter-close">
            <p>{letterInfoList.writtenTime}</p>
            <img src={closeIcon} onClick={moveToBack} alt='close' className='close'/>
          </div>
        </div>
        <div className="letter-body">
          <p>
            {letterInfoList.content}
          </p>
        </div>
        {letterInfoList.sendStatus ? 
          <></>
          :
          <div className="letter-btn">
            <button>수정</button>
          </div>
        }
      </ml.LetterViewkContainer>
    </mm.ManageContainer>
  )
}
export default ManageLetterView;