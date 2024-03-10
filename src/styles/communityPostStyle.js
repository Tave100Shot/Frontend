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
  width : 70vw;
  height : 8rem; 
  align-items : center;

  button {
    width : 10em;
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
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
`
export const SearchInputBox = styled.div`
  background-color : ${props => props.theme.colors.colorAccent};
  display : flex;
  width : 125rem;
  height : 5rem;
  border-radius : 1.3rem;
  padding : 1rem 0 1rem 2rem;
  margin : 0 10px;
  align-items : center;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);

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
  width: 11em;
  height: 5rem;
  border-radius: 1rem;
  border : 0.3rem solid ${props => props.theme.colors.colorAccent};
  background : ${props => props.theme.colors.colorBg};
  margin: 1em 0 1em 0 ;
  display: flex;
  color: ${props => props.theme.colors.colorAccent};
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor : pointer;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 3em;
  position: relative;
`

export const Pagination = styled.div`
  position: relative;
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 8px;
    width: 35px;
    height: 35px;
    //padding: 1rem 1.4rem;
    background-color: ${props => props.theme.colors.colorAccent};
    color: ${props => props.theme.colors.colorBg};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.8em;

  &:hover{
    background-color: ${props => props.theme.colors.colorAccentHover};
  }
}
  .prevButton, .nextButton {
    color: ${props => props.theme.colors.colorAccent};
    font-size: 1.2em;
    background-color: ${props => props.theme.colors.colorBg};
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  }
`

/* 단일 게시물 Style */

export const ReportIcon = styled(FiThumbsDown)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : ${props => props.theme.colors.thumbsDown};
`
export const EditIcon = styled(LuPencil)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : ${props => props.theme.colors.colorAccent};
`
export const DeleteIcon = styled(FiTrash)`
  margin : 1rem;
  cursor : pointer;
  font-size : 2.5rem;
  color : ${props => props.theme.colors.colorAccent};
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
  color : ${props => props.theme.colors.colorAccent};
`

export const CommentIcon = styled(FiMessageCircle)`
  margin : 1rem 0 1rem 1rem;
  font-size : 3rem;
  color : ${props => props.theme.colors.colorAccent};
`

export const ViewNum = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color : ${props => props.theme.colors.colorAccent};
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
  
`
export const CommentNum = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color : ${props => props.theme.colors.colorAccent};
  margin : 1.3rem 1rem 1rem 0;
  text-align: center;
`

export const CommentWriteBox = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  color: ${props => props.theme.colors.colorBg};
  flex-shrink: 0;
  border-radius: 1rem;
  outline: none;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  background: ${props => props.theme.colors.colorAccent};
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
  color: ${props => props.theme.colors.colorBg};
  padding: 0 1rem;
  position: relative;
  font-size: 5.5em;
  cursor: pointer;

  &:focus {
    background-color: ${props => props.theme.colors.colorAccent};
  }
  &:active {
    background-color: ${props => props.theme.colors.colorShadow};
  }
`;

export const EnterChildButton = styled(IoEnterOutline)`
  flex-shrink: 0;
  color: ${props => props.theme.colors.colorBg};
  padding: 0 1rem;
  position: relative;
  font-size: 3.5em;
  cursor: pointer;

  &:focus {
    background-color: ${props => props.theme.colors.colorAccent};
  }
  &:active {
    background-color: ${props => props.theme.colors.colorShadow};
  }
`;

