import styled from "styled-components";

export const SolutionContainer = styled.div`
  display : flex;
  position: relative;
  flex-direction : column;
  align-items : center;

  hr{
    width : 80vw;
    height : 0.15rem;
    background-color : ${props => props.theme.colors.colorAccent};
    border : none;
  }

  h3 {
    margin : 3rem 0 2rem 0;
    font-size : 2.5rem;
    color : ${props => props.theme.colors.colorAccent};
  }
`

export const SolutionItemContainer = styled.div`
  background-color : #eeeeee;
  width : 100vw;
  padding : 1rem 5rem;
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  grid-template-rows : repeat(2, 1fr);
  row-gap : 2rem;
  justify-items: center;

`
export const SolutionItemBox = styled.div`
  width : 25rem;
  height : 15rem;
  margin : 1rem 0;
  background-color : ${props => props.theme.colors.colorBg};
  border : 0.2rem solid ${props => props.theme.colors.colorAccent};
  border-radius : 2rem;
  padding : 1.5rem;

  &:hover {
    background-color : ${props => props.theme.colors.colorAccent};
    
  }
`

