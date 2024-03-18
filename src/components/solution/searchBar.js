import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetSearch, SetSolution } from "../../redux/actions/solutionAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import search_black from '../../assets/imgs/search_black.png'
import search_white from '../../assets/imgs/search_white.png'
import * as s from "../../styles/solution/searchBarStyle";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let themeMode = useSelector((state)=>{ return state.theme });

  const [questionNumber, setQuestionNumber] = useState("");
  const [questionLanguage, setQuestionLanguage] = useState("LANGUAGE");
  const [solutionArray, setSolutionArray] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  

  const handleOnChangeLanguage = (e) => {
    const { innerText } = e.target;
    setQuestionLanguage(innerText);
  };
  
  const handleOnChangeNumber = (e) => {
    setQuestionNumber(e.target.value);
  };

  const makeQuestionString = (questionNumber, questionLanguage) => {
    let message = "백준 " + questionNumber + "번 " + questionLanguage;
    return message;
  }


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    if (questionLanguage === "" || questionNumber === "") {
      alert("검색하고 싶은 문제의 정보를 모두 입력해주세요.");
      return;
    }

    const questionString = makeQuestionString(questionNumber, questionLanguage);

    const newQuestion = {
      number : questionNumber,
      language : questionLanguage,
      questionString : makeQuestionString(questionNumber, questionLanguage),
      solultionIndex: 1
    };
    dispatch(SetSearch(newQuestion));
    navigate('/result-solution');

    const apiUrl = `/api/v1/search?query=${questionString}&start=${newQuestion.solultionIndex}`;
    
    axios.get(apiUrl)
      .then(response => {
        // console.log(response.data.result.dtos[0].queries.request[0].startIndex);
        const slicedArray = response.data.result.dtos[0].items.slice(0, 8);
        setSolutionArray(slicedArray);
        dispatch(SetSolution(slicedArray));
        const totalResult = response.data.result.dtos[0].queries.request[0].totalResults;
        const maxTotalResult = totalResult / 10 + 1
        const  resultIndex = {
          maxIndex : maxTotalResult
        }
        let totalQuestion = {...newQuestion, ...resultIndex}
        dispatch(SetSearch(totalQuestion))
      })
      .catch(error => {
        // console.error(error);
        const errorCode = error.response.data.errorCode;
        // console.log(errorCode);
        if(errorCode === 'PROBLEM_4001') {
          alert("존재하지 않는 문제입니다.");
        }
      });
    }

  return (
      <s.SearchBarContainer action="/result-solution" method="">
          <s.SearchInputBox>
            {themeMode == 'lightTheme' ? 
              <img src={search_white} alt="돋보기 그림"/> : 
              <img src={search_black} alt="돋보기 그림"/>
            }
            <input 
              type="number"
              value={questionNumber}
              placeholder="Search your problem with number !" 
              onChange={handleOnChangeNumber}
            ></input>
          </s.SearchInputBox>
          <s.SelectBox onClick={() => 
            setShowOptions((prev) => !prev)} 
            show={showOptions}
          >
            <label>{questionLanguage}</label>
            <ul >
              <li onClick={handleOnChangeLanguage}>PYTHON</li>
              <li onClick={handleOnChangeLanguage}>C</li>
              <li onClick={handleOnChangeLanguage}>C++</li>
              <li onClick={handleOnChangeLanguage}>C#</li>
              <li onClick={handleOnChangeLanguage}>JAVA</li>
              <li onClick={handleOnChangeLanguage}>JAVASCRIPT</li>
              <li onClick={handleOnChangeLanguage}>PHP</li>
              <li onClick={handleOnChangeLanguage}>RUBY</li>
            </ul>
          </s.SelectBox>
          <button onClick={handleSearchSubmit}>SEARCH</button>
      </s.SearchBarContainer>
  )
}

export default SearchBar;