import {combineReducers} from 'redux'

// let da=Array.from(new Array(60),(v,i)=>i)
const initSt={v:15,wTilesCnt:5,hTilesCnt:4,cellBkgColor:'#fffff0',
  da:shuffle(Array.from(new Array(20),(v,i)=>i))}

const reCalcCell=function(state){
  var pw=1
/*      var cw=Math.floor(this.state.width/rWidth);
  var ch=Math.floor(this.state.height/rHeight);
  var realWidth=this.state.width/cw-cw*pw;
  var realHeight=this.state.height/ch-ch*pw;*/
  var cellWidth=state.frameWidth/state.wTilesCnt-state.wTilesCnt*pw;
  var cellHeight=state.frameHeight/state.hTilesCnt-state.hTilesCnt*pw
  console.log('reCCell','cellH=',cellHeight)
  return {width:cellWidth,
    height:cellHeight}
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

const createColors=function(n,func=(i)=>{return 0x14f<<i}){
  let da=Array.from(new Array(n),(v,i)=>'#'+("000000"+func(i).toString(16)).substr(-6))
  return da
}

const colorsInitState={
  font:createColors(4,(i)=>{return 0xef<<i}),
  bkg:createColors(4,(i)=>{return 0xfef<<i})
}

// const arrayReducer=function (state=['#ffff00'],action) {
const arrayReducer=function (state=createColors(2),action) {
  let newState=[...state]
 switch (action.type) {
   case "addColor":
      return [...state,action.val.val]//newState.push(action.val.color)
   case 'chColor':
      var ind=newState.indexOf(action.val.prevColor)
      newState[ind]=action.val.color
      console.log('color reduc',action.val,ind,state,action.val.prevColor,action.val.color)
      return newState//[...state,action.val.hex]
   case 'rmColor':
      var ind=newState.indexOf(action.val.color)
      var rmd=newState.splice(ind,1)
      console.log('color reduc rm',action.val,ind,state,rmd,newState,action.val.prevColor,action.val.color.hex)
     return newState//[...state,action.val.hex]
   default:
      return state
 }
}

const colorReducer=function(state=colorsInitState,action){
  console.log('colorReducer',action)
  if(action.val != undefined && action.val.key != undefined)
  {
    let newColors=Object.assign({},state)
    let colorsArr=newColors[action.val.key]
    let colorsArrUpd=arrayReducer(colorsArr,action)
    newColors[action.val.key]=colorsArrUpd
    return newColors
  }
  return state
}

// const fontReducer=function(state,action){arrayReducer(state=createColors(4,(i)=>{return 0xef<<i}),action)}

// createColors(4,(i)=>{return 0xef<<i})
// const colorReducer=combineReducers(
//   {font:arrayReducer,
//    bkg:arrayReducer
//   })

const reducer=function(state=initSt,action){

  let rState={}
  let cellDims={}

  switch (action.type) {

    // case 'INC':
    //   console.log('red',state.v)
    //   state.v+=1
    //   console.log('red',state.v)
    //   return {v:state.v}
    //
    // case 'DEC':
    //   return state - 1
    //
    // case 'chColor':
    //   return{...state,cellBkgColor:action.val.hex}

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
      rState.da=shuffle(Array.from(new Array(rState.wTilesCnt*rState.hTilesCnt),(v,i)=>i))
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

export default combineReducers({color:colorReducer,
  main: reducer})
export {colorsInitState}
