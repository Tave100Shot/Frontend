import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainButton from "../../components/main/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";
import Modal from 'react-modal';
import account_white from "../../assets/imgs/verified-account-white.png"
import AddAuthModal from "../../components/main/addAuthModal";
import { useHistory , useLocation, useNavigate } from "react-router-dom";
import { SetModal, SetToken } from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from "react-redux";

const MainPage = ({click}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Login 관련 변수
  const [memberId, setMemberId] = useState(null);
  const [gitLoginId, setGitLoginId] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [authSecond, setSuthSecond] = useState(false);    // 2차 인증 여부
  
  // 로그인 이후 params 받아오기
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    setAccessToken(searchParams.get('token'));
    setMemberId(searchParams.get('memberId'));
    setGitLoginId(searchParams.get('gitLoginId'));
    setProfileImgUrl(searchParams.get('profileImgUrl'));
    dispatch(SetToken(searchParams.get('token')));

    localStorage.setItem('accessToken', searchParams.get('token'));

  }, [location]);
  
  // 2차 인증 여부에 따른 modal 띄우기
  // useEffect(() => {

  // }, [])

  // Modal 관련 변수
  let modalState = useSelector( (state)=>{ return state.modalState } );


  const closeModal = () => {
    dispatch(SetModal(false))
  };

  // console.log(memberId)
  // console.log(gitLoginId)
  // console.log(profileImgUrl)

  return (
    <div>
      <Header click={click} authSecond={authSecond}/>
      <TaveAnimation authSecond={authSecond}/>
      <w.ButtonWrapper>
        <MainButton 
          text={'GET SOLUTION'} 
          navigatePage={'/search-solution'}
          lockImg={'none'}
        />
        { !authSecond ? 
          <MainButton 
            text={'GET RECOMMEND'} 
            navigatePage={''}
            lockImg={'locked'}
          />
        : 
          <MainButton 
            text={'GET RECOMMEND'} 
            navigatePage={'/recommend'}
            lockImg={'unlocked'}
          />
        }
      </w.ButtonWrapper>
      <AddAuthModal isOpen={modalState} onRequestClose={closeModal} />
    </div>
  
  )
}

export default MainPage;