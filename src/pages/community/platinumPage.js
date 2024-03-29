import {
  MainContainer, FirstContainer, Typography, HorizontalLine
} from "../../styles/communityStyle"
import Header from "../../components/common/header";
import { useNavigate } from "react-router-dom";
import search_white from '../../assets/imgs/search_white.png'
import { useEffect, useState } from "react";
import axios from "axios";
import * as c from "../../styles/communityPostStyle";

const PlatinumPage = () => {
  const storedToken = localStorage.getItem('accessToken')
  const bojTier = localStorage.getItem('bojTier');
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  useEffect(() => {
    if (bojTier?.toUpperCase() === 'BEGINNER') {
      alert('Beginner 회원은 접근할 수 없습니다.');
      navigate('/'); 
    }
  }, [bojTier, navigate]);

  const moveToMain = () => {
    navigate('/');
  }

  const handleWriteClick = () => {
    navigate("/community/write");

  };

  const ViewPost = ({ post }) => {
    const postId = post.postId;
    return (
      <c.StyledLink to={`/community/post/${postId}`}>
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
  };
  const ViewPosts = ({ posts }) => {
    const postArray = Array.isArray(posts) ? posts : [];
    return (
      <div>
        {postArray.map((post, index) => (
          <ViewPost key={index} post={post} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        for (let currentPage = 0; currentPage < 100; currentPage++) {
        const response = await axios.get('/api/post', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          params: {
            postTier: "Platinum",
            page: currentPage,
          }
        });
        setPosts(prevPosts => [...prevPosts, ...response.data.result.postResponses]);
        }
      } catch (error) {
        if (error.response && error.response.data.errorCode === 'JWT_4010') {
          alert("로그인 유효 기간이 지났습니다. 다시 로그인 해주세요 :)");
          navigate('/');
        } else {
          console.error(error);
        }
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % 5 === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - 5);
      setMinPageNumberLimit(minPageNumberLimit - 5);
    }
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5);
      setMinPageNumberLimit(minPageNumberLimit + 5);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleEnterClick = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const isTierAllowed = ["PLATINUM", "DIAMOND", "RUBY", "MASTER"].includes(bojTier?.toUpperCase());

  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>PLATINUM</Typography>
          <HorizontalLine></HorizontalLine>
          <c.WrapContainer>
            <c.SearchBarContainer>
              <c.SearchInputBox>
                <img src={search_white} alt="돋보기 그림" />
                <input
                  type="text"
                  placeholder="Search your problem !"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </c.SearchInputBox>
              <button onClick={handleEnterClick}>SEARCH</button>
              </c.SearchBarContainer>
              {isTierAllowed && 
              <c.WriteButton onClick={handleWriteClick}>작성하기</c.WriteButton>}     
          </c.WrapContainer>
          <c.BulletinPageContainer>
          <c.HeaderBulletin>
            <p>글번호</p>
            <p>제목</p>
            <p>글쓴이</p>
            <p>조회수</p>
            <p>댓글수</p>
            <p>작성일</p>
          </c.HeaderBulletin>
          <c.BulletinBox>
          {searchResults.length > 0 ? (
          <ViewPosts posts={searchResults} />
        ) : (
          <ViewPosts posts={currentPosts} />
        )}
          </c.BulletinBox>
          <c.PaginationContainer>
          <c.Pagination>
          <button onClick={handlePrevBtn} className="prevButton" disabled={currentPage === 1}>Prev</button>
          {Array.from({ length: totalPages }).map((_, index) => {
            if (index >= minPageNumberLimit && index < maxPageNumberLimit) {
              return <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>;
            } else {
              return null;
            }
          })}
          <button onClick={handleNextBtn}  className="nextButton" disabled={currentPage === totalPages}>Next</button>
          </c.Pagination>
          </c.PaginationContainer>
        </c.BulletinPageContainer>
      </FirstContainer>
    </MainContainer>
    </div >
  )
}

export default PlatinumPage;