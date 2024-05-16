import { useLocation, useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/imgs/100shot_icon.png';
import * as h from "../../styles/headerStyle";
import axios from 'axios';

const HeaderManage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const storedToken = localStorage.getItem('accessToken');
    const moveToMain = () => navigate('/');
    
    // Letter 조회 및 캘린더 조회로 이동
    const moveToLetter = () => {
        navigate('/manager/letter');
        const apiUrl = `/api/admin/newsletter?inputCategory=ALL&page=0`;
    
        axios.get(apiUrl,{
            headers : {
              Authorization : `Bearer ${storedToken}`
            }})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            const errorCode = error.response.data.errorCode;
            console.log(errorCode);
        });
    }
    const moveToManageMain = () => {navigate('/manager')}

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
                className={location.pathname === "/manager/member" ? "active" : ""}

            >MEMBER</button>
            <button
                className={location.pathname === "/manager/letter" ? "active" : ""}
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