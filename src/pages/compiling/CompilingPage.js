import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/common/Header";
import * as s from "../../styles/searchBarStyle";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100vw;
    //background-color: #E6FADE;
    margin: 0 auto;
    margin-top: 50px;

    @media screen and (max-width: 500px) {
    flex-direction: column;
    }
`;


const CompileContainer = styled.div`
  width: 50%;
  min-height: 70vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #E6FADE;
  border-right: 2px solid #91D1FA;
  position: relative;

  & > input {
    border: none;
    outline: none;
    width : 100%;
    color: #91D1FA;
    font-family: 'Poppins';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &::placeholder{
      color: rgba(145, 209, 250, 0.8);
    }
 /*    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5em; /* 숫자 간격 조절 */
    color: #91D1FA;
      font-family: 'Poppins';
      font-size: 1.5rem;
      font-weight: 700;
      line-height: normal;
    } */
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 3rem;
`
const RunButton = styled.button`
  background-color: #91D1FA;
  color: #fff;
  padding: 1em;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;


const ConsoleContainer = styled.div`
  width: 45%;
  min-height: 70vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #FAF9C4;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

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
      <MainContainer>
        <CompileContainer>
          <input type="text" placeholder="team_member = input(“팀원 이름을 입력하시오 : “)"/>
          <input type="text" placeholder="print(f”안녕하세요 {team_member}님 백발백준 사이트입니다”)" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <ButtonContainer>
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
          <RunButton>COMPILE & RUN</RunButton>
          </ButtonContainer>
        </CompileContainer>
        <ConsoleContainer>CONSOLE</ConsoleContainer>
      </MainContainer>
    </div>
  )
}

export default CompilingPage;