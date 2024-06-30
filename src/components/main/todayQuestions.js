import React, { useState, useRef, useEffect } from 'react';
import * as t from "../../styles/main/todayQuestionStyle";
import newsImage from '../../assets/imgs/today.png';
import axios from "axios";

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
  const [loginStat, setLoginStat] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [clickEmailButton, setClickEmailButton] = useState(false);
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
    const updateName = e.target.value;
    setName(updateName);
    setValidationMessage(prevMessage => ({ ...prevMessage, name: '' }));
    setSaveInfo(prevInfo => ({
      ...prevInfo,
      userName: updateName
    }))
  };

  const handleEmailChange = (e) => {
    const updateEmail = e.target.value;
    setEmail(updateEmail);
    setValidationMessage(prevMessage => ({ ...prevMessage, email: '' }));
    setSaveInfo(prevInfo => ({
      ...prevInfo,
      userEmail: updateEmail
    }))
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  // [정보 수정] 버튼
  const handleModifyInfo = async () => {
    let message = { letter: '' };
    let isValid = true;

    if (!isClicked.DEV && !isClicked.EMPLOY) {
      message.letter = '최소 하나 이상의 뉴스레터를 눌러주세요 :)';
      isValid = false;
      setValidationMessage(message);
      return;
    }

    if (isValid) {
      let selectedLetters = [];
      if (isClicked.DEV) selectedLetters.push('DEV_LETTER');
      if (isClicked.EMPLOY) selectedLetters.push('EMPLOYEE_LETTER');
      let letterType;
      if (selectedLetters.length === 2) {
        letterType = 'ALL';
      } else {
        letterType = selectedLetters[0];
      }
      setSaveInfo({
        letterType: letterType,
      });
      setIsSubmitted(true);
      setHeaderMessage('레터를 받아볼 회원님의 정보를 입력해주세요.');

      try {
        const response = await axios.post('/api/subscription', {
          letterTypes: [letterType]
        }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          }
        });
        //console.log('정보수정 레터', response);
      } catch (error) {
        //console.error('정보수정 레터에러', error.response);
        if (error.response.data.errorCode === "LETTER_4040") {
          //console.log('정보수정버튼클릭');
        }
        if (error.response.data.errorCode === "LETTER_4041") {
          alert('뉴스레터 타입이 잘못됐습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4042") {
          alert('뉴스레터를 찾을 수 없습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4043") {
          alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4044") {
          alert('gitEmail과 bojName은 null일 수 없습니다.')
        }
        else if (error.response.data.errorCode === "EAMIL4040") {
          alert('유효하지 않은 인증 링크입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4041") {
          alert('인증되지 않은 이메일입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4042") {
          alert('유효하지 않은 이메일 토큰입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4043") {
          alert('이메일 인증이 이미 완료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4044") {
          alert('이메일을 찾을 수 없습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4010") {
          alert('메일 토큰 유효기간이 만료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL5000") {
          alert('메일 전송에 실패했습니다."');
        }
        else if (error.response.data.errorCode === "EAMIL5001") {
          alert('템플릿 변환에 실패했습니다.');
        }
        else if (error.response.data.errorCode === "JWT_4010") {
          alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
        }
      }

      // 회원 이름, 이메일 정보 띄우기
      try {
        const response = await axios.get('/api/member/info',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
          }
        );
        if (response.data.result.bojName === null && response.data.result.gitEmail === null) {
          alert('수정할 정보가 존재하지 않아요!')
          setIsSubmitted(false);
        } else {
          setName(response.data.result.bojName === null ? '' : response.data.result.bojName);
          setEmail(response.data.result.gitEmail === null ? '' : response.data.result.gitEmail);
          //console.log(response.data.result.bojName);
          //console.log(response.data.result.gitEmail);
        }

      } catch (error) {
        //console.error('회원get:', error);
        if (error.response.data.errorCode === "LETTER_4040") {
          alert('이미 구독 중입니다. \n정보를 수정하려면 [정보 수정] 버튼을 클릭하세요!');
          setIsSubmitted(false);
        }
        else if (error.response.data.errorCode === "LETTER_4041") {
          alert('뉴스레터 타입이 잘못됐습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4042") {
          alert('뉴스레터를 찾을 수 없습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4043") {
          alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4044") {
          alert('gitEmail과 bojName은 null일 수 없습니다.')
        }
        else if (error.response.data.errorCode === "EAMIL4040") {
          alert('유효하지 않은 인증 링크입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4041") {
          alert('인증되지 않은 이메일입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4042") {
          alert('유효하지 않은 이메일 토큰입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4043") {
          alert('이메일 인증이 이미 완료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4044") {
          alert('이메일을 찾을 수 없습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4010") {
          alert('메일 토큰 유효기간이 만료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL5000") {
          alert('메일 전송에 실패했습니다."');
        }
        else if (error.response.data.errorCode === "EAMIL5001") {
          alert('템플릿 변환에 실패했습니다.');
        }
        else if (error.response.data.errorCode === "JWT_4010") {
          alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
        }
        else {
          alert('알 수 없는 서버 에러입니다.')
        }
      }

    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setLoginStat(true);
    } else {
      setLoginStat(false);
    }
  }, []);

  // [레터 선택] 버튼
    const handleLetterSubmit = async () => {
      if (!loginStat) {
        alert('로그인 후에 구독해주세요!')
        setIsSubmitted(false);
        return;
      }

    let isValid = true;
    let message = { letter: '' };

    if (!isClicked.DEV && !isClicked.EMPLOY) {
      message.letter = '최소 하나 이상의 뉴스레터를 눌러주세요 :)';
      isValid = false;
      setValidationMessage(message);
      return;
    }
    if (isValid) {
      let selectedLetters = [];
      if (isClicked.DEV) selectedLetters.push('DEV_LETTER');
      if (isClicked.EMPLOY) selectedLetters.push('EMPLOYEE_LETTER');
      let letterType;
      if (selectedLetters.length === 2) {
        letterType = 'ALL';
      } else {
        letterType = selectedLetters[0];
      }

      setSaveInfo({
        letterType: letterType,
      });
      setIsSubmitted(true);
      setHeaderMessage('레터를 받아볼 회원님의 정보를 입력해주세요.');

      // 회원 이름, 이메일 정보 띄우기
      try {
        const response = await axios.get('/api/member/info',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
          }
        );
        setName(response.data.result.bojName === null ? '' : response.data.result.bojName);
        setEmail(response.data.result.gitEmail === null ? '' : response.data.result.gitEmail);
        setSaveInfo(prevInfo => ({
          ...prevInfo,
          userName: response.data.result.bojName,
          userEmail: response.data.result.gitEmail,
        }))
        //console.log('회원 이름, 이메일 정보', response);
        /* if (response.data.code === '200'){
          alert('이미 구독 완료되었습니다!');
          setIsSubmitted(false);
        } */
        //console.log('get', saveInfo.userName);
        //console.log('get', saveInfo.userEmail);
      } catch (error) {
        //console.log('회원get:', error);
        if (error.response.data.errorCode === "LETTER_4040") {
          alert('이미 구독 중입니다. \n정보를 수정하려면 [정보 수정] 버튼을 클릭하세요!');
          setIsSubmitted(false);
        }
        else if (error.response.data.errorCode === "LETTER_4041") {
          alert('뉴스레터 타입이 잘못됐습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4042") {
          alert('뉴스레터를 찾을 수 없습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4043") {
          alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4044") {
          alert('gitEmail과 bojName은 null일 수 없습니다.')
        }
        else if (error.response.data.errorCode === "EAMIL4040") {
          alert('유효하지 않은 인증 링크입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4041") {
          alert('인증되지 않은 이메일입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4042") {
          alert('유효하지 않은 이메일 토큰입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4043") {
          alert('이메일 인증이 이미 완료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4044") {
          alert('이메일을 찾을 수 없습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4010") {
          alert('메일 토큰 유효기간이 만료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL5000") {
          alert('메일 전송에 실패했습니다."');
        }
        else if (error.response.data.errorCode === "EAMIL5001") {
          alert('템플릿 변환에 실패했습니다.');
        }
        else if (error.response.data.errorCode === "JWT_4010") {
          alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
        }
        else {
          alert('알 수 없는 서버 에러입니다.')
        }
      }

      try {
        const response = await axios.post('/api/subscription', {
          letterTypes: [letterType]
        }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          }
        });
        //console.log('레터', response);
      } catch (error) {
        //console.error('레터 에러', error.response);
        if (error.response.data.errorCode === "LETTER_4040") {
          alert('이미 구독 중입니다. \n정보를 수정하려면 [정보 수정] 버튼을 클릭하세요!');
          setIsSubmitted(false);
        }
        else if (error.response.data.errorCode === "LETTER_4041") {
          alert('뉴스레터 타입이 잘못됐습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4042") {
          alert('뉴스레터를 찾을 수 없습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4043") {
          alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
        }
        else if (error.response.data.errorCode === "LETTER_4044") {
          alert('gitEmail과 bojName은 null일 수 없습니다.')
        }
        else if (error.response.data.errorCode === "EAMIL4040") {
          alert('유효하지 않은 인증 링크입니다.');
          setIsConfirmed(true);
        }
        else if (error.response.data.errorCode === "EAMIL4041") {
          alert('인증되지 않은 이메일입니다.');
          setIsConfirmed(true);
        }
        else if (error.response.data.errorCode === "EAMIL4042") {
          alert('유효하지 않은 이메일 토큰입니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4043") {
          alert('이메일 인증이 이미 완료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4044") {
          alert('이메일을 찾을 수 없습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL4010") {
          alert('메일 토큰 유효기간이 만료됐습니다.');
        }
        else if (error.response.data.errorCode === "EAMIL5000") {
          alert('메일 전송에 실패했습니다."');
        }
        else if (error.response.data.errorCode === "EAMIL5001") {
          alert('템플릿 변환에 실패했습니다.');
        }
        else if (error.response.data.errorCode === "JWT_4010") {
          alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
        }
        else {
          alert('알 수 없는 서버 에러입니다.')
        }

      }
        //console.log(saveInfo.userName);
        //console.log(saveInfo.userEmail);
    }
  };

  // [확인] 버튼
  const handleNameEmailSubmit = async () => {
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
          letterType: saveInfo.letterType,
          userName: name,
          userEmail: email,
        });
        setIsConfirmed(true);
        setIsSubmitted(true);
        //console.log(saveInfo);
        try {
          const response = await axios.post('/api/member', {
            gitEmail: email,
            bojName: name,
          }, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
          });
          //console.log(response);
          // [확인] 버튼 눌렀을 때 input 수정 불가

        } catch (error) {
          //console.error(error);
          if (error.response.data.errorCode === "LETTER_4040") {
            alert('이미 구독 중입니다. \n정보를 수정하려면 [정보 수정] 버튼을 클릭하세요!');
            setIsSubmitted(false);
          }
          else if (error.response.data.errorCode === "LETTER_4041") {
            alert('뉴스레터 타입이 잘못됐습니다.')
          }
          else if (error.response.data.errorCode === "LETTER_4042") {
            alert('뉴스레터를 찾을 수 없습니다.')
          }
          else if (error.response.data.errorCode === "LETTER_4043") {
            alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
          }
          else if (error.response.data.errorCode === "LETTER_4044") {
            alert('gitEmail과 bojName은 null일 수 없습니다.')
          }
          else if (error.response.data.errorCode === "EAMIL4040") {
            alert('유효하지 않은 인증 링크입니다.');
          }
          else if (error.response.data.errorCode === "EAMIL4041") {
            alert('인증되지 않은 이메일입니다.');
          }
          else if (error.response.data.errorCode === "EAMIL4042") {
            alert('유효하지 않은 이메일 토큰입니다.');
          }
          else if (error.response.data.errorCode === "EAMIL4043") {
            alert('이메일 인증이 이미 완료됐습니다.');
          }
          else if (error.response.data.errorCode === "EAMIL4044") {
            alert('이메일을 찾을 수 없습니다.');
          }
          else if (error.response.data.errorCode === "EAMIL4010") {
            alert('메일 토큰 유효기간이 만료됐습니다.');
          }
          else if (error.response.data.errorCode === "EAMIL5000") {
            alert('메일 전송에 실패했습니다."');
          }
          else if (error.response.data.errorCode === "EAMIL5001") {
            alert('템플릿 변환에 실패했습니다.');
          }
          else if (error.response.data.errorCode === "JWT_4010") {
            alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
          }
          else {
            alert('알 수 없는 서버 에러입니다.')
          }
        }
      } else {
        setValidationMessage(message);
      }
    }
  };


  // [뒤로 가기 - 확인] 버튼 눌렀을 때
  const handleBackVerify = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setValidationMessage({ name: '', email: '' });
    }
  }

  // [뒤로 가기 - 이메일인증] 버튼 눌렀을 때
  const handleBackEmail = async () => {
    if (isSubmitted) {
      setIsConfirmed(false);
      setValidationMessage({ name: '', email: '' });
    }

  }

  // [뒤로 가기 - (최종)확인] 버튼 눌렀을 때
  const handleBackFinal = () => {
    if (isSubmitted) {
      setClickEmailButton(false);
      setValidationMessage({ name: '', email: '' });
    }
  }

  // [이메일 인증] 버튼 눌렀을 때
  const handleVerify = async () => {
    alert('인증 메일을 보내드렸어요! \n메일함을 확인하신 후 인증을 완료해주세요.');
    setClickEmailButton(true);
    try {
      const response = await axios.post('/api/email/send-verification', {
        bojName: name, //'cucubab',
        gitEmail: email // '27sojeong@gmail.com',
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      });
      //console.log('이메일인증', response);
    } catch (error) {
      //console.error('이메일인증', error.response.status);
      //console.error('이메일인증', error.response.data);
      if (error.response.data.errorCode === "LETTER_4040") {
        alert('이미 구독 중입니다. \n정보를 수정하려면 [정보 수정] 버튼을 클릭하세요!');
        setIsSubmitted(false);
      }
      else if (error.response.data.errorCode === "LETTER_4041") {
        alert('뉴스레터 타입이 잘못됐습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4042") {
        alert('뉴스레터를 찾을 수 없습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4043") {
        alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4044") {
        alert('gitEmail과 bojName은 null일 수 없습니다.')
      }
      else if (error.response.data.errorCode === "EAMIL4040") {
        alert('유효하지 않은 인증 링크입니다.');
        setIsConfirmed(true);
      }
      else if (error.response.data.errorCode === "EAMIL4041") {
        alert('인증되지 않은 이메일입니다.');
        setIsConfirmed(true);
      }
      else if (error.response.data.errorCode === "EAMIL4042") {
        alert('유효하지 않은 이메일 토큰입니다.');
      }
      else if (error.response.data.errorCode === "EAMIL4043") {
        alert('이메일 인증이 이미 완료됐습니다.');
        setfinalSubmitted(true);
      }
      else if (error.response.data.errorCode === "EAMIL4044") {
        alert('이메일을 찾을 수 없습니다.');
      }
      else if (error.response.data.errorCode === "EAMIL4010") {
        alert('메일 토큰 유효기간이 만료됐습니다.');
      }
      else if (error.response.data.errorCode === "EAMIL5000") {
        alert('메일 전송에 실패했습니다."');
      }
      else if (error.response.data.errorCode === "EAMIL5001") {
        alert('템플릿 변환에 실패했습니다.');
      }
      else if (error.response.data.errorCode === "JWT_4010") {
        alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
      }
      else {
        alert('알 수 없는 서버 에러입니다.')
      }
    }
    //setfinalSubmitted(true);
  }

  // 최종 [확인] 구독 버튼 눌렀을 때
  const handleFinalSubmit = async () => {
    try {
      const response = await axios.post('/api/subscription', {
        letterTypes: [saveInfo.letterType]
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      });
      if (response.data.code === '200'){
        setfinalSubmitted(true);
      }
      //console.log('최종 레터', response);
    } catch (error) {
      //console.log('레터 에러', error.response);
      if (error.response.data.errorCode === "LETTER_4040") {
        setfinalSubmitted(true);
      }
      else if (error.response.data.errorCode === "LETTER_4041") {
        alert('뉴스레터 타입이 잘못됐습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4042") {
        alert('뉴스레터를 찾을 수 없습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4043") {
        alert('이메일 혹은 닉네임이 등록되어 있지 않습니다.')
      }
      else if (error.response.data.errorCode === "LETTER_4044") {
        alert('gitEmail과 bojName은 null일 수 없습니다.')
      }
      else if (error.response.data.errorCode === "EAMIL4040") {
        alert('유효하지 않은 인증 링크입니다.');
        setIsConfirmed(true);
      }
      else if (error.response.data.errorCode === "EAMIL4041") {
        alert('인증되지 않은 이메일입니다.');
        setIsConfirmed(true);
      }
      else if (error.response.data.errorCode === "EAMIL4042") {
        alert('유효하지 않은 이메일 토큰입니다.');
      }
      else if (error.response.data.errorCode === "EAMIL4043") {
        alert('이메일 인증이 이미 완료됐습니다.');
        setfinalSubmitted(true);
      }
      else if (error.response.data.errorCode === "EAMIL4044") {
        alert('이메일을 찾을 수 없습니다.');
      }
      else if (error.response.data.errorCode === "EAMIL4010") {
        alert('메일 토큰 유효기간이 만료됐습니다.');
      }
      else if (error.response.data.errorCode === "EAMIL5000") {
        alert('메일 전송에 실패했습니다."');
      }
      else if (error.response.data.errorCode === "EAMIL5001") {
        alert('템플릿 변환에 실패했습니다.');
      }
      else if (error.response.data.errorCode === "JWT_4010") {
        alert('로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)');
      }
      else {
        alert('알 수 없는 서버 에러입니다.')
      }
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
                <p><t.styledLuCheck /> 개발 관련 <t.highlight>행사</t.highlight>들을 공유하는 뉴스레터</p>
                <p><t.styledLuCheck /> 개발자들의 <t.highlight>성장 노하우</t.highlight>들도 드립니다 :)</p>
                <p><t.styledLuCheck /> 매주 <t.highlight>월요일 오전 8시</t.highlight>에 메일함으로 보내드려요!</p>
              </t.devLetterContainer>
              <t.employLetterContainer>
                <h1>EMPLOY LETTER</h1>
                <p><t.styledLuCheck /> 개발 분야의 <t.highlight>채용 관련 정보</t.highlight>들을 공유하는 뉴스레터</p>
                <p><t.styledLuCheck /> <t.highlight>채용에 관한 팁</t.highlight>들도 드립니다 :)</p>
                <p><t.styledLuCheck /> <t.highlight>매주 월요일 오전 8시</t.highlight>에 메일함으로 보내드려요!</p>
              </t.employLetterContainer>
            </t.letterInfoContainter>
            <t.applyContainer>
              <h1>백발백준 뉴스레터 구독 신청</h1>
              {!finalSubmitted ? (
                <>
                  <p>{headerMessage}</p>
                  {clickEmailButton ? (
                    <>
                      <t.finalForm>
                        <table>
                          <tbody>
                            <tr>
                              <td>Letter</td>
                              <p>
                                {saveInfo.letterType}
                              </p>
                            </tr>
                            <tr>
                              <td>Name</td>
                              <p>
                                {saveInfo.userName}
                              </p>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <p>
                                {saveInfo.userEmail}
                              </p>
                            </tr>
                          </tbody>
                        </table>
                      </t.finalForm>
                    </>
                  ) : (
                    <t.applyForm>
                      <table>
                        <tbody>
                          {!isSubmitted ? (
                            <>
                              <t.LetterButtonContainer>
                                <t.StyledButton isClicked={isClicked.DEV} onClick={() => letterChooseClick('DEV')}>DEV</t.StyledButton>
                                <t.StyledButton isClicked={isClicked.EMPLOY} onClick={() => letterChooseClick('EMPLOY')}>EMPLOY</t.StyledButton>
                                {validationMessage.letter && <h1>{validationMessage.letter}</h1>}
                                {!validationMessage.letter && <h3>.</h3>}
                              </t.LetterButtonContainer>
                            </>
                          ) : (
                            <>
                              <tr>
                                <td><h4>Name</h4></td>
                                <td>
                                  <t.StyledNameInput
                                    ref={nameInputRef}
                                    type="text"
                                    placeholder="이름을 입력해주세요."
                                    value={name}
                                    onChange={handleNameChange}
                                    disabled={isConfirmed} />
                                  {validationMessage.name && <p>{validationMessage.name}</p>}
                                  {!validationMessage.name && <h3>.</h3>}
                                </td>
                              </tr>
                              <tr>
                                <td><h4>Email</h4></td>
                                <td>
                                  <t.StyledEmailInput
                                    ref={emailInputRef}
                                    type="email"
                                    placeholder="이메일을 입력해주세요."
                                    value={email}
                                    onChange={handleEmailChange}
                                    disabled={isConfirmed} />
                                  {validationMessage.email && <p>{validationMessage.email}</p>}
                                  {!validationMessage.email && <h3>.</h3>}
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                      {isConfirmed && <h2>해당 메일로 인증하시겠습니까?</h2>}
                    </t.applyForm>)}
                  {!isSubmitted ? (
                    <>
                      <t.ClickButtonContainer>
                        <t.BackButton onClick={handleModifyInfo}>정보 수정</t.BackButton>
                        <t.DefaultButton onClick={handleLetterSubmit}>레터 선택</t.DefaultButton>
                      </t.ClickButtonContainer>
                    </>
                  ) : (
                    <>
                      <t.ClickButtonContainer>
                        {isConfirmed ? (
                          clickEmailButton ? (
                            <>
                              <t.BackButton onClick={handleBackFinal}>뒤로 가기</t.BackButton>
                              <t.DefaultButton onClick={handleFinalSubmit}>확인</t.DefaultButton>
                            </>
                          ) : (
                            <>
                              <t.BackButton onClick={handleBackEmail}>뒤로 가기</t.BackButton>
                              <t.DefaultButton onClick={handleVerify}>이메일 인증</t.DefaultButton>
                            </>
                          )
                        ) : (
                          <>
                            <t.BackButton onClick={handleBackVerify}>뒤로 가기</t.BackButton>
                            <t.DefaultButton onClick={handleNameEmailSubmit}>확인</t.DefaultButton>
                          </>
                        )}
                      </t.ClickButtonContainer>
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