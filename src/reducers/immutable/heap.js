import {Map} from 'immutable'

const initSt=Map({'workArea':[100,100]})//'dims':Map({})

const reducer=(st=initSt, act)=>
{
  switch(act.type){
    case 'store':
      return st.set(act.val.key,act.val.data)
    default:
      return st
  }
}

export default reducer
