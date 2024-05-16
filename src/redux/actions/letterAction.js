// DEV LETTER 저장하는 action
export const SetDevLetter = (content) => {
  return {
    type : 'SET_DEV',
    content
  }
}
// EMPLOY LETTER 저장하는 action
export const SetEmployLetter = (content) => {
  return {
    type : 'SET_EMPLOY',
    content
  }
}
// LETTER 상세 정보 저장하는 action
export const SetLetterInfo = (content) => {
  return {
    type : 'SET_LETTERINFO',
    content
  }
}
