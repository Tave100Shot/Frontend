import { useNavigate } from "react-router-dom";
import { SetModal } from "../../redux/actions/mainAction";
import { useDispatch } from "react-redux";
import * as t from "../../styles/main/taveAnimationStyle"

const TaveAnimation = ({secondAuthStatus}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToSolution = () => {
    navigate('/search-solution')
  }
  // const moveToRecommend = () => {
  //   navigate('/recommend')
  // }
  
  const openModal = () => {
    dispatch(SetModal(true)); 
  }


  return (
    <t.TaveAnimationWrapper className="container">
      <h1 className="text text1">BAEKJOON<button >TAVE12</button></h1>
      <h1 className="text text2">UNION PROJECT<button onClick={moveToSolution}>SOLUTION</button></h1>
      <h1 className="text text3">WITH WEB & AI<button >TODAY'S QUESTION</button></h1>
    </t.TaveAnimationWrapper>
  )
}

export default TaveAnimation;