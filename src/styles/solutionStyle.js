import styled from "styled-components";

export const SolutionContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  hr{
    width : 80vw;
    height : 0.15rem;
    background-color : ${props => props.theme.colors.colorAccent};
    border : none;
  }
  

`