import {REHYDRATE} from 'redux-persist/constants'
import {List,Map} from 'immutable'

const initState=Map({
  settings: Map(),
  currentBook:"None"
})

const booksReducer=(state=initState,action)=>{
  switch (action.type) {

    // case REHYDRATE:
    //   console.log("Rehydr",action);
    //   return action.payload.books

    case "addBookFiles":
      let l=[...action.val]
      // console.log("books Add",action.val,l)//,...action.val)
      // l.map(x=>console.log(x))
      let ll=List(l)
      // let llm=ll.map(x => {let m=Map({}); m[x.name]=x; return m})
      // let llm=ll.map(x => {const mp=Map(); let m=mp.set(x.name,x); console.log(m.toJS());return m})
      let llm=ll.map(x => {const m=Map().set(x.name,x);
        // console.log(m.toJS());
        return m})

      let llmr=llm.reduce((a,v)=>{console.log('a,v',a,v);return a.merge(v)})
      console.log('llmr',llmr.toJS())

      let ns=state.get('settings')
      console.log('ns:',ns.toJS())
      console.log('llm:',llm.toJS())
      let ns2=ns.merge(llmr)
      console.log('ns2:',ns2.toJS())

      let settings=state.get('settings')
      let newSettings=settings.merge(llmr)

      console.log('nS',newSettings.toJS())

      return state.set('settings',newSettings)

    case "setCurrentBook":
      console.log("setCB",action.val)
      return state.set('current',action.val)

    default:
      return state

  }
}

export default booksReducer
