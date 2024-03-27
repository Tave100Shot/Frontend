import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { SetModal, SetTwoFactorAuthStatus } from "../../redux/actions/mainAction";
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import backjoonAuth from '../../assets/imgs/baekjoon_icon.png'
import step1 from '../../assets/imgs/step1.png'
import step2 from '../../assets/imgs/step2.png'
import step3 from '../../assets/imgs/step3.png'
import leftBtn from '../../assets/imgs/left_black.png'
import rightBtn from '../../assets/imgs/right_black.png'
import * as m from "../../styles/main/loginModalStyle"

const AddAuthModal = ({isOpen, onRequestClose}) => {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem('accessToken');
  const secondAuthStatus = localStorage.getItem('secondAuthStatus');
  
  const customStyles = {
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    content: {
        width: '66rem',
        height: '46rem',
        inset: 'unset',
        margin: '50vh auto',
        padding: 0,
        transform: 'translateY(-50%)',
        position: 'relative',
        border : 'none',
        borderRadius : '1.5rem',
        overflow:
        'hidden',
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
		prevArrow:
      <m.PrevBtn>
        <img src={leftBtn}/>
      </m.PrevBtn>,
		nextArrow: 
      <m.NextBtn>
        <img src={rightBtn}/>
      </m.NextBtn>,
  };


  const setTier = async () => {
    // console.log("내 토큰 : ", storedToken);
    // console.log("내 토큰 : ", `Bearer ${storedToken}`);

    try {
      const response = await axios.get('/api/authorization', {
        headers : {
          Authorization : `Bearer ${storedToken}`
        }
      });

      localStorage.setItem('gitLoginId', response.data.result.gitLoginId);
      localStorage.setItem('bojName', response.data.result.bojName);
      localStorage.setItem('bojTier', response.data.result.tier);
      localStorage.setItem('secondAuthStatus', true);

      dispatch(SetTwoFactorAuthStatus(true));
      alert("2차 인증이 완료되었습니다.");
      dispatch(SetModal(false));

      // console.log(response.data);
    } catch (error) {
      if(storedToken === null) {
        alert("로그인 먼저 진행해주세요 :)");
        const loginUrl = "http://43.203.21.185:8080/login/github";
        window.open(loginUrl, "_blank");
      }
      // console.log(error);
      const errorCode = error.response.data.errorCode;
      // console.log(errorCode);
      if(errorCode === 'SOLVED_5001') {
        alert("Solved API 서버에서 오류가 발생했습니다. 어느 시간이 지난 후 다시 시도해주세요.");
      }
      else if(errorCode === 'SOLVED_4001') {
        alert("Solved.ac의 소개글의 아이디와 Github 아이디가 일치하지 않습니다. 점검 후 다시 시도해주세요.");
      }
      else if(errorCode === 'SOLVED_4041') {
        alert("Solved.ac에서 해당 사용자를 찾을 수 없습니다.");
      }
      else if(errorCode === 'GITHUB_4000') {
        alert("Solved.ac의 소개글과 Github 아이디가 일치하지 않습니다. 점검 후 다시 시도해주세요.");
      }
      else if(errorCode === 'GITHUB_4001') {
        alert("Github 인증 Repository description과 백준 아이디가 일치하지 않습니다. 점검 후 다시 시도해주세요.");
      }
      else if(errorCode === 'GITHUB_4040') {
        alert("Github 인증 Repository를 찾을 수 없습니다.");
      }
      else if(errorCode === 'GITHUB_4041') {
        alert("Github 인증 Repository description을 찾을 수 없습니다.");
      }
      else if(errorCode === 'GITHUB_5000') {
        alert("Github API 서버에서 오류가 발생했습니다. 어느 시간이 지난 후 다시 시도해주세요.");
      }
      else if(errorCode === 'JWT_4010') {
        alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
      }
      else if(errorCode === 'JWT_4001') {
        alert("로그인에 실패하였습니다. 다시 로그인 해주세요 :)");
      }

      else {
        alert("2차 인증을 실패하였습니다.");
      }
    }
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <m.ModalContainer className='modalContainer'>
        <m.StyledSlider className='sliderContainer' {...settings} >
          <m.Slide >
            <m.SlideBox>
              <img src={backjoonAuth} alt='backjoon' className='step1'/>
                {
                  secondAuthStatus === 'true' ?
                    <m.SlideTextBox>
                      <h2>BOJ UPDATE</h2>
                      <p>
                        다음과 같은 경우, <span>백준 갱신</span>을 할 수 있습니다<br/>
                        1. 자신의 티어가 올랐다<br/>
                        2. 프로필 사진을 바꾸고 싶다
                      </p>
                    </m.SlideTextBox>
                  : 
                  <m.SlideTextBox>
                    <h2>추가 인증</h2>
                    <p>
                        백발백준은 <span>사용자의 백준 회원 여부</span>를 파악하고 서비스 향상을 위해 <span>첫 로그인 후 한 번만</span> 필요한 <span>추가 인증 절차</span>를 도입하였습니다.
                    </p>
                  </m.SlideTextBox>
                }
            </m.SlideBox>
          </m.Slide>
          <m.Slide >
            <m.SlideBox>
              <img src={step1} alt='step1' className='step1'/>
                <m.SlideTextBox>
                  <h2>1. Github에서 Repository 생성</h2>
                  <p>
                    <span>'taveshot'</span>이라는 이름을 가진<br/> <span>Public</span>의 <span>새로운 Repository</span>를 생성해주세요.
                  </p>
                </m.SlideTextBox>
            </m.SlideBox>
          </m.Slide>
          <m.Slide>
            <m.SlideBox>
              <img src={step2} alt='step2' className='step2'/>
                <m.SlideTextBox>
                  <h2>2. Repository Description 작성</h2>
                  <p>
                    새로운 Repository의 <span>Description</span>에 <br/>자신의 <span>백준 닉네임</span>을 적어주세요.
                  </p>
                </m.SlideTextBox>
            </m.SlideBox>
          </m.Slide> 
          <m.Slide>
            <m.SlideBox>
              <img src={step3} alt='step3' className='step3'/>
                <m.SlideTextBox>
                  <h2>3. 백준 소개글 수정</h2>
                  <p>
                    Solved.ac 사이트에 로그인한 뒤, <br/><span>상태 메세지</span>에 본인의 <span>Github 아이디</span>를 적어주세요.
                    <br/>
                    (백준 프로필 소개글 X)
                  </p>
                </m.SlideTextBox>
            </m.SlideBox>
          </m.Slide> 
           <m.Slide>
              <m.SlideTextBox className='lastStepContainer'>
                <h2 className='lastStep'>추가 인증 절차 완료</h2> 
                <p className='lastStep'>
                  Github Repository의 Description에 적은 <span>백준 이름</span>과 백준 소개글에 적은 <span>깃허브 아이디</span>가 <span>일치</span>하면, 추가 인증이 <span>완료</span>됩니다 :)
                </p>
                <br/>
                <p>
                  하단의 <span>AUTHENTICATION 버튼</span>을 눌러 인증을 진행하세요.
                </p>
                <button onClick={setTier}>AUTHENTICATION</button>
              </m.SlideTextBox>
          </m.Slide> 
        </m.StyledSlider>
      </m.ModalContainer>
    </Modal>
  )
}

export default AddAuthModal;