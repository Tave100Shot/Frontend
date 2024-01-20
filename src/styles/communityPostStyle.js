import styled from "styled-components";
import { FiThumbsDown } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { IoEnterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

export const WrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SearchBarContainer = styled.form`
  display : flex;
  width : 80vw;
  height : 8rem;
  //margin : 2rem auto;
  //padding : 0 1rem;  
  align-items : center;
  //justify-content : space-around;

  button {
    width : 12rem;
    height : 5rem;
    padding : 0 1rem;
    border-radius : 1.3rem;
    align-items : center;
    border : 0.3rem solid ${props => props.theme.colors.colorAccent};
    color : ${props => props.theme.colors.colorBg};
    background-color : ${props => props.theme.colors.colorAccent};
    font-family : Poppins_Bold;
    font-size : 1.5rem;
    cursor : pointer;
  }
`
export const SearchInputBox = styled.div`
  background-color : ${props => props.theme.colors.colorAccent};
  display : flex;
  width : 100rem;
  height : 5rem;
  border-radius : 1.3rem;
  padding : 1rem 0 1rem 2rem;
  margin : 0 10px;
  align-items : center;

  img {
    width : 2.5rem;
    height : 2.5rem;
    margin : 0 1.5rem 0 0;
  }
  input {
    background-color : ${props => props.theme.colors.colorAccent};
    border : none;
    width : 65rem;
    height : 100%;
    padding : 0 0 0 1rem;
    outline: none;
    color: ${props => props.theme.colors.colorBg};
    font-family : Poppins_SemiBold;
    font-size : 1.5rem;
  }
  input::placeholder {
    color: ${props => props.theme.colors.colorBg};
    font-family : Poppins_Light;
    font-size : 1.5rem;
  }

`

export const WriteButton = styled.div`
  width: 10em;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border : 0.3rem solid #91D1FA;
  background : #fff;
  margin: 10px;
  position: absolute;
  right: 5em;
  color: #91D1FA;
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor : pointer;
`;

export const Pagination = styled.div`
  position: fixed;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 8px 12px;
    background-color: #91D1FA;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

  &:hover{
    background-color: rgba(145, 209, 250, 0.6);
  }
  &:active {
    background-color: #76ABCC;
  }
`

/* 단일 게시물 CSS */

export const ReportIcon = styled(FiThumbsDown)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #FA9DAD;
`
export const EditIcon = styled(LuPencil)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #91D1FA;
`
export const DeleteIcon = styled(FiTrash)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #91D1FA;
`
export const ViewCommentContianer = styled.div`
  position : absolute;
  bottom : 0;
  right : 0;
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  gap : 1rem;
  algin-items : center;
  }
`
export const ViewIcon = styled(FiUsers)`
  margin : 1rem 0 1rem 1rem;
  font-size : 3rem;
  color : #91D1FA;
`

export const CommentIcon = styled(FiMessageCircle)`
  margin : 1rem 0 1rem 1rem;
  font-size : 3rem;
  color : #91D1FA;
`

export const ViewNum = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color : #91D1FA;
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
  
`
export const CommentNum = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color : #91D1FA;
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
`

export const CommentWriteBox = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  color: #fff;
  flex-shrink: 0;
  border-radius: 1rem;
  outline: none;
  border: 0.3rem solid #91D1FA;
  background: #91D1FA;
  position: relative;
  margin-top: 1em;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  & > input {
    flex-grow: 1;
    font-size: 1.5em;
    width: 90%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }

`;

export const EnterButton = styled(IoEnterOutline)`
  flex-shrink: 0;
  color: #fff;
  padding: 0 1rem;
  position: relative;
  font-size: 5.5em;
  cursor: pointer;

  &:focus {
    background-color: #91D1FA;
  }
  &:active {
    background-color: #76ABCC;
  }
`;

export const CommentViewBox = styled.div`
display: flex;
width: 100%;
min-height: 12em;
flex-direction: column;
  align-items: stretch;
border-radius: 1rem;
border: 0.3rem solid #91D1FA;
position: relative;
margin-top: 1em;
padding: 1rem;

&::placeholder {
    color: #fff;
  }
`;

export const CommentViewIconContainer = styled.div`
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
//부모 댓글 컨테이너
export const ParentComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  align-items: center;
  
  & > p {
    font-family: 'Poppins';
    font-size: 1.5rem;
    //background-color: red;
    width: 40em;
  }
`
//프로필 아이디
export const CommentProfileId = styled.div`
display: flex;
margin-right: 1.5em;
font-size: 1em;
color: #919191;

`
//프로필 묶기
export const CommentProfile = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
`
//프로필 사진 불러오기
export const CommentProfileIcon = styled(IoPersonCircleOutline)`
cursor : pointer;
font-size : 2rem;
color : #919191;
margin-right: 0.5rem;
`

export const ParentCommentView = styled.div`
  position: relative;
  height: flex;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin : 1.5rem;
  padding: 1em;
  font-size: 1.5rem;
  flex-direction: column;
  ${props => (props.isChildComment ? 
    `background-color: #91D1FA;
    width: 80%;
    margin-left: 2rem;`: '')}
