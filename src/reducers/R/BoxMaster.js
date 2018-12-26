import * as R from 'ramda'

let initSt={
  id:1,
  width:90,
  height:90,
  direction:"column",
  children:[
    {id:2,
      width:100,
    height:40,
    direction:"column",
    // children:[
    //   {width:100,
    //   height:40,
    //   },
    //   {width:100,
    //   height:40,
    //   direction:"row",
    //   children:[
    //     {width:30,
    //     height:100},
    //     {width:70,
    //     height:100}
    //   ]
    //   },
    // ]
    },
    {id:3,
      width:100,
    height:40,},
  ]
}

const reducer=(state=initSt,act)=>{
  return state
}

export default reducer
