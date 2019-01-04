import React from 'react'
import style from './ListShow.module.css'

const ListShow = (props)=>{
        return <div className={style.ListShow}>
        <div className={style.title}>{props.title}</div>
        <div className={style.ShowItem}>
            {
               props.children[0]
            }
        </div>
        <div className={style.foot}>
            { props.children[1]}
        </div>
    </div>
    }
export default ListShow