import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display : flex;
  width : 80vw;
  height : 8rem;
  margin : 2rem auto;
  padding : 0 10rem;  
  align-items : center;
  justify-content : space-around;

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
export const SelectBox = styled.div`
  position: relative;
  display : flex;
  width: 14.5rem;
  height : 5rem;
  padding: 0 1rem;
  margin : 0 3rem;
  border : 0.3rem solid ${props => props.theme.colors.colorAccent};
  color : ${props => props.theme.colors.colorAccent};
  font-family : Poppins_Regular;
  font-size : 1.5rem;
  border-radius: 1.3rem;
  background-color: ${props => props.theme.colors.colorBg};
  align-items: center;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: 1rem;
    right: 0.8rem;
    font-size : 1.5rem;
  }

  label {
    margin : 0 2rem 0 1rem;
    font-size : 1.5rem;
    margin-left: 0.3rem;
    text-align: center;
  }

  ul {
    position: absolute;
    z-index : 1;
    list-style: none;
    top: 5.5rem;
    left: -0.3rem;
    width: 13.9rem;
    overflow: auto;
    height: 15rem;
    max-height: ${(props) => (props.show ? "none" : "0")};
    padding: 0;
    border-radius: 1.3rem;
    border: ${(props) => (props.show ? `0.2rem solid ${props.theme.colors.colorAccent}` : "none")};
    background-color: ${props => props.theme.colors.colorBg};
    color: ${props => props.theme.colors.colorAccent};
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  li {
    font-size : 1.35rem;
    padding: 0.6rem 0.8rem;
    transition: background-color 0.2s ease-in;
    border-bottom : 0.2rem solid ${props => props.theme.colors.colorAccent};
    &:hover {
      background-color: ${props => props.theme.colors.colorAccentHover};
      color: ${props => props.theme.colors.colorBg};
    }
    &:nth-last-child(1) {
      border-bottom : none;
    }
  }
`