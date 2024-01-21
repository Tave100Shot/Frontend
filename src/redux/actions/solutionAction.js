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

// ThemeMode 저장하는 Action
export const SetTheme = (content) => {
  return {
    type : 'SET_THEME',
    content
  }
}
