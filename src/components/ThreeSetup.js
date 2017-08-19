import React from 'react'
import {connect} from 'react-redux'
// import {loadDAE} from '../index'


const handleClick=(e,{name})=>{

  e.preventDefault()
  // console.log('models/'+name+'.dae')

//  loadDAE('models/'+name+'.dae')
}

const hc1=(name)=>{
  console.log('clk!',name)
}

const ListItem = ({parms,name}) =>
  <li style={{//float:'left',
    // display:'inline',
    // margin:2
  }}>
    <a href='#' onClick={(e)=>{parms.dispatch({type:'reLoad',payload:{name}});handleClick(e,{name})}}>
    {/*<a href='#' onClick={hc1}>*/}
    {/*<a href='#' onClick={()=>{console.log('CLK!',{name})}}>*/}
      {name}
    </a>
  </li>

  // let menuItems=[['Main',''],['2','/2'],['3','/3'],['BookReader','/bookReader']]
let menuItems=['t1','marine_anims_single','marine_anims_core','three_Exp','three_Exp_A1','three_ExpS','monster','executioner_002t008','cb_anim','tl','T-10_108','t','t3','cube5','dr_single_001','Vampire_001_017pp']



const ThreeSetup=(parms)=>{
    return(
        <div style={{//margin:'auto',
          border:'1px red solid',display:'inline-block'}}>
          <ul style={{//display:'inline',//padding:'10px',fontSize:14,
            listStyleType:'none',
            paddingLeft:'0'
          }}>
          {/*{menuItems.map(x=><MenuItem name={x[0]} link={x[1]} />)}*/}
            {menuItems.map(x=><ListItem parms={parms} name={x} />)}
          </ul>
        </div>
      // {/*</div>*/}
    )

}

export default connect()(ThreeSetup)
