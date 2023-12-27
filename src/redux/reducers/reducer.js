// 초기 State 값
export const INITIAL_STATE = {
  solutionQuestion : [
    
  ],
  solutionList : [

  ]
};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SEARCH': 
      return {
        ...state,
        solutionQuestion: action.content
      };

    case 'SET_SOLUTION': 
      return {
        ...state,
        solutionList: action.content
      };
    
    default: 
      return state;
  }
};