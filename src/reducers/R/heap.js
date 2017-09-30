import R from 'ramda'

const initSt={}

const reducer=(st=initSt, act)=>
{
  switch(act.type){
    case 'store':
    console.log('store',act)
      return R.assoc(act.val.key, act.val.data, st)
    default:
      return st
  }
}

export default reducer
