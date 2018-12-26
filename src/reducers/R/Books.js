import * as R from 'ramda'

// const arr2obj = R.curry((fn, arr) =>
//   R.pipe(
//     (list) => list.map(k => [k.toString(), fn(k)]),
//     R.fromPairs
//   )(arr)
// );

const reducer=(st={books:{}},act)=>{
  switch(act.type){
    case 'addBookFiles':
      // cont makeMap=(x) => {x.name:x}
      // let b1=st.books
      // // let b2=R.map(x=>R.assoc(x.name,x,{}),act.val)
      // let b2=R.map(x=>[x.name,x],act.val)
      // let b5=R.fromPairs(b2)
      // console.log('Rmd b5',b5)
      // let b3=R.merge(b1,b2)
      // let b4=R.reduce(R.assoc,{},b2)
      // console.log('Rmd','b1:',b1,'b2',b2,'b3',b3,b4,b5)

      let st1=R.assoc('books',R.merge(R.fromPairs(R.map(x=>[x.name,x],act.val)),st.books),st)
      console.log('Rmd',act,st,st1)
      return st1//R.assocPath(['books,',act.val.])
    case "setCurrentBook":
      let st2=R.assoc('current',act.val,st)
      console.log('st2',st2)
      return st2
    case 'saveViewPos':
      let st3=R.assocPath(['viewPos',act.val.k],act.val.v,st)
      console.log('st3',st3)
      return st3      
    default:
      return st
  }
}

export default reducer
