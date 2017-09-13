import React from 'react'
import VideoYT from '../components/VideoYT'

const f=()=>{

  // const descrs=["Идея: Симулятор ПДД",]
  // const vidList=["WUbC44jfnlk","OhtHy1TzLtA",'_MG4iktof6U','F_yM7mnqAsI','YLvk1-D1yzw','X4kTUtZb24s']
  const vidList=[
    {title:"Tank battles in the City",
     descr:"Python, Panda3d, OCC",
     url:"WUbC44jfnlk"},
    {title:"ПДД симулятор",
     descr:"Java/Scala, JMonkeyEngine", //Bezier, Catmull-Rom. sin,cos,tg.\
    //  Светофоры работают, контроль расположения на проезжей части,\
    //  скорости, подачи сигналов поворота",
     url:"OhtHy1TzLtA"},
    {title:"ПДД симулятор",
     descr:"Java/Scala, JMonkeyEngine",
     url:'_MG4iktof6U'},
    {title:"Maze with Rooms & Doors",
     descr:"Java/Scala, JMonkeyEngine",
     url:'F_yM7mnqAsI'},
    {title:"Oil Sea Tower",
     descr:"Java/Scala, JMonkeyEngine",
     url:'YLvk1-D1yzw'},
    {title:"Tank battles in the City",
     descr:"Java/Scala, JMonkeyEngine",
     url:'X4kTUtZb24s'}]
  // console.log('werf')
  return(
    <div style={{paddingTop:'70px',
      backgroundColor:'#aaaaaa'}}>
      {vidList.map(x =>
        <div>
          {/*<div style={{//width:'100%',
            height:'100%',
            margin:'4px',
            padding:'4px',
            border: '2px solid #7f7f00',
            display:'inline-block',
            verticalAlign:'top'
          }}>
              {x.descr}
          </div>
*/}
          <div style={{
            display:'inline-block'}}>
            <div style={{}}>
              <h3>
                {x.title}
              </h3>
            </div>
            <div style={{backgroundColor:'#333333',
              // margin:'4px',
              padding:'8px',
              // border: '2px solid #7f7f00',
            }}>
              <VideoYT vId={x.url} />
            </div>
            <div style={{align:"center"}}>
            <div style={{width:"100%"}}>
              {x.descr+ ", программное построение окружения"}
            </div>
            </div>
          </div>
        </div>)}
    </div>
  )

}

export default f
