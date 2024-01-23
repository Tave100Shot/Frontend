//communitystyle.js
import styled, {keyframes } from "styled-components";

export const Header = styled.header`
    width: 100%;
    padding: 4rem;
    text-align: center;
    background-color: #E6FADE;
    color: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;
export const TypographyDcp = styled.div`
  color: ${props => props.theme.colors.colorMain};
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
  padding : 2rem 0 2rem 0;
`;
export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100vw;
    //background-color: #E6FADE;
    margin: 0 auto;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
    flex-direction: column;
    }
`;

export const FirstContainer = styled.div`
  width: 100%;

  min-height: 70vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #fff;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  //padding-right: 2rem;
  //padding-left: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* 한 개의 열로 변경 */
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const LevelBox = styled.div`
  max-width: 55wv;
  height: 25rem;
  flex-shrink: 0;
  border-radius: 3rem;
  border: 0.1rem solid ${props => props.theme.colors.levelboxBorder};
  background: ${props => props.theme.colors.levelbox};
  position: relative;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  transition: background 0.3s ease;
  &:hover {
    background : ${props => props.theme.colors.colorAccentHover};
  }
`;

export const Typography = styled.div`
  color: ${props => props.theme.colors.colorMain};
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LevelTypography = styled.div`
  color: ${props => props.theme.colors.colorMain};
  width: 30vw;
  font-family: 'Audiowide';
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 4rem;
  margin-left: 5rem;
`;

export const Description = styled.div`
  width: 22vw;
  height: 6rem;
  color: ${props => props.theme.colors.colorMain};
  font-family: 'Poppins';
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 11rem;
  left: 5.1rem;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: ${props => props.theme.colors.colorMain};
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const EnterButton = styled.button`
    display: flex;
    width: 15rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    background-color: ${props => props.theme.colors.enterButton};
    border-radius : 10rem;
    border: none;
    position: absolute;
    bottom: 0;
    right: 0;
    margin : 3rem;
    color: #000;
    font-family: 'Poppins';
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    animation: ${fadeIn} 1s ease;
    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 3rem;
  text-align: center;
  background-color: #E6FADE;
  color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;