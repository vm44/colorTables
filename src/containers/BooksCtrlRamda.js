import R from 'ramda'
import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps=function(state){
  // console.log("Map books!",state.bookSetting.toJS())
  // console.log("Map booksFiles!",state.bookFile.toJS())
  // console.log("Map!",state.books.get('settings').get('byId').toJS())
  // state.books.books.map(x => console.log(x))
  // console.log('Rpick',R.pick(['books'],state))
  return R.pick(['books'],state)
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
    console.log("rendB",this.props.books)
    // console.log("rendF",this.props.files.keySeq().toJS())
    return(
    <div style={{width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"10"}}>text
      <br/>

      {this.props.books.books ?
        R.map(x=>
          <div>
            <a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x}</a>
            {this.props.books.viewPos && this.props.books.viewPos[x]}
          </div>,
          R.keys(this.props.books.books)) :
        null
      }

      {/*{this.props.current}*/}
      {/*{this.props.files.keySeq().map(x => {let vp=this.props.books.get(x).get('viewPos');
        return (<div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x}</a>{vp}</div>)})}
*/}
      {/*{R.map((x => {
        return (<div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x}</a>{'vp'}</div>)}),this.props.books.books)}
*/}
      <input type="file" multiple onChange={this.procChg} />

    </div>
  )}
}

//let vp=this.props.books.get(x).get('viewPos');

// <input type="file" multiple onChange={(files)=>{console.log(files)}}/>
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{this.nameClicked(e,x)}}>{x.name}</a></div>)}

export default connect(mapStateToProps)(BooksCtrl)
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{e.preventDefault();this.props.dispatch({type:"setCurrentBook",val:x})}}>{x.name}</a></div>)}
// {this.props.books.map(x => console.log(x))}
