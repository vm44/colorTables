import React, {Component} from 'react'

class FontSample extends Component{

  // constructor(props){
  //   super(props)
  //   this.state={
  //     fontColor:sample(props.color.font),
  //     bkgColor:sample(props.color.bkg)
  //   }
  // }
  //
  // state={
  //   fontColorInd:0,
  //   bkgColorInd:0
  // }
  //
  // calcFontSize=(maxFontSize)=>{
  //   let minFS=this.props.fontSizeRange[0]/100
  //   let maxFS=this.props.fontSizeRange[1]/100
  //   // let dFS=(this.props.fontSizeRange[1]-this.props.fontSizeRange[0])*Math.random()
  //   let dFS=(maxFS-minFS)*Math.random()
  //   console.log(minFS,maxFS,dFS,maxFontSize,maxFontSize*minFS+maxFontSize*dFS)
  //   return maxFontSize*minFS+maxFontSize*dFS
  // }
  //
  // updateIndexes=()=>{
  //   this.setState({fontColorInd:Math.floor(Math.random()*this.props.color.font.length),
  //     bkgColorInd:Math.floor(Math.random()*this.props.color.bkg.length)})
  // }
  //
  // componentWillUpdate(nextProps,nextState){
  //   if(this.props.color.font.length != nextProps.color.font.length)
  //     this.setState({fontColorInd:Math.floor(Math.random()*nextProps.color.font.length)})
  //   // this.updateIndexes()
  // }
  //
  // componentWillMount(){
  //   // this.setState({fontColor:sample(this.props.color.font)})
  //   // this.setState({bkgColor:sample(this.props.color.bkg)})
  //   this.updateIndexes()
  // }

  render(){
    // console.log('ARect:',this.props);
    // console.log(this.state)
    return(
      <div style={{
        paddingTop: "0px",
        marginTop:"0px",
        border:'solid black 1px',
        // color:this.props.color.font[this.state.fontColorInd],//'red',
        // backgroundColor:this.props.color.bkg[this.state.bkgColorInd],
        // width:this.props.cellDims.width,
        // height:this.props.cellDims.height,
        // fontSize:70,
        fontFamily:this.props.fontFamily,
        textShadow:"8px 8px 8px #000000",
        fontSize:200,//this.calcFontSize(Math.min(this.props.cellDims.width/1.2,this.props.cellDims.height)*0.9),
        // fontSize:this.props.fontSizeRange[0],
        // float:'left',
}}>
        <div style={{//backgroundColor:"#333333",
          // lineHeight:(Math.min(this.props.cellDims.width/1.2,this.props.cellDims.height)*0.99).toString()+"px"
        }}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default FontSample