export const CommentChildWriteBox = styled.div`
  display: flex;
  width: 50em;
  height: 5rem;
  color: ${props => props.theme.colors.colorBg};
  lex-shrink: 0;
  border-radius: 1rem;
  outline: none;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  background: ${props => props.theme.colors.colorAccent};
  position: relative;
  margin-top: 1em;
  margin-left: 12.5em;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  & > input {
    flex-grow: 1;
    font-size: 1em;
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

export const DisplayedBabyInput = styled.div`
  display: flex;
  width: 50em;
  height: 5rem;
  color: ${props => props.theme.colors.colorMain};
  lex-shrink: 0;
  border-radius: 1rem;
  outline: none;
  border: 0.3rem solid ${props => props.theme.colors.colorAccentHover};
  background: ${props => props.theme.colors.colorAccentHover};
  position: relative;
  margin-top: 1em;
  margin-left: 12.5em;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  & > input {
    flex-grow: 1;
    font-size: 1em;
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

export const ChildComment = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  align-items: center;

  & > p {
    font-family: 'Poppins';
    font-size: 1.5rem;
    width: 35em;
    heigth: 5em;
    margin-left: 1em;
  }
  `

export const CommentViewBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 12em;
  flex-direction: column;
    align-items: stretch;
  border-radius: 1rem;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  position: relative;
  margin-top: 1em;
  padding: 1rem;

  &::placeholder {
      color: ${props => props.theme.colors.colorBg};
  }
`;

export const CommentViewIconContainer = styled.div`
  position: absolute;
  display: grid;
  top: 0;
  right: 1em;
  grid-gap: 1.5em;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1.5rem;
  align-items: center;
  justify-content: center;
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
    margin-left: 1em;
  }
`
//프로필 아이디
export const CommentProfileId = styled.div`
  display: flex;
  font-size: 1em;
  color: ${props => props.theme.colors.colorMain};
  align-items: center;
  width: 180px;
  p {
    margin: 0 0 0 10px;

  }
`
//프로필 묶기
export const CommentProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  position: relative;
  border-right: 0.2rem solid ${props => props.theme.colors.colorAccent};
`
//프로필 사진 불러오기
export const CommentProfileIcon = styled(IoPersonCircleOutline)`
  cursor : pointer;
  font-size : 2rem;
  color : #919191;
  position: absolute;
  left: 0;
`

export const ParentCommentView = styled.div`
  position: relative;
  height: flex;
  border-radius: 1rem;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  margin : 1.5rem;
  padding: 1em;
  font-size: 1.5rem;
  flex-direction: column;
  ${props => (props.isChildComment ? 
    `background-color: #${props => props.theme.colors.colorAccent};;
    width: 80%;
    margin-left: 2rem;`: '')}
`

export const CommentViewWrite = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.colorAccent};
  margin: auto;
`
export const CommentViewEdit = styled(LuPencil)`
  cursor : pointer;
  font-size : 2rem;
  color : ${props => props.theme.colors.colorAccent};
  margin: auto;
`

export const CommentViewDelete = styled(FiTrash)`
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme.colors.colorAccent};
  margin: auto;
`

export const CommentEditContainer = styled.div`
  & > input {
    width: 40em;
    min-height: 5rem;
    border-radius: 1rem;
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 1.5rem;
    outline: none;
    padding: 0.5rem;
    margin-left: 1em;
}

  & > button {
    min-height: 5rem;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-size: 1.5rem;
    border-radius: 1rem;
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    padding: 1rem;
    margin: 1rem;
    background-color:${props => props.theme.colors.colorAccent};
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
  background-color: ${props => props.theme.colors.colorBg};
  padding: 20px;
  border-radius: 8px;
  border: 0.7rem solid ${props => props.theme.colors.modalLayout};
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
    color: ${props => props.theme.colors.colorMain};
  }

  & > button {
    width: 30em;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.3rem solid ${props => props.theme.colors.modalLayout};
    background: ${props => props.theme.colors.colorBg};
    color: #000;
    margin: 0.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.5rem;
    &:active,
    &:focus {
      background-color: ${props => props.theme.colors.modalLayout};
    }
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.colorAccentHover};
    }
  }

  & > span {
    position: relative;
    bottom: 7em;
    left: 28em;
    cursor: pointer;
    & > p {
      font-size: 2rem;
      color: ${props => props.theme.colors.modalLayout};
    }
  }
`;

export const HeaderBulletin = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr 1fr 1fr 1fr;
  padding: 11px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.colorAccent};
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
  min-height: 40rem;
  height: flex;
  flex-shrink: 0;
  border-bottom-left-radius: 1.3rem;
  border-bottom-right-radius: 1.3rem;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  position: relative;
  `;

export const BulletinPageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const StyledViewPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1.5fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.colorAccentHover};
  }

  p {
    margin: 0;
    font-size: 1.5em;
    color: ${props => props.theme.colors.colorMain};
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
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  margin-top: 1rem;
  position: relative;
  `;

