import React, { useState } from 'react';
import * as t from "../../styles/main/todayQuestionStyle";
import newsImage from '../../assets/imgs/today.png';
import { LuCheck } from "react-icons/lu";

const TodayQuestion = () => {

  const [showInformation, setShowInformation] = useState(true);
  const [isClicked, setIsClicked] = useState({
    DEV:false,
    EMPLOY:false
  });

  const handleShowInfoClick = () => {
    setShowInformation(false);
  };

  const letterChooseClick = (buttonName) => {
    setIsClicked(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName]
    }));
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
              <styledHr />
              <t.employLetterContainer>
                <h1>EMPLOY LETTER</h1>
                <p><LuCheck /> 최근 올라온 <t.highlight>취업 공고</t.highlight>들을 모아드려요.</p>
                <p><LuCheck /> ~~~~</p>
                <p><LuCheck /> 매 달 <t.highlight>15일</t.highlight>에 메일함으로 보내드려요!</p>
              </t.employLetterContainer>
            </t.letterInfoContainter>
            <t.applyContainer>
              <h1>백발백준 뉴스레터 구독 신청</h1>
              <t.applyForm>
                <table>
                  <tbody>
                    <tr>
                      <td>Letter</td>
                      <td>
                        <t.StyledButton isClicked={isClicked.DEV} onClick={() => letterChooseClick('DEV')}>DEV</t.StyledButton>
                        <t.StyledButton isClicked={isClicked.EMPLOY} onClick={() => letterChooseClick('EMPLOY')}>EMPLOY</t.StyledButton>
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>
                        <t.StyledInput type="text" placeholder="이름을 입력하세요" />
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>
                        <t.StyledInput type="email" placeholder="이메일을 입력하세요" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </t.applyForm>
              <t.applyButton>구독 신청</t.applyButton>
            </t.applyContainer>
          </>
        )}
      </t.mainBox>
    </t.todayQuestionsWrapper>
  )
}

export default TodayQuestion;