import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import UserProfile from "../../components/recommend/user_profile";
import RecommendByRival from "../../components/recommend/recommend_rival";

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