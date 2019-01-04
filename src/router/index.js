import React,{Component} from 'react' 
import {Switch,Route} from 'react-router-dom'
import Routes from './routers'

export default class RouterVeiw extends Component {
    render(){
        return ( 
            <Switch>
                {
                    Routes.map((item,i)=>{
                        if(item.path==='/'){
                            return <Route exact key={i} path={item.path} component={item.component}  />
                        }
                        return <Route key={i} path={item.path} component={item.component}  />
                    })
                }
            </Switch>
        )
    }
}