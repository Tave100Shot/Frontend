import { useLocation, useNavigate } from "react-router-dom";
import HeaderManage from "../../components/manage/headerManage";
import * as m from "../../styles/manage/manageMainStyle"
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ManageMain = () => {
    const location = useLocation();

    // 로그인 이후 params 받아오기
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (searchParams.get('token') !== null) {
        localStorage.setItem('accessToken', searchParams.get('token'));
        localStorage.setItem('secondAuthStatus', searchParams.get('secondAuth'));
        }
    
    });


    return (
        <m.ManageContainer>
            <HeaderManage/>
            <h1>관리자페이지</h1>
            <h2>추후 추가 예정</h2>
        </m.ManageContainer>
    )
}
export default ManageMain;