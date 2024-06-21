import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/common/header";
import * as c from "../../styles/compilingStyle";
import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import { useDispatch } from "react-redux";
import { SetSearch, SetSolution } from "../../redux/actions/solutionAction";

const CompilingPage = ({theme}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToMain = () => {
    navigate('/');
  }

  const [questionNumber, setQuestionNumber] = useState('');
  const [infoContainerVisible, setInfoContainerVisible] = useState(false);
  const [problemTitle, setProblemTitle] = useState('');
  const [problemInfo, setProblemInfo] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const handleSearchClick = async () => {
    if (parseInt(questionNumber, 10) < 1000 || parseInt(questionNumber, 10) > 31226) {
      alert('문제 번호는 1000번부터 31226번까지 있어요!');
      return;
    } 
    try {
      const response = await axios.get(`/api/compile/problems/${questionNumber}`);
      console.log('서버 응답:', response.data);

      if (response.data.status === 200) {
      const fetchedProblemInfo = response.data.result;
      if (fetchedProblemInfo.Title === "N/A" || 
      fetchedProblemInfo["Sample Input"] === "N/A" ||
      fetchedProblemInfo["Sample Output"] === "N/A" ||
      fetchedProblemInfo["Input Description"] === "N/A" ||
      fetchedProblemInfo["Output Description"] === "N/A"
      ) {
        alert("요청한 문제 번호를 찾을 수 없습니다.");
        return;
      }
        setIsValid(true);
        setProblemInfo(fetchedProblemInfo);
        setProblemTitle(`백준 ${questionNumber}번 - ${fetchedProblemInfo.Title}`);
        setInfoContainerVisible(true);
      } else {

      }
    } catch (error) {
      if (error.response.data.errorCode === "PROBLEM_5002") {
        alert("문제 정보 변환 중 오류가 발생했어요!");
        return;
      }
      else if (error.response.data.errorCode === "PROBLEM_4040") {
        alert("요청한 문제 번호를 찾을 수 없습니다.");
      }
      else if (error.response.data.errorCode === "JWT_4010") {
        alert("Jwt Token의 유효 기간이 만료되었습니다. 다시 로그인 해주세요!");
      } 
      else {
        alert("알 수 없는 서버 에러입니다.");
      }
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
  
  const makeQuestionString = (questionNumber, questionLanguage) => {
    let message = "백준 " + questionNumber + "번 ";
    return message;
  }

  //enter키
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleGoToBaekjoon = () => {
    if(isValid) {
      const problemUrl = problemInfo && problemInfo.problemUrl;
      window.open(problemUrl, '_blank');
    } else {
      alert('문제 번호를 확인해주세요!');
    }

  }
  
  const handleMoveToSolution = (event) => {

    const questionString = makeQuestionString(questionNumber);

    const newQuestion = {
      number : questionNumber,
      questionString : makeQuestionString(questionNumber),
    };
    dispatch(SetSearch(newQuestion));
    navigate('/result-solution');

    const apiUrl = `/api/v1/search?query=${questionString}`;
    
    axios.get(apiUrl)
      .then(response => {
        console.log(response.data.result.dtos.slice(0, 8));
        const solutionArray = response.data.result.dtos.slice(0, 8);
        dispatch(SetSolution(solutionArray));
        navigate(`/result-solution?problemId=${questionNumber}`);
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
              maxLength={10}
              onChange={(e) => setQuestionNumber(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearchClick}>SEARCH</button>
          </c.QSearchContainer>
          <c.InfoContainer style={{ display: infoContainerVisible ? 'block' : 'none' }}>
          <c.QNumberContainer>{problemTitle}</c.QNumberContainer>
            <c.QContainer>
              문제 설명
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
        <c.MiddleLine>.</c.MiddleLine>
        <c.CompileContainer>
          <p>코드 입력</p>
          <c.CodeEditor>
            <AceEditor
              mode='java'
              theme={theme.colors.compiler}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              placeholder={`백발백준 COMPILER 에 코드를 입력해보세요!`}
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