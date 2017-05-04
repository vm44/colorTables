import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavMenu extends Component{
  render(){
    return(
      <div>
        <Link to="/">Main</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
        <Link to="/4">4</Link>
        <Link to="/colorsMgr">ColorsMgr</Link>
        <Link to="/bookReader">BookReader</Link>
        <Link to="/drz">Dropzone</Link>
      </div>
    )
  }
}
