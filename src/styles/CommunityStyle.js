import styled from "styled-components";

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
  color: #000;
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
  padding : 1rem;
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
    margin-top: 50px;

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
  gap: 0.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* 한 개의 열로 변경 */
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const LevelBox = styled.div`
  max-width: 55wv;
  height: 20rem;
  flex-shrink: 0;
  border-radius: 3rem;
  background: rgba(145, 209, 250, 0.6);
  position: relative;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;
  &:hover {
    background : #91D1FA;
  }
`;

export const Typography = styled.div`
  color: #000;
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LevelTypography = styled.div`
  color: #000;
  width: 30vw;
  font-family: 'Audiowide';
  font-size: 3.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 3rem;
  margin-left: 5rem;
`;

export const Description = styled.div`
  width: 22vw;
  height: 6rem;
  color: #000;
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 10rem;
  left: 5.1rem;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 0.05rem;
  background-color: #000;
`;

export const EnterButton = styled.button`
    display: flex;
    width: 13rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    background-color: #fff;
    border-radius : 10rem;
    position: absolute;
    bottom: 0;
    right: 0;
    margin : 3rem;
    color: #000;
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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