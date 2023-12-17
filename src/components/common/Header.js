import * as h from "../../styles/headerStyle"
import mainLogo from '../../assets/imgs/100shot_icon.png'
import { useLocation, useNavigate } from "react-router-dom"

const Header = ({click}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const moveToSolution = () => {
    navigate('/search-solution');
  }
  const moveToRecommend = () => {
    navigate('/recommend');
  }
  const moveToCompile = () => {
    navigate('/compile');
  }
  const moveToCommunity = () => {
    navigate('/community');
  }

  return (
    <h.HeaderWrapper>
      <h.LogoWrapper className="logo">
        <img src={mainLogo}/>
        <button onClick={click}>백발백준</button>
      </h.LogoWrapper>
      <h.MenuWrapper className="menu">
        <button 
          onClick={moveToSolution} 
          className={location.pathname === "/search-solution" ? "active" : ""}
        >SOLUTION</button>
        <button 
          onClick={moveToRecommend} 
          className={location.pathname === "/recommend" ? "active" : ""}
        >RECOMMEND</button>
        <button 
          onClick={moveToCompile} 
          className={location.pathname === "/compile" ? "active" : ""}
        >COMPILING</button>
        <button 
          onClick={moveToCommunity} 
          className={location.pathname === "/community" ? "active" : ""}
        >COMMUNITY</button>
        <button className="login">LOGIN</button>
      </h.MenuWrapper>
    </h.HeaderWrapper>
  )
}

export default Header;
