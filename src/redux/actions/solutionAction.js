// 문제 해답 요청 데이터 저장 Action 
export const SetSearch = (content) => {
  return {
    type : 'SET_SEARCH',
    content
  }
}

// 문제 해답 데이터 저장 Action 
export const SetSolution = (content) => {
  return {
    type : 'SET_SOLUTION',
    content
  }
}