export const PostProfile = styled.div`
  display: flex;
  font-size: 1em;
  color: ${props => props.theme.colors.colorMain};
  margin: 2em;
  align-items: center;
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    align-items: center; 
    justify-content: center;
    font-size: 1.2rem;
    color: #919191;
  }
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
  color: ${props => props.theme.colors.colorMain};
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const PostContent = styled.h3`
  font-size: 1.5em;
  color: ${props => props.theme.colors.colorMain};
  line-height: 1.6;
  padding:0 0 2em;
`;

export const PostImage = styled.div`
  font-size: 1.5em;
  line-height: 1.6;
  margin-top: 2em;
  margin-bottom: 2em;
`;

//write page
export const WriteWrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
  
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    width: 100px;
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
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    font-size: 1.5rem;
    background: ${props => props.theme.colors.colorAccent};
    color: ${props => props.theme.colors.colorBg};
    margin: 1.5rem;
    margin-right: 5em;
    padding: 1rem;
    position: relative;
    outline: none;
    &::placeholder {
      color: ${props => props.theme.colors.colorBg};
    }}
    & > p {
      width: 17em;
      height: 5rem;
      border-radius: 1rem;
      border: 0.3rem solid ${props => props.theme.colors.colorAccent};
      font-size: 1.5rem;
      background: ${props => props.theme.colors.colorAccent};
      color: ${props => props.theme.colors.colorBg};
      margin: 1.5rem;
      margin-right: 5em;
      padding: 1rem;
      position: relative;
      outline: none;
      &::placeholder {
        color: ${props => props.theme.colors.colorBg};
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
    width: 100px;
  }

  & > input {
    width: 70rem;
    height: 5rem;
    border-radius: 1rem;
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    background: ${props => props.theme.colors.colorAccent};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.colorBg};
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    outline: none;
    &::placeholder {
      color: ${props => props.theme.colors.colorBg};
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
    width: 100px;
  }

  & > textarea {
    font-size: 1.5rem;
    font-family: 'Poppins';
    min-width: 80em;
    height: 30rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.colorBg};
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    color: ${props => props.theme.colors.colorMain};
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
    padding: 25px 10px 20px 20px;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 1.5rem;
    white-space: nowrap;
    border: 0.3rem solid #;
    justify-content: center;
    width: 100px;
  }
  & > label {
    width: 15em;
    height: 5rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.3rem solid ${props => props.theme.colors.colorAccent};
    background: ${props => props.theme.colors.colorAccent};
    color: ${props => props.theme.colors.colorBg};
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    
    &:active {
      transform: translateY(3px);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
    }
  }
  & > input {
    display: none;
  }

`

export const FilesContainer = styled.div`
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
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  border-radius: 1rem;
  background: ${props => props.theme.colors.colorBg};
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.selectedFileText};
  display: flex;
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  & > div {
    width: 12em;
    height: 2rem;
    text-align: center;
    justify-content: center;
    font-family: 'Poppins';
    font-size: 1em;
  }
  
`;

export const DeleteFileIcon = styled(TiDelete)`
  font-size : 3rem;
  color : ${props => props.theme.colors.colorAccent};
  postion: absolute;
  right: 0;
  cursor: pointer;
  text-align: center;
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
  background-color: ${props => props.theme.colors.colorBg};
  border-radius : 10rem;
  border: 0.3rem solid #FA9DAD;
  color: #FA9DAD;
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const UploadButton = styled.button`
  width: 8rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${props => props.theme.colors.colorBg};
  border-radius : 10rem;
  border: 0.3rem solid ${props => props.theme.colors.colorAccent};
  color: ${props => props.theme.colors.colorAccent};
  font-family: 'Poppins';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

`;