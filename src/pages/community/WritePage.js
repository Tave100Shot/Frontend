import {Header, Typography,HorizontalLine, Footer} from "../../styles/CommunityStyle"
import styled from "styled-components";
import React, {useState} from "react";

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100vw;
    //background-color: #E6FADE;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
    flex-direction: column;
    }
`;

const FirstContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  flex-shrink: 0;
  background-color: #fff;
`;

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
    height: 4rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    font-size: 1.5rem;
    background: #91D1FA;
    color: #fff;
    margin: 1.5rem;
    margin-right: 5em;
    padding: 1rem;
    position: relative;
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
    height: 4rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    background: #91D1FA;
    font-size: 1.5rem;
    color: #fff;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
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
    width: 80em;
    height: 25rem;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    color: #000;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
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
  & > button {
    width: 12em;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 1rem;
    border: 0.3rem solid #91D1FA;
    background: #91D1FA;
    color: #fff;
    margin: 1.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.5rem;
  }
`


const ButtonContainer = styled.div`
    display: flex;
    gap : 1rem;
    position: fixed;
    bottom: 10rem;
    right: 4rem;
`

const CancelButton = styled.button`
    width: 5em;
    height: 3em;
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
`;

const UploadButton = styled.button`
    width: 6em;
    height: 3em;
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
`;

const SelectedFileContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 0.3rem solid #91D1FA;
  background: #fff;
  color: #333;
  font-family: 'Poppins';
  font-size: 1.2rem;

  p {
    margin: 0.5rem 0;
  }
`;

const WritePage = () => {

  const fileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleButtonClick = () => {
    fileInput.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  return (
    <>
      <Header>HEADER</Header>
      <MainContainer>
        <FirstContainer>
          <Typography>BRONZE ROOM</Typography>
          <HorizontalLine></HorizontalLine>
          <form>
          <WrapContainer>
            <AuthorContainer>
              <div>글쓴이</div>
              <input type="author" placeholder="Your ID" />
            </AuthorContainer>
            <TitleContainer>
              <div>제목</div>
              <input type="title" placeholder="Write Title" />
            </TitleContainer>
          </WrapContainer>
          <ContentContainer>
            <div>내용</div>
            <textarea type="text" placeholder="Write Your Problems"></textarea>
          </ContentContainer>
          <FileContainer>
            <div>파일 첨부</div>
            <button onClick={handleButtonClick}>File Upload</button>
            <input
            type="file"
            ref={fileInput}
            onChange={handleChange}
            style={{display:"none"}}
            />
            {selectedFile ? ( //다시확인
          <SelectedFileContainer>
            <p>선택된 파일: {selectedFile.name}</p>
            <p>파일 크기: {selectedFile.size} bytes</p>
          </SelectedFileContainer>
        ) : null}
          </FileContainer>
          <ButtonContainer>
          <CancelButton>취소</CancelButton>
          <UploadButton>업로드</UploadButton>
          </ButtonContainer>
          </form>
        </FirstContainer>
      </MainContainer>
      <Footer>FOOTER</Footer>
    </>
  );
};

export default WritePage;