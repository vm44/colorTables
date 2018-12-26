import * as R from 'ramda'

const reducer=(st={items:[]},act)=>{
  switch(act.type){
    case "addStackedLayer":
      console.log("addStackedLayer", act, st)
      //  if(R.find(R.propEq("posX",act.payload.posX),st.items))
      //   return R.assoc("items",R.append(act.payload,st.items),st)
        let newItems=R.append(act.payload,st.items);
        console.log('newItems:',newItems)
        let filteredItems=R.filter(R.propEq("posX",act.payload.posX),newItems)
        console.log('filteredItems ',filteredItems)
        let rv=R.assoc("items",filteredItems,st)
        console.log('rv',rv)
        return rv
        // return R.assoc("items",filteredItems,st)
        // return R.assoc("items",R.filter(R.propEq("posX",act.payload.posX),R.append(act.payload,st.items)),st)


      // return st
    case "selectItem":
      console.log(act.payload);
      return R.assoc("selected",act.payload,st)
      
    default:
      return st;
  }
}

export default reducer
