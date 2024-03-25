import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width : 75vw;
  height : 10rem;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  align-items : center;
  justify-items: start;
  margin : 0 0 0 8rem;
  position : relative;
`

export const accountVerfifyButton = styled.button `
  width : 5rem;
  height : 5rem;
  border-radius : 10rem;
  border : none;
  background-color : ${props => props.theme.colors.colorAccent};
  position : absolute;
  right : -5rem;


  img {
    width : 60%;
    height : 60%;
    margin : 0 auto;
  }
`