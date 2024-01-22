import {
  MainContainer, FirstContainer, Typography,
  HorizontalLine
} from "../../styles/CommunityStyle"
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";
import search_white from '../../assets/imgs/search_white.png'
import { useEffect, useState } from "react";
import axios from "axios";
import * as c from "../../styles/communityPostStyle";



const BronzePage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }

  const handleEnterClick = () => {
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
          <ViewPost key={index} post={post}/>
        ))}
      </div>
    );
  };

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  const storedToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/post', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          params: {
            postTier: "BronzeSilver",
            page: 0,
          }
        });
        setPosts(response.data.result.postResponses);
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
                ></input>
              </c.SearchInputBox>
              <button onClick={handleEnterClick}>SEARCH</button>
              <c.WriteButton onClick={handleEnterClick}>작성하기</c.WriteButton>
            </c.SearchBarContainer>
            </c.WrapContainer>
            <c.HeaderBulletin>
            <p>글번호</p>
            <p>제목</p>
            <p>글쓴이</p>
            <p>조회수</p>
            <p>댓글수</p>
            <p>작성일</p>
          </c.HeaderBulletin>
          <c.BulletinBox>
            <ViewPosts posts={currentPosts}/>
          </c.BulletinBox>
          <c.Pagination>
            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
            ))}
          </c.Pagination>
        </FirstContainer>
      </MainContainer>
    </div>
  )
}

export default BronzePage;