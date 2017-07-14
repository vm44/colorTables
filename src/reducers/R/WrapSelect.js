import R from 'ramda'

// {select:{options:{theme:{}},
//         value:{theme:{}}}}


const reducer=(
  st={
    fonts:{},
    themes:{
      options:['def','oth'],
    },
    colorThemes:{
      options:['default','other'],
    },
    themes2:{
      options:['def','oth'],
    }
  },
  act) => {
  switch(act.type){
    case 'update':
      console.log('updd',act,st,R.assocPath([act.payload.srcName,'value'],act.payload.val,st))
      return R.assocPath([act.payload.srcName,'value'],act.payload.val,st)
    default:
      return st
  }
}

export default reducer
