import React,{PureComponent} from 'react';
import style from './Head.module.css';
class Head extends PureComponent {
    constructor(props){
        super();
    }
    render(){
        console.log('%cHead正在渲染','color:#f90')
        return (<div className={style.header}>
          <div className={style.headerLeft}>
            <button className={style.headerBtn}>
                <span className={style.btnContent}></span>
                <span className={style.btnContent}></span>
                <span className={style.btnContent}></span>
            </button>
            <img src='./img/logo_new.png' alt="img" className={style.logo} />
          </div>
          <div className={style.headerRight}>右</div>
        </div>)
    }
}
export default Head;