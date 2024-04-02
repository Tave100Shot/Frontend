import styled from "styled-components";

export const TodayQuestionsWrapper = styled.div`
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
export const Highlight = styled.span`
color: #0075FF;
`

export const Image = styled.img`
  width: 20%;
  height : 70%;
  //background-color: lightblue;
  margin: 5rem 4rem 5rem 0;
`