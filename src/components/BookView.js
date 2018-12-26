import * as R from 'ramda'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

const splitStr = (str) => {
  // let str=stri.replace("<emphasis>","<em>")
  let sstr=str.split("</p>")
  let pstrp=sstr//.map(x => x.replace("",""))
  // let pstr=pstrp.map(x=>["<br>",x.replace(/emphasis/g,"i")])
  let pstr=pstrp.map(x=>x.replace(/emphasis/g,"i"))
  // let pstr=sstr.map(x=>x.replace("<p>","<p/>"))
  return pstr
}

// const mapStateToPropsImm = (state) => {
//   // console.log('map CB, current:',state.bookSetting.get('current'))
//   // console.log('map CB, files:',state.bookFile.toJS())
//   console.log('map CB, files:',state.bookSetting.toJS())
//   // console.log('map CB sett',state.bookSetting.get('byId').get(state.bookSetting.get('current')))
//   // console.log('map CB file',state.bookFile.get('byId').get(state.bookSetting.get('current')))
//   return{
//     // book: state.books.current,
//     // currentBook: state.bookSetting.get('byId').get(state.books.get('current'))
//     currentBook:state.bookSetting.get('byId').get(state.bookSetting.get('current')),
//     bookFile:state.bookFile.get('byId').get(state.bookSetting.get('current'))
//   }
// }

const mapStateToProps = (state) => {

  return R.pickAll(['books','viewPos','current'],state['books'])

}


class BookView extends Component{
  state={
    cont:["load","<p/>","book"],
    viewPos:0,
  }

  loadBook=(file)=>{
    let myProm=new Promise((resolve,reject)=>{

      var reader = new FileReader();
      reader.onload = function(e){
        // var text = reader.result;
        // console.log(e.target.result.substring(0, 2000));
        resolve(e)
      };
      // reader.readAsText(file,"UTF-8");
      reader.readAsText(file,"windows-1251");
    })

    myProm.then((e)=>{
      // console.log(e.target.result.substring(0, 2000));
      this.setState({cont:splitStr(e.target.result)});
    })
  }

  componentWillReceiveProps=(nextProps)=>{
    // console.log("Props received, ",
    // this.props.currentBook != undefined ? this.props.currentBook.get('id') : 'None', this.state.viewPos,
    // nextProps.currentBook.get('id'))

    // if(this.props.currentBook != undefined)
    //   this.props.dispatch({type:'saveViewPos',val:this.props.currentBook.set('viewPos',this.state.viewPos)})
    if((this.props.current != undefined) && (this.props.current != nextProps.current))
      this.props.dispatch({type:'saveViewPos',val:{k:this.props.current,v:this.state.viewPos}})

    console.log('recProps',nextProps.current)
    this.loadBook(nextProps.books[nextProps.current])
  }



  // componentDidUpdate = () => {
  //   var node = ReactDOM.findDOMNode(this.refs.elem);
  //   node.scrollTop=node.scrollHeight;
  //   console.log("ups scr ",node.scrollTop,node.scrollHeight)
  // }
  componentDidUpdate = () => {
    console.log("didUpdate, viewPos",this.props.viewPos)
    var node = ReactDOM.findDOMNode(this.refs.cont);
    node.scrollTop=node.scrollHeight;

    // if(this.props.bookFile != undefined){
    //   document.documentElement.scrollTop = document.body.scrollTop = this.state.viewPos
    // }else{
    let vp=0
    if(this.props.current && this.props.viewPos){
      vp=this.props.viewPos[this.props.current]
    }

    document.documentElement.scrollTop = document.body.scrollTop = vp
    // }


    console.log("ups scr ",node.scrollTop,node.scrollHeight)
  }

  componentDidMount=()=> {
      window.addEventListener("scroll", this.onScroll);
      // console.log("book mount")

      if(this.props.bookFile != undefined){
        this.loadBook(this.props.bookFile.get('file'))
      }
  }

  componentWillUnmount=()=> {
      window.removeEventListener("scroll", this.onScroll);
      console.log("book Unmount")

      if(this.props.currentBook != undefined)
        this.props.dispatch({type:'saveViewPos',val:this.props.currentBook.set('viewPos',this.state.viewPos)})
  }

  onScroll=()=>{
    this.state.viewPos = document.documentElement.scrollTop// || document.body.scrollTop
    console.log(document.documentElement.scrollTop , document.body.scrollTop, this.state.viewPos)
    // this.setState({viewPos:document.documentElement.scrollTop || document.body.scrollTop})

  }


  render(){
    return(
      // <div ref="cont" style={{height:"200px"}}>
      // <div ref="cont" style={{height:"90%"}}>
      <div ref="cont" style={{backgroundColor:"#000000",
          textAlign:"left",
          textIndent:"30px",
          color:"#00cf00",
          padding:"0px 40px",
          height:"90%"}}>

        {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}

      </div>
    )
  }
}

// {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}
// <div style={{height:"2000px"}} ref="elem" onScroll = {()=>{console.log("Scroll")}}>

// {this.props.cont == "None" ? "No Book" : this.props.cont.name}

export default connect(mapStateToProps)(BookView)
