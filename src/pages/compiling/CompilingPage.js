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

import axios from "axios";

function onChange(newValue) {
  console.log("change", newValue);
}

const CompilingPage = ({ theme }) => {
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
  const [problemInfo, setProblemInfo] = useState(null);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  const handleSearchClick = async () => {

    try {
      const response = await axios.get(`/api/compile/problems/${questionNumber}`);

      console.log('서버 응답:', response.data);

      if (response.data.status === 200) {

      const fetchedProblemInfo = response.data.result;
      const problemUrl = `https://www.acmicpc.net/problem/${fetchedProblemInfo.id}`;
      fetchedProblemInfo.problemUrl = problemUrl;

        setProblemInfo(fetchedProblemInfo);
        setProblemTitle(`백준 ${questionNumber}번 - ${fetchedProblemInfo.title}`);
        setInfoContainerVisible(true);
      } else {

        console.error('서버 응답 오류:', response.data.message);
      }
    } catch (error) {

      console.error('get 요청 오류:', error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleGoToBaekjoon = () => {
    console.log("백준 풀러 가기 버튼 클릭");
    const problemUrl = problemInfo && problemInfo.problemUrl;

    if (problemUrl) {
      window.location.href = problemUrl;
    } else {
      console.error('Problem URL이 정의되지 않았습니다.');
    }

  };
  
  const handleMoveToSolution = () => {
    navigate(`/result-solution?problemId=${questionNumber}`);
    console.log("솔루션 이동 버튼 클릭");
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
          <c.QNumberContainer>{problemTitle}</c.QNumberContainer>
            <c.QContainer>
              문제 설명 {/* ${problemInfo.Description} */}
              <div>{problemInfo && problemInfo["description"]}</div>
            </c.QContainer>
            <c.IContainer>
              입력
              <div>{problemInfo && problemInfo["inputDescription"]}</div>
            </c.IContainer>
            <c.OContainer>
              출력
              <div>{problemInfo && problemInfo["outputDescription;"]}</div>
            </c.OContainer>
            <c.EContainer>
              입출력 예시
              <div>입력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>{problemInfo && problemInfo["sampleInput"]}</p>
              </c.ExampleBox>
              <div>출력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>{problemInfo && problemInfo["sampleOutput"]}</p>
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
              style={{ width: '100%', height: '100%' }}
            />
          </c.CodeEditor>
          <c.ExecutionResult>
                <button onClick={handleGoToBaekjoon}>Submit To Boj</button>
                <c.AnswerButton onClick={handleMoveToSolution}>Go To Solution</c.AnswerButton>
          </c.ExecutionResult>
        </c.CompileContainer>
      </c.MainContainer>
    </div>
  )
}

export default CompilingPage;