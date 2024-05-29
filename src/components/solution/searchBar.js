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
    };
    dispatch(SetSearch(newQuestion));
    navigate('/result-solution');

    const apiUrl = `/api/v1/search?query=${questionString}`;
    
    axios.get(apiUrl)
      .then(response => {
        console.log(response.data.result.dtos.slice(0, 8));
        const solutionArray = response.data.result.dtos.slice(0, 8);
        dispatch(SetSolution(solutionArray));
      })
      .catch(error => {
        console.error(error);
        const errorCode = error.response.data.errorCode;
        console.log(errorCode);
        if(errorCode === 'PROBLEM_4001') {
          alert("존재하지 않는 문제입니다.");
          dispatch(SetSolution([]));
          navigate('/search-solution');
        }
        else if(errorCode === 'PROBLEM_4002') {
          alert("솔루션이 존재하지 않습니다.");
          dispatch(SetSolution([]));
          navigate('/search-solution');
        }
        else if(errorCode === 'SOLVED_5001') {
          alert("Solved API 서버에서 내부 오류가 발생했습니다. \n 이는 서버 측의 문제로, 일시적인 오류일 수 있으므로 잠시 후 다시 시도해 보시기 바랍니다.");
          dispatch(SetSolution([]));
          navigate('/search-solution');
        }
        else if(errorCode === 'SOLVED_4001') {
          alert("잘못된 요청입니다.\n 전송된 요청의 형식, 값, 파라미터 등이 Solved API의 요구 사항을 충족하지 못했습니다.");
          dispatch(SetSolution([]));
          navigate('/search-solution');
        }
        else if(errorCode === 'SOLVED_4041') {
          alert("Solved API에서 해당 사용자를 찾을 수 없습니다.");
          dispatch(SetSolution([]));
          navigate('/search-solution');
        }
        else {
          alert("에러가 발생했습니다. \n 잠시 후 다시 시도해보세요 :)");
          dispatch(SetSolution([]));
          navigate('/search-solution');
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