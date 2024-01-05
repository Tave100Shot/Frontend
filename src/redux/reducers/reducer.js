// 초기 State 값
export const INITIAL_STATE = {
  modalState : false,
  solutionQuestion : [
    
  ],
  solutionList : [

  ]
};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // Main
    case 'SET_MODAL' : 
      return {
        ...state,
        modalState: action.content
      };
    // Solution 
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

    // Recommend 

    // Community

    // Compiling 

    default: 
      return state;
  }
};