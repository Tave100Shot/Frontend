import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";

const SearchPage = ({click}) => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  return (
    <div>
      <Header click={moveToMain}/>
    </div>
  )
}

export default SearchPage;