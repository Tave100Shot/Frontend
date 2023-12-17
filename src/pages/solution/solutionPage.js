import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SearchBar from "../../components/solution/search_bar";
import * as s from "../../styles/solutionStyle";


const SolutionPage = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  return (
    <div>
      <Header click={moveToMain}/>
      <SearchBar/>
      <s.SolutionContainer>
        <hr/>
      </s.SolutionContainer>
    </div>
  )
}

export default SolutionPage;