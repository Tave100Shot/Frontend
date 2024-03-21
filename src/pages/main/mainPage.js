import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { SetModal, SetTodayQuestion, SetToken } from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/header";
import TaveAnimation from "../../components/main/taveAnimation";
import AddAuthModal from "../../components/main/addAuthModal";
import AltButton from "../../components/main/altButton";
import * as w from "../../styles/main/mainPageStyle";
import * as b from "../../styles/main/mainButtonStyle";
import TodayQuestion from "../../components/main/todayQuestions";


const MainPage = ({click}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Login 관련 변수
  let secondAuthStatus = localStorage.getItem('secondAuthStatus');
  const accessToken = localStorage.getItem('accessToken');

  // console.log("2차 인증 여부 : ", secondAuthStatus);
  
  // Modal 관련 변수
  let modalState = useSelector( (state)=>{ return state.modalState } );
  
  const closeModal = () => {
    dispatch(SetModal(false))
  };

  // Button 관련
  const [todayShowState, setTodayShowState] = useState(false);
  console.log("오늘의 추천 문제 보여주기 여부 : ", todayShowState)

  const moveToSolution = () => {
    navigate('/search-solution')
  }


  // 로그인 이후 params 받아오기
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('token') !== null) {
      dispatch(SetToken(searchParams.get('token')));
      localStorage.setItem('accessToken', searchParams.get('token'));
      localStorage.setItem('profileImg', searchParams.get('profileImgUrl'));
    }
  
    const gitLoginId = localStorage.getItem('gitLoginId');
    const accessToken = localStorage.getItem('accessToken');
  
    if (gitLoginId && accessToken) {
      localStorage.setItem('secondAuthStatus', true);
    } else {
      localStorage.setItem('secondAuthStatus', false);
    }
  
    // 화면 전환
    if (accessToken) {
      navigate('/');
    }
  }, []);

  // console.log(memberId)
  // console.log(gitLoginId)
  // console.log(profileImgUrl)

  return (
    <div>
      <Header click={click} secondAuthStatus={secondAuthStatus}/>
      {
        !todayShowState  ?
          <TaveAnimation />
        :
          <TodayQuestion />
      }
      <w.ButtonWrapper>
        <b.MainButton 
          onClick={moveToSolution}
        >
          {'GET SOLUTION'}
        </b.MainButton>
        { todayShowState ? 
          <b.MainButton className="colorChange"
            onClick={() => {setTodayShowState(false)}}
          >
            {"GO BACK"}
          </b.MainButton> : 
          <b.MainButton 
            onClick={() => {setTodayShowState(true)}}
          >
            {"TODAY'S QUESTION"}
          </b.MainButton>
        }
        { (accessToken !== null) && secondAuthStatus === 'true' ? 
          <AltButton/>
        : 
          <></>
        }
      </w.ButtonWrapper>
      <AddAuthModal isOpen={modalState} onRequestClose={closeModal} />
    </div>
  
  )
}

export default MainPage;