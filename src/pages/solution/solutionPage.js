import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SearchBar from "../../components/solution/search_bar";
import * as s from "../../styles/solutionStyle";
import { useSelector } from "react-redux";


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
        <h3>{}으로 검색한 결과입니다</h3>
      </s.SolutionContainer>
    </div>
  )
}

export default SolutionPage;