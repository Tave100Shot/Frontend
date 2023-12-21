import { useNavigate } from "react-router-dom";
import * as r from "../../styles/RecommendMainStyle";

const RecommendPage = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }
  const moveToRecommendMe = () => {
    navigate('/recommend-me');
  }
  const moveToRecommendRank = () => {
    navigate('/recommend-rank');
  }

  return (
    <r.RecommendContainer>
      <button className="logo" onClick={moveToMain}>백발백준</button>
      <r.RecommendSelectBox>
        <r.RecommendMeBox className="Algorithm-For-Me" onClick={moveToRecommendMe}>
          <p className="title">ALGORITHM<br/>FOR ME</p>
          <p className="desc">홍길동님의 티어와 과거 문제 풀이 유형을 분석을 통해<br/>새로운 문제 추천</p>
        </r.RecommendMeBox>
        <r.RecommendRankBox className="Algorithm-By-Rank" onClick={moveToRecommendRank}>
          <p className="title">ALGORITHM<br/>BY RANK</p>
          <p className="desc">홍길동님의 티어와 비슷한 사용자들을 분석하여<br/>새로운 문제 추천</p>
        </r.RecommendRankBox>
      </r.RecommendSelectBox>
      <span>CHOOSE YOUR INTEREST</span>
    </r.RecommendContainer>
  )
}

export default RecommendPage;