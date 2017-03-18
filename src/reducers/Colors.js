import {reduceSelected} from './utils'

const createColors = function(n, func = (i) => {
    return 0x14f << i
}) {
    let da = Array.from(new Array(n), (v, i) => "#" + ("000000" + func(i).toString(16)).substr(-6))
    return da
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
      // console.log('color reduc',action.val,ind,state,action.val.prevColor,action.val.color)
      return newState//[...state,action.val.hex]
   case 'rmColor':
      var ind=newState.indexOf(action.val.color)
      var rmd=newState.splice(ind,1)
      // console.log('color reduc rm',action.val,ind,state,rmd,newState,action.val.prevColor,action.val.color.hex)
     return newState//[...state,action.val.hex]
   default:
      return state
 }
}

const colorReducer=function(state=colorsInitState,action){
  // console.log('colorReducer',action)
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


const colorsInitState={
  font:createColors(4,(i)=>{return 0xef<<i}),
  bkg:createColors(4,(i)=>{return 0xfef<<i})
}

const initColorThemesState={
  data:{oth:colorsInitState,
        default:{
          font:createColors(4,(i)=>{return 0xcef<<i}),
          bkg:createColors(4,(i)=>{return 0xcfef<<i})
        }
      },
  current:"default"
}


const colorThemeReducer=function(state=initColorThemesState,action){

  let cTheme=state.current

  if(action.type == "chTheme"){
    cTheme=action.val}

    // console.log("CTheme=",cTheme)
  // let newObj=Object()
  // let prevObj=state["data"]
  // for (let k in prevObj)
  //   if(k == cTheme)
  //     newObj[k]=colorReducer(prevObj[k],action)
  //   else
  //     newObj[k]=colorReducer(prevObj[k],{type:"nop"})

  let newObj=reduceSelected(state["data"], cTheme, colorReducer, action)

  return{
    data:newObj,
    current:cTheme
  }
}

export default colorThemeReducer

// const fontReducer=function(state,action){arrayReducer(state=createColors(4,(i)=>{return 0xef<<i}),action)}

// createColors(4,(i)=>{return 0xef<<i})
// const colorReducer=combineReducers(
//   {font:arrayReducer,
//    bkg:arrayReducer
//   })
