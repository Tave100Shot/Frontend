import * as s from "../../styles/searchBarStyle";
import search_black from '../../assets/imgs/search_black.png'
import search_white from '../../assets/imgs/search_white.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SetSearch } from "../../redux/actions/solutionAction";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionNumber, setQuestionNumber] = useState("");
  const [currentValue, setCurrentValue] = useState("LANGUAGE");
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

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      number : questionNumber,
      language : currentValue,
      questionString : makeString(questionNumber, currentValue)
    };
    dispatch(SetSearch(newQuestion));
    navigate('/result-solution');
  };

  return (
    <s.SearchBarContainer action="/result-solution" method="">
        <s.SearchInputBox>
          <img src={search_white} alt="돋보기 그림"/>
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
        <button onClick={handleTodoSubmit}>SEARCH</button>
    </s.SearchBarContainer>
  )
}

export default SearchBar;