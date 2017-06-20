import {compose, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from './reducers'
import immutableTransform from 'redux-persist-transform-immutable'

// const store=createStore(reducer,{color:colorsInitState})
// const store=createStore(reducer,undefined)
// const reducer = combineReducers(reducers)
// const store = compose(autoRehydrate(), createStore)(reducer)
const store=createStore(reducer,undefined,autoRehydrate())
// persistStore(store)
// persistStore(store, {blacklist:['bookFile'], transforms: [immutableTransform()]})

const getFromStore=(state,branch,key)=>{
  // console.log(state[branch])
  let r=state[branch].get('data').get(state[branch].get('current')).get(key)
  // let r=state[branch].get(key)
  // console.log(branch,key,r)
  return r
}

export {store, getFromStore}
