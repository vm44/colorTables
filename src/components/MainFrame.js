import React, {Component} from 'react'

import ARect from './SymbolRect'

class TableFrame extends Component{

    render() {

      if(this.props.cellDims === undefined)
        return <div>undef</div>
      // var rrse=this.props.da.map(x=>x)
      // console.log(this.props.cellDims)
      // console.log(this.props.cellBkgColor)
      // var rrs=this.props.da.map(x=><ARect cellDims={this.props.cellDims} cellBkgColor={this.props.cellBkgColor} v={x}/>)
      var rrs=this.props.da.map(x=><ARect cellDims={this.props.cellDims} color={this.props.color} v={x}/>)

      return <div style={{margin:1,
              width:this.props.width,
              height:this.props.height,
              backgroundColor:'lime'}}>
              {rrs}
            </div>
    }

    updateDimensions=()=> {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        //this.setState({width: width, height: height});
        this.props.dispatchA({width: width, height: height})
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    componentWillMount=()=> {
        this.updateDimensions();
    }

    componentDidMount=()=> {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount=()=> {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default TableFrame


// var rrs=[]
//
// for(var i=0;i<(cw)*(ch);i++)
//   rrs.push(<ARect width={realWidth} height={realHeight} v={this.props.da[i]}/>)
