import {List,Map} from 'immutable'

import {createColors} from '../../funcs/colors'

/*
Map{

  ColorSetMap:{
    id:ColorsList[]
  }

  current:id

}

*/

const initState=Map({
  schemes:Map({
    default:Map({
      'font':'font',
       'bkg':'bkg'
    }),
    oth:Map({
      'font':'font1',
       'bkg':'bkg1'
    })
  }),
  colorSets:Map({
   'font':List(createColors(2)),
   'font1':List(createColors(2)),
   'bkg':List(createColors(4,(i)=>{return 0xfef<<i})),
   'bkg1':List(createColors(4,(i)=>{return 0xfef<<i})),
 })
})


const reducer=(state=initState, action)=>
{
  switch(action.type){
    case "addColorImm":
      let l=state.getIn(['colorSets',action.val.key])
      return state.setIn(['colorSets',action.val.key],l.push(action.val.val))
    case "rmColorImm":
      console.log(action)
      l=state.getIn(['colorSets',action.val.key])
      return state.setIn(['colorSets',action.val.key],l.delete(l.indexOf(action.val.color)))
      // return state.mergeDeepWith(['colorSets',action.val.key],List([action.val.val]))
    case "chColorImm":
      console.log(action)
      l=state.getIn(['colorSets',action.val.key])
      return state.setIn(['colorSets',action.val.key],l.set(l.indexOf(action.val.prevColor),action.val.color))

    default:
      return state
  }

}

export default reducer
