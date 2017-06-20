import {Map} from 'immutable'

const initState = Map({
  parentDims: [10, 10],
  horiz: [1, 100],
  vert: [1, 60]
})

const reducer=(state=initState, action)=>{
  switch(action.type){
    case 'chDims':
      if(state.get('parentDims')[0] == 10){
        // let hz=state.horiz.map((x)=>{x*})
        let st=state.merge({'parentDims':[...action.val],
          'horiz':[Math.round(action.val[0]*0.1),Math.round(action.val[0]*0.9)],
          'vert':[Math.round(action.val[1]*0.1),Math.round(action.val[1]*0.9)],
        })
        console.log('rst1',st.toJS())
        return st
      } else {
        let dh=state.get('parentDims').toJS()[0]/action.val[0]
        let dv=state.get('parentDims').toJS()[1]/action.val[1]
        let m1=state.get('horiz').toJS()
        let m2=m1.map(x=>x)
        console.log("m1:",m1,m2)
        let st1= state.merge({'parentDims':[...action.val],
          'horiz':state.get('horiz').toJS().map(x=>Math.round(x*dh)),
          'vert':state.get('vert').toJS().map(x=>Math.round(x*dv)),
        })
        console.log('rst2',st1.toJS(),state.get('parentDims'),action.val[0],dh,state.get('horiz').map((x)=>{x*dh}))
        return st1
      }
      console.log('chDims',action.val)
      return state
    case 'chHSizeRange':
      console.log('HSize',action.val)
      return state.set('horiz',action.val)
    case 'chVSizeRange':
      console.log('VSize',action.val)
      return state.set('vert',action.val)
    default:
      return state
  }
}

export default reducer
