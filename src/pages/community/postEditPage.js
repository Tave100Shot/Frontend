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
  const { postId, title, content, imageUrls = [], writer } = postDetails;
  const bojTier = localStorage.getItem('bojTier');

  const [editData, setEditData] = useState({
    title: title || '',
    content: content || '',
    imageUrls: imageUrls || []
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [removedFiles, setRemovedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleFileChange = (e) => {
    setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)]);
  };

  const handleRemoveFile = (index, type) => {
    if (type === 'existing') {
      const updatedImageUrls = editData.imageUrls.filter((_, i) => i !== index);
      setRemovedFiles([...removedFiles, editData.imageUrls[index]]);
      setEditData({ ...editData, imageUrls: updatedImageUrls });
    } else {
      const updatedUploadedFiles = uploadedFiles.filter((_, i) => i !== index);
      setUploadedFiles(updatedUploadedFiles);
    }
  };

  // 게시물 수정 제출
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', editData.title);
    formData.append('content', editData.content);

    // 추가된 파일들
    uploadedFiles.forEach((file) => formData.append('attachmentFile', file));

    try {
      await axios.patch(`/api/post/${postId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate(`/community/post/${postId}`);
    } catch (error) {
      if (error.response && error.response.data.errorCode === 'JWT_4010') {
        alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
        navigate('/community');
      }
      else if (error.response && error.response.data.errorCode === 'POST_4040') {
        alert("해당 게시글이 존재하지 않아요!");
      }
      else if (error.response && error.response.data.errorCode === 'USER_4040') {
        alert("사용자 토큰이 잘못되었습니다. 다시 로그인 해주세요!");
      }
      else if (error.response && error.response.data.errorCode === 'USER_4010') {
        alert("다시 로그인 해주세요!");
      }
      else if (error.response && error.response.data.errorCode === 'USER_4041') {
        alert("회원가입을 해주세요!");
      }
      else {
        alert('알 수 없는 서버 오류에요!')
        navigate('/community');
      }
      //console.error("게시물 수정 실패:", error);
    }
  };

  // 파일 이름 짧게 표시
  const shortFileName = (name, maxLength = 20) => {
    if (!name) {
      return '';
    }
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength) + '...';
  };

  return (
    <div>
      <Header click={() => navigate('/')} />
      <MainContainer>
        <FirstContainer>
          <Typography>COMMUNITY EDIT</Typography>
          <HorizontalLine />
          <form onSubmit={handleEditSubmit} encType="multipart/form-data">
            <c.WriteWrapContainer>
              <c.AuthorContainer>
                <div>글쓴이</div>
                <input id="writer" type="text" readOnly value={writer} />
              </c.AuthorContainer>
              <c.AuthorContainer>
                <div>티어</div>
                <p>{bojTier}</p>
              </c.AuthorContainer>
            </c.WriteWrapContainer>
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
              <div>파일</div>
              <label htmlFor="attachmentFile">파일 첨부하기</label>
              <p>새 파일 첨부 시, 기존 파일은 삭제됩니다.</p>
              <input
                id="attachmentFile"
                type="file"
                maxLength={10}
                name="attachmentFile"
                accept="*"
                multiple
                onChange={handleFileChange}
              />
            </c.FileContainer>
            <c.FilesContainer>
              {uploadedFiles.map((file, index) => (
                <c.SelectedFileContainer key={index}>
                  <div>{shortFileName(file.name)}</div>
                  <c.DeleteFileIcon onClick={() => handleRemoveFile(index, 'new')} />
                </c.SelectedFileContainer>
              ))}
            </c.FilesContainer>
            <c.ButtonContainer>
              <c.CancelButton type="button" onClick={() => navigate(`/community/post/${postId}`)}>취소</c.CancelButton>
              <c.UploadButton type="submit">수정</c.UploadButton>
            </c.ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};

export default PostEditPage;
