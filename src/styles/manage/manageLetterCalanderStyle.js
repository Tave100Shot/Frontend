import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width : 43vw;
  height : 45rem;
  box-shadow: 0 0 2rem 0 ${props => props.theme.colors.colorShadow};
  border-radius : 2.5rem;
  display : flex;
  flex-direction : column;
  justify-content: space-between;
`
  
export const DayWrapper = styled.div`
  margin : 0 3rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  border-bottom : 0.2rem solid rgba(0,0,0,0.1);
  li{
    margin : 0 0 1rem 0;
    color: #000000;
    font-family : "BMHANNAPROOTF";
    font-size: 2.5rem;
    text-align: center;
  }
`

export const CalendarBoard = styled.div`
  height : 37rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: repeat(6, 1fr);
  gap : 0.3rem;
  margin  : 0.5rem 3rem 1rem 3rem;
`
/*
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  // 일반적인 날짜
  .not-enrolled {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    position: relative;
    z-index: 0;
  }

  // 뉴스레터가 등록된 날짜
  .enrolled {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    border-radius: 10rem 10rem 10rem 0;
    border: 0.2rem solid #91d1fa;
    position: relative;
    z-index: 1; // 변경

    // 마우스를 올렸을 때
    &:hover {
      background-color: #91d1fa;
      .enrolled-letterBox {
        display: flex;
        position: relative;
        z-index: -99;
        bottom: 12rem;
        left: 6rem;
        transform: translateX(-50%);
    
      }
    }
  }

  // 뉴스레터가 예정된 날짜
  .expected {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    border-radius: 10rem 10rem 10rem 0;
    border: 0.2rem solid #b6fa91;

    // 마우스를 올렸을 때
    &:hover {
      background-color: #b6fa91;
    }
  }

  // 뉴스레터가 등록된 날짜에 대한 추가 스타일
  .enrolled-letterBox {
    display: none; // 기본적으로 숨김
    position: relative;
    z-index: -99;
    bottom: 12rem;
    left: 6rem;
    transform: translateX(-50%);
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    button {
      margin: 0.5rem;
    }
  }
`;
*/

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin : 0 auto;
  justify-content: center;
  height: 100%;
  position: relative;

  // 일반적인 날짜
  .not-enrolled {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    position: relative;
    z-index: 0;
  }

  // 뉴스레터가 등록된 날짜
  .enrolled {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    border-radius: 10rem 10rem 10rem 0;
    border: 0.2rem solid #91d1fa;
    position: relative;
    z-index: 0;

    // 마우스를 올렸을 때
    &:hover {
      background-color: #91d1fa;
      .enrolled-letterBox {
        z-index: 1;
        display: flex;
      }
    }
  }
  
  // 뉴스레터가 등록된 날짜에 대한 추가 스타일
  .enrolled-letterBox {
    display: flex; // 기본적으로 숨김
    flex-direction: column;
    position: absolute;
    z-index: 1;
    bottom: 0.5rem;
    left: 16rem;
    transform: translateX(-50%);
    width : 30rem;
    height : 12rem;
    justify-content: center;  
    background-color: #91d1fa;
    border-radius: 5rem 5rem 5rem 0;
    border: 0.2rem solid #91d1fa;
    padding : 1rem;
    
    button {
      border : none;
      background-color : #91d1fa;
      text-align : left;
      color: #000000;
      font-family: "BMHANNAPROOTF";
      font-size : 2rem;
      margin : 0 0 0 2rem;
      width : 23rem;
      cursor : pointer;
      &:hover {color : #ffffff;}
    }
  }

  // 뉴스레터가 예정된 날짜
  .expected {
    font-size: 2rem;
    text-align: center;
    color: #000000;
    font-family: "BMHANNAPROOTF";
    width: 5rem;
    height: 5rem;
    border-radius: 10rem 10rem 10rem 0;
    border: 0.2rem solid #b6fa91;

    // 마우스를 올렸을 때
    &:hover {
      background-color: #b6fa91;
    }
  }
  `;
  

