import { useNavigate } from "react-router-dom";
import Header from "../../components/common/header";
import SolutionText from "../../components/solution/solutionText";
import SearchBar from "../../components/solution/searchBar";

const SearchPage = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }
  console.log("hi new version")
  return (
    <div>
      <Header click={moveToMain}/>
      <SolutionText/>
      <SearchBar />
    </div>
  )
}

export default SearchPage;