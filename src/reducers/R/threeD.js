import R from 'ramda'

import * as acts from '../../actions'

const reducer=(st={},act)=>{
  console.log('red',act)
  switch(act.type){

    case acts.SET_MODEL:
      return R.assocPath(['models',act.payload.name],act.payload.model,st)

    case 'setAnimation':
      console.log('Anim!')
      return R.assoc('animation',act.payload,st)

    // case 'reLoad':
    //   return R.assoc('model',act.payload,st)
    //
    // case 'loadedModel':
    //   // console.log("ldd",act)
    //   return R.assoc('loadedModel',act.payload,st)

    default:
      return st
  }
}

export default reducer
