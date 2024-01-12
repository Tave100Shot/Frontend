import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  FirstContainer, MainContainer, GridContainer, LevelBox, Typography, LevelTypography, Description,
  HorizontalLine, EnterButton, TypographyDcp, LockedButton
} from '../../styles/CommunityStyle';
import Header from "../../components/common/Header";
import axios from "axios";

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
    //border: 1rem solid rgba(230, 250, 222, 0.5);
    padding-top: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const AuthorContainer = styled.div`
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

  }
`

const TitleContainer = styled.div`
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
  }
  }
`

const ContentContainer = styled.div`
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

const FileContainer = styled.div`
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
const SelectedFileContainer = styled.div`
  width: 10em;
  height: 2rem;
  margin: 1.5rem;
  padding: 1rem;
  border: 0.3rem solid #91D1FA;
  border-radius: 1rem;
  background: #fff;
  color: #333;
  font-family: 'Poppins';
  font-size: 1.2rem;
  text-align: center;
  
`;

const ButtonContainer = styled.div`
    display: flex;
    gap : 1rem;
    position: fixed;
    bottom: 4rem;
    right: 8rem;
`

const CancelButton = styled.button`
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

const UploadButton = styled.button`
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

const WritePage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const apiUrl = "http://43.200.95.44:8080/api/post";

  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachmentFile(file);
    setSelectedFileName(file.name);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('postTier', 'POST_BRONZE_SILVER');
    if (attachmentFile) {
      formData.append('attachmentFile', attachmentFile);
    }
    axios.post("http://43.200.95.44:8080/api/post", formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => console.log(error))
  }


  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>WRITE</Typography>
          <HorizontalLine></HorizontalLine>
          <form encType="multipart/form-data">
            <WrapContainer>
              <AuthorContainer>
                <div>글쓴이</div>
                <input
                  id="writer"
                  type="text"
                  placeholder="Your ID" />
              </AuthorContainer>
              <TitleContainer>
                <div>제목</div>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={titleChange}
                  placeholder="Write Title" />
              </TitleContainer>
            </WrapContainer>
            <ContentContainer>
              <div>내용</div>
              <textarea
                id="content"
                type="text"
                value={content}
                onChange={contentChange}
                placeholder="Write Your Problems" />
            </ContentContainer>
            <FileContainer>
              <div>파일 첨부</div>
              <label htmlFor="attachmentFile">File Upload
              </label>
              <input id="attachmentFile" type="file" name="attachmentFile" accept="*" multiple onChange={handleFileChange} />
            </FileContainer>
            <FileContainer>
              <div></div>
            <SelectedFileContainer>
                {selectedFileName && `${selectedFileName}`}
              </SelectedFileContainer>
            </FileContainer>
            <ButtonContainer>
              <CancelButton onClick={() => { navigate("/community/bronze") }}>취소</CancelButton>
              <UploadButton onClick={onSubmit}>업로드</UploadButton>
            </ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};


export default WritePage;

