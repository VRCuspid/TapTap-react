import React,{Component} from 'react'
import Login from '../../components/Login/Login.js'
import ListShow from '../../components/ListShow/ListShow'
import Body from '../../components/Body/Body'
import TapHead from '../../components/tapHead/Head'
import Horizontal from '../../components/Horizontal/Horizontal'
import LittleGame from '../../components/LittleGame/LittleGame'
import RotateImg from '../../components/RotateImg/RotateImg'
import './index.css'
const imgSrc=[
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.png',
    '/img/5.png',
    '/img/6.png',
    '/img/7.png',
]
const LittleData=[
    {
        type:'1.2测试',
        img:'/img/1.png',
        name:'火影忍者'
    },{
        type:'1.2测试',
        img:'/img/2.png',
        name:'QQ'
    },{
        type:'1.2测试',
        img:'/img/3.png',
        name:'元气骑士'
    },{
        type:'1.2测试',
        img:'/img/4.png',
        name:'小小航海士'
    },{
        type:'1.2测试',
        img:'/img/5.png',
        name:'小小航海士经典'
    },{
        type:'1.2测试',
        img:'/img/6.png',
        name:'海贼王'
    },{
        type:'1.2测试',
        img:'/img/7.png',
        name:'微信'
    }
]
class Index extends Component {
    constructor(){
        super()
        console.log(React)
        this.state={
            flag:localStorage.getItem('login')? false : true,
            num:0
        }
    }
    render(){
        return (
            <div className="test">
            {
                this.state.flag&&<Login location="/api/login" ans={this.ans}></Login>
            }
            <div className="header">
                <TapHead></TapHead>
            </div>
            <div className="body">
            <Body>
                
                <ListShow  title={'来自Tap tap 视频区'}>
                        <img src="/img/memory.jpg" alt="年度记忆视频征集活动" style={{width:'100%',height:'100%',borderRadius:'10px'}}/>
                    <h3>TapTap 第二期视频征集活动开始</h3>
                </ListShow>
                
                <ListShow imgSrc={imgSrc} title={'来自专题'}>
                    <RotateImg imgSrc={imgSrc} />
                    <h3>一月佳作爆料</h3>
                </ListShow>
                <Horizontal>
                    {
                        LittleData.map((item,i)=>{
                            console.log(item);
                            return (
                                <LittleGame key={i} data={item} />
                            )
                        })
                    }
                </Horizontal>
            </Body>
            </div>
            </div>
        )
    }
    componentWillMount(){
        fetch('/api/test').then(res=>res.json()).then(res=>{
            console.log(res)
        })
    }
    ans=(fn)=>{
          this.setState({
              flag:fn()
          })
    }
}
export default Index