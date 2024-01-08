import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import * as m from "../../styles/loginModalStyle"
import { SetModal } from "../../redux/actions/mainAction";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import step1 from '../../assets/imgs/1step_편집.png'
import step2 from '../../assets/imgs/step2_편집.png'
import step3 from '../../assets/imgs/step3_편집.png'
import right_black from "../../assets/imgs/right_black.png"
import right_white from "../../assets/imgs/right_white.png"
import left_black from "../../assets/imgs/left_black.png"
import left_white from "../../assets/imgs/left_white.png"
import ModalItem from './modalItem';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AddAuthModal = ({isOpen, onRequestClose}) => {
  const customStyles = {
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    content: {
        width: '70rem',
        height: '50rem',
        inset: 'unset',
        margin: '50vh auto',
        padding: 0,
        transform: 'translateY(-50%)',
        position: 'relative',
        border : 'none',
        borderRadius : '1.5rem',
        overflow: 'hidden',
    }
  };
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // nextArrow: ,  
    // prevArrow: <>  
  };

  const nextBtn = () => {
    slider.current.slickNext();
  };

  const prevBtn = () => {
    slider.current.slickPrev();
  };

  const slickRef = useRef(null);

  const images = [
    { src: step1, title: 1 },
    { src: step1, title: 2 },
    { src: step1, title: 3 },
    { src: step1, title: 4 },
  ];


  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <m.ModalContainer className='modalContainer'>
        <m.StyledSlider className='sliderContainer' {...settings} ref={slickRef}>
          <m.Slide >
            <img src={step1} alt='backjoon'/>
            <m.SlideItemBox>
              <m.SlideTextBox>
                <h2>추가 인증</h2>
                <p>
                    백발백준은 <span>사용자의 백준 회원 여부</span>를 파악하고 서비스 향상을 위해 <span>첫 로그인 후 한 번만</span> 필요한 <span>추가 인증 절차</span>를 도입하였습니다.
                </p>
              </m.SlideTextBox>
            </m.SlideItemBox>
          </m.Slide>
          <m.Slide >
            <img src={step1} alt='step1' className='step1'/>
            <m.SlideItemBox>
              <m.SlideTextBox>
                <h2>1. Github에서 Repository 생성</h2>
                <p>
                  <span>'taveshot'</span>이라는 이름을 가진 <span>Public</span>의 <span>새로운 Repository</span>를 생성해주세요.
                </p>
              </m.SlideTextBox>
            </m.SlideItemBox>
          </m.Slide>
          <m.Slide>
            <img src={step2} alt='step2' className='step2'/>
            <m.SlideItemBox>
              <m.SlideTextBox>
                <h2>2. Repository Description 작성</h2>
                <p>
                  새로운 Repository에 <span>Description</span>에 자신의 <span>백준 닉네임</span>을 적어주세요.
                </p>
              </m.SlideTextBox>
            </m.SlideItemBox>
          </m.Slide> 
          <m.Slide>
            <img src={step3} alt='step3' className='step3'/>
            <m.SlideItemBox>
              <m.SlideTextBox>
                <h2>3. 백준 소개글 수정</h2>
                <p>
                  백준 사이트에 로그인한 뒤, <span>상태 메세지</span>에 본인의 <span>Github 아이디</span>를 적어주세요.
                  <br/>
                  (Solved.ac의 소개글 X)
                </p>
              </m.SlideTextBox>
            </m.SlideItemBox>
          </m.Slide> 
           <m.Slide>
            <m.SlideItemBox>
              <m.SlideTextBox>
                <h2 className='lastStep'>추가 인증 절차 완료</h2> 
                <p className='lastStep'>
                  Github Repository의 Description에 적은 <span>백준 이름</span>과 백준 소개글에 적은 <span>깃허브 아이디</span>가 <span>일치</span>하면, 추가 인증이 <span>완료</span>됩니다 :)
                </p>
                <br/>
                <p>
                  하단의 <span>AUTHENTICATION 버튼</span>을 눌러 인증을 진행하세요.
                </p>
                <button>AUTHENTICATION</button>
              </m.SlideTextBox>
            </m.SlideItemBox>
          </m.Slide> 
        </m.StyledSlider>
      </m.ModalContainer>
    </Modal>
  )
}

export default AddAuthModal;