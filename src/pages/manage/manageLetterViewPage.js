import HeaderManage from "../../components/manage/headerManage";
import * as mm from "../../styles/manage/manageMainStyle"
import * as ml from "../../styles/manage/manageLetterStyle"
import closeIcon from "../../assets/imgs/close.png"
import RecentLetter from "../../components/manage/letter/recentLetter";
import LetterCalender from "../../components/manage/letter/letterCalender";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { SetLetterInfo } from "../../redux/actions/letterAction";

// Letter 상세 보기 페이지
const ManageLetterView = () => {//변수 할당시켜서 사용
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  let letterInfoList = useSelector( (state)=>{ return state.letterInfo } );

  const moveToBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  const moveToEdit = () => {
    navigate(`/manager/letter/edit/${letterInfoList.newsletterId}`);
  }

  useEffect(()=> {
    const storedToken = localStorage.getItem('accessToken');
    const letterId = Number(location.pathname.match(/\d+$/)[0]);

    // 전체 글 조회 API 호출
    axios.get(`/api/admin/newsletter/${letterId}`, {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
    .then(response => {
      // console.log(response.data.result);
      const letterInfoArray = response.data.result;
      dispatch(SetLetterInfo(letterInfoArray));
    })
    .catch(error => {
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode ==='JWT_4010') {
        alert('로그인 유지 시간이 만료되었습니다. 다시 로그인 해주세요 :)')
      } else {
        alert('문제가 발생했습니다. 다시 로그인 해주세요 :)')
      }

    });
  },[])


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
      </ml.LetterViewkContainer>
    </mm.ManageContainer>
  )
}
export default ManageLetterView;