import React, { useState, useRef } from 'react';
import * as t from "../../styles/main/todayQuestionStyle";
import newsImage from '../../assets/imgs/today.png';
import { LuCheck } from "react-icons/lu";

const TodayQuestion = () => {

  const [showInformation, setShowInformation] = useState(true);
  const [isClicked, setIsClicked] = useState({
    DEV: false,
    EMPLOY: false
  });
  const [headerMessage, setHeaderMessage] = useState('받아볼 레터의 종류를 선택해주세요!');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState({
    letter: '',
    name: '',
    email: '',
  });
  const [saveInfo, setSaveInfo] = useState({
    letterType: '',
    userName: '',
    userEmail: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailVerifyState, setEmailVerifyState] = useState({
    isVerifyNeed: false,
    buttonText: '확인',
    verifyPrompt: '',
  });
  const [finalSubmitted, setfinalSubmitted] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleShowInfoClick = () => {
    setShowInformation(false);
  };

  const letterChooseClick = (buttonName) => {
    setIsClicked(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName]
    }));
    setValidationMessage(prevMessage => ({ ...prevMessage, letter: '' }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setValidationMessage(prevMessage => ({ ...prevMessage, name: '' }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidationMessage(prevMessage => ({ ...prevMessage, email: '' }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  const handleLetterSubmit = () => {
    let message = { letter: '' };
    let isValid = true;

    if (!isClicked.DEV && !isClicked.EMPLOY) {
      message.letter = '최소 하나 이상의 뉴스레터를 눌러주세요 :)';
      isValid = false;
    }
    if (isValid) {
      let selectedLetters = [];
      if (isClicked.DEV) selectedLetters.push('DEV');
      if (isClicked.EMPLOY) selectedLetters.push('EMPLOY');
      let letterType = selectedLetters.join(', ') || 'None';
      setSaveInfo({
        letterType: letterType,
      })
      setIsSubmitted(true);
      setHeaderMessage('레터를 받아볼 회원님의 정보를 입력해주세요.');
    }
    if (!isValid) {
      setValidationMessage(message);
      return;
    }
  };

  const handleNameEmailSubmit = () => {
    let message = { name: '', email: '' };
    let isValid = true;

    if (isValid) {
      if (name === '') {
        message.name = '이름을 작성해주세요.';
        nameInputRef.current.focus();
        isValid = false;
      }
      if (email === '') {
        message.email = '이메일을 입력해주세요.';
        emailInputRef.current.focus();
        isValid = false;
      } else if (!validateEmail(email)) {
        message.email = '이메일 형식이 올바르지 않습니다.';
        emailInputRef.current.focus();
        isValid = false;
      }
      if (isValid) {
        setSaveInfo({
          userName: name,
          userEmail: email,
        });
        setEmailVerifyState({
          isVerifyNeed: true,
          buttonText: '이메일 인증',
          verifyPrompt: '해당 이메일로 인증하시겠습니까?',
        });
      setIsSubmitted(true);
    } else {
      setValidationMessage(message);
    }


  }};

  const handleFinalSubmit = () => {
    setfinalSubmitted(true);
  }

  const handleBack = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setValidationMessage({ name: '', email: '' });
    }
  }


  return (
    <t.todayQuestionsWrapper>
      <t.mainBox>
        {showInformation ? (
          <>
            <t.informationWrapper>
              <t.titleBox>백발백준 뉴스레터,<br />
                <t.highlight>기술</t.highlight>과 <t.highlight>취업</t.highlight> 정보를 한눈에!</t.titleBox><br />
              <t.informationBox>요즘 <t.highlight>HOT</t.highlight>한 기술들의 대한 정보 뿐만 아니라,<br />내가 모르는 취업 공고까지 받아보세요!</t.informationBox><br />
              <t.moreButton onClick={handleShowInfoClick}>더 알아보기</t.moreButton>
            </t.informationWrapper>
            <t.image src={newsImage} />
          </>) : (
          <>
            <t.letterInfoContainter>
              <t.devLetterContainer>
                <h1>DEV LETTER</h1>
                <p><LuCheck /> 현재 주목받고 있는 기술</p>
                <p><LuCheck /> ~~~~</p>
                <p><LuCheck /> 매 달 <t.highlight>10일</t.highlight>에 메일함으로 보내드려요!</p>
              </t.devLetterContainer>
              <t.employLetterContainer>
                <h1>EMPLOY LETTER</h1>
                <p><LuCheck /> 최근 올라온 <t.highlight>취업 공고</t.highlight>들을 모아드려요.</p>
                <p><LuCheck /> ~~~~</p>
                <p><LuCheck /> 매 달 <t.highlight>15일</t.highlight>에 메일함으로 보내드려요!</p>
              </t.employLetterContainer>
            </t.letterInfoContainter>
            <t.applyContainer>
              <h1>백발백준 뉴스레터 구독 신청</h1>

              {!finalSubmitted ? (
                <>
                  <p>{headerMessage}</p>
                  <t.applyForm>
                    <table>
                      <tbody>
                        {!isSubmitted ? (
                          <>
                            <t.LetterButtonContainer>
                              <t.StyledButton isClicked={isClicked.DEV} onClick={() => letterChooseClick('DEV')}>DEV</t.StyledButton>
                              <t.StyledButton isClicked={isClicked.EMPLOY} onClick={() => letterChooseClick('EMPLOY')}>EMPLOY</t.StyledButton>
                              {validationMessage.letter && <p>{validationMessage.letter}</p>}
                            </t.LetterButtonContainer>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td>Name</td>
                              <td>
                                <t.StyledNameInput
                                  ref={nameInputRef}
                                  type="text"
                                  placeholder="이름을 입력해주세요."
                                  value={name}
                                  onChange={handleNameChange} />
                                {validationMessage.name && <p>{validationMessage.name}</p>}
                              </td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>
                                <t.StyledEmailInput
                                  ref={emailInputRef}
                                  type="email"
                                  placeholder="이메일을 입력해주세요."
                                  value={email}
                                  onChange={handleEmailChange} />
                                {validationMessage.email && <p>{validationMessage.email}</p>}
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </t.applyForm>
                  {!isSubmitted ? (
                    <>
                      <t.DefaultButton onClick={handleLetterSubmit}>구독 신청</t.DefaultButton> 
                    </>
                  ) : (
                    <>
                    <t.VerifyPromptContainer>
                    {emailVerifyState.verifyPrompt && <p>{emailVerifyState.verifyPrompt}</p>}
                    <t.ClickButtonContainer>
                      <t.BackButton onClick={handleBack}>뒤로 가기</t.BackButton>
                      <t.DefaultButton onClick={handleNameEmailSubmit}>
                        {emailVerifyState.buttonText}
                      </t.DefaultButton>
                      </t.ClickButtonContainer>
                      </t.VerifyPromptContainer>
                    </>
                  )}
                </>
              ) : (
                <>
                  <t.finalImage src={newsImage} />
                  <h2>구독 완료되었습니다😊</h2>
                </>)}

            </t.applyContainer>
          </>
        )}
      </t.mainBox>
    </t.todayQuestionsWrapper>
  )
}

export default TodayQuestion;