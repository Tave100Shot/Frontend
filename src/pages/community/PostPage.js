import { FirstContainer, MainContainer, Typography, HorizontalLine } from '../../styles/CommunityStyle';
import Header from "../../components/common/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';  
import { FiThumbsDown } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";

  const BulletinBox = styled.div`
  max-width: 100%;
  height: 20em;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin-top: 1em;
  position: relative;
`;
const ReportIcon = styled(FiThumbsDown)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #FA9DAD;
`
const EditIcon = styled(LuPencil)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #91D1FA;
`
const DeleteIcon = styled(FiTrash)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #91D1FA;
`
const ViewCommentContianer = styled.div`
  position : absolute;
  bottom : 0;
  right : 0;
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  gap : 1rem;
  algin-items : center;
  }
`
const ViewIcon = styled(FiUsers)`
  margin : 1rem 0 1rem 1rem;
  font-size : 2rem;
  color : #91D1FA;
`

const CommentIcon = styled(FiMessageCircle)`
  margin : 1rem 0 1rem 1rem;
  font-size : 2rem;
  color : #91D1FA;
`

const ViewNum = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color : #91D1FA;
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
  
`
const CommentNum = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color : #91D1FA;
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
`

const CommentWriteBox = styled.input`
width: 100%;
height: 4rem;
color: #fff;
flex-shrink: 0;
border-radius: 1rem;
outline: none;
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

const CommentViewBoxContainer = styled.div`
  position: absolute;
  display: grid;
  top: 0;
  right: 0;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.5rem;
  align-items: center;
  justify-content: center;
  //border: 3px solid #000;
`

const CommentViewWrite = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #91D1FA;
  margin: auto;
`
const CommentViewEdit = styled(LuPencil)`
  cursor : pointer;
  font-size : 2rem;
  color : #91D1FA;
  margin: auto;
`

const CommentViewDelete = styled(FiTrash)`
  cursor: pointer;
  font-size: 2rem;
  color: #91D1FA;
  margin: auto;
`

const ButtonWrapper = styled.div`
display: flex;
position: absolute;
flex-direction: row;
top : 1rem;
right: 1rem;
gap : 1rem;
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
  
  const PostPage = () => {
    const navigate = useNavigate();
    const moveToMain = () => {
      navigate('/');
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    return (
      <div>
      <Header click={moveToMain} />
        <MainContainer>
          <FirstContainer>
            <Typography>BRONZE & SILVER</Typography>
            <HorizontalLine></HorizontalLine>
          <BulletinBox>
            <ButtonWrapper>
            <ReportIcon onClick={openModal} />
            <EditIcon />
            <DeleteIcon />
            </ButtonWrapper>
            <ViewCommentContianer>
            <ViewIcon />
            <ViewNum>45</ViewNum>
            <CommentIcon />
            <CommentNum>2</CommentNum>
            </ViewCommentContianer>
          </BulletinBox>
          <CommentWriteBox placeholder="댓글 작성 후 ENTER"></CommentWriteBox>
          <CommentViewBox>
            <CommentViewBoxContainer>
              <CommentViewWrite>댓글 달기</CommentViewWrite>
              <CommentViewEdit />
              <CommentViewDelete />
            </CommentViewBoxContainer>
          </CommentViewBox>
          </FirstContainer>
        </MainContainer>
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
      </div>
    );
  };
  
  export default PostPage;