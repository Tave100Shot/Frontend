import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import UserProfile from "../../components/recommend/user_profile";


const RecommendMe = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/'); 
  }

  return (
    <div>
      <Header click={moveToMain}/>
      <UserProfile />
    </div>
  )
}

export default RecommendMe;