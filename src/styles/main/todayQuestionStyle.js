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
height : 20vh;
//background-color: pink;
margin : 3rem 0 0 5rem;
padding: 0 0 3rem 0;
h1 {
  font-size: 3rem;
}

p {
  font-size: 1.8rem;
}
`

export const styledHr = styled.div`
border: none; // 기본 테두리 스타일 제거
  height: 2px; // 선의 두께
  background-color: #333; // 선의 색상
  width: 50%; // 선의 길이 (부모 컨테이너에 대한 상대적 길이)
  margin: 0 auto; // 수평 중앙 정렬
`

export const employLetterContainer = styled.div`
width : 50vw;
height : 25vh;
//background-color: lightgreen;
margin : 0 0 5rem 5rem;

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.8rem;
}
`

export const applyContainer = styled.div`
display: flex;
width : 35vw;
height : 45vh;
border-left : 0.1rem solid #B4B4B4;
justify-content: center;
margin : 3rem 0 2rem 5rem;
background-color: lightblue;

h1 {
  display: flex;
  font-size: 3rem;

}
`

export const applyForm = styled.div`

`