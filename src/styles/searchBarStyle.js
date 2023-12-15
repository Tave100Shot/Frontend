import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display : flex;
  width : 80vw;
  height : 8rem;
  margin : 2rem auto;
  padding : 0 10rem;  
  align-items : center;
  justify-content : space-around;

  select {
    width : 14rem;
    height : 5rem;
    padding : 0 1rem;
    margin : 0 3rem;
    border-radius : 1.3rem;
    align-items : center;
    border : 0.3rem solid ${props => props.theme.colors.colorAccent};
    color : ${props => props.theme.colors.colorAccent};
    background-color : ${props => props.theme.colors.colorBg};
    font-family : Poppins_Regular;
    font-size : 1.5rem;
    outline: none;
  }

  button {
    width : 10rem;
    height : 5rem;
    padding : 0 1rem;
    border-radius : 1.3rem;
    align-items : center;
    border : 0.3rem solid ${props => props.theme.colors.colorAccent};
    color : ${props => props.theme.colors.colorBg};
    background-color : ${props => props.theme.colors.colorAccent};
    font-family : Poppins_Bold;
    font-size : 1.5rem;
  }
`

export const SearchInputBox = styled.div`
  background-color : ${props => props.theme.colors.colorAccent};
  display : flex;
  width : 80rem;
  height : 5rem;
  border-radius : 1.3rem;
  padding : 1rem 0 1rem 2rem;
  align-items : center;


  img {
    width : 2.5rem;
    height : 2.5rem;
    margin : 0 1.5rem 0 0;
  }
  input {
    background-color : ${props => props.theme.colors.colorAccent};
    border : none;
    width : 65rem;
    height : 100%;
    padding : 0 0 0 1rem;
    outline: none;
    color: ${props => props.theme.colors.colorBg};
    font-family : Poppins_SemiBold;
    font-size : 1.5rem;
  }
  input::placeholder {
    color: ${props => props.theme.colors.colorBg};
    font-family : Poppins_Light;
    font-size : 1.3rem;
  }

`