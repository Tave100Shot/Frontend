import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/common/header";
import * as s from "../../styles/searchBarStyle";
import * as c from "../../styles/compilingStyle";
import styled from "styled-components";
import axios from "axios";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";

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
  const storedToken = localStorage.getItem('accessToken')

  const handleSearchClick = async () => {

    if (questionNumber < 1000 && questionNumber > 31226) {
      alert('문제 번호는 1000번부터 31226번까지 존재합니다.');
      return;
    }

    try {
      const response = await axios.get(`/api/compile/problems/${questionNumber}`);
      console.log('서버 응답:', response.data);

      if (response.data.status === 200) {

      const fetchedProblemInfo = response.data.result;
/*       const problemUrl = `https://www.acmicpc.net/problem/${fetchedProblemInfo.ID}`;
      fetchedProblemInfo.problemUrl = problemUrl;
 */
      if (fetchedProblemInfo.Title === "N/A" || 
      fetchedProblemInfo["Sample Input"] === "N/A" ||
      fetchedProblemInfo["Sample Output"] === "N/A" ||
      fetchedProblemInfo["Input Description"] === "N/A" ||
      fetchedProblemInfo["Output Description"] === "N/A"
      ) {
        alert("해당 문제의 정보를 찾을 수 없습니다.");
        return; // 추가 처리를 중단하고 함수를 종료
      }

        setProblemInfo(fetchedProblemInfo);
        setProblemTitle(`백준 ${questionNumber}번 - ${fetchedProblemInfo.Title}`);
        setInfoContainerVisible(true);
      } else {
        if (response.data.errorCode === "PROBLEM_5002") {
          alert("문제 정보 변환 중 오류가 발생했습니다.");
          return;
        }

        console.error('서버 응답 오류:', response.data.message);
      }
    } catch (error) {

      console.error('get 요청 오류:', error);
    }
  };
  useEffect(() => {
    const description = problemInfo && problemInfo.Description;
    const imageUrlsMatch = description && description.match(/(https?:\/\/[^\s]+)/g);
  
    const imageContainer = document.getElementById('imageContainer');
    
    if (imageContainer) {
      imageContainer.innerHTML = ''; 
  
      if (imageUrlsMatch) {
        imageUrlsMatch.forEach((imageUrl, index) => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = `Image ${index + 1}`;
          imageContainer.appendChild(imgElement);
        });
      }
  
      const textElement = document.createElement('p');
      textElement.textContent = description && description.replace(/(https?:\/\/[^\s]+)/g, '');
      imageContainer.appendChild(textElement);
    }
  }, [problemInfo]);
  

  //enter키
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleGoToBaekjoon = () => {
    console.log("백준 풀러 가기 버튼 클릭");
/*     const problemUrl = problemInfo && problemInfo.problemUrl;
   *///problemUrl
   const problemUrl = problemInfo && problemInfo.problemUrl;
    window.open(problemUrl, '_blank');
  }
  
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
              type="text"
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
              <div id="imageContainer">{problemInfo && problemInfo["Description"]}</div>
            </c.QContainer>
            <c.IContainer>
              입력
              <div>{problemInfo && problemInfo["Input Description"]}</div>
            </c.IContainer>
            <c.OContainer>
              출력
              <div>{problemInfo && problemInfo["Output Description"]}</div>
            </c.OContainer>
            <c.EContainer>
              입출력 예시
              <div>입력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>{problemInfo && problemInfo["Sample Input"]}</p>
              </c.ExampleBox>
              <div>출력 #1</div>
              <c.ExampleBox style={{ whiteSpace: 'pre-line' }}>
                <p>{problemInfo && problemInfo["Sample Output"]}</p>
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