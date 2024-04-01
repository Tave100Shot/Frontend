import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SetSearch, SetSolution } from "../../redux/actions/solutionAction";
import Header from "../../components/common/header";
import SearchBar from "../../components/solution/searchBar";
import SolutionItem from "../../components/solution/solutionItem";
import * as s from "../../styles/solution/solutionStyle";


const SolutionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let solutionQuestion = useSelector( (state)=>{ return state.solutionQuestion } );
  let solutionArray = useSelector( (state)=>{ return state.solutionList } );

  const [SolutionNumber, setSolutionNumber] = useState('');   // 백준 문제 번호
  const [SolutionLanguage, setSolutionLanguage] = useState(''); // 백준 해답 언어
  
  const moveToMain = () => {
    navigate('/');
  }

  useEffect(() => {
    setSolutionNumber(solutionQuestion.number);
    setSolutionLanguage(solutionQuestion.language);
  }, [solutionQuestion]);

  return (
    <div>
      <Header click={moveToMain}/>
      <SearchBar/>
      <s.SolutionContainer>
        <hr/>
        <s.SolutionInfo>
          <h3>BAEKJOON {SolutionNumber} RESULT WITH {SolutionLanguage}</h3>
        </s.SolutionInfo>
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
