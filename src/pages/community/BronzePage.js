
import {
  MainContainer, FirstContainer, Typography, Description,
  HorizontalLine, EnterButton
} from "../../styles/CommunityStyle"
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";
import search_white from '../../assets/imgs/search_white.png'
import WritePage from "./WritePage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as c from "../../styles/communityPostStyle";



const BronzePage = () => {
  const bojTier = localStorage.getItem('bojTier');
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }

  const handleWriteClick = () => {
    navigate("/community/write");

  };

  const ViewPost = ({ post }) => {
    const postId = post.postId;
    //console.log(postId);
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  const storedToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        for (let currentPage = 0; currentPage < 5; currentPage++) {
        const response = await axios.get('/api/post', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          params: {
            postTier: "BronzeSilver",
            page: currentPage,
          }
        });
        setPosts(prevPosts => [...prevPosts, ...response.data.result.postResponses]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    // 검색어를 이용하여 게시판 제목을 필터링
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleEnterClick = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const isTierAllowed = ["BRONZE", "SILVER", "GOLD", "PLATINUM", "DIAMOND", "RUBY", "MASTER"].includes(bojTier?.toUpperCase());

  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>BRONZE & SILVER</Typography>
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
              {/* isTierAllowed && */ 
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
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
            ))}
          </c.Pagination>
          </c.PaginationContainer>
        </c.BulletinPageContainer>
      </FirstContainer>
    </MainContainer>
    </div >
  )
}

export default BronzePage;