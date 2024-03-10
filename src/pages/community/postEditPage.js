import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../components/common/header";
import { MainContainer, FirstContainer, Typography, HorizontalLine } from '../../styles/communityStyle';
import * as c from "../../styles/communityPostStyle";

const PostEditPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { postDetails = {} } = state || {};
  const { postId, title, content, imageUrls, writer } = postDetails;

  const [editData, setEditData] = useState({
    title: title,
    content: content,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', editData.title);
    formData.append('content', editData.content);

    try {
      await axios.patch(`/api/post/${postId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/community/post/${postId}`);
    } catch (error) {
      console.error("게시물 수정 실패:", error);
    }
  };

  return (
    <div>
      <Header click={() => navigate('/')} />
      <MainContainer>
        <FirstContainer>
          <Typography>POST EDIT</Typography>
          <HorizontalLine />
          <form onSubmit={handleEditSubmit} encType="multipart/form-data">
            <c.WriteWrapContainer>
              <c.AuthorContainer>
                <div>글쓴이</div>
                <input id="writer" type="text" readOnly value={writer} />
              </c.AuthorContainer>
              <c.TitleContainer>
                <div>제목</div>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={editData.title}
                  onChange={handleInputChange}
                  placeholder="Write Title"
                />
              </c.TitleContainer>
            </c.WriteWrapContainer>
            <c.ContentContainer>
              <div>내용</div>
              <textarea
                id="content"
                name="content"
                value={editData.content}
                onChange={handleInputChange}
                placeholder="Write Your Problems"
              />
            </c.ContentContainer>
            <c.FileContainer>
              <div>첨부 파일</div>
              {imageUrls.map((image, index) => (
                <div key={index}>{image.fileName}</div>
              ))}
            </c.FileContainer>
            <c.ButtonContainer>
              <c.CancelButton type="button" onClick={() => navigate(`/community/post/${postId}`)}>취소</c.CancelButton>
              <c.UploadButton type="submit">수정 완료</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};

export default PostEditPage;
