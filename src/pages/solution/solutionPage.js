import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SearchBar from "../../components/solution/search_bar";
import * as s from "../../styles/solutionStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SolutionItem from "../../components/solution/solutionItem";


const SolutionPage = () => {
  const navigate = useNavigate();
  let solutionQuestion = useSelector( (state)=>{ return state.solutionQuestion } );
  let solutionArray = useSelector( (state)=>{ return state.solutionList } );
  const [SolutionNumber, setSolutionNumber] = useState('');
  const [SolutionLanguage, setSolutionLanguage] = useState('');
  

  const moveToMain = () => {
    navigate('/');
  }
  const SetSolution = () => {
    setSolutionNumber(solutionQuestion.number)
    setSolutionLanguage(solutionQuestion.language)
  }

  useEffect(() => {
    SetSolution()
  }, [solutionQuestion]);

  return (
    <div>
      <Header click={moveToMain}/>
      <SearchBar/>
      <s.SolutionContainer>
        <hr/>
        <h3>BAEKJOON {SolutionNumber} RESULT WITH {SolutionLanguage}</h3>
      </s.SolutionContainer>
      <s.SolutionItemContainer>
        {solutionArray
            .map((solutionId) => {
              return (
                < SolutionItem 
                  title={solutionId.title} 
                  link={solutionId.link} 
                  snippet={solutionId.snippet}
                  blog={solutionId.blog}
                  createdDate={solutionId.createdDate}
                />
              );
        })}
      </s.SolutionItemContainer>
    </div>
  )
}

export default SolutionPage;