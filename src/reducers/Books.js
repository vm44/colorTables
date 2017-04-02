import {REHYDRATE} from 'redux-persist/constants'

const initState={
  books:[],
  current:"None"
}

const booksReducer=(state=initState,action)=>{
  switch (action.type) {

    // case REHYDRATE:
    //   console.log("Rehydr",action);
    //   return action.payload.books

    case "addBookFiles":
      console.log("books Add")
      let newState=Object.assign({},state)
      // let sb=[]
      // for(let i=0;i<action.val.length;i++){
      //   console.log(action.val[i],JSON.stringify(action.val[i]))
      //   sb.push(JSON.stringify(action.val[i]))
      // }
      // console.log(sb)
      // newState.books=[...state.books,...sb]
      newState.books=[...state.books,...action.val]
      return newState

    case "setCurrentBook":
      console.log("setCB",action.val)
      return Object.assign({},state,{current:action.val.name})

    default:
      return state

  }
}

export default booksReducer
