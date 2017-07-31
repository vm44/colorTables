import {List,Map} from 'immutable'
import R from 'ramda'

import {createColors} from '../../funcs/colors'

/*
Map{

  ColorSetMap:{
    id:ColorsList[]
  }

  current:id

}

*/

const initState={
  schemes:{
    default:{
      'font':'font',
       'bkg':'bkg'
    },
    oth:{
      'font':'font1',
       'bkg':'bkg1'
    }
  },
  colorSets:{
   'font':createColors(2),
   'font1':createColors(2),
   'bkg':createColors(4,(i)=>{return 0xfef<<i}),
   'bkg1':createColors(4,(i)=>{return 0xfef<<i}),
 }
}


const reducer=(state=initState, action)=>
{
  switch(action.type){
    case "addColorR":
      let arr=R.append(action.val.val,state['colorSets'][action.val.key])
      return R.assocPath(['colorSets',action.val.key],arr,state)
      // let l=state.getIn(['colorSets',action.val.key])
      // return state.setIn(['colorSets',action.val.key],l.push(action.val.val))
    case "restoreColorR":
      return R.assocPath(['colorSets',action.val.key],action.val.val,state)
//      return state.setIn(['colorSets',action.val.key],action.val.val)
    case "rmColorR":
      arr=R.without([action.val.color],state['colorSets'][action.val.key])
      // console.log("aft rem:",arr)
      return R.assocPath(['colorSets',action.val.key],arr,state)
      // console.log(action)
      // l=state.getIn(['colorSets',action.val.key])
      // return state.setIn(['colorSets',action.val.key],l.delete(l.indexOf(action.val.color)))
      // return state.mergeDeepWith(['colorSets',action.val.key],List([action.val.val]))
    case "chColorR":
      arr=state['colorSets'][action.val.key]
      return R.assocPath(['colorSets',action.val.key],
        R.update(R.indexOf(action.val.prevColor,arr),action.val.color,arr),state)
      // console.log(action)
      // l=state.getIn(['colorSets',action.val.key])
      // console.log(l.indexOf(action.val.prevColor))
      // return state.setIn(['colorSets',action.val.key],l.set(l.indexOf(action.val.prevColor),action.val.color))

    default:
      return state
  }

}

export default reducer
