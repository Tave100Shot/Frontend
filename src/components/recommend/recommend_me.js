import * as r from "../../styles/recommendProblemStyle";
import { GrPowerReset } from "react-icons/gr";

const RecommendByMe = () => {


  return (
    <div>
      <r.RecommendMeTextBox>
        <hr/>
        <h1>ALGORITHM PROBLEMS FOR ME</h1>
        <hr/>
      </r.RecommendMeTextBox>
      <r.ProblemContainer>
        <r.ProblemMeBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemMeBox>
        <r.ProblemMeBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemMeBox>
        <r.ProblemMeBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemMeBox>
        <r.ProblemMeBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemMeBox>
        <r.ProblemMeBox>
          <h3>수열의 합</h3>
          <p>1024</p>
        </r.ProblemMeBox>
      </r.ProblemContainer>
      <r.ResetMeIcon/>
    </div>
  )
}

export default RecommendByMe;