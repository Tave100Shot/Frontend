import * as h from "../../styles/headerStyle"
import mainLogo from '../../assets/imgs/100shot_icon.png'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetModal } from "../../redux/actions/mainAction";

const Header = ({click, authSecond}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [accessToken, setAccessToken] = useState("");
  const [loginStat, setLoginStat] = useState(false);

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

  const githubLogin = () => {
    const loginUrl = "http://43.200.95.44:8080/login/github";
    const newWindow = window.open(loginUrl, "_blank");

    // 새 창이 닫힐 때 accessToken을 받는 처리
    const receiveMessage = (event) => {
      if (event.origin === "http://43.200.95.44:8080") {
        const receivedToken = event.data.accessToken;
        setAccessToken(receivedToken);
        window.removeEventListener("message", receiveMessage); // 메시지 이벤트 리스너 제거
        newWindow.close(); // 새 창 닫기
      }
    };

    window.addEventListener("message", receiveMessage);
  }
  // console.log(accessToken);

  const githubLogout = () => {
    navigate('/');
  }

  const openModal = () => {
    dispatch(SetModal(true)); 
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
          className={location.pathname === "/search-solution" || location.pathname === "/result-solution" ? "active" : "" }
        >SOLUTION</button>
        {
          !authSecond ? 
            <button 
              onClick={openModal} 
              className={location.pathname === "/recommend-me" || location.pathname === "/recommend-rank" ? "active" : "" }
            >RECOMMEND</button>
          : 
            <button 
              onClick={moveToRecommend} 
              className={location.pathname === "/recommend-me" || location.pathname === "/recommend-rank" ? "active" : "" }
            >RECOMMEND</button>
        }
        <button 
          onClick={moveToCompile} 
          className={location.pathname === "/compile" ? "active" : ""}
        >COMPILING</button>
        {
          !authSecond ? 
            <button 
              onClick={openModal} 
              className={location.pathname === "/community" ? "active" : ""}
            >COMMUNITY</button>
          : 
            <button 
              onClick={moveToCommunity} 
              className={location.pathname === "/community" ? "active" : ""}
            >COMMUNITY</button>
        }
        {
          !loginStat ? 
            <button className="login" onClick={githubLogin}>LOGIN</button> : 
            <button className="login" onClick={githubLogout}>LOGOUT</button>
        }

      </h.MenuWrapper>
    </h.HeaderWrapper>
  )
}

export default Header;
