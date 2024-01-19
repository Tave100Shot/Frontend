import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const ProblemContainer = styled.div`
display : flex;
height : 18rem;
width : 100vw;
align-items : center;
justify-content : center;
`


// 개인 기반 문제 추천 
export const RecommendMeTextBox = styled.div`
  width : 100vw;
  height : 5rem;
  display : flex;
  align-items : center;
  justify-content : center;
  text-align : center;
  margin : 3rem 0 1.5rem 0;

  h1 {
    font-family : "Poppins_SemiBold";
    font-size : 3rem;
    color : ${props => props.theme.colors.profileRank};
  }
  hr {
    margin : 0 5rem;
    width : 21vw;
    height : 0.1rem;
    border : none;
    background : ${props => props.theme.colors.profileRank};
  }
`

export const ProblemMeBox = styled.div`
  display : flex;
  flex-direction : Column;
  align-items : center;
  width : 15rem;
  height : 15rem;
  margin : 0 4rem;
  padding : 2rem 2.5rem;
  border-radius : 2rem;
  background-color : ${props => props.theme.colors.profileRank};
  color : ${props => props.theme.colors.colorBg};
  text-align : center;

  h3 {
    margin : 2rem 0;
    font-family : "Poppins_Regular";
    font-size : 1.7rem;
  }
  
  p {
    width : 10rem;
    padding : 0.3rem 0;
    border-radius : 2.5rem;
    font-family : "Poppins_Light";
    font-size : 1.3rem;
    background-color : ${props => props.theme.colors.colorBg};
    color : ${props => props.theme.colors.profileRank};
  }
  
`

export const ResetMeIcon = styled(GrPowerReset)`
  color: ${props => props.theme.colors.profileRank};
  font-size: 2.4rem;
  float : right;
  margin : 0 5rem 0 0;
  cursor : pointer;
`;

// 라이벌 기반 문제 추천
export const RecommendRivalTextBox = styled.div`
  width : 100vw;
  height : 5rem;
  display : flex;
  align-items : center;
  justify-content : center;
  text-align : center;
  margin : 3rem 0 1.5rem 0;

  h1 {
    font-family : "Poppins_SemiBold";
    font-size : 3rem;
    color : ${props => props.theme.colors.profileRival};
  }
  hr {
    margin : 0 5rem;
    width : 21vw;
    height : 0.1rem;
    border : none;
    background : ${props => props.theme.colors.profileRival};
  }
  `

  export const ProblemRankBox = styled.div`
  display : flex;
  flex-direction : Column;
  align-items : center;
  width : 15rem;
  height : 15rem;
  margin : 0 4rem;
  padding : 2rem 2.5rem;
  border-radius : 2rem;
  background-color : ${props => props.theme.colors.profileRival};
  color : ${props => props.theme.colors.colorBg};
  text-align : center;

  h3 {
    margin : 2rem 0;
    font-family : "Poppins_Regular";
    font-size : 1.7rem;
  }
  
  p {
    width : 10rem;
    padding : 0.3rem 0;
    border-radius : 2.5rem;
    font-family : "Poppins_Light";
    font-size : 1.3rem;
    background-color : ${props => props.theme.colors.colorBg};
    color : ${props => props.theme.colors.profileRival};
  } 
`

export const ResetRivalIcon = styled(GrPowerReset)`
  color: ${props => props.theme.colors.profileRival};
  font-size: 2.4rem;
  float : right;
  margin : 0 5rem 0 0;
  cursor : pointer;
`;