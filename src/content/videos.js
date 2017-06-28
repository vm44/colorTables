import React from 'react'
import VideoYT from '../components/VideoYT'

const f=()=>{

  const vidList=["OhtHy1TzLtA",'_MG4iktof6U','F_yM7mnqAsI','YLvk1-D1yzw','X4kTUtZb24s']
  // console.log('werf')
  return(
    <div style={{backgroundColor:'#aaaaaa'}}>
      {vidList.map(x =>
        <div>
          <div style={{//width:'100%',
            height:'100%',
            margin:'4px',
            padding:'4px',
            border: '2px solid #7f7f00',
            display:'inline-block',
            verticalAlign:'top'
          }}>
              descr
          </div>

          <div style={{
            display:'inline-block'}}>
            <div>
              descr
            </div>
            <div style={{backgroundColor:'#000000',
              // margin:'4px',
              padding:'8px',
              // border: '2px solid #7f7f00',
            }}>
              <VideoYT vId={x} />
            </div>
          </div>
        </div>)}
    </div>
  )

}

export default f
