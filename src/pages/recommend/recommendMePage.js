import { useNavigate } from "react-router-dom";
import Header from "../../components/common/header";
import UserProfile from "../../components/recommend/userProfile";
import RecommendByMe from "../../components/recommend/recommendMe";


const RecommendMe = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/'); 
  }

  return (
    <div>
      <Header click={moveToMain}/>
      <UserProfile />
      <RecommendByMe />
    </div>
  )
}

export default RecommendMe;