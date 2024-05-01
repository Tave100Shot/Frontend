import mainLogo from '../../assets/imgs/100shot_icon.png';
import * as h from "../../styles/headerStyle";

const HeaderManage = () => {
    return (
        <h.HeaderWrapper>
        <h.LogoWrapper className="logo">
            <img src={mainLogo} alt="logo" />
            <button>백발백준 관리자</button>
        </h.LogoWrapper>
        <h.MenuWrapper className="menu">
            <button>MEMBER</button>
            <button>LETTER</button>
            <button className="login" >GO TO WEB</button>


        </h.MenuWrapper>
        </h.HeaderWrapper>
    )
}
export default HeaderManage;