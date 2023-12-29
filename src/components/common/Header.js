import * as h from "../../styles/headerStyle"
import mainLogo from '../../assets/imgs/100shot_icon.png'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

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

  const gitHubUrl = 'http://54.180.163.188:8080/oauth/authorize/github';
  const onClickGitlogin = () => {
    axios({
      method: 'GET',
      url: 'http://54.180.163.188:8080/oauth/authorize/github'
    }).then(response => console.log(response))
    .then(window.location.href = "http://54.180.163.188:8080/login/oauth/authorize/github")
  };

  return (
    <h.HeaderWrapper>
      <h.LogoWrapper className="logo">
        <img src={mainLogo}/>
        <button onClick={click}>백발백준</button>
      </h.LogoWrapper>
      <h.MenuWrapper className="menu">
        <button 
          onClick={moveToSolution} 
          className={location.pathname === "/search-solution" || location.pathname === "/result-solution" ? "active" : "" }
        >SOLUTION</button>
        <button 
          onClick={moveToRecommend} 
          className={location.pathname === "/recommend-me" || location.pathname === "/recommend-rank" ? "active" : "" }
        >RECOMMEND</button>
        <button 
          onClick={moveToCompile} 
          className={location.pathname === "/compile" ? "active" : ""}
        >COMPILING</button>
        <button 
          onClick={moveToCommunity} 
          className={location.pathname === "/community" ? "active" : ""}
        >COMMUNITY</button>
        <button className="login" onClick={onClickGitlogin}>LOGIN</button>
      </h.MenuWrapper>
    </h.HeaderWrapper>
  )
}

export default Header;
