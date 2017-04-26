import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps=function(state){
  console.log("Map books!",state.bookSetting.toJS())
  console.log("Map booksFiles!",state.bookFile.toJS())
  // console.log("Map!",state.books.get('settings').get('byId').toJS())
  // state.books.books.map(x => console.log(x))
  return {
          books:state.bookSetting.get('byId'),
          files:state.bookFile.get('byId'),
          current:state.bookSetting.get('current')
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
    console.log("rend",this.props.books.toJS())
    // console.log("rendF",this.props.files.keySeq().toJS())
    return(
    <div style={{width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"10"}}>text
      <br/>
      {this.props.current}
      {this.props.files.keySeq().map(x => {let vp=this.props.books.get(x).get('viewPos');
        return (<div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x}</a>{vp}</div>)})}


      <input type="file" multiple onChange={this.procChg} />

    </div>
  )}
}
// <input type="file" multiple onChange={(files)=>{console.log(files)}}/>
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x.name}</a></div>)}

export default connect(mapStateToProps)(BooksCtrl)
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{e.preventDefault();this.props.dispatch({type:"setCurrentBook",val:x})}}>{x.name}</a></div>)}
// {this.props.books.map(x => console.log(x))}
