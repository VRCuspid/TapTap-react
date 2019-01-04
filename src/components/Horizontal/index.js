import React,{Component} from 'react'
import BScroll from 'better-scroll'
import style from './Horizontal.module.css'

class Horizontal extends Component {
    render(){
        return (
           <div className={style.Horizontal}>
                <div className={style.title}>
                    <div className={style.titleLeft}>安利墙</div>
                    <div className={style.titleRight}>查看更多</div>
                </div>
                <div className={style.scroll}>
                    <ul id='scroll' ref={ul=>this.ul=ul} className={style.scrollBox}>
                       {
                           Array.isArray(this.props.children)?
                           this.props.children.map(function(item,i){
                               return <li key={i}>
                                   {item}
                               </li>;
                           }): this.props.children
                       }
                    </ul>
                </div>
           </div>
        )
    }
    componentDidMount(){
        let ul=this.ul;
        ul.style.width=ul.children.length*100+'px'
        new BScroll('.'+style.scroll,{
            probeType:2,
            click:true,
            scrollX:true
        })
    }
}
export default Horizontal