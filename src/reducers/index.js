const initSt={v:15,hTilesCnt:5}

const reducer=function(state=initSt,action){
  console.log('Entry reducer')
  switch (action.type) {
    case 'INC':
      console.log('red',state.v)
      state.v+=1
      console.log('red',state.v)
      return {v:state.v}
    case 'DEC':
      return state - 1
    case 'chSize':
      console.log('ch',action.val)
      return {...state,hTilesCnt:action.val}

    case 'Resize':
    console.log('resize',action)

    return {...state,
            height:action.data.height,
            width:action.data.width}

    default:
      state.v=7
      state.height=200
      state.width=400
      console.log('def')
      return state
  }
}

export default reducer;
