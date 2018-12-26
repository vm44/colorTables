class AppT3 extends Component {
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
          // fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
        }}>
        Page T3
    </div>
    );
  }
}


const testFunc=()=>{
  return(
  <div>
    DDDDDDDDDDDDDD<p/>
    DDDDDDDDDDDDDD
  </div>

  )
}

class testComp extends Component{
  render(){
    return(
      <div>
        testComp
      </div>
    )
  }
}

const PageV = ({content}) =>
  // console.log('contenZ',content)
    // {/*<PageLayout topMenu={topMenu} leftPanel={leftPanel}>*/}
    <div>
      {content}
      </div>
    // {/*</PageLayout>*/}



class App2 extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu/>}>
        Page 2
        <div style={{//height:"auto",//"40px",
          overflow:"visible",
          border:"1px solid red",
          display:"block"
        }}>
        <TstDim>
          <TstDim />
        </TstDim>
        <TstDim />
        <TstDim />
        </div>
        <FontSample text={"Font Sample русс"} fontFamily={"Tangerine, sans"} />
        <div style={{height:"100px",
          // padding:30,
          border:"1px solid red"
          // display:"inlineBlock"
        }}>
          dgfdg
          gdfgfd
        <TstDim />
        <TstDimOffEx />
        </div>
        <FontSample text={"Font Sample"} fontFamily={"Rokkitt, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Orbitron, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Play, sans"} />
        <TstDim />
      </PageLayout>
    );
  }
}

class App3 extends Component {
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
          // fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
        }}>
      <PageLayout topMenu={<MainMenu/>}>
        Page 3
      </PageLayout>
    </div>
    );
  }
}

class App4 extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    // ReactDOM.findDOMNode(this.refs.el).addEventListener('scroll', this.handleScroll);
    console.log("DidMount")
    ReactDOM.findDOMNode(this.refs.el).scrollTop=this.props.st;
    console.log("Mnt",this.refs.el.scrollTop,this.props.st)
    this.setState({st:50})
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    // ReactDOM.findDOMNode(this.refs.el).removeEventListener('scroll', this.handleScroll);
  }
  handleScroll=(e)=>{
    console.log("scrolled",e,this.refs.el.scrollHeight)
  }
  componentDidUpdate=()=>{
    console.log("Upd",this.refs.el.scrollTop,this.refs.el.scrollHeight)
    ReactDOM.findDOMNode(this.refs.el).scrollTop=this.state.st;
    console.log("Upd2",this.refs.el.scrollTop,ReactDOM.findDOMNode(this.refs.el).scrollTop)
  }
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
           fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
          // height:"140px",
          height:"1000px",
          overflow:"scroll"
        }}
          ref="el"
          onClick={()=>{console.log("click")}}
          onScroll={()=>{console.log("scroll")}}
        >
        <div style={{height:"200%",
        overflow:"scroll"}}>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
    </div>
    </div>
    );
  }
}



class App4 extends Component {
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
      // ReactDOM.findDOMNode(this.refs.el).addEventListener('scroll', this.handleScroll);
      console.log("DidMount");
      ReactDOM.findDOMNode(this.refs.el).scrollTop = this.props.st;
      console.log("Mnt", this.refs.el.scrollTop, this.props.st);
      this.setState({ st: 50 });
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
      // ReactDOM.findDOMNode(this.refs.el).removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = e => {
      console.log("scrolled", e, this.refs.el.scrollHeight);
    };
    componentDidUpdate = () => {
      console.log("Upd", this.refs.el.scrollTop, this.refs.el.scrollHeight);
      ReactDOM.findDOMNode(this.refs.el).scrollTop = this.state.st;
      console.log(
        "Upd2",
        this.refs.el.scrollTop,
        ReactDOM.findDOMNode(this.refs.el).scrollTop
      );
    };
    render() {
      return (
        <div
          style={{
            // fontFamily:"Tangerine, sans",
            fontSize: "300px",
            // color:"#05055f",
            // textShadow:"4px 4px 4px #222222"
            // height:"140px",
            height: "1000px",
            overflow: "scroll"
          }}
          ref="el"
          onClick={() => {
            console.log("click");
          }}
          onScroll={() => {
            console.log("scroll");
          }}
        >
          <div style={{ height: "200%", overflow: "scroll" }}>
            Page 4<br />
            Page 4<br />
            Page 4<br />
            Page 4<br />
            Page 4<br />
            Page 4<br />
          </div>
        </div>
      );
    }
  }
  