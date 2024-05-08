import styled from "styled-components";

export const LetterContainer = styled.div`
  width : 100vw;
  height : 65rem;
  padding : 2rem 3rem 0 3rem;
  display : flex;
  justify-content: space-around;
  margin : 1rem 0 0 0;
`;
export const HalfLetterContainer = styled.div`
  width : 44vw;
  height : 60rem;
  padding : 1rem;
  display : flex;
  flex-direction : column;
  // justify-content: center;
  // align-items : center;
  // border : 1px solid #000000;
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
  }
`
