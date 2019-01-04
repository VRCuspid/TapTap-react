import React from 'react'
import style from './RotateImg.module.css'
const RotateImg = (props)=>{
    return (
       
            <div style={{height:'140px',width:'100%'}}>
                <div className={style.ShowItem}>
                { props.imgSrc.map(function(item,i){
                                return <div key={i} className={style.Item}>{
                                        <img src={item} alt='这是图片' />
                                }</div>
                        })}
                </div>
            </div>
    )
}
export default RotateImg