`

export const CommentViewWrite = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  color: #91D1FA;
  margin: auto;
`
export const CommentViewEdit = styled(LuPencil)`
  cursor : pointer;
  font-size : 2rem;
  color : #91D1FA;
  margin: auto;
`

export const CommentViewDelete = styled(FiTrash)`
  cursor: pointer;
  font-size: 2rem;
  color: #91D1FA;
  margin: auto;
`

export const CommentEditContainer = styled.div`
  
& > input {
  width: 40em;
  min-height: 3em;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1.5rem;
  outline: none;
  padding: 0.5rem;
}

& > button {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 1.5rem;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  padding: 1rem;
  margin: 1rem;
  background-color:#91D1FA;
  color: #fff;
  cursor: pointer;

}
`

export const ButtonWrapper = styled.div`
display: flex;
position: absolute;
flex-direction: row;
top : 1rem;
right: 1rem;
gap : 1rem;
`

export const ModalOverlay = styled.div`
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

export const ModalContent = styled.div`
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

export const HeaderBulletin = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr 1fr 1fr 1fr;
  padding: 11px;
  font-weight: bold;
  background-color: #91d1fa;
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
  align-items: center;

  p {
    font-size: 1.5em;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BulletinBox = styled.div`
  max-width: 100%;
  min-height: 30rem;
  height: flex;
  flex-shrink: 0;
  border-bottom-left-radius: 1.3rem;
  border-bottom-right-radius: 1.3rem;
  border: 0.3rem solid #91D1FA;
  position: relative;
  `;

export const StyledViewPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(145, 209, 250, 0.3);
  }

  p {
    margin: 0;
    font-size: 1.5em;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const DetailBulletinBox = styled.div`
  max-width: 100%;
  min-height: 30rem;
  height: flex;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin-top: 1rem;
  position: relative;
  `;

export const PostProfile = styled.div`
  display: flex;
  font-size: 1em;
  color: #919191;
  margin: 2em;
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

export const ProfileIcon = styled(IoPersonCircleOutline)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : #919191;
`

export const PostDetailContainer = styled.div`
  margin: 3em;
`

export const PostTitle = styled.h1`
  font-size: 3em;
  color: #333;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const PostContent = styled.h3`
  font-size: 1.5em;
  color: #555;
  line-height: 1.6;
`;

export const PostImage = styled.div`
  font-size: 1.5em;
  color: #555;
  line-height: 1.6;
  margin-top: 2em;
  margin-bottom: 2em;
`;

//write page

export const WriteWrapContainer = styled.div`
  display: flex;
  flex-direction: column;
    //border: 1rem solid rgba(230, 250, 222, 0.5);
    padding-top: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    padding: 2.5rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    border: 0.3rem solid #;
    align-items: center; 

  }
  & > input {
    width: 17em;
    height: 5rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    font-size: 1.5rem;
    background: #91D1FA;
    color: #fff;
    margin: 1.5rem;
    margin-right: 5em;
    padding: 1rem;
    position: relative;
    outline: none;
    &::placeholder {
      color: #fff;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    padding: 2.5rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    align-items: center; 
    border: 0.3rem solid #;

  }

  & > input {
    width: 40rem;
    height: 5rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    background: #91D1FA;
    font-size: 1.5rem;
    color: #fff;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    outline: none;
    &::placeholder {
      color: #fff;
    }
  }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    padding: 2.5rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    border: 0.3rem solid #;
    width: 6.5em;
  }
  & > textarea {
    font-size: 1.5rem;
    font-family: 'Poppins';
    width: 80em;
    height: 20rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    color: #000;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    outline: none;
    resize: none;
  }
`

export const FileContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    padding: 2.5rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    border: 0.3rem solid #;
    width: 10rem;
  }
  & > label {
    width: 12em;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    background: #91D1FA;
    color: #fff;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
  }
  & > input {
    display: none;
  }
`

export const FilesContainer = styled.div`
  //background-color: red;
    padding: 2.5rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    border: 0.3rem solid #;
    width: 100%;
    padding: 0 0 0 10rem;
`

export const SelectedFileContainer = styled.div`
  min-width: 16em;
  height: 4rem;
  margin: 1rem;
  //padding: 1rem;
  border: 0.3rem solid #91D1FA;
  border-radius: 1rem;
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #333;
  display: flex;

  & > div {
    width: 12em;
    height: 2rem;
    text-align: center;
  //background-color: red;
  justify-content: center;
  font-family: 'Poppins';
  font-size: 1em;
  //display: flex;
  //margin: 0.5rem;

  }
  
`;

export const DeleteFileIcon = styled(TiDelete)`
  //margin : 0.5rem;
  font-size : 3rem;
  color : #91D1FA;
  postion: absolute;
  right: 0;
  cursor: pointer;
  //background-color: green;
  text-align: center;
  //margin: 0.5rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap : 1rem;
    position: fixed;
    bottom: 4rem;
    right: 8rem;
`

export const CancelButton = styled.button`
    width: 7rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    border-radius : 10rem;
    border: 0.3rem solid #FA9DAD;
    color: #FA9DAD;
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`;

export const UploadButton = styled.button`
    width: 8rem;
    height: 5rem;
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
    cursor: pointer;

`;

