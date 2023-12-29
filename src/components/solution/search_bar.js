import * as s from "../../styles/searchBarStyle";
import search_black from '../../assets/imgs/search_black.png'
import search_white from '../../assets/imgs/search_white.png'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetSearch, SetSolution } from "../../redux/actions/solutionAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let themeMode = useSelector( (state)=>{ return state.theme } );

  const [questionNumber, setQuestionNumber] = useState("");
  const [currentValue, setCurrentValue] = useState("LANGUAGE");
  const [solutionArray, setSolutionArray] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  const makeString = (questionNumber, currentValue) => {
    let message = "백준 " + questionNumber + "번 " + currentValue;
    return message;
  }

  const handleOnChangeInput = (e) => {
    setQuestionNumber(e.target.value);
  };

  const AddSolutionArray = (array) => { 
    const slicedArray = array.slice(0, 8);
    setSolutionArray(slicedArray);
    dispatch(SetSolution(slicedArray));
    // console.log(solutionArray);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const questionString = makeString(questionNumber, currentValue);

    const newQuestion = {
      number : questionNumber,
      language : currentValue,
      questionString : makeString(questionNumber, currentValue)
    };
    dispatch(SetSearch(newQuestion));
    navigate('/result-solution');

    const apiUrl = `http://54.180.163.188:8080/api/v1/search?query=${encodeURIComponent(questionString)}`;

    axios.get(apiUrl)
    .then(response => {
      // console.log(response.data.result.dtos[0].items);
      AddSolutionArray(response.data.result.dtos[0].items)
    })
    .catch(error => {
      console.error(error);
    });

  };
  return (
    <s.SearchBarContainer action="/result-solution" method="">
        <s.SearchInputBox>
          {themeMode == 'lightTheme' ? 
            <img src={search_white} alt="돋보기 그림"/> : 
            <img src={search_black} alt="돋보기 그림"/>
          }
          <input 
            type="text"
            value={questionNumber}
            placeholder="Search your problem with number !" 
            onChange={handleOnChangeInput}
          ></input>
        </s.SearchInputBox>
        <s.SelectBox onClick={() => setShowOptions((prev) => !prev)} show={showOptions}>
          <label>{currentValue}</label>
          <ul >
            <li onClick={handleOnChangeSelectValue}>PYTHON</li>
            <li onClick={handleOnChangeSelectValue}>C</li>
            <li onClick={handleOnChangeSelectValue}>C++</li>
            <li onClick={handleOnChangeSelectValue}>C#</li>
            <li onClick={handleOnChangeSelectValue}>JAVA</li>
            <li onClick={handleOnChangeSelectValue}>JAVASCRIPT</li>
            <li onClick={handleOnChangeSelectValue}>PHP</li>
            <li onClick={handleOnChangeSelectValue}>RUBY</li>
          </ul>
        </s.SelectBox>
        <button onClick={handleSearchSubmit}>SEARCH</button>
    </s.SearchBarContainer>
  )
}

export default SearchBar;