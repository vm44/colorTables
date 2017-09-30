import R from 'ramda'

let initSt={width:90,
  height:90,
  children:[
    {width:100,
    height:40,
    children:[
      {width:100,
      height:40,},
      {width:100,
      height:40,},
    ]
    },
    {width:100,
    height:40,},
  ]
}

const reducer=(state=initSt,act)=>{
  return state
}

export default reducer
