import React,{Component} from 'react'
import style from './Login.module.css'
import Head from '../Head/Head'

class Login extends Component {
    constructor(){
        super()
        console.log(style)
    }
    render(){
        return (<div className={style.Login} id="example">
            <Head>
                <div style={{height:'100%',width:'100%',lineHeight:'44px',textAlign:'center'}}>登录页</div>
            </Head>
            <div className={style.form}>
                <div className={style.userName}>
                    <input type="text" placeholder="请输入用户名 数字、字母、下划线、3-16位" defaultValue="zhangsan" ref={user=>this.user=user} />
                </div>
                <div className={style.passWord}>
                    <input type="password"  placeholder="密码 数字、字母、下划线、6-18位" defaultValue="zhangsan123" ref={password=>this.pwd=password} />
                </div>
                <button className={style.button} onClick={this.login}>登录</button>
            </div>
        </div>)
    }
    login=()=>{
        var userName=this.user.value;
        var pwd=this.pwd.value;
        var userTest=/^[a-z0-9_-]{3,16}$/;
        var pwdTest=/^[a-z0-9_-]{6,18}$/;
        if(!userTest.test(userName)||!pwdTest.test(pwd)){
           return console.error('用户名或密码格式错误!')
        }
        fetch(`${this.props.location}?name=${userName}&pwd=${pwd}`).then(res=>res.json()).then(res=>{
            alert(res.msg);
            if(res.code===4){
                localStorage.setItem('login',userName)
                this.props.ans(function(){
                    return false
                })
            }
        })
    }
}
export default Login