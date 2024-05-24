import styled from "styled-components";

export const LetterContainer = styled.div`
  width : 100vw;
  height : 65rem;
  padding : 2rem 3rem 0 3rem;
  display : flex;
  justify-content: space-around;
  margin : 1rem 0 0 0;
`;

// HalfLetterContainer : Letter 페이지 중 절반에 해당하는 컴포넌트의 레이아웃
export const HalfLetterContainer = styled.div`
  width : 44vw;
  height : 60rem;
  padding : 1rem;
  display : flex;
  flex-direction : column;
  .topBar {
    width : 100%;
    height : 5rem;
    display : flex;
    justify-content: space-between;
    margin : 0 0 2rem 0;

    h1 {
      font-size : 2.3rem;
      font-family : "BMHANNAPROOTF";
    }
    .AllLetterBtn {
      font-size : 2rem;
      font-family : "BMHANNAPROOTF";
      margin : 0 2rem 0 0;
      background-color : #ffffff;
      border : none;
      border-bottom :  1px solid black;
      &:hover {
        color : #91d1fa;
        border-bottom :  1px solid #91d1fa;
      }
    }
    .AllLetterBtn:nth-child(2) {margin : 0;}

    // 달력에 존재하는 버튼 div
    .btnBox {
      display : flex;
      align-items : center;
      justify-content: space-between;
      button {
        border : none;
        background-color : #ffffff;
        box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
        font-size : 3rem;
        height : 3.5rem;
        width : 3.5rem;
        cursor : pointer;
        border-radius : 0.5rem;
        margin : 0 0 0 1.5rem;
        &:hover {
          background-color : #656565;
          color : #ffffff;
        }
      }
    }
  }
`

// Letter 상세 보기 박스
export const LetterViewContainer = styled.div`
  margin : 5rem 0 0 0;
  width : 87vw;
  height : 55rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  padding : 1.5rem 2rem;
  font-size : 2.3rem;
  font-family : "BMHANNAPROOTF";

  .letter-header {
    display : flex;
    align-items : center;
    justify-content: space-between;
    height : 7rem;
    border-bottom : 0.2rem solid rgba(0,0,0,0.1);
    
    // 종류, 제목이 포함된 div
    .letter-info {
      width : 85rem;
      display : grid;
      grid-template-columns: 2fr 0.2fr 5fr;
      text-align : center;  
      .letter-title {
        padding : 0 0 0 1.5rem;
        text-align : left;
      }
    }

    // 날짜, 닫기가 포함된 div
    .letter-close {
      width : 20rem;
      display : flex;
      align-items : center;
      justify-content: space-around;
      img {
        width : 2rem;
        height : 2rem;
        cursor : pointer;
      }
    }
  }
  .letter-body {
    margin : 1.6rem 0 0 0;
    padding : 0 2rem;
    height : 38rem;
    font-family : "WantedSans_Medium";
    font-size : 1.7rem;
    letter-spacing : 0.3rem;
    line-height : 3rem;
    overflow-y: scroll;
  }
  .letter-btn {
    height : 5rem;
    display : flex;
    align-items : center;
    justify-content: end;

    button {
      margin : 0 2rem;
      &:nth-child(2){margin : 0;}
      border : none;
      font-size : 1.8rem;
      font-family : "BMHANNAPROOTF";
      text-align : center;
      border-radius : 1rem;
      padding : 0 3rem;
      cursor : pointer;
      background-color : #F5F5F5;
      &:hover{background-color : #CCCCCC;}

    }
  }
`

// Letter 작성 박스
export const LetterEditContainer = styled.form`
  margin : 5rem 0 0 0;
  width : 87vw;
  height : 55rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  padding : 1.5rem 2rem;
  font-size : 2.3rem;
  font-family : "BMHANNAPROOTF";
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: space-between;


  .letter-header {
    display : flex;
    align-items : start;
    justify-content: space-between;
    text-align : center;
    width : 80vw;  
    height : 7rem;
    margin : 1rem 0 0 0;    

    // 유효성 검사 
    .error-box {
      display : flex;
      flex-direction : column;
      align-items : start;
      justify-content: center;

      .error-message {
        font-size : 1.4rem;
        text-align : left;
        margin : 0 0 0 2.2rem;
        color : red;
        font-family : "WantedSans_Medium";
      }

      .date-box {
        display : flex;
        color : #838383;
      }
    }

    // 레터 제목 작성 input (text)
    .letter-title {
      width : 65rem;
      height : 5rem;
      border : none;
      background-color : #F5F5F5;
      padding : 0.5rem 2rem;
      font-size : 2.5rem;
      font-family : "BMHANNAPROOTF";
      outline : none;
      border-radius : 1rem;
      margin : 0 1rem 0 0;
    }
    // 레터 종류 선택 - select 
    .letter-select {
      width : 16rem;
      height : 5rem;
      border : 0.3rem solid #F5F5F5;
      background-color : #ffffff;
      border-radius : 3rem;
      font-size : 1.5rem;
      font-family : "BMHANNAPROOTF";
      outline : none;
      padding : 0 2rem;
      color : #838383;
      margin : 0 2rem 0 0;
      cursor : pointer;
      &:hover{color:#91D1FA;}
    }
    // 레터 날짜 선택 - input(date)
    .letter-date {
      width : 17rem;
      height : 5rem;
      border : none;
      padding : 0.5rem 2rem;
      font-size : 1.8rem;
      color : #838383;
      font-family : "BMHANNAPROOTF";
      outline : none;
      border-radius : 1rem;
      margin : 0 0.5rem;
      cursor : pointer;
    }
  }

  // 레터 본문 작성 - textarea
  .letter-body {
    width : 80vw;
    height : 38rem;
    background-color : #F5F5F5;
    font-family : "WantedSans_Medium";
    padding : 1rem 2rem;
    font-size : 1.7rem;
    letter-spacing : 0.3rem;
    line-height : 3rem;
    overflow-y: scroll;
    outline : none;
    border : none;
    resize : none;
    border-radius : 1rem;
  }
  // 버튼 박스 
  .btn-box {
    display : flex;
    align-items : center;
    justify-content: end;
    width : 80vw;
    height : 5rem;

    // 취소, 저장 버튼 - button
    .letter-btn {
      margin : 0 4rem;
      &:nth-child(2){margin : 0;}
      border : none;
      font-size : 2rem;
      font-family : "BMHANNAPROOTF";
      text-align : center;
      border-radius : 1rem;
      padding : 0 4rem;
      cursor : pointer;
      background-color : #F5F5F5;
      &:hover{background-color : #CCCCCC;}
    }
  }
`