import {
  Header, MainContainer, FirstContainer, GridContainer, LevelBox, Typography,
  LevelTypography, Description, HorizontalLine, EnterButton, Footer
} from "../../styles/CommunityStyle"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const PostButton = styled.button`
    width: 7em;
    height: 3em;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    border-radius : 10rem;
    border: 0.3rem solid #91D1FA;
    color: #91D1FA;
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
 

const BronzePage = () => {

  const navigate  = useNavigate();
  const handleEnterClick = () => {
    navigate("/community/write");
    //toLowerCase: JavaScript의 문자열 메서드, 문자열의 모든 문자 -> 소문자로 변환
  };
  const handlePostClick = (postId) => {
    navigate(`/community/post/${postId}`);
    
  };

  return (
    <>
      <Header>HEADER</Header>
      <MainContainer>
        <FirstContainer>
          <Typography>BRONZE & SILVER</Typography>
          <HorizontalLine></HorizontalLine>
          <WrapContainer>
            <SearchBox placeholder="Search Your Problem Number!" />
            <WriteButton onClick={handleEnterClick}>작성하기</WriteButton>
          </WrapContainer>
          <BulletinBox>
          <PostButton onClick={() => handlePostClick(1)}>작성1</PostButton>
          <PostButton onClick={() => handlePostClick(2)}>작성2</PostButton>
          </BulletinBox>
        </FirstContainer>
      </MainContainer>
      <Footer>FOOTER</Footer>
    </>
  )
}

export default BronzePage;