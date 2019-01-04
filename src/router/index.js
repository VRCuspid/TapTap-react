import React,{Component} from 'react' 
import {Switch,Route} from 'react-router-dom'
import Android from './android'
import New from './new'

export default class RouterVeiw extends Component {
    render(){
        return ( 
            <Switch>
                <Route path="/" exact component={Android}></Route>
                <Route path="/android" component={Android}></Route>
                <Route path="/new" component={New}></Route>
            </Switch>
        )
    }
}