import React,{Component} from 'react'

class Head extends Component {
    render(){
        return (<div style={{background:'#14B9C8',color:'#fff'}}>
            {this.props.children}
        </div>)
    }
}
export default Head 