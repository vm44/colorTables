import {Map} from 'immutable'
import {combineReducers} from 'redux'
import {REHYDRATE} from 'redux-persist/constants'

import colorThemeReducer from './Colors'
import booksReducer from './Books'
import {reduceSelected, shuffle} from './utils'

// let da=Array.from(new Array(60),(v,i)=>i)
// const initMainStateDefaultEntry = {  // v:15,
//   wTilesCnt: 5,
//   hTilesCnt: 4,
//   fontSizeRange: [4, 100],
//     // cellBkgColor:'#fffff0',font:"Arial",
//   fontsSet: ['Roboto', 'Play'],
//   da: shuffle(Array.from(new Array(20), (v, i) => i)),
// }
const initMainStateDefaultEntry = Map({  // v:15,
  wTilesCnt: 5,
  hTilesCnt: 4,
  fontSizeRange: [4, 100],
    // cellBkgColor:'#fffff0',font:"Arial",
  fontsSet: ['Roboto', 'Play'],
  da: shuffle(Array.from(new Array(20), (v, i) => i)),
})

const initMainState = {
  data: {
    default: initMainStateDefaultEntry
  },
  current: 'default'
}

const reCalcCell = function (state) {
  var pw = 1  /*      var cw=Math.floor(this.state.width/rWidth);
  var ch=Math.floor(this.state.height/rHeight);
  var realWidth=this.state.width/cw-cw*pw;
  var realHeight=this.state.height/ch-ch*pw; */
  var cellWidth = state.get('frameWidth') / state.get('wTilesCnt') - state.get('wTilesCnt') * pw
  var cellHeight = state.get('frameHeight') / state.get('hTilesCnt') - state.get('hTilesCnt') * pw
  // console.log('reCCell', 'cellH=', cellHeight)
  return {
    width: cellWidth,
    height: cellHeight
  }
}

const reducer=function(state=initMainStateDefaultEntry,action){

  let rState=Map()
  let cellDims={}

  switch (action.type) {

    // case REHYDRATE:
    //   console.log("Rehydr",action);
    //   return state//action.payload.main

    case 'chgTilesNumber':
      // console.log('ch',action.val)
      switch (action.val.src) {
        case 'horz':
            rState=state.set('wTilesCnt',action.val.val)
          break;
        case 'vert':
          rState=state.set('hTilesCnt',action.val.val)
          break;
        default:
          rState=state
      }
      cellDims=reCalcCell(rState)
      console.log("red ,CD",cellDims)
      return rState.set('cellDims',cellDims).set(
          'da',shuffle(Array.from(new Array(rState.get('wTilesCnt')*rState.get('hTilesCnt')),(v,i)=>i))
        )
        // return rState.merge({'cellDims':cellDims,
        //     'da':shuffle(Array.from(new Array(rState.get('wTilesCnt')*rState.get('hTilesCnt')),(v,i)=>i))
        //   })

    case 'ScreenResize':
      let rState1=state.merge({'frameHeight':action.data.height,'frameWidth':action.data.width})
      cellDims=reCalcCell(rState1)
      return rState1.set('cellDims',cellDims)

    case "chFontSizeRange":
      return state.set('fontSizeRange',action.val)

    case "chFonts":
      return state.set('fontsSet',action.val)

    default:
      console.log('def state',state)
      return state
  }
}
// const reducer=function(state=initMainStateDefaultEntry,action){
//
//   let rState={}
//   let cellDims={}
//
//   switch (action.type) {
//
//     case REHYDRATE:
//       console.log("Rehydr",action);
//       return state//action.payload.main
//
//
//     case 'chgTilesNumber':
//       // console.log('ch',action.val)
//       switch (action.val.src) {
//         case 'horz':
//             rState={...state,wTilesCnt:action.val.val}
//           break;
//         case 'vert':
//           rState={...state,hTilesCnt:action.val.val}
//           break;
//         default:
//           rState={...state}
//
//       }
//       cellDims=reCalcCell(rState)
//       rState.cellDims=cellDims
//       rState.da=shuffle(Array.from(new Array(rState.wTilesCnt*rState.hTilesCnt),(v,i)=>i))
//       return rState
//       // return {...state,hTilesCnt:action.val,da:da}
//
//     case 'ScreenResize':
//       // console.log('resize',action)
//
//       rState={...state,
//               frameHeight:action.data.height,
//               frameWidth:action.data.width}
//       cellDims=reCalcCell(rState)
//       //rState.cellDims=cellDims
//       rState={...rState,cellDims:cellDims}
//       // console.log(cellDims,rState)
//
//       return {...rState,cellDims:cellDims}
//
//     case "chFontSizeRange":
//       return {...state,fontSizeRange:action.val}
//
//     // case "chFont":
//     //   // console.log(action.val)
//     //   return {...state,font:action.val}
//
//     case "chFonts":
//       // console.log(action.val)
//       return {...state,fontsSet:action.val}
//
//     default:
//       console.log('def state',state)
//       return state
//   }
// }


// const themesReducer = function (state = {}, action) {
//     // let newState=Object.assign({},state)
//     let newData=state.data.map(data => if(Object.key(data) == state.current){Object.key(data):reducer(data[Object.key(data)])}else data)
//     return{
//       data:newData,
//       current:""
//     }
// }


const dictReducer=(state,action,entryReducer)=>{
  switch(action.type){
    default:
      console.log(state)
      return entryReducer(state.data[state.current],action)
  }
}

const mainReducer=(state=initMainState,action)=>{
  console.log(state)
  return dictReducer(state,action,reducer)
}

const reduceDict=function (state=initMainState, action){
  let newState=Object.assign({},state)
  let changed=reducer(state.data[state.current],action)
  newState.data[state.current]=changed
  return newState
}


//n/u
// const mainReducer=function (state=initMainState, action){
// //  return state
//   return{
//     data:{
//       default:reduceSelected(state.data, "default", reducer, action)
//     },
//     current:"default"
//   }
//   // return{
//   //     data:{
//   //       default:reduceSelected(state, "default", reducer, action)
//   //     },
//   //     current:"default"
//   //   }
// }


const getCurrentTheme=(state)=>{
  // console.log("gCT",state,state.main.data[state.main.current])
  return state.main.data[state.main.current]
}

const getCurrentColorTheme=(state)=>{
  // console.log('cColor',state)
  return state.colorTheme.data[state.colorTheme.current]
}

export default combineReducers({
  books: booksReducer,
  colorTheme: colorThemeReducer,
  main: reducer//Dict
})
  // main: mainReducer})

export {getCurrentTheme,getCurrentColorTheme}
// export {colorsInitState, getCurrentColorTheme}
