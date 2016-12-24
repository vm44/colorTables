const initSt={v:15}

const reducer=function(state={v:4},action){
  switch (action.type) {
    case 'INC':
      console.log('red',state.v)
      state.v+=1
      console.log('red',state.v)
      return {v:state.v}
    case 'DEC':
      return state - 1
    default:
      state.v=7
      console.log('def')
      return state
  }
}

export default reducer;
