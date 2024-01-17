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

export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 3rem;
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


export const ConsoleContainer = styled.div`
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
