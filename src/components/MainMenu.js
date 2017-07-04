import React, {Component} from 'react'
import {Link} from 'react-router'


const MenuItem = ({name,link}) =>
  <li style={{float:'left',margin:2}}>
    <Link to={link}>
      {name}
    </Link>
  </li>

  // let menuItems=[['Main',''],['2','/2'],['3','/3'],['BookReader','/bookReader']]
let menuItems=['Main','2','3','4','5','p','colorsMgr','BookReader','AboutMe']

export default class NavMenu extends Component{
  render(){
    return(
      <div style={{textAlign:'center',justifyContent:'center',}}>
        <div style={{textAlign:'center',margin:'0 auto',border:'1px red solid',display:'inline-block'}}>
        <ul style={{margin:'0 auto',display:'inline',//padding:'10px',fontSize:14,
          listStyleType:'none'
          // wordSpacing:'20px'
        }}>
        {/*{menuItems.map(x=><MenuItem name={x[0]} link={x[1]} />)}*/}
          {menuItems.map(x=><MenuItem name={x} link={'/'+x} />)}
        </ul>
        </div>
      </div>
    )
    // return(
    //   <ul style={{display:'inline',padding:'100px',fontSize:30,listStyleType:'none'
    //     // wordSpacing:'20px'
    //   }}>
    //     <li style={{float:'left',margin:20}}><Link to="/">Main</Link></li>
    //     <li style={{float:'left',margin:20}}><Link to="/2">2</Link></li>
    //     <li style={{float:'left',margin:20}}><Link to="/3">3</Link></li>
    //     <Link to="/4">4</Link>
    //     <Link to="/5">5</Link>
    //     <Link to="/adjLayoutHeap">AdjLayoutHeap</Link>
    //     <Link to="/colorsMgr">ColorsMgr</Link>
    //     <Link to="/bookReader">BookReader</Link>
    //     <Link to="/drz">Dropzone</Link>
    //   </ul>
    // )
  }
}
