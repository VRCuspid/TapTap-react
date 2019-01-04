import React,{Component} from 'react' 
import style from './clickTap.module.css'
import {Link} from 'react-router-dom'
export default class TapHead extends Component {
    render(){
        const {left,right}=this.props.title;
        return (
            <div className={style.header}> 
                <div className={style.left} onClick={(e)=>{this.clickTap('left',e)}}>
                        <Link to="/android" className="activeClickTap">{left}</Link>
                </div>
                <div className={style.right} onClick={(e)=>{this.clickTap('right',e)}}>
                        <Link to="/new">{right}</Link>
                </div>
            </div>
        )
    }
    clickTap=(ind,e)=>{
        this.props.ans(ind) // 子-->父 回调函数
        e.stopPropagation()
        const tar=e.target; //获取事件源
        document.querySelector('.activeClickTap')&&document.querySelector('.activeClickTap').classList.remove('activeClickTap')
        if(tar.nodeName==='DIV'){
            tar.children[0].classList.add('activeClickTap')
        }else if(tar.nodeName==='A'){
            tar.classList.add('activeClickTap')
        }
    }
}