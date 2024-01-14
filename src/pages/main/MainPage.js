import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainButton from "../../components/main/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";
import Modal from 'react-modal';
import account_white from "../../assets/imgs/verified-account-white.png"
import AddAuthModal from "../../components/main/addAuthModal";
import { useHistory , useLocation, useNavigate } from "react-router-dom";
import { SetModal, SetToken, SetTwoFactorAuthStatus } from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from "react-redux";

const MainPage = ({click}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Login 관련 변수
  const [authSecond, setSuthSecond] = useState(false);    // 2차 인증 여부
  
  let secondAuthStatus = useSelector( (state)=>{ return state.twoFactorAuthStatus } );
  const gitLoginId = localStorage.getItem('gitLoginId');

  
  // 로그인 이후 params 받아오기
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if(searchParams.get('token') !== null) {
      dispatch(SetToken(searchParams.get('token')));
      localStorage.setItem('accessToken', searchParams.get('token'));
    }
    if (gitLoginId !== null) {
      dispatch(SetTwoFactorAuthStatus(true));
    }
    else {
      dispatch(SetTwoFactorAuthStatus(false));
    }
  }, [location]);

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
      <Header click={click} secondAuthStatus={secondAuthStatus}/>
      <TaveAnimation secondAuthStatus={secondAuthStatus}/>
      <w.ButtonWrapper>
        <MainButton 
          text={'GET SOLUTION'} 
          navigatePage={'/search-solution'}
          lockImg={'none'}
        />
        { !secondAuthStatus ? 
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