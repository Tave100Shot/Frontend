import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/common/header";
import * as c from "../../styles/communityPostStyle";
import { MainContainer, FirstContainer, Typography, HorizontalLine } from '../../styles/communityStyle';

const WriteHighPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [attachmentFiles, setAttachmentFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newFiles = [...attachmentFiles, ...files];
    setAttachmentFiles(newFiles);
  };

  const handleFileRemove = (indexToRemove) => {
    setAttachmentFiles(attachmentFiles.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const submitFormData = new FormData();
    submitFormData.append('title', formData.title);
    submitFormData.append('content', formData.content);
    attachmentFiles.forEach(file => submitFormData.append('attachmentFile', file));

    try { 
      const response = await axios.post('/api/post', submitFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(response.data);
      navigate("/community/high");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header click={() => navigate('/')} />
      <MainContainer>
        <FirstContainer>
          <Typography>WRITE</Typography>
          <HorizontalLine />
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <c.WriteWrapContainer>
              <c.AuthorContainer>
                <div>글쓴이</div>
                <p>{localStorage.getItem('gitLoginId')}</p>
              </c.AuthorContainer>
              <c.TitleContainer>
                <div>제목</div>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Write Title" />
              </c.TitleContainer>
            </c.WriteWrapContainer>
            <c.ContentContainer>
              <div>&nbsp;내용&nbsp;&nbsp;</div>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
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
              {attachmentFiles.map((file, index) => (
                <c.SelectedFileContainer key={index}>
                  <div>{file.name}</div>
                  <c.DeleteFileIcon onClick={() => handleFileRemove(index)} />
                </c.SelectedFileContainer>
              ))}
            </c.FilesContainer>
            <c.ButtonContainer>
              <c.CancelButton type="button" onClick={() => navigate("/community/high")}>취소</c.CancelButton>
              <c.UploadButton type="submit">업로드</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};

export default WriteHighPage;
