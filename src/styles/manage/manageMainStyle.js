import styled from "styled-components";

export const ManageContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  height : 80rem;
`;
export const ManageValidContainer = styled.div`
  margin : 1rem 0 0 0;
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

export const ManageList = styled.div`
  width : 43vw;
  height : 45rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  padding : 1.5rem 2rem;
  display : grid;
  grid-template-row: repeat(6, 1fr);
  // border-bottom : 0.2rem solid rgba(0,0,0,0.1);
`
// flex 형태로 만든 Item
export const FlexItemBtn = styled.button`
  background-color : #ffffff;
  border : none;
  border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  padding : 0 2rem;
  font-size : 2rem;
  font-family : "BMHANNAPROOTF";
  cursor : pointer;
  .item-box {
    display : flex;
    justify-content: space-between;
    align-items : center;
  }
  &:hover {
    color : #91d1fa;
  }
`