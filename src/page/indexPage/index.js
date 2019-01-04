import React,{Component} from 'react'
import Login from '../../components/Login'
import TapHead from '@/components/tapHead/Head'
import ClickTap from '@/components/clickTap/index.js'
import {BrowserRouter as Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import RouterView from '@/router'

class Index extends Component {
    
    constructor(){
        super()
        this.state={
            flag:localStorage.getItem('login')? false : true,
            num:0
        }
    }
    render(){
        return (<Router>
            <div className="test"> 
                {
                    this.state.flag&&<Login location="/api/login" ans={this.ans}></Login>
                }
                <div className="head">
                    <TapHead></TapHead>
                    <ClickTap ans={this.clickTap} title={{left:'推荐',right:'咨询'}}></ClickTap>
                </div>
                <div className="body">
                    <RouterView/>
                </div>
            </div>
            </Router>
        )
    }
    clickTap=(msg)=>{
        // if(msg==='left'){
        //     Router.history.push('/android')
        // }else if(msg==='right'){
        //     Router.history.push('/new')
        // }
    }
    ans=(fn)=>{
          this.setState({
              flag:fn()
          })
    }
}
const MyContext = React.createContext({
    router: PropTypes.func
});
Index.contextType=MyContext
export default Index