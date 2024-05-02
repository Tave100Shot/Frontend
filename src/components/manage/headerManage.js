import { useLocation, useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/imgs/100shot_icon.png';
import * as h from "../../styles/headerStyle";

const HeaderManage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const moveToMain = () => navigate('/');
    const moveToLetter = () => navigate('/manage/letter')
    const moveToManageMain = () => navigate('/manage/main')

    return (
        <h.HeaderWrapper>
        <h.LogoWrapper className="logo">
            <img src={mainLogo} alt="logo" />
            <button
                onClick={moveToManageMain}
            >백발백준 관리자</button>
        </h.LogoWrapper>
        <h.MenuWrapper className="menu">
            <button
                className={location.pathname === "/manage/member" ? "active" : ""}

            >MEMBER</button>
            <button
                className={location.pathname === "/manage/letter" ? "active" : ""}
                onClick={moveToLetter}
            >LETTER</button>
            <button 
                className="login" 
                onClick={moveToMain}
            >GO TO WEB</button>


        </h.MenuWrapper>
        </h.HeaderWrapper>
    )
}
export default HeaderManage;