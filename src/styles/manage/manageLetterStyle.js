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
export const LetterCheckContainer = styled.div`
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
    height : 43rem;
    font-family : "WantedSans_Medium";
    font-size : 1.7rem;
    letter-spacing : 0.3rem;
    line-height : 3rem;
    overflow-y: scroll;

  }

`