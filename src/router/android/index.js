import React,{Component} from 'react'
import Body from '@/components/Body/'
import ListShow from '@/components/ListShow'
import RotateImg from '@/components/RotateImg'
import Horizontal from '@/components/Horizontal'
import LittleGame from '@/components/LittleGame'
import {imgSrc,LittleData} from '@/data.json'
export default class IndexRouter extends Component {
    render(){
        return (
            <Body>
                <ListShow  title={'来自Tap tap 视频区'}>
                        <img src="/img/memory.jpg" alt="年度记忆视频征集活动" style={{width:'100%',height:'100%',borderRadius:'10px'}}/>
                    <h3>TapTap 第二期视频征集活动开始</h3>
                </ListShow>
                
                <ListShow imgSrc={imgSrc} title={'来自专题'}>
                    <RotateImg imgSrc={imgSrc} />
                    <h3>一月佳作爆料</h3>
                </ListShow>
                <ListShow imgSrc={imgSrc} title={'来自专题'}>
                    <RotateImg imgSrc={imgSrc} />
                    <h3>一月佳作爆料</h3>
                </ListShow>
                <Horizontal>
                    {
                        LittleData.map((item,i)=>{
                            return (
                                <LittleGame key={i} data={item} />
                            )
                        })
                    }
                </Horizontal>
            </Body>
        )
    }
}