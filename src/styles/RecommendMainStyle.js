import styled from "styled-components";
import Sky from "../assets/imgs/recommend_sky.jpg"
import Sunset from "../assets/imgs/recommend_sunset.jpg"

export const RecommendContainer = styled.div`
  display : flex;
  flex-direction : column;
  height : 100vh;
  width : 100vw;
  align-items : center;
  position : relative;
  justify-content : space-between;

  button {
    border : none;
    background-color : rgba(0, 0, 0, 0);
    color : #ffffff;
    font-size : 3rem;
    font-family : "BMHANNAPROOTF";
    z-index : 1;
  }

  span {
    z-index : 1;
    text-align : center;
    margin  : 0 0 6rem 0;
    padding : 1rem 4rem;
    border : 0.13rem solid #ffffff;
    border-radius : 4rem;
    color : #ffffff;
    background-color : rgba(0, 0, 0, 0);
    font-size : 1.5rem;
    font-family : "Poppins_Regular";
    letter-spacing : 0.2rem;
  }
`
export const RecommendSelectBox = styled.div`
  width : 100vw;
  height : 100vh;
  display : grid;
  grid-template-columns: 50vw 50vw;
  position : absolute;
`

export const RecommendMeBox = styled.div`
  background-color : ${props => props.theme.colors.colorRecommendMe};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align : center;
  color : #ffffff;
  margin: 0;
  &:hover {
    background-image: url(${Sky});
    background-size: cover;
    border: 1rem solid #ffffff;
    border-radius : 4rem;
    p {
      &.desc {
        display : none;
      }
    }
  }

  p {
    &.title {
      font-family : "BlackHanSans";
      font-size : 6rem;
      color : rgba(0, 0, 0, 0);
      -webkit-text-stroke : 0.2rem #ffffff;
      letter-spacing : 0.6rem;
      margin : 0 0 1.6rem 0;
    }
    &.desc {
      font-family : "Poppins_Regular";
      font-size : 1.3rem;
      letter-spacing : 0.05rem;
    }
  }

`

export const RecommendRankBox = styled.div`
  background-color : ${props => props.theme.colors.colorRecommendRank};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align : center;
  color : #ffffff;
  margin: 0;
  &:hover {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${Sunset});
    background-size: cover;
    border: 1rem solid #ffffff;
    border-radius : 4rem;
    p {
      &.desc {
        display : none;
      }
    }
  }

  p {
    &.title {
      font-family : "BlackHanSans";
      font-size : 6rem;
      color : rgba(0, 0, 0, 0);
      -webkit-text-stroke : 0.2rem #ffffff;
      letter-spacing : 0.6rem;
      margin : 0 0 1.6rem 0;
    }
    &.desc {
      font-family : "Poppins_Regular";
      font-size : 1.3rem;
      letter-spacing : 0.05rem;
    }
  } 
`