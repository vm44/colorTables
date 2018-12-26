import React, { Component } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, link }) => (
  <li
    style={{
      //float:'left',
      display: "inline",
      marginRight: 18
    }}
  >
    <Link to={link}>{name}</Link>
  </li>
);

// let menuItems=['Main','MousePos','2','ThreeJS','Video','3','4','5','p','colorsMgr','BookReader','AboutMe']
// let menuItems = ["Main", "BoxMaster", "BoxConstruct", "Models", "Video"];
let menuItems = ["Main", "Scene", "Models", "Video"];

export default class NavMenu extends Component {
  render() {
    return (
      <div
        style={{
          //margin:'auto',
          // border:'1px red solid',
          display: "inline-block"
        }}
      >
        <h3>
          <ul
            style={{
              display: "inline", //padding:'10px',fontSize:14,
              listStyleType: "none",
              paddingLeft: "20"
              // wordSpacing:'20px'
            }}
          >
            {/*{menuItems.map(x=><MenuItem name={x[0]} link={x[1]} />)}*/}
            {menuItems.map(x => (
              <MenuItem name={x} link={"/" + x} />
            ))}
          </ul>
        </h3>
      </div>
    );
  }
}
