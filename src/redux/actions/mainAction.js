// 모달창 보기 여부 
export const SetToken = (content) => {
  return {
    type : 'SET_TOKEN',
    content
  }
}
export const SetModal = (content) => {
  return {
    type : 'SET_MODAL',
    content
  }
}