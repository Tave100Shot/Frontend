import * as r from "../../styles/recommendProblemStyle";

const RecommendByRival = () => {


  return (
    <div>
      <r.RecommendRivalTextBox>
        <hr/>
        <h1>ALGORITHM PROBLEMS BY LATEST</h1>
        <hr/>
      </r.RecommendRivalTextBox>
      <r.ProblemContainer>

        <r.ProblemRankBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemRankBox>
      </r.ProblemContainer>
      <r.ResetRivalIcon/>
    </div>
  )
}

export default RecommendByRival;