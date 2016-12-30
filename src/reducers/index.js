let da=Array.from(new Array(60),(v,i)=>i)
const initSt={v:15,wTilesCnt:5,hTilesCnt:4,da:da}

const reCalcCell=function(state){
  var pw=1
{/*      var cw=Math.floor(this.state.width/rWidth);
  var ch=Math.floor(this.state.height/rHeight);
  var realWidth=this.state.width/cw-cw*pw;
  var realHeight=this.state.height/ch-ch*pw;*/}
  var cellWidth=state.frameWidth/state.wTilesCnt-state.wTilesCnt*pw;
  var cellHeight=state.frameHeight/state.hTilesCnt-state.hTilesCnt*pw
  console.log('reCCell','cellH=',cellHeight)
  return {width:cellWidth,
    height:cellHeight}
}

const reducer=function(state=initSt,action){

  let rState={}
  let cellDims={}

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
      switch (action.val.src) {
        case 'horz':
            rState={...state,wTilesCnt:action.val.val}
          break;
        case 'vert':
          rState={...state,hTilesCnt:action.val.val}
          break;
        default:
          rState={...state}

      }
      cellDims=reCalcCell(rState)
      rState.cellDims=cellDims
      rState.da=Array.from(new Array(rState.wTilesCnt*rState.hTilesCnt),(v,i)=>i)
      return rState
      // return {...state,hTilesCnt:action.val,da:da}

    case 'Resize':
      console.log('resize',action)

      rState={...state,
              frameHeight:action.data.height,
              frameWidth:action.data.width}
      cellDims=reCalcCell(rState)
      //rState.cellDims=cellDims
      rState={...rState,cellDims:cellDims}
      console.log(cellDims,rState)

      return {...rState,cellDims:cellDims}

    default:
      console.log('def')
      return state
  }
}

export default reducer;
