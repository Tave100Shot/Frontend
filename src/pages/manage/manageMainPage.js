import HeaderManage from "../../components/manage/headerManage";
import * as m from "../../styles/manage/manageMainStyle"

const ManageMain = () => {

    return (
        <m.ManageContainer>
            <HeaderManage/>
            <m.ManageValidContainer>
                <h1>백발백준<br/>관리자 페이지입니다</h1>
                <button>확인했습니다</button>
            </m.ManageValidContainer>
        </m.ManageContainer>
    )
}
export default ManageMain;