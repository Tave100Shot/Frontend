import styled, { keyframes } from "styled-components";
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
  background-color : #213839;
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
    border: 1rem solid ${props => props.theme.colors.colorBg};
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

export const RecommendLatestBox = styled.div`
  background-color : #E3B059;
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
    border: 1rem solid ${props => props.theme.colors.colorBg};
    border-radius : 4rem;
    p {
      &.desc {
        display : none;
      }
    }
    form {
      display : block
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
  form {
    display : none;
    input {
      background-color : rgba(255, 255, 255, 0.2);
      border : none;
      width : 28rem;
      height : 3.8rem;
      margin : 0 1rem 0 0;
      padding : 0 0 0 1.5rem;
      outline: none;
      border : 0.15rem solid #ffffff;
      border-radius : 1rem;
      color: #ffffff;
      font-family : Poppins_Liht;
      font-size : 1.3rem;
    }
    input::placeholder {
      color: #ffffff;
      font-family : Poppins_Light;
      font-size : 1.2rem;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    button {
      width : 7rem;
      height : 3.8rem;
      border-radius : 1.3rem;
      align-items : center;
      color :#ffffff;
      background-color : none;
      font-family : Poppins_Bold;
      font-size : 1.5rem;
    }

  }
`

export const UserProfileLayout = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20rem;
  margin : 7rem 0 0 0;
`
const popUp = keyframes`
  from {
    transform: scale(0);
    opacity: 0; 
  }
  to {
    transform: scale(1);
    opacity: 1; 
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(5px);
    opacity: 0; 
  }
  to {
    transform: translateY(0px);
    opacity: 1; 
  }
`

export const UserProfileBox = styled.div`
  animation: ${popUp} ease-in-out 350ms;
  width: 80vw;
  height : 20rem;
  background-color : ${props => props.theme.colors.colorBg};
  border-radius: 2.5rem;
  box-shadow: 0 0 4rem 0 ${props => props.theme.colors.colorShadow};
  padding: 2rem 2rem 2rem 3.5rem;
  position: relative;
`

export const UserProfilePicture = styled.div`
  background: #ffffff;
  height: 15rem;
  width: 15rem;
  border-radius: 100rem;
  border: 1rem solid ${props => props.theme.colors.colorBg};
  position: absolute;
  top: -4rem;

  &:before {
    border-radius: 10rem;
    box-shadow: 0 0 4rem 0 ${props => props.theme.colors.colorShadow};
    content: "";
    height: calc(100% + 2rem);
    left: -1rem;
    position: absolute;
    top: -1rem;
    width: calc(100% + 2rem);
    z-index: -1; 
  }

  img {
    border-radius: 10rem;
    height: 100%;
    width: 100%; 
  }
`
export const UserProfileHeader = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`
export const UserProfileAccount = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items : center;
  padding-left: 18rem;
  
  h4 {
    font-family: "Poppins_SemiBold";
    color : ${props => props.theme.colors.colorMain};
    font-size : 2.8rem;
    letter-spacing : 0.2rem;
    text-align: right;
  }
  
  p {
    margin-left: 3rem;
    width: 10rem;
    border-radius: 5rem;
    background-color : ${props => props.theme.colors.bronze};
    color: #ffffff;
    font-family: "Poppins_SemiBold";
    font-size: 1rem;
    letter-spacing : 0.1rem;
    padding : 0.4rem 0;
    text-align: center;
    transition: ease-in-out 250ms background, ease-in-out 250ms color;
  }
`

export const UserProfileStats = styled.div`
  display: flex;
`

export const UserProfileStat = styled.div`
  animation: ${slideUp} ease-in-out 350ms forwards;
  border-right: 0.1rem solid ${props => props.theme.colors.colorLine};
  display: flex;
  flex: 1;
  justify-content: center;
  opacity: 0;
  padding: 1rem 0;
  height : 10rem;
  &:nth-last-child(1) {
    border-right: none;
  }
  align-items : center;
`

export const UserProfileIcon = styled.div`
  height : 100%;  
  font-size: 5.5rem;
  &.profile--rank {
    color : ${props => props.theme.colors.profileRank};
  }
  
  &.profile--rival {
    color : ${props => props.theme.colors.profileRival};
  }
  `
  
  export const UserProfileValue = styled.div`
  width : 10rem;
  height : 8rem;
  font-family: "Poppins_SemiBold";
  font-size: 2.5rem;
  text-align: center;
  
  &.profile--rank {
    color : ${props => props.theme.colors.profileRank};
  }

  &.profile--rival {
    color : ${props => props.theme.colors.profileRival};
  }
  `
  
  export const UserProfileKey = styled.div`
  font-family: "Poppins_Regular";
  font-size: 1.3rem;
  text-align: center;

  &.profile--rank {
    color : ${props => props.theme.colors.profileRank};
  }
  &.profile--rival {
    color : ${props => props.theme.colors.profileRival};
  }
`
