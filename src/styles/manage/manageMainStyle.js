import styled from "styled-components";

export const ManageContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items : center;
`;
export const ManageValidContainer = styled.div`
  margin : 6rem 0 0 0;
  box-shadow: 0px 5px 10px ${props => props.theme.colors.colorShadow};
  border-radius: 20px;
  width : 90vw;
  height : 40rem;
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