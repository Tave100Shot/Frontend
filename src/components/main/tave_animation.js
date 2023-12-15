import { useNavigate } from "react-router-dom";
import * as t from "../../styles/tave_animationStyle"

const TaveAnimation = () => {
  const navigate = useNavigate();
  const moveToSolution = () => {
    navigate('/solution')
  }
  const moveToRecommend = () => {
    navigate('/recommend')
  }

  return (
    <t.TaveAnimationWrapper className="container">
      <h1 className="text text1">BAEKJOON<button >TAVE12</button></h1>
      <h1 className="text text2">UNION PROJECT<button onClick={moveToSolution}>SOLUTION</button></h1>
      <h1 className="text text3">WITH WEB & AI<button onClick={moveToRecommend}>RECOMMEND</button></h1>
    </t.TaveAnimationWrapper>
  )
}

export default TaveAnimation;