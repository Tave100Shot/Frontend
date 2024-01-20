import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

export const ProblemContainer = styled.div`
  width : 85vw;
  margin : 6rem auto;
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  row-gap : 2rem;
  justify-items: center;
  @media (min-width: 740px) and (max-width: 1341px) {
    grid-template-columns : repeat(2, 1fr);
    grid-template-rows : repeat(2, 1fr);  
  }
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
  width : 25rem;
  height : 15rem;
  margin : 1rem;
  background-color : ${props => props.theme.colors.profileRank};
  color : ${props => props.theme.colors.colorBg};
  border-radius : 2rem;
  padding : 1rem 1.5rem;  
  hr {
    margin : 0.5rem 0;
  }
  h3 {
    font-size : 1.9rem;
  }
  `
  export const ProblemTitleBox = styled.div`
  display : flex;
  height : 3.5rem;
  justify-content : space-between;
  align-items : flex-end;
  padding : 0 0.5rem 0.2rem 0;
  h3 {
    font-family : "Poppins_Light";
    font-size : 1.5rem;
    margin : 0 0 0 0.3rem;
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
    width : 15vw;
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