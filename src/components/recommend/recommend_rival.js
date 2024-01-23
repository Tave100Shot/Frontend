import * as r from "../../styles/recommendProblemStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import TierBadge from "./tierBadge";



const RecommendByRival = () => {
  const byMeProblemList = useSelector((state) => state.byMeProblemList);
  
  const [showFirstProblems, setShowFirstProblems] = useState(true);
  const [showSecondProblems, setShowSecondProblems] = useState(false);
  const [showThirdProblems, setShowThirdProblems] = useState(false);
  const [showFourthProblems, setShowFourthProblems] = useState(false);

  const firstProblems = byMeProblemList.slice(0, 4);
  const secondProblems = byMeProblemList.slice(4, 8);
  const thirdProblems = byMeProblemList.slice(8, 12);
  const fourthProblems = byMeProblemList.slice(12, 15);

  const changeProblemList = () => {
    if (showFirstProblems && !showSecondProblems && !showThirdProblems && !showFourthProblems) {
      setShowFirstProblems(!showFirstProblems);
      setShowSecondProblems(!showSecondProblems);
    } 
    else if (!showFirstProblems && showSecondProblems && !showThirdProblems && !showFourthProblems) {
      setShowSecondProblems(!showSecondProblems);
      setShowThirdProblems(!showThirdProblems);
    }
    else if(!showFirstProblems && !showSecondProblems && showThirdProblems && !showFourthProblems) {
      setShowThirdProblems(!showThirdProblems);
      setShowFourthProblems(!showFourthProblems);
    }
    else if(!showFirstProblems && !showSecondProblems && !showThirdProblems && showFourthProblems) {
      setShowFourthProblems(!showFourthProblems);
      setShowFirstProblems(!showFirstProblems);
      alert("문제 추천이 완료되었습니다");
    }
  };

  return (
        <div>
        <r.RecommendRivalTextBox>
          <hr />
          <h1>ALGORITHM PROBLEMS BY LATEST</h1>
          <hr />
        </r.RecommendRivalTextBox>
        <r.ResetRivalIcon onClick={changeProblemList} />
        <r.ProblemContainer>
          {/* 첫 번째 범위의 문제들 */}
          {showFirstProblems &&
          firstProblems.map((problem, index) => (
            <r.ProblemRankBox key={index}>
              <r.ProblemTitleBox>
                <h3>{problem.problemId}</h3>
                <TierBadge
                  bojTier={problem.tier}
                />
              </r.ProblemTitleBox>
              <hr/>
              <h3>{problem.title}</h3>
              <p>
                {problem.bojTag.map((tag, index) => (
                  <span key={index}>
                    #{tag}{' '}
                  </span>
                ))}
              </p>
            </r.ProblemRankBox>
          ))}
  
  
          {/* 두 번째 범위의 문제들 */}
          {showSecondProblems &&
            secondProblems.map((problem, index) => (
              <r.ProblemRankBox key={index}>
              <r.ProblemTitleBox>
                <h3>{problem.problemId}</h3>
                <TierBadge
                  bojTier={problem.tier}
                />
              </r.ProblemTitleBox>
              <hr/>
              <h3>{problem.title}</h3>
              <p>
                {problem.bojTag.map((tag, index) => (
                  <span key={index}>
                    #{tag}{' '}
                  </span>
                ))}
              </p>
            </r.ProblemRankBox>
            ))}
  
          {/* 세 번째 범위의 문제들 */}
          {showThirdProblems &&
            thirdProblems.map((problem, index) => (
              <r.ProblemRankBox key={index}>
              <r.ProblemTitleBox>
                <h3>{problem.problemId}</h3>
                <TierBadge
                  bojTier={problem.tier}
                />
              </r.ProblemTitleBox>
              <hr/>
              <h3>{problem.title}</h3>
              <p>
                {problem.bojTag.map((tag, index) => (
                  <span key={index}>
                    #{tag}{' '}
                  </span>
                ))}
              </p>
            </r.ProblemRankBox>
            ))}
          {/* 네 번째 범위의 문제들 */}
          {showFourthProblems &&
            fourthProblems.map((problem, index) => (
              <r.ProblemRankBox key={index}>
              <r.ProblemTitleBox>
                <h3>{problem.problemId}</h3>
                <TierBadge
                  bojTier={problem.tier}
                />
              </r.ProblemTitleBox>
              <hr/>
              <h3>{problem.title}</h3>
              <p>
                {problem.bojTag.map((tag, index) => (
                  <span key={index}>
                    #{tag}{' '}
                  </span>
                ))}
              </p>
            </r.ProblemRankBox>
            ))}
        </r.ProblemContainer>
      </div>
  )
}

export default RecommendByRival;