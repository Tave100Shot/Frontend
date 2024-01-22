import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SolutionText from "../../components/solution/solution_text";
import SearchBar from "../../components/solution/search_bar";

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