import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";
import Header from "../../components/common/Header";
import * as s from "../../styles/searchBarStyle";
import styled from "styled-components";
import * as c from "../../styles/compilingStyle";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const CompilingPage = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  //languageButton
  const [currentValue, setCurrentValue] = useState("LANGUAGE");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <div>
      <Header click={moveToMain}/>
      <c.MainContainer>
        <c.CompileContainer>
        <AceEditor
            mode="java"
            theme="github"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
          <c.ButtonContainer>
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
          <c.RunButton>COMPILE & RUN</c.RunButton>
          </c.ButtonContainer>
        </c.CompileContainer>
        <c.ConsoleContainer>CONSOLE</c.ConsoleContainer>
      </c.MainContainer>
    </div>
  )
}

export default CompilingPage;