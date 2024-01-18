import styled from "styled-components";

export const MainContainer = styled.div`
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


export const CompileContainer = styled.div`
  width: 49%;
  min-height: 90vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #E6FADE;
  border-left: 2px solid #91D1FA;
  position: relative;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
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

export const CodeEditor = styled.div`
  height: 68vh;
  //background-color: #000;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative; 
  //margin-bottom: 1rem;
  padding: 1em;

  & > div {
    display: flex;
    gap: 0.5em;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    } 
`

export const ExecutionResult = styled.div`
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
  margin-top: 3rem;
  padding: 3rem;
  border-top: 2px solid #91D1FA;
  border-bottom: 2px solid #91D1FA;

  & > div {
    display: flex;
    gap: 0.5em;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    } 
`

export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const RunButton = styled.button`
  background-color: #91D1FA;
  color: #fff;
  padding: 1em;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;


export const QIOEContainer = styled.div`
  width: 49%;
  min-height: 90vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #FAF9C4;
  color: #91D1FA;

`;

export const QContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #DEE3CC;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 2px solid #91D1FA;
  padding: 1em;

  & > div {
  display: flex;
  gap: 0.5em;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 1em;
  } 
`;

export const IContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #E3D9CC;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 2px solid #91D1FA;
  padding: 1em;

  & > div {
    display: flex;
    gap: 0.5em;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
  padding-top: 1em;
    } 
`;

export const OContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #E3DFCD;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 2px solid #91D1FA;
  padding: 1em;

  & > div {
    display: flex;
    gap: 0.5em;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
  padding-top: 1em;
    } 
`;

export const EContainer = styled.div`
  width: 100%;
  min-height: 20vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #E3E2CC;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1em;

  & > div {
    display: flex;
    gap: 0.5em;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
  padding-top: 1em;

    } 
`;