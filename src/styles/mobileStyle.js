import styled from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  width : 16.5rem;
  height : 5rem;
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin : 0 0 3rem 0;

  img {
    width : 5rem;
  }
  h3 {
    font-size : 3rem;
    font-family : "BMHANNAPROOTF";
    border : none;
    color : ${props => props.theme.colors.colorMain};
  }
`

export const ImageContainer = styled.div`
  position : relative;
  margin : 1rem 0 8rem 0;
  .iphone {
    width : 25rem;
    margin : 0 4rem 0 0;

  }
  .galaxy {
    width : 23rem;
    position : absolute;
    top : 7rem;
    right : -1rem;

  }
`

export const TextContainer = styled.div`
  margin : 3rem 0;
  text-align : center;
  color : ${props => props.theme.colors.colorMain};
  h3 {
    font-size : 1.8rem;
    font-family: "Poppins_Medium";
  }
  p {
    font-size : 1.5rem;
    margin : 0.8rem 0 0 0;
    font-family: "Poppins_Medium";
  }
`