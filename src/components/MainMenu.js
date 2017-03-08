import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavMenu extends Component{
  render(){
    return(
      <div>
        <Link to="/">Main</Link>
        <Link to="/2">2</Link>
        <Link to="/3">3</Link>
      </div>
    )
  }
}
