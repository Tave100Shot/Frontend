import styled from "styled-components";

// ManageContainer : Manage 페이지 레이아웃
export const ManageContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  height : 73rem;
`;

// ManageValidContainer : 관리자 확인 기능의 div 디자인
export const ManageValidContainer = styled.div`
  margin : 10rem 0 0 0;
  box-shadow: 0px 5px 10px ${props => props.theme.colors.colorShadow};
  border-radius: 20px;
  width : 90vw;
  height : 35rem;
  padding : 3rem;
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items : center;
  h1 {
    font-size : 3.5rem;
    text-align: center;
  }
  button {
    margin : 5rem 0 0 0;
    width : 30rem;
    height : 5rem;
    color : #ffffff;
    background-color : #91d1fa;
    border : none;
    border-radius : 1rem;
    font-size : 2rem;
    letter-spacing : 0.3rem;
    cursor : pointer;
  }
`;

// ManageSmallList : Manage 페이지 중 절반에 해당하는 게시물 div 레이아웃
// 예시 : recentLetter, devLetter, employLetter
export const ManageSmallList = styled.div`
  width : 43vw;
  height : 45rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  padding : 1.5rem 2rem;
  display : grid;
  grid-template-row: repeat(6, 1fr);
  overflow-y : scroll;
  // border-bottom : 0.2rem solid rgba(0,0,0,0.1);
`

// ThreeItemBtn : 3가지 항목만 들어가는 Letter Item
export const ThreeItemBtn = styled.button`
  background-color : #ffffff;
  border : none;
  border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  padding : 0 2rem;
  font-size : 2rem;
  font-family : "BMHANNAPROOTF";
  cursor : pointer;
  height : 7rem;
  .item-box {
    display : grid;
    grid-template-columns: 1.3fr 0.3fr 5fr 0.3fr 1.8fr;
    text-align : left;
    white-space:nowrap;
    .letter-title {
      max-width : 38rem;
      overflow: hidden;
      text-overflow: ellipsis;  
    }
  }
  &:hover {
    color : #91d1fa;
  }
  `
  // GridItemBtn : 2가지 항목만 들어가는 Letter Item
  export const TwoItemBtn = styled.button`
  background-color : #ffffff;
  border : none;
  border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  padding : 0 2rem;
  font-size : 2rem;
  font-family : "BMHANNAPROOTF";
  cursor : pointer;
  white-space:nowrap;
  .item-box {
    height : 7rem;
    display : grid;
    justify-content: center;
    align-items : center;
    grid-template-columns: 5fr 0.5fr 1.8fr;
    text-align : left;

    .letter-title {
      max-width : 38rem;
      overflow: hidden;
      text-overflow: ellipsis;  
    }
  }
  &:hover {
    color : #91d1fa;
  }
`