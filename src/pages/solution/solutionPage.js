import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import SearchBar from "../../components/solution/search_bar";
import * as s from "../../styles/solutionStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SolutionItem from "../../components/solution/solutionItem";
import axios from "axios";
import { SetSearch, SetSolution } from "../../redux/actions/solutionAction";


const SolutionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let solutionQuestion = useSelector( (state)=>{ return state.solutionQuestion } );
  let solutionArray = useSelector( (state)=>{ return state.solutionList } );

  const [SolutionNumber, setSolutionNumber] = useState('');   // 백준 문제 번호
  const [SolutionLanguage, setSolutionLanguage] = useState(''); // 백준 해답 언어
  const [SolutionIndex, setSolutionIndex] = useState();         // 크롤링 페이지 인덱스
  const [SolutionNewArray, setSolutionNewArray] = useState();         // 새로운 solutionList
  

  // Totalresults를 10으로 나눈 값에 10곱하고 +1하면 돼!
  const moveToMain = () => {
    navigate('/');
  }


  const handleRefreshSubmit = () => {

    let nextIndex = Math.floor(Math.random() * 91) + 1;
    
    const newQuestion = {
      number : solutionQuestion.number,
      language : solutionQuestion.language,
      questionString : solutionQuestion.questionString,
      solultionIndex: nextIndex,
      maxIndex : solutionQuestion.maxIndex,
    };
    console.log("설정할 인덱스 : ", newQuestion.solultionIndex)
    dispatch(SetSearch(newQuestion));
    const apiUrl = `/api/v1/search/refresh?query=${encodeURIComponent(solutionQuestion.questionString)}&start=${nextIndex}`;
    console.log("신규 URL : ", apiUrl)

    axios.get(apiUrl)
      .then(response => {
        console.log("현재 Index : ", response.data.result.dtos[0].queries.request[0].startIndex)
        console.log("새로운 solution", response.data.result.dtos[0].items);
        // console.log(response.data.result.dtos[0].items);
        // console.log(response.data.result.dtos.items);


        // 문제 해답 리스트 관련 코드
        let newSolutionArray = response.data.result.dtos[0].items;
        let slicedArray = newSolutionArray.slice(0, 9);
        console.log(slicedArray)
        setSolutionNewArray(slicedArray);

        dispatch(SetSolution(slicedArray));
      })
      .catch(error => {
        alert("더 이상 검색 결과가 없습니다");
        console.error(error);
      });

  }



  useEffect(() => {
    setSolutionNumber(solutionQuestion.number);
    setSolutionLanguage(solutionQuestion.language);
    setSolutionIndex(solutionQuestion.solultionIndex);
  }, [solutionQuestion]);

  return (
    <div>
      <Header click={moveToMain}/>
      <SearchBar/>
      <s.SolutionContainer>
        <hr/>
        <s.SolutionInfo>
          <h3>BAEKJOON {SolutionNumber} RESULT WITH {SolutionLanguage}</h3>
          <s.ResetSolution onClick={handleRefreshSubmit}/>
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
