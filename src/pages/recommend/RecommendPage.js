import { useNavigate } from "react-router-dom";
import * as r from "../../styles/RecommendMainStyle";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetByMeProblemList} from "../../redux/actions/recommendAction";

const RecommendPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [recentProblem, setRecentProblem] = useState("");
  
  
  const handleOnChangeInput = (e) => {
    // console.log(e.target.value)
    setRecentProblem(e.target.value);
  };

  const moveToMain = () => {
    navigate('/');
  }
  const moveToRecommendMe = () => {
    const storedToken = localStorage.getItem('accessToken');

    axios.get('/api/v1/recommend/rival', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
      .then(response => {
        localStorage.setItem('userRightNum', response.data.result.rightCnt);
        localStorage.setItem('userWrongNum', response.data.result.wrongCnt);
        localStorage.setItem('userRank', response.data.result.userRank);
        localStorage.setItem('userRivalNum', response.data.result.rivalCnt);
        dispatch(SetByMeProblemList(response.data.result.result));
      })
      .catch(error => {
        console.error(error);
      });

    navigate('/recommend-me');
  }

  const moveToRecommendLatest = () => {
    const storedToken = localStorage.getItem('accessToken');

    axios.get('/api/v1/recommend/rival', {
      headers : {
        Authorization : `Bearer ${storedToken}`
      }
    })
      .then(response => {
        localStorage.setItem('userRightNum', response.data.result.rightCnt);
        localStorage.setItem('userWrongNum', response.data.result.wrongCnt);
        localStorage.setItem('userRank', response.data.result.userRank);
        localStorage.setItem('userRivalNum', response.data.result.rivalCnt);
        dispatch(SetByMeProblemList(response.data.result.result));
      })
      .catch(error => {
        console.error(error);
      });
      navigate('/recommend-latest');
  }

  return (
    <r.RecommendContainer>
      <button className="logo" onClick={moveToMain}>백발백준</button>
      <r.RecommendSelectBox>
        <r.RecommendMeBox className="Algorithm-For-Me" onClick={moveToRecommendMe}>
          <p className="title">ALGORITHM<br/>FOR ME</p>
          <p className="desc">홍길동님의 티어와 과거 문제 풀이 유형을 분석을 통해<br/>새로운 문제 추천</p>
        </r.RecommendMeBox>
        <r.RecommendLatestBox className="Algorithm-By-latest">
          <p className="title">ALGORITHM<br/>BY LATEST</p>
          <p className="desc">홍길동님의 최근 푼 문제를 기반하여<br/>새로운 문제 추천</p>
          <form action="/recommend-latest" method="">
            <input
              type="number"
              value={recentProblem}
              placeholder="Enter the problem you recently solved !" 
              onChange={handleOnChangeInput}
            ></input>
            <button onClick={moveToRecommendLatest}>ENTER</button>
          </form>
          
        </r.RecommendLatestBox>
      </r.RecommendSelectBox>
      <span>CHOOSE YOUR INTEREST</span>
    </r.RecommendContainer>
  )
}

export default RecommendPage;