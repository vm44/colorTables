import {combineReducers} from 'redux'
import {REHYDRATE} from 'redux-persist/constants'

import colorThemeReducer from './Colors'
import booksReducer from './Books'
import {reduceSelected, shuffle} from './utils'

// let da=Array.from(new Array(60),(v,i)=>i)
const initSt={//v:15,
  wTilesCnt:5,hTilesCnt:4,fontSizeRange:[4,100],
  // cellBkgColor:'#fffff0',font:"Arial",
  fontsSet:['Roboto','Play'],
  da:shuffle(Array.from(new Array(20),(v,i)=>i)),}

const initMainState={
  data:{
    default:initSt
  },
  current:"default"
}

const reCalcCell = function (state) {
  var pw = 1  /*      var cw=Math.floor(this.state.width/rWidth);
  var ch=Math.floor(this.state.height/rHeight);
  var realWidth=this.state.width/cw-cw*pw;
  var realHeight=this.state.height/ch-ch*pw; */
  var cellWidth = state.frameWidth / state.wTilesCnt - state.wTilesCnt * pw
  var cellHeight = state.frameHeight / state.hTilesCnt - state.hTilesCnt * pw
  // console.log('reCCell', 'cellH=', cellHeight)
  return {
      width: cellWidth,
      height: cellHeight
    }
  }



const reducer=function(state=initSt,action){

  let rState={}
  let cellDims={}

  switch (action.type) {

    case REHYDRATE:
      console.log("Rehydr",action);
      return state//action.payload.main


    case 'chSize':
      // console.log('ch',action.val)
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
      // console.log('resize',action)

      rState={...state,
              frameHeight:action.data.height,
              frameWidth:action.data.width}
      cellDims=reCalcCell(rState)
      //rState.cellDims=cellDims
      rState={...rState,cellDims:cellDims}
      // console.log(cellDims,rState)

      return {...rState,cellDims:cellDims}

    case "chFontSizeRange":
      return {...state,fontSizeRange:action.val}

    case "chFont":
      // console.log(action.val)
      return {...state,font:action.val}

    case "chFonts":
      // console.log(action.val)
      return {...state,fontsSet:action.val}

    default:
      console.log('def state',state)
      return state
  }
}


// const themesReducer = function (state = {}, action) {
//     // let newState=Object.assign({},state)
//     let newData=state.data.map(data => if(Object.key(data) == state.current){Object.key(data):reducer(data[Object.key(data)])}else data)
//     return{
//       data:newData,
//       current:""
//     }
// }


const reduceDict=function (state=initMainState, action){
  let newState=Object.assign({},state)
  let changed=reducer(state.data[state.current],action)
  newState.data[state.current]=changed
  return newState
}


//n/u
const mainReducer=function (state=initMainState, action){
//  return state
  return{
    data:{
      default:reduceSelected(state.data, "default", reducer, action)
    },
    current:"default"
  }
  // return{
  //     data:{
  //       default:reduceSelected(state, "default", reducer, action)
  //     },
  //     current:"default"
  //   }
}

const getCurrentTheme=(state)=>{
  // console.log("gCT",state,state.main.data[state.main.current])
  return state.main.data[state.main.current]
}

const getCurrentColorTheme=(state)=>{
  return state.colorTheme.data[state.colorTheme.current]
}

export default combineReducers({
  books: booksReducer,
  colorTheme: colorThemeReducer,
  main: reduceDict
})
  // main: mainReducer})

export {getCurrentTheme,getCurrentColorTheme}
// export {colorsInitState, getCurrentColorTheme}
