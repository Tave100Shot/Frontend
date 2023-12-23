import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    padding: 2rem;
    text-align: center;
    background-color: #f5f5dc;
    color: #000;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
    flex-direction: column;
    }
`;

export const FirstContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  background-color: #fff;
  //border: 0.1rem solid #000;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.1rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const LevelBox = styled.div`
  width: 45rem;
  height: 16.2rem;
  flex-shrink: 0;
  border-radius: 3rem;
  border: 0.01rem solid #000;
  background: rgba(145, 209, 250, 0.5);
  margin: 0.5rem;
  position: relative;
`;

export const Typography = styled.div`
  color: #000;
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LevelTypography = styled.div`
  color: #000;
  font-family: 'Audiowide';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: 0;
  left: 0;
  margin : 3rem;
`;

export const Description = styled.div`
  width: 22rem;
  height: 6rem;
  color: #000;
  font-family: 'Poppins';
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
  position: absolute;
  top: 7rem;
  left: 3rem;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #000;
  margin: 0.5rem auto;
`;

export const EnterButton = styled.div`
    display: flex;
    width: 11rem;
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
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Footer = styled.footer`
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: #f5f5dc;
  color: #000;
`;

export default CommunityStyle;
