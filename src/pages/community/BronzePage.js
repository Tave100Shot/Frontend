import {
  MainContainer, FirstContainer, Typography, Description,
  HorizontalLine, EnterButton
} from "../../styles/CommunityStyle"
import Header from "../../components/common/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import search_white from '../../assets/imgs/search_white.png'
import WritePage from "./WritePage";
import { useEffect, useState } from "react";
import axios from "axios";


const WrapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchBarContainer = styled.form`
  display : flex;
  width : 80vw;
  height : 8rem;
  //margin : 2rem auto;
  padding : 0 1rem;  
  align-items : center;
  //justify-content : space-around;

  button {
    width : 10rem;
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
  }
`
const SearchInputBox = styled.div`
  background-color : ${props => props.theme.colors.colorAccent};
  display : flex;
  width : 80rem;
  height : 5rem;
  border-radius : 1.3rem;
  padding : 1rem 0 1rem 2rem;
  margin : 0 10px;
  align-items : center;


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
    font-size : 1.3rem;
  }

`

const WriteButton = styled.div`
  width: 15%;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border : 0.3rem solid #91D1FA;
  background : #fff;
  margin: 10px;
  //position: relative;
  color: #91D1FA;
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor : pointer;
`;

const BulletinBox = styled.div`
  max-width: 100%;
  min-height: 30rem;
  height: flex;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.3rem solid #91D1FA;
  margin: 1rem;
  position: relative;
`;

const PostButton = styled.button`
    width: 7em;
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
`

const BronzePage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }

  const handleEnterClick = () => {
    navigate("/community/write");

  };
  const handlePostClick = (postId) => {
    navigate(`/community/post/${postId}`);

  };


  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>BRONZE & SILVER</Typography>
          <HorizontalLine></HorizontalLine>
          <WrapContainer>
            <SearchBarContainer>
              <SearchInputBox>
                <img src={search_white} alt="돋보기 그림" />
                <input
                  type="text"
                  placeholder="Search your problem with number !"
                ></input>
              </SearchInputBox>
              <button onClick={handleEnterClick}>SEARCH</button>
              <WriteButton onClick={handleEnterClick}>작성하기</WriteButton>
            </SearchBarContainer></WrapContainer>
          <BulletinBox>
            <PostButton onClick={() => handlePostClick(1)}>작성1</PostButton>
            <PostButton onClick={() => handlePostClick(2)}>작성2</PostButton>
          </BulletinBox>
        </FirstContainer>
      </MainContainer>
    </div>
  )
}

export default BronzePage;