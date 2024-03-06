import { useNavigate } from "react-router-dom";
import Header from "../../components/common/header";
import UserProfile from "../../components/recommend/userProfile";
import RecommendByRival from "../../components/recommend/recommendRival";

const RecommendRank = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  return (
    <div>
      <Header click={moveToMain}/>
      <UserProfile />
      <RecommendByRival/>
    </div>
  )
}

export default RecommendRank;