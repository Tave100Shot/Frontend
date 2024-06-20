import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/common/header";
import * as c from "../../styles/communityPostStyle";
import { MainContainer, FirstContainer, Typography, HorizontalLine } from '../../styles/communityStyle';

const WritePlatinumPage = () => { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [attachmentFiles, setAttachmentFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const bojTier = localStorage.getItem('bojTier');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newFiles = [...attachmentFiles, ...files];
    if (attachmentFiles.length > 10 || newFiles.length > 10) {
      alert('최대 파일 첨부는 10개까지에요!');
    } else {
      setAttachmentFiles(newFiles);
    }
  };

  const shortFileName = (name, maxLength=20) => {
    if (name.length <= maxLength) {
      return name;
    }
    return name.substring(0, maxLength) + '...';
  }

  const handleFileRemove = (indexToRemove) => {
    setAttachmentFiles(attachmentFiles.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const submitFormData = new FormData();
    submitFormData.append('title', formData.title);
    submitFormData.append('content', formData.content);
    attachmentFiles.forEach(file => submitFormData.append('attachmentFile', file));

    if (!formData.title) {
      alert('제목을 작성해주세요!');
      setIsSubmitted(false);
    } else if (!formData.content) {
      alert('내용을 작성해주세요!');
      setIsSubmitted(false);
    } else if (attachmentFiles.length > 10){
      alert('파일은 최대 10개까지 첨부 가능해요!')
    } else {
      setIsSubmitted(true);
    }

    if (isSubmitted){
    try {
      const response = await axios.post('/api/post', submitFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        params: {
          postTier: "Platinum",
        }
      });
      alert('작성 완료!')
      console.log(response.data);
      navigate("/community/platinum");
    } catch (error) {
      if (error.response && error.response.data.errorCode === 'JWT_4010') {
        alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
        navigate('/community');
      }
      else if (error.response && error.response.data.errorCode === 'S4001') {
        alert("사진 개수가 너무 많아요!");
      }
      else if (error.response && (error.response.data.errorCode === 'S5001' || error.response.data.errorCode === 'S5002' || error.response.data.errorCode === 'S5003')) {
        alert("사진 업로드 에러가 발생했어요!");
      }
      else if (error.response && error.response.data.errorCode === 'POST_4030') {
        alert("해당 게시글에 작성 권한이 없어요!");
        navigate('/community/platinum');
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
      }
      console.error(error);
    }
  }
  };

  return (
    <div>
    <Header click={() => navigate('/')} />
    <MainContainer>
      <FirstContainer>
        <Typography>PLATINUM WRITE</Typography>
        <HorizontalLine />
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <c.WriteWrapContainer>
            <c.AuthorContainer>
              <div>글쓴이</div>
              <p>{localStorage.getItem('gitLoginId')}</p>
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
                type="text"
                maxLength={30}
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="제목은 30자까지 입력 가능해요!" />
            </c.TitleContainer>
          <c.ContentContainer>
            <div>내용</div>
            <textarea
              id="content"
              name="content"
              maxLength={1000}
              value={formData.content}
              onChange={handleInputChange}
              placeholder="내용은 1000자까지 입력 가능해요!" />
          </c.ContentContainer>
          <c.FileContainer>
            <div>파일</div>
            <label htmlFor="attachmentFile">파일 첨부하기</label>
            <input
              id="attachmentFile"
              type="file"
              maxLength={10}
              name="attachmentFile"
              accept="*"
              multiple
              onChange={handleFileChange} />
          </c.FileContainer>
          <c.FilesContainer>
            {attachmentFiles.map((file, index) => (
              <c.SelectedFileContainer key={index}>
                <div>{shortFileName(file.name)}</div>
                <c.DeleteFileIcon onClick={() => handleFileRemove(index)} />
              </c.SelectedFileContainer>
            ))}
          </c.FilesContainer>
          <c.ButtonContainer>
            <c.CancelButton type="button" onClick={() => navigate("/community/platinum")}>취소</c.CancelButton>
            <c.UploadButton type="submit">등록</c.UploadButton>
          </c.ButtonContainer>
        </form>
      </FirstContainer>
    </MainContainer>
  </div>
  );
};

export default WritePlatinumPage;
