// 초기 State 값
export const INITIAL_STATE = {
  theme : 'lightTheme',
  modalState : false,
  accessToken : '',
  twoFactorAuthStatus : false,
  solutionQuestion : [
    
  ],
  solutionList : [

  ]
};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // Main
    case 'SET_TOKEN' : 
    return {
      ...state,
      accessToken: action.content
    };

    case 'SET_MODAL' : 
      return {
        ...state,
        modalState: action.content
      };
      
    case 'SET_SECONDAUTH' : 
      return {
        ...state,
        twoFactorAuthStatus: action.content
      };

    // Solution 
    case 'SET_THEME': 
      return {
        ...state,
        theme: action.content
      };

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