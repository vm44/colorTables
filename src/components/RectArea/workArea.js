import React from 'react'
import {connect} from 'react-redux'

import ARect from '../SymbolRect'
import {getFromState} from '../../store'
import {getCurrentColorTheme} from '../../reducers'


const mapStateToProps=(state)=>{
  return{state:state}
}

const rend=(props)=>{
  let color=getCurrentColorTheme(props.state)
  console.log('cColor',color)
  let bs=getFromState('main').toJS()
  bs.cellDims={width:60,height:50}
  console.log('workArea',bs,props.state.main.toJS(),getFromState('main').toJS())
  return (
    <div>
      rend
      {getFromState('main','wTilesCnt')},{getFromState('main','hTilesCnt')}
      { bs.da.map(x=>
        <ARect bs={bs} color={color} v={x}/>)}

    </div>
  )
}

export default connect(mapStateToProps)(rend)
