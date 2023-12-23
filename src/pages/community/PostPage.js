import {Header, Typography, HorizontalLine, Footer} from "../../styles/CommunityStyle"
import styled from "styled-components";
import {useState} from 'react';  

  const MainContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 8rem;
      padding-right: 8rem;
      width: 100vw;
      //background-color: #E6FADE;
      margin: 0 auto;
  
      @media screen and (max-width: 500px) {
      flex-direction: column;
      }
  `;
  
  const FirstContainer = styled.div`
    width: 100%;
    min-height: 70vh;
    margin: 0 auto;
    flex-shrink: 0;
    background-color: #fff;
  `;
  
  const BulletinBox = styled.div`
  max-width: 100%;
  height: 25em;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin-top: 1em;
  position: relative;
`;

const CommentWriteBox = styled.input`
width: 100%;
height: 3em;
flex-shrink: 0;
border-radius: 1rem;
border: 0.3rem solid #91D1FA;
background: #91D1FA;
position: relative;
margin-top: 1em;
padding: 1rem;
&::placeholder {
    color: #fff;
  }
`;

const CommentViewBox = styled.div`
width: 100%;
height: 12em;
flex-shrink: 0;
border-radius: 1rem;
border: 0.3rem solid #91D1FA;
position: relative;
margin-top: 1em;
padding: 1rem;
&::placeholder {
    color: #fff;
  }
`;

const ButtonWrapper = styled.div`
display: flex;
position: absolute;
flex-direction: row;
top : 1rem;
right: 1rem;
gap : 1rem;
`

const ReportButton = styled.button`
width: 4em;
height: 2em;
justify-content: center;
align-items: center;
gap: 1rem;
background-color: #fff;
border-radius : 10rem;
border: 0.3rem solid #FA9DAD;
color: #FA9DAD;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
line-height: normal;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 60em;
  height: 50em;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 0.7rem solid #91D1FA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 3rem;
  }

  & > button {
    width: 30em;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    background: #fff;
    color: #000;
    margin: 0.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.5rem;
    &:active,
    &:focus {
      background-color: #91D1FA;
    }
  }

  & > span {
    position: relative;
    bottom: 7em;
    left: 28em;
    cursor: pointer;
    & > p {
      font-size: 2rem;
      color: #91D1FA;
    }
  }

  
`;

const ModifyButton = styled.button`
width: 4em;
height: 2em;
justify-content: center;
align-items: center;
gap: 1rem;
background-color: #fff;
border-radius : 10rem;
border: 0.3rem solid #91D1FA;
color: #91D1FA;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
line-height: normal;
`
const DeleteButton = styled.button`
width: 4em;
height: 2em;
justify-content: center;
align-items: center;
gap: 1rem;
background-color: #fff;
border-radius : 10rem;
border: 0.3rem solid #91D1FA;
color: #91D1FA;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
line-height: normal;
`
  
  
  const PostPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    return (
      <>
        <Header>HEADER</Header>
        <MainContainer>
          <FirstContainer>
            <Typography>BRONZE ROOM</Typography>
            <HorizontalLine></HorizontalLine>
          <BulletinBox>
            <ButtonWrapper>
            <ReportButton onClick={openModal}>신고</ReportButton>
            <ModifyButton>수정</ModifyButton>
            <DeleteButton>삭제</DeleteButton>
            </ButtonWrapper>
          </BulletinBox>
          <CommentWriteBox placeholder="댓글 작성 후 ENTER"></CommentWriteBox>
          <CommentViewBox></CommentViewBox>
          </FirstContainer>
        </MainContainer>
        <Footer>FOOTER</Footer>
        {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <div>신고 사유</div>
            <span onClick={closeModal}><p>X</p></span>
            <button>음란물 / 불건전한 만남 및 대화</button>
            <button>낚시 / 놀람 / 도배</button>
            <button>욕설 / 비하</button>
            <button>상업적 광고 및 판매</button>
            <button>정당 / 정치인 비하 및 선거운동</button>
            <button>유출 / 사칭 / 사기</button>
          </ModalContent>
        </ModalOverlay>
      )}
      </>
    );
  };
  
  export default PostPage;