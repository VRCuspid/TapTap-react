import React,{Component} from 'react' 
import style from './clickTap.module.css'
export default class TapHead extends Component {
    render(){
        const {left,right}=this.props.title;
        return (
            <div className={style.header}> 
                <div className={style.left+' activeClickTap'} onClick={(e)=>{this.clickTap('left',e)}}>{left}</div>
                <div className={style.right} onClick={(e)=>{this.clickTap('right',e)}}>{right}</div>
            </div>
        )
    }
    clickTap=(ind,e)=>{
        this.props.ans(ind) // 子-->父 回调函数
        const tar=e.target; //获取事件源
        document.querySelector('.activeClickTap')&&document.querySelector('.activeClickTap').classList.remove('activeClickTap')
        tar.classList.add('activeClickTap')
        
        
    }
}