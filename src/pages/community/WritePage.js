import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  FirstContainer, MainContainer, GridContainer, LevelBox, Typography, LevelTypography, Description,
  HorizontalLine, EnterButton, TypographyDcp, LockedButton
} from '../../styles/CommunityStyle';
import Header from "../../components/common/Header";
import * as c from "../../styles/communityPostStyle";
import axios from "axios";

const WritePage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [selectedFileContainers, setSelectedFileContainers] = useState([]);
  const apiUrl = "http://43.200.95.44:8080/api/post";

  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setAttachmentFile(files);
    /* const fileNames = Array.from(files).map(file => file.name);
    setSelectedFileNames(fileNames); */
     console.log('Selected Files:', files);
    const fileContainers = Array.from(files).map((file, index) => (
      <c.SelectedFileContainer key={index}>
        <div>
          {file.name}
          </div>
        <c.DeleteFileIcon onClick={() => handleFileRemove(index)} />

      </c.SelectedFileContainer>
    ));

    setSelectedFileContainers(fileContainers);
  };

  const handleFileRemove = (indexToRemove) => {
    const updatedFiles = attachmentFile.filter((file, index) => index !== indexToRemove);
    setAttachmentFile(updatedFiles);

    const updatedContainers = selectedFileContainers.filter((container, index) => index !== indexToRemove);
    setSelectedFileContainers(updatedContainers);
  };

  const storedToken = localStorage.getItem('accessToken')

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('postTier', 'BronzeSilver');
    for (let i = 0; i < attachmentFile.length; i++) {
      formData.append('attachmentFile', attachmentFile[i]);
    }

    axios.post('/api/post', formData, {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${storedToken}`,
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
            <c.WriteWrapContainer>
              <c.AuthorContainer>
                <div>글쓴이</div>
                <input
                  id="writer"
                  placeholder="글쓴이"
                  type="text"
                  readOnly />
              </c.AuthorContainer>
              <c.TitleContainer>
                <div>제목</div>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={titleChange}
                  placeholder="Write Title" />
              </c.TitleContainer>
            </c.WriteWrapContainer>
            <c.ContentContainer>
              <div>내용</div>
              <textarea
                id="content"
                type="text"
                value={content}
                onChange={contentChange}
                placeholder="Write Your Problems" />
            </c.ContentContainer>
            <c.FileContainer>
              <div>파일 첨부</div>
              <label htmlFor="attachmentFile">File Upload</label>
              <input
                id="attachmentFile"
                type="file"
                name="attachmentFile"
                accept="*"
                multiple
                onChange={handleFileChange} />
            </c.FileContainer>
            <c.FilesContainer>
            {selectedFileContainers.length > 0 && (
                <div style={{ display: 'flex' }}>
                  {selectedFileContainers}
                </div>
              )}
            </c.FilesContainer>
            <c.ButtonContainer>
              <c.CancelButton onClick={() => { navigate("/community/bronze") }}>취소</c.CancelButton>
              <c.UploadButton onClick={onSubmit}>업로드</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};


export default WritePage;

