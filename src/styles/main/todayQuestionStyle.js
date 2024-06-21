import styled from "styled-components";
import { LuCheck } from "react-icons/lu";

export const todayQuestionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40rem;
  margin : 5rem 0 3rem 0;
  //padding : 0 10rem 0 10rem;
  //background-color: lightblue;
`

export const mainBox = styled.div`
  display : flex;
  width : 90vw;
  height : flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.colorBg};
  box-shadow: 0px 5px 10px ${props => props.theme.colors.colorShadow};;
  border-radius: 20px;
`

export const titleBox = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.theme.colors.colorMain};
`

export const informationBox = styled.div`
font-size: 2rem;
font-weight: 500;

`
export const moreButton = styled.div`
display: flex;
font-size: 2rem;
font-weight: 600;
color: white;
width : 16rem;
height : 5rem;
background-color: #0075FF;
align-items: center;
justify-content: center;
text-align: center;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
border-radius: 10px;
cursor: pointer;
&:active {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

`

export const informationWrapper = styled.div`
//display: flex;
width : flex;
height : 40vh;
//background-color: lightblue;
margin : 5rem 0 5rem 5rem;

`
export const highlight = styled.span`
color: #0075FF;
font-weight: 600;
`

export const image = styled.img`
  width: flex;
  height : flex;
  //background-color: lightblue;
  margin: 5rem 4rem 5rem 0;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const finalImage = styled.img`
width: 12vw;
height: 24vh;
margin: 2rem 0 2rem 0;
`
export const letterInfoContainter = styled.div`
//background-color: tomato;
`
export const styledLuCheck = styled(LuCheck)`
font-size: 1.9rem;
font-weight: 700;
`
export const devLetterContainer = styled.div`
width : 50vw;
height : flex;
//background-color: yellow;
border-bottom : 0.1rem solid #B4B4B4;
margin : 3rem 0 0 5rem;
padding: 0 0 3rem 0;
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
//background-color: pink;
font-size: 1.7rem;
font-weight: 600;
line-height: 1.8;
}
`

export const employLetterContainer = styled.div`
width : 50vw;
height : 25vh;
//background-color: lightgreen;
margin : 2rem 0 0 5rem;

h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

p {
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.8;
}
`

export const applyContainer = styled.div`
display: flex;
width : 35vw;
height : flex;
border-left : 0.1rem solid #B4B4B4;
flex-direction: column;
justify-content: center;
align-items: center;
margin : 3rem 0 3rem 5rem;
//background-color: green;

h1 {
  display: flex;
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
}
`

export const applyForm = styled.div`
width: 80%;
height: 18rem;
color: ${props => props.theme.colors.colorMain};
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-weight: 600;
//background-color: yellow;
//margin: 1rem 0 0 0;

  table {
    width: 100%;
    height: 16rem;
    //background-color: pink;
    border: none;
  }

  th, td {
    font-size: 2rem;
    height: 8rem;
    border: none;
    //background-color: green;
    //text-align: center;
    //border : 0.1rem solid black;
  }

  p {
    //background-color: pink;
    font-size: 1rem;
    color: #FF1700;
    margin-left: 4rem;
  }
  h1 {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    //font-weight: 600;
    color: #FF1700;
  }
  h2 {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #0075FF;
  }
  h3 {
    color: ${props => props.theme.colors.colorBg};
    font-size: 1rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h5 {
    width: 17vw;
    color: #0075FF;
  }
`
export const LetterButtonContainer = styled.div`
  display: flex;
  //background-color: pink;
  margin-top: 2rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.button`
  font-size: 2rem;
  //font-weight: bold;
  width : 17rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 13px;
  border: none;
  outline: none;
  border-radius: 3rem;
  color: ${props => props.theme.colors.colorMain};
  background-color: rgba(145, 209, 250, 0.5);
  cursor : pointer;
  background-color: ${props => props.isClicked ? '#0075FF' : 'rgba(145, 209, 250, 0.5)'};
`

export const StyledNameInput = styled.input`
  color: ${props => props.theme.colors.colorMain};
  font-size: 1.5rem;
  width : 12vw;
  padding: 13px;
  margin: 1rem 1rem 0.2rem 3rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: rgba(145, 209, 250, 0.5);
`;

export const StyledEmailInput = styled.input`
  color: ${props => props.theme.colors.colorMain};
  font-size: 1.5rem;
  width : 20vw;
  padding: 13px;
  margin: 0 1rem 0.2rem 3rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: rgba(145, 209, 250, 0.5);
`;


export const ClickButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-color: pink;
  margin-top: 2rem;
`

export const DefaultButton = styled.div`
  display: flex;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  width : 16rem;
  height : 5rem;
  background-color: #0075FF;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`
export const BackButton = styled.div`
  display: flex;
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  width : 16rem;
  height : 5rem;
  background-color: #CECDCD;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`

export const finalForm = styled.div`
display: flex;
width: 80%;
height: 17rem;
color: ${props => props.theme.colors.colorMain};
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-weight: 600;
//background-color: skyblue;
margin: 1rem 3rem 1rem 3rem;

  table{
    width: 100%;
  }
  td {
    font-size: 2rem;
    width: 10rem;
    border: none;
    //background-color: green;
    //text-align: center;
    //border : 0.1rem solid black;
    padding: 1rem;
    margin: 1.5rem 0 1.5rem 0;
    vertical-align: middle;


  }

  p {
    font-size: 2rem;
    color: #0075FF;
    //background-color: green;
    padding: 1rem;
    font-weight: 300;
  }
`

export const emailVerifyBox = styled.div`
  display : flex;
  flex-direction: column;
  width : 90vw;
  height : flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.colorBg};
  box-shadow: 0px 5px 10px ${props => props.theme.colors.colorShadow};;
  border-radius: 20px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: ${props => props.theme.colors.colorMain};
  }
    p {
      font-size: 3rem;
      font-weight: bold;
      color: ${props => props.theme.colors.colorMain};
    }
`