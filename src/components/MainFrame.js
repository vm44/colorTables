import React, {Component} from 'react'

import ARect from './SymbolRect'

class TableFrame extends Component{
    state={
      rrs:[]
    }
    render() {
      console.log(this.props.cellDims)
      // console.log('STATE',this.props.rdxState)
      // console.log('STATE',this.props.rdxState.main.toJS())
      if(this.props.cellDims === undefined)
        return <div>undef</div>
      // var rrse=this.props.da.map(x=>x)
      // console.log(this.props.cellDims)
      // console.log(this.props.cellBkgColor)
      // var rrs=this.props.da.map(x=><ARect cellDims={this.props.cellDims} cellBkgColor={this.props.cellBkgColor} v={x}/>)
      console.log('STATE',this.props.rdxState.main.toJS())
      let bs=this.props.rdxState.main.toJS().data.default
      let rw=bs.wTilesCnt*bs.cellDims.width
      let rh=bs.hTilesCnt*bs.cellDims.height
      let dw=(bs.frameWidth-rw)/2
      let dh=(bs.frameHeight-rh)/2
      console.log('STATE bs',bs,rw,rh)

      return <div style={{marginTop:dh,
              marginLeft:dw,
              width:bs.width,
              height:bs.height,
              // textAlign:"center",
              align:"center",
              // margin:"auto",

              // fontFamily:this.props.font,
              // fontSize:"300px",
              // color:"#05055f",
              textShadow:"4px 4px 4px #222222",
              backgroundColor:'#220022'}}>
            {/*}  <div style={{margin:"auto",width:"89vw",height:'40vh',backgroundColor:'#440000'}}>*/}
{/*}
            <div style={{margin:"auto",//display:"inlineBlock"
              // width:"98%",
              // marginTop:"10"
              padding:"10px"
            }}>
            */}
                { bs.da.map(x=>
                  <ARect bs={bs} color={this.props.color} v={x}/>)}
              {/*}    </div>*/}
            </div>
    }
    // var rrs=this.props.da.map(x=><ARect cellDims={this.props.cellDims} color={this.props.color} v={x}/>)

    // { bs.da.map(x=>
    //   <ARect cellDims={bs.cellDims}
    //     fontsSet={bs.fontsSet}
    //     color={this.props.color}
    //     fontSizeRange={bs.fontSizeRange}
    //     v={x}/>)}

    componentWillUpdate=()=>{
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
