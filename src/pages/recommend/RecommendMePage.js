import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";

const RecommendMe = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  return (
    <div>
      <Header />
    </div>
  )
}

export default RecommendMe;