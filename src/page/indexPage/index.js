import React,{Component} from 'react'
import Login from '../../components/Login'
import TapHead from '@/components/tapHead/Head'
import ClickTap from '@/components/clickTap/index.js'
import Android from './router/android'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import PropTypes from 'prop-type'

class Index extends Component {
    constructor(){
        super()
        this.state={
            flag:localStorage.getItem('login')? false : true,
            num:0
        }
    }
    render(){
        return (
            <div className="test">
                {
                    this.state.flag&&<Login location="/api/login" ans={this.ans}></Login>
                }
                <div className="head">
                    <TapHead></TapHead>
                    <ClickTap ans={this.clickTap} title={{left:'推荐',right:'咨询'}}></ClickTap>
                </div>
                <div className="body">
                    <Router>
                        <Route path="/" alias="/android" component={Android}></Route>
                    </Router>
                </div>
            </div>
        )
    }
    clickTap=(msg)=>{
        console.log(msg)
        console.log(this.context)
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
    router: PropTypes.object
});
Index.contextType=MyContext
export default Index