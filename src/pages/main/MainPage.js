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
import AltButton from "../../components/main/altButton";

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
        { secondAuthStatus === 'true' ? 
          <MainButton 
          text={'GET RECOMMEND'} 
          navigatePage={'/recommend'}
          lockImg={'unlocked'}
        />
        : 
        <MainButton 
          text={'GET RECOMMEND'} 
          navigatePage={''}
          lockImg={'locked'}
        />
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