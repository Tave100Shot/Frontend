// 초기 State 값
export const INITIAL_STATE = {
  theme : 'lightTheme',
  modalState : false,
  accessToken : '',
  twoFactorAuthStatus : false,
  solutionQuestion : [
    
  ],
  solutionList : [

  ],
  userRightNum : '',
  userWrongNum : '',
  userRank : '',
  userRivalNum : '',
  byMeProblemList : [

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
    case 'SET_USER_RIGHT': 
      return {
        ...state,
        userRightNum: action.content
      };
    case 'SET_USER_WRONG': 
      return {
        ...state,
        userWrongNum: action.content
      };
    case 'SET_USER_RANK': 
      return {
        ...state,
        userRank: action.content
      };
    case 'SET_USER_RIVAL': 
      return {
        ...state,
        userRivalNum: action.content
      };
    case 'SET_ME_PROBLEM': 
      return {
        ...state,
        byMeProblemList: action.content
      };
    // Community

    // Compiling 

    default: 
      return state;
  }
};