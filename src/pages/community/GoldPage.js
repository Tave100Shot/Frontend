import {Header, MainContainer, FirstContainer, GridContainer, LevelBox, Typography,LevelTypography, Description, HorizontalLine, EnterButton, Footer} from "../../styles/CommunityStyle"
import styled from "styled-components";

const WrapContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const SearchBox = styled.input`
  width: 75%;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin: 1.5rem;
  padding: 1rem;
  position: relative;
`;

const WriteButton = styled.div`
  width: 15%;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background : #91D1FA;
  margin: 1.5rem;
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BulletinBox = styled.div`
  max-width: 100%;
  height: 40rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin: 1rem;
  position: relative;
`;


const GoldPage = () => {
  return (
    <>
      <Header>HEADER</Header>
      <MainContainer>
        <FirstContainer>
          <Typography>GOLD</Typography>
          <HorizontalLine></HorizontalLine>
          <WrapContainer>
            <SearchBox placeholder="Search Your Problem Number!" />
            <WriteButton>작성하기</WriteButton>
          </WrapContainer>
          <BulletinBox></BulletinBox>
        </FirstContainer>
      </MainContainer>
      <Footer>FOOTER</Footer>
    </>
  )
}

export default GoldPage;