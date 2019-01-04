import React,{Component} from 'react' 

const Hoc =()=>{
    return (Wrapper)=>{
        return class High extends Component {
            constructor(){
                super()
                this.state={
                    name:'zs',
                    age:12
                }
            }
            render(){
                return (
                    <div>
                        这是高阶组件
                        <Wrapper {...this.state}></Wrapper>
                    </div>
                )
            }
        }
    }
}
export default Hoc