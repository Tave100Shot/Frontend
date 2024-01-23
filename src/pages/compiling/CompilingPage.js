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
    setProblemTitle(`백준 ${questionNumber}번 어린 왕자`);
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
              <div>서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이나믹한 게임 진행을 위해 건물을 짓는 순서가 정해져 있지 않다. 즉, 첫 번째 게임과 두 번째 게임이 건물을 짓는 순서가 다를 수도 있다. 매 게임시작 시 건물을 짓는 순서가 주어진다. 또한 모든 건물은 각각 건설을 시작하여 완성이 될 때까지 Delay가 존재한다.
                서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이
                서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이
                서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이
                서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이
                서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
                이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이</div>
            </c.QContainer>
            <c.IContainer>
              입력
              <div>첫째 줄에는 테스트케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 주어진다. 첫째 줄에 건물의 개수 N과 건물간의 건설순서 규칙의 총 개수 K이 주어진다. (건물의 번호는 1번부터 N번까지 존재한다)
                둘째 줄에는 각 건물당 건설에 걸리는 시간 D1, D2, ..., DN이 공백을 사이...</div>
            </c.IContainer>
            <c.OContainer>
              출력
              <div>첫째 줄에는 테스트케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 주어진다. 첫째 줄에 건물의 개수 N과 건물간의 건설순서 규칙의 총 개수 K이 주어진다. (건물의 번호는 1번부터 N번까지 존재한다) </div>
            </c.OContainer>
            <c.EContainer>
              입출력 예시
              <div>입력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>
                  {`2
                4 4
                10 1 100 10
                1 2`}
                </p>
              </c.ExampleBox>
              <div>출력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>
                  {`2
                  4 4
                  10 1 100 10
                  1 2`}
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