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
      reader.readAsText(file,"windows-1251");
    })

    myProm.then((e)=>{
      // console.log(e.target.result.substring(0, 2000));
      this.setState({cont:splitStr(e.target.result)});
    })
  }

  componentWillReceiveProps=(nextProps)=>{
    console.log("Props received, ",
    this.props.currentBook != undefined ? this.props.currentBook.get('id') : 'None', this.state.viewPos,
    nextProps.currentBook.get('id'))

    if(this.props.currentBook != undefined)
      this.props.dispatch({type:'saveViewPos',val:this.props.currentBook.set('viewPos',this.state.viewPos)})

    this.loadBook(nextProps.currentBook.get('file'))
  }



  // componentDidUpdate = () => {
  //   var node = ReactDOM.findDOMNode(this.refs.elem);
  //   node.scrollTop=node.scrollHeight;
  //   console.log("ups scr ",node.scrollTop,node.scrollHeight)
  // }
  componentDidUpdate = () => {
    var node = ReactDOM.findDOMNode(this.refs.cont);
    node.scrollTop=node.scrollHeight;
    document.documentElement.scrollTop = document.body.scrollTop =
      this.props.currentBook != undefined && this.props.currentBook.get('viewPos') != undefined ?
      this.props.currentBook.get('viewPos') : 2000

    console.log("ups scr ",node.scrollTop,node.scrollHeight)
  }

  componentDidMount=()=> {
      window.addEventListener("scroll", this.onScroll);
      console.log("book mount")

      if(this.props.currentBook != undefined)
        this.loadBook(this.props.currentBook.get('file'))      
  }

  componentWillUnmount=()=> {
      window.removeEventListener("scroll", this.onScroll);
      console.log("book Unmount")
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
          color:"#00cf00",
          padding:"0px 40px",
          height:"90%"}}>
        {this.props.currentBook != undefined ? this.props.currentBook.name : 'None'}

        {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}

      </div>
    )
  }
}

// {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}
// <div style={{height:"2000px"}} ref="elem" onScroll = {()=>{console.log("Scroll")}}>

// {this.props.cont == "None" ? "No Book" : this.props.cont.name}

export default connect()(BookView)
