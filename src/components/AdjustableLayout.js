import React from 'react'
import {connect} from 'react-redux'
import Slider,{Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

import TstDim from './TstDim'
import TstDimKeyed from './TstDimKeyed'
import WorkArea from './RectArea/workArea'

const mapStateToProps=(state)=>{
  return {testArea:state.testArea.toJS()}
}

const func=(props)=>{
  console.log('ALprops',props.testArea,props.testArea.parentDims)
  let paddTop=props.testArea.parentDims[1]-props.testArea.vert[1]
  let paddRight=props.testArea.parentDims[0]-props.testArea.horiz[1]
  return (
    <div style={{width:'100vw',
                height:'100vh',
                verticalAlign:'top',
                // display:'inline-block',
                border:'4px solid #ff0000'
              }}>
          <div style={{width:'10%',
                      height:'100%',
                      display:'inline-block',
                      border:'4px solid #ffff00'
                    }}>

                    <div style={{width:'100%',
                                height:'10%',
                                // display:'inline-block',
                                border:'1px solid #ff0000'
                              }}>
                              h
                              {/*}
                              <TstDimKeyed dkey={'ins'} />
                              */}

                    </div>
                    <div style={{width:'100%',
                                height:'90%',
                                verticalAlign:'top',
                                // display:'inline-block',
                                border:'1px solid #ff0000'
                              }}>
                              <div style={{width:'80%',
                                          height:'100%',
                                          verticalAlign:'top',
                                          display:'inline-block',
                                          border:'1px solid #ff0000'
                                        }}>
                                        l
                                        {/*}
                                        <TstDimKeyed dkey={'ins'} />
                                        */}

                              </div>
                              <div style={{width:'20%',
                                          height:'100%',
                                          verticalAlign:'top',
                                          display:'inline-block',
                                          border:'1px solid #ff0000'
                                        }}>
                                        <Range vertical={true} max={props.testArea.parentDims[1]} value={props.testArea.vert}
                                          onChange={(val)=>{console.log(val);props.dispatch({type:"chVSizeRange",val:val})}}/>
                              </div>
                    </div>

          </div>
          <div style={{width:'90%',
                      height:'100%',
                      display:'inline-block',
                        verticalAlign:'top',
                      // position:"absolute",
                      border:'4px solid #00ff00'
                    }}>

                    <div style={{width:'100%',
                                height:'10%',
                                // margin:2,
                                // display:'inline-block',
                                  // verticalAlign:'top',
                                // position:"absolute",
                                border:'4px solid #00ff00'
                              }}>
                              <Range max={props.testArea.parentDims[0]} value={props.testArea.horiz}
                                onChange={(val)=>{console.log(val);props.dispatch({type:"chHSizeRange",val:val})}}/>
                              x
                    </div>
                      <TstDim>
                        <div style={{width:'100%',
                                    height:'90%',
                                     margin:2,
                                    // display:'inline-block',
                                    //   verticalAlign:'top',
                                    // position:"absolute",
                                    border:'4px solid #00ff00',
                                    paddingTop:paddTop,//rops.testArea.vert[0],
                                    paddingRight:paddRight,//rops.testArea.vert[0],
                                    paddingLeft:props.testArea.horiz[0],
                                    paddingBottom:props.testArea.vert[0],
                                  }}>
                                  <div style={{height:'100%',
                                      backgroundColor:'#ff3333',
                                    // display:'inline-block',
                                    // verticalAlign:'top',
                                  }}>
                                    <TstDimKeyed dkey={'ins'}>
                                      <WorkArea />
                                    </TstDimKeyed>
                                  </div>
                        </div>
                      </TstDim>


          </div>
    </div>
  )
  // <div style={{width:'100%',
  //   height:'100%',
  //   display:'inline-block',
  //   border:'4px solid #ffff00'
  // }}>
  //   {/*}<TstDimKeyed dkey={'ins'} />*/}
  // </div>


  // <div style={{width:'100%',
  //             height:'10%',
  //             // display:'inline-block',
  //             border:'4px solid #ff0000'
  //           }}>
  //           h
  //           <TstDim/>
  // </div>
  // <div style={{width:'100%',
  //             height:'90%',
  //             // display:'inline-block',
  //             border:'1px solid #ff0000'
  //           }}>
  //           l
  //           <TstDim/>
  // </div>





  // return (
  //   <div>
  //   <div style={{width:'10vw',
  //               height:'100vh',
  //               display:'inline-block',
  //               border:'1px solid #ff0000'
  //             }}>
  //    from func!
  //   </div>
  //   <div style={{width:'90vw',
  //               height:'10vh',
  //               display:'inline-block',
  //               border:'1px solid #ff0000'
  //             }}>
  //    from func!
  //   </div>
  //   </div>
  // )
}

export default connect(mapStateToProps)(func)











//
// <div style={{width:'10vw',
//             height:'90vh',
//             // display:'inline-block',
//             border:'1px solid #ff0000'
//           }}>
//  from func!
// </div>
