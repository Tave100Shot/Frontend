import * as h from "../../styles/headerStyle"
import mainLogo from '../../assets/imgs/100shot_icon.png'
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  const moveToSolution = () => {
    navigate('/solution');
  }
  const moveToRecommend = () => {
    navigate('/recommend');
  }
  const moveToCompile = () => {
    navigate('/community');
  }
  const moveToCommunity = () => {
    navigate('/compile');
  }

  return (
    <h.HeaderWrapper>
      <h.LogoWrapper className="logo">
        <img src={mainLogo}/>
        <button>백발백준</button>
      </h.LogoWrapper>
      <h.MenuWrapper className="menu">
        <button onClick={moveToSolution}>SOLUTION</button>
        <button onClick={moveToRecommend}>RECOMMEND</button>
        <button onClick={moveToCompile}>COMPILING</button>
        <button onClick={moveToCommunity}>COMMUNITY</button>
        <button className="login">LOGIN</button>
      </h.MenuWrapper>
    </h.HeaderWrapper>
  )
}

export default Header;
