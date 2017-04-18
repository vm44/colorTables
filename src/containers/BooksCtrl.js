import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps=function(state){
  // console.log("Map!",state.books.toJS())
  // console.log("Map!",state.books.get('settings').get('byId').toJS())
  // state.books.books.map(x => console.log(x))
  return {
          books:state.books.get('settings').get('byId'),
          current:state.books.get('current')
        }
}

class BooksCtrl extends Component {
  // state={
  //   selectValue:""
  // }

  procChg=(e)=>{
    // console.log(e,e.target,e.target.files)
    this.props.dispatch({type:"addBookFiles",val:e.target.files})
  }

  nameClicked=(e,x)=>{
    // console.log("click B",x);
    e.preventDefault();
    this.props.dispatch({type:"setCurrentBook",val:x})
  }

  render(){
    console.log("rend",this.props.books.keySeq().toJS())
    return(
    <div style={{width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"10"}}>text
      <br/>
      {this.props.current}

      {this.props.books.keySeq().map(x => <div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x}</a></div>)}

      <input type="file" multiple onChange={this.procChg} />

    </div>
  )}
}
// <input type="file" multiple onChange={(files)=>{console.log(files)}}/>
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x.name}</a></div>)}

export default connect(mapStateToProps)(BooksCtrl)
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{e.preventDefault();this.props.dispatch({type:"setCurrentBook",val:x})}}>{x.name}</a></div>)}
// {this.props.books.map(x => console.log(x))}
