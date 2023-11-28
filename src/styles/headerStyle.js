import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width : 100vw;
  height : 8rem;
  display : flex;
  padding : 0 0 0 2rem;
  align-items : center;
  justify-content : space-between;
`

export const LogoWrapper = styled.div`
  width : 19rem;
  height : 7rem;
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin : 0 0 0 1rem;

  img {
    width : 6rem;
  }
  button {
    width : 12rem;
    font-size : 3.3rem;
    font-family : "BMHANNAPROOTF";
    border : none;
    cursor : pointer;
    background-color : ${props => props.theme.colors.colorBg};
    color : ${props => props.theme.colors.colorMain};
  }
`
export const MenuWrapper = styled.div`
  display : flex;
  width :70vw;
  justify-content : flex-end;

  button {
    border : none;
    font-size : 1.4rem;
    font-family : "Poppins_SemiBold";
    letter-spacing : 0.2rem;
    cursor : pointer;
    margin : 0 3rem;
    background-color : ${props => props.theme.colors.colorBg};
    color : ${props => props.theme.colors.colorMain};
    
    &.login {
      margin : 0 4rem 0 1rem;
      width : 9.5rem;
      height : 3rem;
      font-size : 1.5rem;
      letter-spacing : 0.1em;
      border-radius : 2rem;
      border : 0.1rem solid ${props => props.theme.colors.colorMain};;
    }
  }
`


export const LoginButton = styled.button`
  width : 9.5rem;
  height : 3rem;
  font-size : 1.5rem;
  font-family : "Poppins_SemiBold";
  letter-spacing : 0.1em;
  border-radius : 2rem;
  border : 0.1rem solid #000000;
  cursor : pointer;
`