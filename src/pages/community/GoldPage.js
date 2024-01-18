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

const CommentItem  = ({ comment }) => {
  return (
    <c.StyledViewPost>
    <p>{comment.commentId}</p>
    </c.StyledViewPost>
  );
}

const GoldPage = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }

  const handleEnterClick = () => {
    navigate("/community/write");

  };

  const [posts, setPosts] = useState([]);

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
                  placeholder="Search your problem with number !"
                ></input>
              </c.SearchInputBox>
              <button onClick={handleEnterClick}>SEARCH</button>
              <c.WriteButton onClick={handleEnterClick}>작성하기</c.WriteButton>
            </c.SearchBarContainer>
            </c.WrapContainer>
          <c.BulletinBox>
          {posts.map((post, index) => (
          <div key={index}>
            {/* Display post details */}
            <p>{post.postId}</p>
            <p>{post.title}</p>
            <p>{post.content}</p>
            {/* Display comments */}
            {post.commentListResponse && post.commentListResponse.commentResponses && (
              <div>
                {post.commentListResponse.commentResponses.map((comment, commentIndex) => (
                  <CommentItem key={commentIndex} comment={comment} />
                ))}
              </div>
            )}
          </div>
        ))}
          </c.BulletinBox>
        </FirstContainer>
      </MainContainer>
    </div>
  )
}

export default GoldPage;