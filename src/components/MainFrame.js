import React, {Component} from 'react'

class ARect extends Component{
  render(){
    return(
      <div style={{color:'red',
        backgroundColor:'gray',
        width:this.props.width,
        height:this.props.height,
        fontSize:this.props.height*0.9,
        float:'left',
        border:'solid black 1px'}}>
        {/*}{this.props.width}x{this.props.height}*/this.props.v}S</div>
    )
  }
}


class MainFrame extends Component{
    render() {
      var pw=1,cw=4,ch=4
{/*      var cw=Math.floor(this.state.width/rWidth);
      var ch=Math.floor(this.state.height/rHeight);
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;*/}
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;
      var rrs=[]
      for(var i=0;i<(cw)*(ch);i++)
        rrs.push(<ARect width={realWidth} height={realHeight} v={this.props.dta}/>)
      console.log(realWidth,realHeight,this.props.dta)
        return <div style={{margin:5,
            width:this.state.width,
            height:this.state.height,
            backgroundColor:'lime'}}>
          {rrs}
              </div>
    }

    updateDimensions() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default MainFrame
