import React, { useState } from 'react';
import * as t from "../../styles/main/todayQuestionStyle";
import newsImage from '../../assets/imgs/today.png';
import { LuCheck } from "react-icons/lu";

const TodayQuestion = () => {

  const [showInformation, setShowInformation] = useState(true);

  const handleShowInfoClick = () => {
    setShowInformation(false);
  };

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
            <styledHr  />
            <t.employLetterContainer>
              <h1>EMPLOY LETTER</h1>
              <p><LuCheck /> 최근 올라온 <t.highlight>취업 공고</t.highlight>들을 모아드려요.</p>
              <p><LuCheck /> ~~~~</p>
              <p><LuCheck /> 매 달 <t.highlight>15일</t.highlight>에 메일함으로 보내드려요!</p>
            </t.employLetterContainer>
          </t.letterInfoContainter>
          <t.applyContainer>
            <t.applyForm>
            <h1>백발백준 뉴스레터 구독 신청</h1>
            </t.applyForm>
          </t.applyContainer>
          </>
        )}
      </t.mainBox>
    </t.todayQuestionsWrapper>
  )
}

export default TodayQuestion;