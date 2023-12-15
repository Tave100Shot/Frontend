import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SolutionText from "../../components/solution/solution_text";

const SearchPage = ({click}) => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  return (
    <div>
      <Header click={moveToMain}/>
      <SolutionText/>
    </div>
  )
}

export default SearchPage;