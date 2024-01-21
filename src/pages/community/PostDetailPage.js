import { FirstContainer, MainContainer, Typography, HorizontalLine } from '../../styles/CommunityStyle';
import Header from "../../components/common/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as c from "../../styles/communityPostStyle";
import axios from 'axios';


const PostDetailPage = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const storedToken = localStorage.getItem('accessToken')
  const [isEditingComment, setIsEditingComment] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [editedCommentContent, setEditedCommentContent] = useState('');

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/api/post/${postId}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          },
        });
        setPostDetails(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchPostDetails();
  }, [postId]);

  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/');
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  //게시물 삭제
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        },
      });
      navigate('/community/bronze');
    } catch (error) {
      console.error(error);
    }
  }

  // 게시물 수정
  const handleEdit = () => {
    navigate(`/community/post/${postId}/edit`, { state: { postDetails } });
  };

  // 댓글 추가
  const handleAddComment = async () => {
    try {
      if (inputValue.trim() === '') {
        setInputError(true);
        return;
      }
      const response = await axios.post(`/api/post/${postId}/comments`, {
        comment: inputValue,
        parentCommentId: null,
      },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('새댓:', response.data);

      const updatedPostDetails = { ...postDetails };
      if (updatedPostDetails.postResponses && updatedPostDetails.postResponses[0]) {
        if (!updatedPostDetails.postResponses[0].commentListResponse) {
          updatedPostDetails.postResponses[0].commentListResponse = {
            commentResponses: [],
          };
        }
        updatedPostDetails.postResponses[0].commentListResponse.commentResponses.push(response.data.comment);
        updatedPostDetails.postResponses[0].commentCount += 1;

        setPostDetails(updatedPostDetails);
        setInputValue('');
        console.error('새댓 정보:', updatedPostDetails);

      }
      setInputValue('');
      setInputError(false);
      window.location.reload();

    } catch (error) {
      console.error('새댓 오류:', error);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      //e.preventDefault();
      handleAddComment();
      setInputValue('');
    }
  };

  // 대댓글 생성 -> 데이터 원형 구조 에러 확인 필수 ★
 /*  const handleAddChildComment = async (parentCommentId) => {
    try {
      const response = await axios.post(`/api/post/${postId}/comments`, {
        comment: '대댓글 테슽 확인ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ',
        parentCommentId: parentCommentId,
      },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const updatedPostDetails = { ...postDetails };
      if (updatedPostDetails.postResponses && updatedPostDetails.postResponses[0]) {
        if (!updatedPostDetails.postResponses[0].commentListResponse) {
          updatedPostDetails.postResponses[0].commentListResponse = {
            commentResponses: [],
          };
        }
        updatedPostDetails.postResponses[0].commentListResponse.commentResponses.push(response.data.comment);
        updatedPostDetails.postResponses[0].commentCount += 1;
        setPostDetails(updatedPostDetails);
      }
    } catch (error) {
      console.error('새댓 오류:', error);
    }
  }; */


  //댓글 수정
  const handleApplyEdit = async (commentId) => {
    try {
      if (editedCommentContent !== null && editedCommentContent !== undefined) {
        await axios.patch(`/api/post/comments/${commentId}`, {
          comment: editedCommentContent,
        }, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json',
          },
        });
      }

      setIsEditingComment(null);
    } catch (error) {
      console.error('댓글 수정 오류:', error);
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/post/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      window.location.reload();


      // 삭제된 댓글을 제외하고 업데이트
      const updatedPostDetails = { ...postDetails };
      const commentIndex = updatedPostDetails.postResponses[0].commentListResponse.commentResponses.findIndex(
        (comment) => comment.commentId === commentId
      );

      if (commentIndex !== -1) {
        updatedPostDetails.postResponses[0].commentListResponse.commentResponses.splice(commentIndex, 1);
        updatedPostDetails.postResponses[0].commentCount -= 1;
        setPostDetails(updatedPostDetails);
      }
    } catch (error) {
      console.error('댓글 삭제 오류:', error);
    }
  };

  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>BRONZE & SILVER</Typography>
          <HorizontalLine></HorizontalLine>
          <c.DetailBulletinBox>
            <c.ButtonWrapper>
              <c.ReportIcon onClick={openModal} />
              <c.EditIcon onClick={handleEdit} />
              <c.DeleteIcon onClick={handleDelete} />
            </c.ButtonWrapper>
            <div>
              {postDetails ? (
                <>
                  <c.PostProfile>
                    <c.ProfileIcon />
                    <c.ProfileInfo>
                      <h2>{postDetails.writer}</h2>
                      <p>{postDetails.writtenTime}</p>
                    </c.ProfileInfo>
                  </c.PostProfile>
                  <c.PostDetailContainer>
                    <c.PostTitle>{postDetails.title}</c.PostTitle>
                    <c.PostContent>{postDetails.content}</c.PostContent>
                    <c.PostImage>
                      {postDetails.imageUrls.map((image, index) => (
                        <img
                          key={index}
                          src={image.imageUrl}
                          alt={`Image ${image.imageId}`}
                          style={{ width: '40%', height: '40%' }}
                        />
                      ))}
                    </c.PostImage>
                  </c.PostDetailContainer>
                </>
              ) : (
                <p>로딩 중...</p>
              )}
            </div>
            <c.ViewCommentContianer>
              <c.ViewIcon />
              <c.ViewNum>{postDetails.view}</c.ViewNum>
              <c.CommentIcon />
              <c.CommentNum>{postDetails.commentCount}</c.CommentNum>
            </c.ViewCommentContianer>
          </c.DetailBulletinBox>
          <c.CommentWriteBox>
            <input placeholder="댓글 작성 후 ENTER"
              onKeyDown={(e) => e.key === 'Enter' && handleEnterKeyPress(e)}
              onChange={(e) => setInputValue(e.target.value)}
              className={inputError ? 'error' : ''}
            />
            <c.EnterButton onClick={handleAddComment}>ENTER</c.EnterButton>
          </c.CommentWriteBox>
          <c.CommentViewBox>
            {postDetails.commentListResponse && postDetails.commentListResponse.commentResponses.map((comment) => (
              <c.ParentCommentView key={comment.commentId} >
                {!isEditingComment || isEditingComment !== comment.commentId ? (
                  <>
                    <c.ParentComment>
                      <c.CommentProfile>
                        <c.CommentProfileId >
                          <c.CommentProfileIcon />
                          <p>{comment.gitLoginId}</p>
                        </c.CommentProfileId>
                      </c.CommentProfile>
                      <p>{comment.content}</p>
                    </c.ParentComment>
                  </>
                ) : (
                  <>
                    <c.ParentComment>
                      <c.CommentProfile>
                        <c.CommentProfileId >
                          <c.CommentProfileIcon />
                          <p>{comment.gitLoginId}</p>
                        </c.CommentProfileId>
                      </c.CommentProfile>
                      <c.CommentEditContainer>
                        <input
                          type="text"
                          value={editedCommentContent}
                          onChange={(e) => setEditedCommentContent(e.target.value)} // 수정된 내용을 state에 저장하도록 수정
                        />
                        <button onClick={() => handleApplyEdit(comment.commentId)}>수정 적용</button>
                      </c.CommentEditContainer>
                    </c.ParentComment>

                  </>
                )}
                <c.CommentViewIconContainer>
                  {/* <c.CommentViewWrite onClick={handleAddChildComment}>댓글 달기</c.CommentViewWrite> */}
                  <c.CommentViewEdit onClick={() => setIsEditingComment(comment.commentId)} />
                  <c.CommentViewDelete onClick={() => handleDeleteComment(comment.commentId)} />
                </c.CommentViewIconContainer>
              </c.ParentCommentView>
            ))}
          </c.CommentViewBox>
        </FirstContainer>
      </MainContainer>
      {isModalOpen && (
        <c.ModalOverlay>
          <c.ModalContent>
            <div>신고 사유</div>
            <span onClick={closeModal}><p>X</p></span>
            <button onClick={closeModal}>음란물 / 불건전한 만남 및 대화</button>
            <button onClick={closeModal}>낚시 / 놀람 / 도배</button>
            <button onClick={closeModal}>욕설 / 비하</button>
            <button onClick={closeModal}>상업적 광고 및 판매</button>
            <button onClick={closeModal}>정당 / 정치인 비하 및 선거운동</button>
            <button onClick={closeModal}>유출 / 사칭 / 사기</button>
          </c.ModalContent>
        </c.ModalOverlay>
      )}
    </div>
  );
};

export default PostDetailPage;