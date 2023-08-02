const initialState = {
    // 초기 상태 값
    value: null,
  };
  
  const custom1Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return {
          ...state,
          value: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default custom1Reducer;