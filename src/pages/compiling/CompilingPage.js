import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/common/Header";
import * as s from "../../styles/searchBarStyle";
import * as c from "../../styles/compilingStyle";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const CompilingPage = ({theme}) => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  }

  //languageButton
  const [currentValue, setCurrentValue] = useState("LANGUAGE");
  const [showOptions, setShowOptions] = useState(false);
  const [questionNumber, setQuestionNumber] = useState('');
  const [infoContainerVisible, setInfoContainerVisible] = useState(false);
  const [problemTitle, setProblemTitle] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  const handleSearchClick = () => {
    setProblemTitle(`백준 ${questionNumber}번`);
    setInfoContainerVisible(true);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };
  const handleCompileRun = () => {
    setIsCompiling(true);
  };

  return (
    <div>
      <Header click={moveToMain} />
      <c.MainContainer>
        <c.QIOEContainer>
          <c.QSearchContainer>
            <input
              type="number"
              placeholder="Enter the Question Number !"
              value={questionNumber}
              onChange={(e) => setQuestionNumber(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearchClick}>SEARCH</button>
          </c.QSearchContainer>
          <c.InfoContainer style={{ display: infoContainerVisible ? 'block' : 'none' }}>
            <c.QNumberContainer>
              {problemTitle}
            </c.QNumberContainer>
            <c.QContainer>
              문제 설명
              <div></div>
            </c.QContainer>
            <c.IContainer>
              입력
              <div></div>
            </c.IContainer>
            <c.OContainer>
              출력
              <div></div>
            </c.OContainer>
            <c.EContainer>
              입출력 예시
              <div>입력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>
                </p>
              </c.ExampleBox>
              <div>출력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>
                </p>
              </c.ExampleBox>
            </c.EContainer>
          </c.InfoContainer>
        </c.QIOEContainer>
        <c.MiddleLine>l</c.MiddleLine>
        <c.CompileContainer>
          <p>코드 입력</p>
          <c.CodeEditor>
            <AceEditor
              mode="java"
              theme={theme.colors.compiler}
              onChange={onChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              placeholder={`team_member = input(“팀원 이름을 입력하시오 : “)
            \n print(f”안녕하세요 {team_member}님 백발백준 사이트입니다”)`}
              fontSize={16}
              style={{ width: '100%', height: '90%' }}
            />
            <c.ButtonContainer>
              <s.SelectBox onClick={() => setShowOptions((prev) => !prev)} show={showOptions}>
                <label>{currentValue}</label>
                <ul >
                  <li onClick={handleOnChangeSelectValue}>Python 3</li>
                  <li onClick={handleOnChangeSelectValue}>C99</li>
                  <li onClick={handleOnChangeSelectValue}>C++17</li>
                  <li onClick={handleOnChangeSelectValue}>C#</li>
                  <li onClick={handleOnChangeSelectValue}>Java 11</li>
                  <li onClick={handleOnChangeSelectValue}>node.js</li>
                  <li onClick={handleOnChangeSelectValue}>Kotlin (JVM)</li>
                  <li onClick={handleOnChangeSelectValue}>Ruby</li>
                  <li onClick={handleOnChangeSelectValue}>Go</li>
                  <li onClick={handleOnChangeSelectValue}>Swift</li>
                </ul>
              </s.SelectBox>
              <c.RunButton onClick={handleCompileRun}>COMPILE & RUN</c.RunButton>
            </c.ButtonContainer>
          </c.CodeEditor>
          <c.ExecutionResult>
            실행 결과 
            {isCompiling  && 
            <>
            <button>채점 중</button>
            <c.AnswerButton>맞았습니다!</c.AnswerButton>
            <c.WrongButton>틀렸습니다!</c.WrongButton>
            </>}
          </c.ExecutionResult>
        </c.CompileContainer>
      </c.MainContainer>
    </div>
  )
}

export default CompilingPage;