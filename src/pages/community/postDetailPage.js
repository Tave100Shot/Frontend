import { FirstContainer, MainContainer, Typography, HorizontalLine } from '../../styles/communityStyle';
import Header from "../../components/common/header";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as c from "../../styles/communityPostStyle";
import axios from 'axios';

const PostDetailPage = ({comment}) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const gitLoginId = localStorage.getItem('gitLoginId');
  const storedToken = localStorage.getItem('accessToken');
  const [isEditingComment, setIsEditingComment] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [editedCommentContent, setEditedCommentContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/api/post/${postId}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          },
        });
        setPostDetails(response.data.result);
        console.log(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchPostDetails();
  }, [postId]);

  const moveToMain = () => {
    navigate('/');
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  /* 게시물 삭제 */
  const handleDelete = async () => {

    if (gitLoginId === postDetails.writer) {
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
  } else {
   alert("타인의 게시글은 삭제할 수 없습니다.");
  }
}

  /* 게시물 수정 */
  const handleEdit = () => {

  if (gitLoginId === postDetails.writer) {
    navigate(`/community/post/${postId}/edit`, { state: { postDetails } });
  } else {
  
    alert("타인의 게시글은 수정할 수 없습니다.");
  }
};

  /* 댓글 추가 */
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
      e.preventDefault();
      handleAddComment();
      setInputValue('');
    }
  };

  /* 댓글 수정 */
  const handleApplyEdit = async (commentId) => {
    const comment = postDetails.commentListResponse.commentResponses.find((comment) => comment.commentId === commentId);

    if (comment && comment.gitLoginId === gitLoginId) {
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
      const updatedPostDetails = { ...postDetails };
      const commentIndex = updatedPostDetails.postResponses[0].commentListResponse.commentResponses.findIndex(
        (comment) => comment.commentId === commentId
      );

      if (commentIndex !== -1) {
        updatedPostDetails.postResponses[0].commentListResponse.commentResponses[commentIndex].content =
          editedCommentContent;
        setPostDetails(updatedPostDetails);
      }

    } catch (error) {
      console.error('댓글 수정 오류:', error);
    } finally {
      window.location.reload();
    }
  } else {
    alert("타인의 댓글은 수정할 수 없습니다.");
  }
};

  /* 댓글 삭제 */
  const handleDeleteComment = async (commentId) => {
    const comment = postDetails.commentListResponse.commentResponses.find((comment) => comment.commentId === commentId);

  if (comment && comment.gitLoginId === gitLoginId) {
    try {
      await axios.delete(`/api/post/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      window.location.reload();

      /* 삭제된 댓글을 제외하고 업데이트 */
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
  } else {
    alert("타인의 댓글은 삭제할 수 없습니다.");
  }
};

  return (
    <div>
      <Header click={moveToMain} />
      <MainContainer>
        <FirstContainer>
          <Typography>COMMUNITY</Typography>
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
                    {<img src={postDetails.writerProfileImgUrl} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '30px', border: '1px solid #fff' }} />}
                    <c.ProfileInfo>
                      <h1>{postDetails.writer}</h1>
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
                          {<img src={comment.writerProfileImgUrl} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '30px', border: '1px solid #fff' }} />}
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
                          onChange={(e) => setEditedCommentContent(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleApplyEdit(comment.commentId)}
                        />
                        <button onClick={() => handleApplyEdit(comment.commentId)}>수정 적용</button>
                      </c.CommentEditContainer>
                    </c.ParentComment>

                  </>
                )}
                <c.CommentViewIconContainer>
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