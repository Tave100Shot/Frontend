import styled from "styled-components"

export const ManageMemberList = styled.div`
  width : 79vw;
  height : 50rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  padding : 1.5rem 2rem;
  display : grid;
  grid-template-row: repeat(12, 1fr);
  //border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  position: relative;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// ThreeItemBtn : 3가지 항목만 들어가는 Letter Item
export const SixItemBtn = styled.button`
  background-color : #ffffff;
  border : none;
  border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  padding : 0 2rem;
  font-size : 2rem;
  font-family : "BMHANNAPROOTF";
  cursor : pointer;
  .item-box {
    display : grid;
    grid-template-columns: 1.5fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 1.5fr 3fr;
    text-align : left;
  }
  &:hover {
    color : #91d1fa;
  }
`

// HalfLetterContainer : Letter 페이지 중 절반에 해당하는 컴포넌트의 레이아웃
export const MemberContainer = styled.div`
  width : 80vw;
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
    
`