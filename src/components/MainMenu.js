import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavMenu extends Component{
  render(){
    return(
      <ul style={{display:'inline',padding:'100px',fontSize:30,listStyleType:'none'
        // wordSpacing:'20px'
      }}>
        <li style={{float:'left',margin:20}}><Link to="/">Main</Link></li>
        <li style={{float:'left',margin:20}}><Link to="/2">2</Link></li>
        <li style={{float:'left',margin:20}}><Link to="/3">3</Link></li>
        <Link to="/4">4</Link>
        <Link to="/5">5</Link>
        <Link to="/adjLayoutHeap">AdjLayoutHeap</Link>
        <Link to="/colorsMgr">ColorsMgr</Link>
        <Link to="/bookReader">BookReader</Link>
        <Link to="/drz">Dropzone</Link>
      </ul>
    )
  }
}
