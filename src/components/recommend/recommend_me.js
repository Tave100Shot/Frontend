import * as r from "../../styles/recommendProblemStyle";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const RecommendByMe = () => {
  const byMeProblemList = useSelector((state) => state.byMeProblemList);
  const dispatch = useDispatch();
  
  const [showFirstProblems, setShowFirstProblems] = useState(true);
  const [showSecondProblems, setShowSecondProblems] = useState(false);
  const [showThirdProblems, setShowThirdProblems] = useState(false);

  const firstProblems = byMeProblemList.slice(0, 5);
  const secondProblems = byMeProblemList.slice(5, 10);
  const thirdProblems = byMeProblemList.slice(10, 15);

  const changeProblemList = () => {
    if (showFirstProblems && !showSecondProblems && !showThirdProblems) {
      setShowFirstProblems(!showFirstProblems);
      setShowSecondProblems(!showSecondProblems);
    } 
    else if (!showFirstProblems && showSecondProblems && !showThirdProblems) {
      setShowSecondProblems(!showSecondProblems);
      setShowThirdProblems(!showThirdProblems);
    }
    else if(!showFirstProblems && !showSecondProblems && showThirdProblems) {
      setShowFirstProblems(!showFirstProblems);
      setShowThirdProblems(!showThirdProblems);
    }
  };

  return (
    <div>
      <r.RecommendMeTextBox>
        <hr />
        <h1>ALGORITHM PROBLEMS FOR ME</h1>
        <hr />
      </r.RecommendMeTextBox>
      <r.ProblemContainer>
        {/* 첫 번째 범위의 문제들 */}
        {showFirstProblems &&
          firstProblems.map((problem, index) => (
            <r.ProblemMeBox key={index}>
              <h3>{problem}</h3>
              <p>{problem}</p>
            </r.ProblemMeBox>
          ))}

        {/* 두 번째 범위의 문제들 */}
        {showSecondProblems &&
          secondProblems.map((problem, index) => (
            <r.ProblemMeBox key={index}>
              <h3>{problem}</h3>
              <p>{problem}</p>
            </r.ProblemMeBox>
          ))}

        {/* 세 번째 범위의 문제들 */}
        {showThirdProblems &&
          thirdProblems.map((problem, index) => (
            <r.ProblemMeBox key={index}>
              <h3>{problem}</h3>
              <p>{problem}</p>
            </r.ProblemMeBox>
          ))}
      </r.ProblemContainer>
      <r.ResetMeIcon onClick={changeProblemList} />
    </div>
  );
};

export default RecommendByMe;
