import {createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from './reducers'
import immutableTransform from 'redux-persist-transform-immutable'

// const store=createStore(reducer,{color:colorsInitState})
// const store=createStore(reducer,undefined)
const store=createStore(reducer,undefined,autoRehydrate())
// // console.log(store)
// persistStore(store)
persistStore(store, {transforms: [immutableTransform()]})

const getFromStore=(state,branch,key)=>{
  return state[branch].get(key)
}

export {store, getFromStore}
