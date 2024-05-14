import { useNavigate } from "react-router-dom";
import HeaderManage from "../../components/manage/headerManage";
import * as m from "../../styles/manage/manageMainStyle"

const ManageMain = () => {
    const navigate = useNavigate();

    return (
        <m.ManageContainer>
            <HeaderManage/>
            <h1>관리자페이지</h1>
            <h2>추후 추가 예정</h2>
        </m.ManageContainer>
    )
}
export default ManageMain;