import styled from "styled-components";

export const SolTextBox = styled.div`
  display : flex;
  flex-direction : column;
  width : 100vw;
  height : 35rem;
  align-items : center;
  justify-content: center; 

  h3 {
    font-size : 6rem;
    font-family : Poppins_SemiBold;
    line-height : 8rem;

    &:nth-child(1) {
      margin : 0 0 0 -55vw;  
    }
    &:nth-child(2) {
      color : ${props => props.theme.colors.colorAccent};
    }
    &:nth-child(3) {
      margin: 0 0 0 55vw; /* 위로 조정 */
    }
  }
  

`