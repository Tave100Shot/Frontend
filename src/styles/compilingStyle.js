import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    position: relative;
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
export const InfoContainer = styled.div`
  width: 100%;
  min-height: 130vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: lightyellow; //하늘 배경
  position: relative;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  `

export const CompileContainer = styled.div`
  width: 45%;
  min-height: 150vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: tomato; //핑크 배경
  position: relative;
  
  & > p {
    color: #91D1FA;
    font-family: 'Poppins';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    margin: 0 0 2rem 0 ;
  }
  
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
  }
`;

export const CodeEditor = styled.div`
  position: fixed;
  top: 0;
  height: 75vh;
  //background-color: #000; //검 배경
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative; 
  //margin-bottom: 1rem;
  //padding: 1rem;

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
  display: flex;
  text-align: center;

  & > button {
    display: flex;
    width: 13em;
    height: 2.5em;
    background-color: #91D1FA;
    color: #fff;
    padding: 1em;
    font-family: 'Poppins';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    border: none;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    align-items: center;
margin-left: 2em;
    }
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


export const MiddleLine = styled.div`
  width: 1px;
  min-height: 155vh;
  background-color: #91D1FA;
  color:  #FAF9C4;
`

export const QIOEContainer = styled.div`
  width: 45%;
  min-height: 90vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #FAF9C4;
  color: #91D1FA;
  //border-right: 2px solid #91D1FA; //가운데 선
`;

export const QSearchContainer = styled.div`
width: 100%;
min-height: 10vh;
margin: 0 auto;
flex-shrink: 0;
//background-color: #DEE3CC;
border-top: 2px solid #91D1FA;
border-bottom: 2px solid #91D1FA;
padding: 1em;
//margin-top: 10em;
display: flex;
align-items: center;
gap: 1em;

& > input {
  display: flex;
  height: 3em;
  gap: 1em;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 1em;
  flex-grow: 1;
  border: 2px solid #91D1FA;
  border-radius: 1em;
  outline: none;
  padding : 1rem 0 1rem 2rem;
  font-family : Poppins;
  font-size : 1.5rem;
  &[type='number'] {
    /* Firefox에서 카운터 버튼 숨기기 */
    -moz-appearance: textfield;
  }

  /* Webkit(Chrome, Safari 등)에서 카운터 버튼 숨기기 */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  } 
& > button {
  width: 7em;
  height: 3em;
  display: flex;
  gap: 1em;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1em;
  font-family : Poppins_SemiBold;
  font-size : 1.5rem;
  color: #fff;
  background-color: #91D1FA;
  } 

`

export const QNumberContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  margin: 0 auto;
  flex-shrink: 0;
  //background-color: #DEE3CC;
  //border-top: 2px solid #91D1FA;
  border-bottom: 2px solid #91D1FA;
  padding: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-weight: 700;
  font:Poppins_SemiBold;
  font-size : 2rem;
`

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
    color: #91D1FA;
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 1em;

    } 
`;

export const ExampleBox = styled.div`
  width: 100%;
  min-height: 20vh;
  margin: 0 auto;
  flex-shrink: 0;
  background-color: #EDEDED;
  color: #91D1FA;
  font-family: 'Poppins';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem 0 1rem 0;

  & > p {
    width: 100%;
  font-size: 1.5rem;
  margin: 1em;
  color: #000;

  }
`
