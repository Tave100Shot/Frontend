import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainButton from "../../components/main/mainButton";
import TaveAnimation from "../../components/main/tave_animation";
import * as w from "../../styles/mainPageStyle";
import Modal from 'react-modal';
import account_white from "../../assets/imgs/verified-account-white.png"
import AddAuthModal from "../../components/main/addAuthModal";
import { useHistory , useLocation, useNavigate } from "react-router-dom";
import { SetModal } from "../../redux/actions/mainAction";
import { useDispatch, useSelector } from "react-redux";

const MainPage = ({click}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Login 관련 변수
  const [memberId, setMemberId] = useState(null);
  const [gitLoginId, setGitLoginId] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState(null);
  const [login, setLogin] = useState(false);    // 로그인 여부 변수
  const [authSecond, setSuthSecond] = useState(false);    // 2차 인증 여부
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    setMemberId(searchParams.get('memberId'))
    setGitLoginId(searchParams.get('gitLoginId'))
    setProfileImgUrl(searchParams.get('profileImgUrl'))

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
      <Header click={click} authSecond={authSecond}/>
      <TaveAnimation/>
      <w.ButtonWrapper>
        <MainButton 
          text={'GET SOLUTION'} 
          navigatePage={'/search-solution'}
          lockImg={'none'}
        />
        { !login ? 
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