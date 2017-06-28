import React from 'react'
import {connect} from 'react-redux'

import ARect from '../SymbolRect'
import {getFromState} from '../../store'
import {getCurrentColorTheme} from '../../reducers'


const mapStateToProps=(state)=>{
  return{state:state}
}

//todo
//move assigments to mapStateToProps
const rend=(props)=>{
  let color=getCurrentColorTheme(props.state)
  console.log('cColor',color)
  let bs=getFromState('main').toJS()
  let dims=getFromState('heap','ins')
  if(dims==undefined)
    return null
  console.log('dimsZ',dims,bs)
  bs.cellDims={width:dims[0]/bs.wTilesCnt,height:dims[1]/bs.hTilesCnt}
  console.log('workArea',bs,props.state.main.toJS(),getFromState('main').toJS())
  return (
    <div>
      {/*}
      rend
      {getFromState('main','wTilesCnt')},{getFromState('main','hTilesCnt')}
*/}
      { bs.da.map(x=>
        <ARect bs={bs} color={color} v={x}/>)}
    </div>
  )
}

export default connect(mapStateToProps)(rend)
