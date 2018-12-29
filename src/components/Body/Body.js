import React,{PureComponent} from 'react';
import style from './Body.module.css'
import BScroll from 'better-scroll';

class Body extends PureComponent{
    render(){
        console.log('%cBody组件正在渲染','color:#f09')
        return (<div className={style.body} ref={body=>this.body=body}>
           <div className={style.scrollBox}>
                {
                  Array.isArray(this.props.children)?
                  this.props.children.map(function(item,i){
                      return item;
                  }): this.props.children
                }
           </div>
        </div>)
    } 
    componentDidMount(){
        let scroll=new BScroll('.'+style.body,{
            click:true,
            probeType:2,
        })
        scroll.refresh()
    }
}
export default Body;