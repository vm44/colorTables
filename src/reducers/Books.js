//deprecated

import {REHYDRATE} from 'redux-persist/constants'
import {List,Map} from 'immutable'
/*
Map{
  byID:Map{
        ID
        pos
}
}
*/
const initState=Map({
  settings: Map({byId:Map(),
                 allIds:List()}),
  currentBook:"None"
})

const booksReducer=(state=initState,action)=>{
  switch (action.type) {

    // case REHYDRATE:
    //   console.log("Rehydr",action);
    //   return action.payload.books

    case "addBookFiles":
      let l=[...action.val]
      let ll=List(l)
      console.log("books Add",action.val,l,ll.toJS())//,...action.val)
      // l.map(x=>console.log(x))
      // let llm=ll.map(x => {let m=Map({}); m[x.name]=x; return m})
      // let llm=ll.map(x => {const mp=Map(); let m=mp.set(x.name,x); console.log(m.toJS());return m})
      // let llm=ll.map(x => {const innMap=Map({}).merge('id':x.name,'file':x);return innMap;const m=Map().set(x.name,innMap);
      let llm=ll.map(x => {let innMap=Map().set('id',x.name).set('file',x);const m=Map().set(x.name,innMap);
        // console.log(m.toJS());
        return m})
      console.log('llm',llm.toJS())

      let llmr=llm.reduce((a,v)=>{console.log('a,v',a,v);return a.merge(v)})
      console.log('llmr',llmr.toJS())

      let rs=state.mergeIn(['settings','byId'],llmr)
      console.log(rs.toJS())
      return rs

      // let ns=state.get('settings').get('byId')
      // console.log('ns:',ns.toJS())
      // console.log('llm:',llm.toJS())
      // let ns2=ns.merge(llmr)
      // console.log('ns2:',ns2.toJS())

      // let byIds=state.get('settings').get('ById').merge(llmr)
      // let newSettings=settings.merge(llmr)
      //
      // console.log('nS',newSettings.toJS())
      //
      // return state.set('settings',newSettings)

    case "setCurrentBook":
      console.log("setCB",action.val)
      return state.set('current',action.val)

    case 'saveViewPos':
      console.log('saveViewPos',action.val.get('id'))
      return state.mergeIn(['settings','byId',action.val.get('id')],action.val)
      // return state.mergeIn(['settings','byId',action.val.get('id'),'viewPos'],action.val.get('viewPos'))

    default:
      return state

  }
}

export default booksReducer
