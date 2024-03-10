import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/common/header";
import { MainContainer, FirstContainer, Typography, HorizontalLine } from "../../styles/communityStyle";
import * as c from "../../styles/communityPostStyle";
import search_white from '../../assets/imgs/search_white.png';

const ViewPost = ({ post }) => (
  <c.StyledLink to={`/community/post/${post.postId}`}>
    <c.StyledViewPost>
      <p>{post.postId}</p>
      <p>{post.title}</p>
      <p>{post.writer}</p>
      <p>{post.view}</p>
      <p>{post.commentCount}</p>
      <p>{post.writtenTime}</p>
    </c.StyledViewPost>
  </c.StyledLink>
);

const ViewPosts = ({ posts }) => (
  <div>
    {posts.map((post, index) => (
      <ViewPost key={index} post={post} />
    ))}
  </div>
);

const GoldPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  useEffect(() => {
    const bojTier = localStorage.getItem('bojTier');
    if (bojTier?.toUpperCase() === 'BEGINNER') {
      alert('Beginner 회원은 접근할 수 없습니다.');
      navigate('/');
    }

    const fetchPosts = async () => {
      const storedToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('/api/post', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          params: {
            postTier: "Gold",
            page: currentPage,
          }
        });
        setPosts(prevPosts => [...prevPosts, ...response.data.result.postResponses]);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data.errorCode === 'JWT_4010') {
          alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
          navigate('/');
        }
      }
    };

    fetchPosts();
  }, [currentPage, navigate]);

  const handleWriteClick = () => navigate("/community/write");

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    const results = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setPosts(results.length ? results : ['검색 결과가 없습니다.']);
  };

  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div>
      <Header click={() => navigate('/')} />
      <MainContainer>
        <FirstContainer>
          <Typography>GOLD</Typography>
          <HorizontalLine />
          <c.WrapContainer>
            <c.SearchBarContainer>
              <c.SearchInputBox>
                <img src={search_white} alt="돋보기 그림" />
                <input
                  type="text"
                  placeholder="Search your problem !"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </c.SearchInputBox>
              <button onClick={handleSearch}>SEARCH</button>
            </c.SearchBarContainer>
            <c.WriteButton onClick={handleWriteClick}>작성하기</c.WriteButton>
          </c.WrapContainer>
          <c.BulletinPageContainer>
            <ViewPosts posts={currentPosts} />
          </c.BulletinPageContainer>
        </FirstContainer>
      </MainContainer>
    </div>
  );
};

export default GoldPage;
