import styled from "styled-components";

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
  height : 55vh;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`

export const titleBox = styled.div`
  font-size: 4rem;
  font-weight: bold;
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
`

export const image = styled.img`
  width: 20%;
  height : 70%;
  //background-color: lightblue;
  margin: 5rem 4rem 5rem 0;
`
export const letterInfoContainter = styled.div`
//background-color: tomato;
`
export const devLetterContainer = styled.div`
width : 50vw;
height : 22vh;
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
font-size: 1.8rem;
}
`

export const styledHr = styled.div`
border: none;
  height: 2px; 
  background-color: #333;
  width: 50%; /
  margin: 0 auto;
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
  font-size: 1.8rem;
}
`

export const applyContainer = styled.div`
display: flex;
width : 35vw;
height : 47vh;
border-left : 0.1rem solid #B4B4B4;
flex-direction: column;
justify-content: center;
align-items: center;
margin : 3rem 0 2rem 5rem;
//background-color: lightblue;

h1 {
  display: flex;
  font-size: 2.5rem;

}
`

export const applyForm = styled.div`
width: 90%;
height: 20rem;
font-size: 1.5rem;
font-weight: 600;
//background-color: pink;
margin: 2rem 0 2rem 0;

  table {
    width: 100%;
    height: 100%;
    border: none;
  }

  th, td {
    font-size: 2rem;
    border: none;
    //text-align: center;
    //border : 0.1rem solid black;
  }
  p {
    font-size: 1rem;
    color: #FF1700;
    margin: 5px 0 5px 1rem;
  }
`

export const StyledButton = styled.button`
font-size: 1.5rem;
width : 8vw;
  padding: 13px;
  margin-right: 1rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: rgba(0, 117, 255, 0.16);
  cursor : pointer;
  background-color: ${props => props.isClicked ? '#0075FF' : 'rgba(0, 117, 255, 0.16)'};
`

export const StyledInput = styled.input`
font-size: 1.5rem;
width : 17vw;
  padding: 13px;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: rgba(0, 117, 255, 0.16);
`;

export const applyButton = styled.div`
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
margin-top: 1rem;
&:active {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
`