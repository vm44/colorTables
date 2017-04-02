import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Dropzone from 'react-dropzone'

import FileReaderInput from 'react-file-reader-input';


// import React, {Component} from 'react'
import {ReactReader} from 'react-reader'

class App extends Component {
  render () {
    return (
      <div style={{position: 'relative', height: '500px'}}> // * Container needs a height..
        <ReactReader
          url={'./alice.epub'}
          title={'Alice in wonderland'}
          location={'epubcfi(/6/2[cover]!/6)'}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    )
  }
}

const splitStr = (str) => {
  // let str=stri.replace("<emphasis>","<em>")
  let sstr=str.split("</p>")
  let pstrp=sstr.map(x => x.replace("",""))
  // let pstr=pstrp.map(x=>["<br>",x.replace(/emphasis/g,"i")])
  let pstr=pstrp.map(x=>x.replace(/emphasis/g,"i"))
  // let pstr=sstr.map(x=>x.replace("<p>","<p/>"))
  return pstr
}


class MyComponent extends React.Component {
  state={
    cont:["cont","<p/>","wefer"]
  }

  componentDidUpdate = () => {
    var node = ReactDOM.findDOMNode(this.refs.textCont);
    //node.rollHeight;
    node.scrollTop=500
    console.log("ups scr ",node.scrollTop,node.scrollHeight)
  }


  handleChange = (e, results) => {
    results.forEach(result => {
      const [e, file] = result;
      // this.props.dispatch(uploadFile(e.target.result));
      console.log(e.target.result);
      this.setState({cont:splitStr(e.target.result)})
      console.log(`Successfully uploaded ${file.name}!`);
    });
  }

  render() {
    return (
      <div style={{backgroundColor:"#000000",
        color:"#00cf00",
        padding:"0px 40px"}}>
        <form>
          <label htmlFor="my-file-input">Upload a File:</label>
          <FileReaderInput as="text" id="my-file-input"
                           onChange={this.handleChange}>
            <button>Select a file!</button>
          </FileReaderInput>
        </form>
        <div ref="textCont"  style={{height:"50vh", overflow:"auto"}}>
        {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}
        </div>

      </div>
    );
  }
}


class AppDropzone extends Component{

  state={
    cont:["cont"]
  }

  onDrop=(accepted, rejected)=>{
    console.log(accepted,rejected)
    // this.setState({conte:"text"})

    let func=this.setState


    let myProm=new Promise((resolve,reject)=>{

      var reader = new FileReader();

      reader.onload = function(e){
        // var text = reader.result;
        // console.log(e.target.result.substring(0, 2000));
        //mainObj({content:text})

        resolve(e)
      };

      reader.readAsText(accepted[0],"windows-1251");

    })

    myProm.then((e)=>{
      console.log(e.target.result.substring(0, 2000));
      this.setState({cont:splitStr(e.target.result)});
    })


  }

  render(){
    return(
      <div style={{backgroundColor:"#000000",
        color:"#a0cf00",
        padding:"0px 40px"}}>
        <Dropzone onDrop={this.onDrop} />
        {this.state.cont.map(x => <div dangerouslySetInnerHTML={{__html:x}} />)}
      </div>
    )
  }
}

// export default AppDropzone
export default MyComponent
// export default App
