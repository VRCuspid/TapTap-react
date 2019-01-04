import React from 'react'

const LittleGame=(props)=>{
    return (
        <div style={{width:'80px',height:'150px'}}>
            {
                
                props.data.img?
                <section>
                <div style={{fontSize:'12px',color:'#666'}}>{props.data.type}</div>
                <div style={{margin:'5px 0'}}><img alt="这是图片" src={props.data.img} style={{width:'100%'}} /></div>
                <div style={{fontWeight:'bold'}}>{props.data.name}</div>
                </section>
                :<div>什么都没有</div>
            }
        </div>
    )
}
export default LittleGame