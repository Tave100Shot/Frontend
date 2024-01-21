import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  FirstContainer, MainContainer, GridContainer, LevelBox, Typography, LevelTypography, Description,
  HorizontalLine, EnterButton, TypographyDcp, LockedButton
} from '../../styles/CommunityStyle';
import Header from "../../components/common/Header";
import axios from "axios";
import * as c from "../../styles/communityPostStyle";
import {Link} from 'react-router-dom';


const PostEditPage = ({ onSuccess }) => {

  const { state } = useLocation();
  const { postDetails = {} } = state || {};
  const navigate = useNavigate();
  console.log('postDetails:', postDetails);
  const postId = postDetails.postId;
  const storedToken = localStorage.getItem('accessToken')


  const [newData, setNewData] = useState({
    title: postDetails.title,
    content: postDetails.content,
    postTier: 'BronzeSilver',
    attachmentFile: postDetails.imageUrls,
  });
  const [selectedFileName, setSelectedFileName] = useState('');
  console.log(state.postDetails);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', newData.title);
      formData.append('content', newData.content);
      formData.append('postTier', newData.postTier);

      if (newData.attachmentFile) {
        const filesArray = Array.isArray(newData.attachmentFile)
          ? newData.attachmentFile
          : [newData.attachmentFile];

        filesArray.forEach((file, index) => {
          formData.append(`attachmentFile${index + 1}`, file);
        });
      }

      await axios.patch(`/api/post/${postId}`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('게시물 수정 완룡');
      //onSuccess();
      navigate(`/community/post/${postId}`);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(newData);

  const moveToMain = () => {
    navigate('/');
  }
  const titleChange = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };
  const contentChange = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedFiles = [...newData.attachmentFile, ...Array.from(files)];
    setNewData((prevData) => ({
      ...prevData,
      attachmentFile: Array.from(updatedFiles),
    }));
    setSelectedFileName(files.length > 0 ? files[0].name : '');

    const newImageUrls = [
      ...postDetails.imageUrls,
      ...Array.from(files).map((file, index) => ({
        imageId: postDetails.imageUrls.length + index + 1,
        imageUrl: URL.createObjectURL(file),
        fileName: postDetails.name,
      })),
    ];

    console.log('되나?',newImageUrls);

    setNewData((prevData) => ({
      ...prevData,
      imageUrls: newImageUrls,
    }));
    console.log('Updated Image URLs:', newImageUrls);
  };

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
                  type="text"
                  readOnly
                  value={postDetails.writer} />
              </c.AuthorContainer>
              <c.TitleContainer>
                <div>제목</div>
                <input
                  id="title"
                  type="text"
                  value={newData.title}
                  onChange={titleChange}
                  placeholder="Write Title" />
              </c.TitleContainer>
            </c.WriteWrapContainer>
            <c.ContentContainer>
              <div>내용</div>
              <textarea
                id="content"
                type="text"
                value={newData.content}
                onChange={contentChange}
                placeholder="Write Your Problems" />
            </c.ContentContainer>
            <c.FileContainer>
              <div>파일 첨부</div>
              <label htmlFor="attachmentFile">File Upload
              </label>
              <input
                id="attachmentFile"
                type="file"
                name="attachmentFile"
                accept="*"
                multiple
                onChange={handleFileChange} />
            </c.FileContainer>
            <c.FileContainer>
                {postDetails.imageUrls.map((image, index) => (
                  <div key={index}>
                    <p>{image.fileName}</p> {/* 파일명 표시 */}
                  </div>
                ))}
            </c.FileContainer>
            <c.ButtonContainer>
              <c.CancelButton onClick={() => {  navigate(`/community/post/${postId}`) }}>취소</c.CancelButton>
              <c.UploadButton onClick={handleEdit}>수정 완료</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );

};

export default PostEditPage;