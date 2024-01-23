import * as m from "../../styles/loginModalStyle"
import step1 from '../../assets/imgs/1step_편집.png'
import step2 from '../../assets/imgs/step2_편집.png'
import right_black from "../../assets/imgs/right_black.png"
import left_black from "../../assets/imgs/left_black.png"

const ModalItem = ({slideNumber, prevSlide, nextSlide}) => {

  return (
  <div>
    {
      slideNumber === 1 && (
        <m.Slide className='1'>
          <img src={step1} alt='step1'/>
          <m.SlideItemBox>
            <button onClick={prevSlide}><img src={left_black} alt='왼쪽으로 이동'/></button>
            <m.SlideTextBox>
              <h2>추가 인증</h2>
              <p>
                  백발백준은 <span>사용자의 백준 회원 여부</span>를 파악하고 서비스 향상을 위해 <span>첫 로그인 후 한 번만</span> 필요한 <span>추가 인증 절차</span>를 도입하였습니다.
              </p>
            </m.SlideTextBox>
            <button onClick={nextSlide}><img src={right_black} alt='오른쪽으로 이동'/></button>
          </m.SlideItemBox>
        </m.Slide>
      )
    }
    {
      slideNumber === 2 && (
        <m.Slide className='2'>
          <img src={step1} alt='step1'/>
          <m.SlideItemBox>
            <button><img src={left_black} alt='왼쪽으로 이동'/></button>
            <m.SlideTextBox>
              <h2>1. Github에서 Repository 생성</h2>
              <p>
                <span>'taveshot'</span>이라는 이름을 가진 <span>Public</span>의 <span>새로운 Repository</span>를 생성해주세요.
              </p>
            </m.SlideTextBox>
            <button><img src={right_black} alt='오른쪽으로 이동'/></button>
          </m.SlideItemBox>
        </m.Slide>
      )
    }
    {
      slideNumber === 3 && (
        <m.Slide className='3'>
          <img src={step2} alt='step2'/>
          <m.SlideItemBox>
            <button><img src={left_black} alt='왼쪽으로 이동'/></button>
            <m.SlideTextBox>
              <h2>2. Repository Description 작성</h2>
              <p>
                새로운 Repository에 <span>Description</span>에 자신의 <span>백준 닉네임</span>을 적어주세요.
              </p>
            </m.SlideTextBox>
            <button><img src={right_black} alt='오른쪽으로 이동'/></button>
          </m.SlideItemBox>
        </m.Slide> 
      )
    }
          {/* <m.Slide className='slide4'>
            <img src={step3} alt='step3'/>
            <m.SlideItemBox>
              <button><img src={left_black} alt='왼쪽으로 이동'/></button>
              <m.SlideTextBox>
                <h2>3. 백준 소개글 수정</h2>
                <p>
                  백준 사이트에 로그인한 뒤, <span>상태 메세지</span>에 본인의 <span>Github 아이디</span>를 적어주세요.
                  <br/>
                  (Solved.ac의 소개글 X)
                </p>
              </m.SlideTextBox>
              <button><img src={right_black} alt='오른쪽으로 이동'/></button>
            </m.SlideItemBox>
          </m.Slide> 
           <m.Slide className='slide5'>
            <m.SlideItemBox>
              <button><img src={left_black} alt='왼쪽으로 이동'/></button>
              <m.SlideTextBox>
                <h2>추가 인증 절차 완료</h2> 
                <p>
                  Github Repository의 Description에 적은 <span>백준 이름</span>과 백준 소개글에 적은 <span>깃허브 아이디</span>가 <span>일치</span>하면, 추가 인증이 <span>완료</span>됩니다 :)
                </p>
                <br/>
                <p>
                  하단의 <span>AUTHENTICATION 버튼</span>을 눌러 인증을 진행하세요.
                </p>
                <button>AUTHENTICATION</button>
              </m.SlideTextBox>
              <button><img src={right_black} alt='오른쪽으로 이동'/></button>
            </m.SlideItemBox>
          </m.Slide> */}
  </div>
  )
}

export default ModalItem;