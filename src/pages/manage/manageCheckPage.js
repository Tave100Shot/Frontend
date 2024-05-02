import { useNavigate } from "react-router-dom";
import HeaderManage from "../../components/manage/headerManage";
import * as m from "../../styles/manage/manageMainStyle"

const ManageCheck = () => {
    const navigate = useNavigate();
    const moveToManageMain= () => navigate('/manage/main');

    return (
        <m.ManageContainer>
            <HeaderManage/>
            <m.ManageValidContainer>
                <h1>백발백준<br/>관리자 페이지입니다</h1>
                <button onClick={moveToManageMain}>확인했습니다</button>
            </m.ManageValidContainer>
        </m.ManageContainer>
    )
}
export default ManageCheck;