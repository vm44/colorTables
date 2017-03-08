{/*}
const btn ={backgroundColor: '#F16E10'};
         <DropdownButton bsStyle="default" style={btn} title="" noCaret id="dropdown-no-caret">
           <MenuItem eventKey="1">Edit</MenuItem>
           <MenuItem eventKey="2">Remove</MenuItem>
         </DropdownButton>
*/}


//////////////

const map2=function(state){
  return{
    color:state.color.bkg[0]
  }
}
const VChromePicker=connect(map2)(ChromePicker)
//style={{width:"80%",margin:"auto",zIndex:"1"}}
{/*}
      <VChromePicker onChangeComplete={(val)=>{console.log(val);this.props.dispatch({type:'chColor',val:val})}}/>
*/}
//////////


<ul>
  {this.props.ks.map(k=> <li>{k}</li>)}
</ul>
