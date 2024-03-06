import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  FirstContainer, MainContainer, GridContainer, LevelBox, Typography, LevelTypography, Description,
  HorizontalLine, EnterButton, TypographyDcp, LockedButton
} from '../../styles/communityStyle';
import Header from "../../components/common/header";
import * as c from "../../styles/communityPostStyle";
import axios from "axios";

const WritePlatinumPage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachmentFiles, setAttachmentFiles] = useState([]);
  const [selectedFileContainers, setSelectedFileContainers] = useState([]);
  const gitLoginId = localStorage.getItem('gitLoginId');
  const bojTier = localStorage.getItem('bojTier');


  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setAttachmentFiles([...attachmentFiles, ...files]);
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

    setSelectedFileContainers((prevContainers) => [
      ...prevContainers,
      ...fileContainers,
    ]);
  };

  const handleFileRemove = (fileToRemove) => {
    // 개별 파일을 attachmentFiles에서 삭제
    const updatedFiles = attachmentFiles.filter((file) => file !== fileToRemove);
    setAttachmentFiles(updatedFiles);
  
    // 개별 파일 컨테이너를 selectedFileContainers에서 삭제
    const updatedContainers = selectedFileContainers.filter(
      (container) => container.key !== fileToRemove.name
    );
    setSelectedFileContainers(updatedContainers);
  };

/* 게시물 작성 */
  const storedToken = localStorage.getItem('accessToken')

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('postTier', 'Platinum');
    for (let i = 0; i < attachmentFiles.length; i++) {
      formData.append('attachmentFile', attachmentFiles[i]);
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
        navigate("/community/platinum");
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
                <p>{gitLoginId}</p>
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
              <div>&nbsp;내용&nbsp;&nbsp;</div>
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
              <c.CancelButton onClick={() => { navigate("/community/platinum") }}>취소</c.CancelButton>
              <c.UploadButton onClick={onSubmit}>업로드</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};


export default WritePlatinumPage;