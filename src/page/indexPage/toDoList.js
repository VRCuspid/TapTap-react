import React,{Component} from 'react'

class TodoList extends Component {
    constructor(){
        super()
        this.state={
            inputValue:'',
            list:['ssef']
        }
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
               
                <button onClick={this.handleAdd}>clickme</button>
                {
                    this.state.list&&this.state.list.length?this.state.list.map((item,i)=>(
                        <li key={i} onClick={()=>{
                            this.handleDel(i)
                        }}>{item}</li>
                    )):null
                }
            </div>
        )
    }
    handleChange=(e)=>{
       this.setState({
           inputValue:e.target.value
       })
    }
    handleDel=(index)=>{
        console.log(index)
        let arr=this.state.list;
        arr.splice(index,1)
        this.setState({
            list:arr
        })
    }
    handleAdd=()=>{
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
}
export default TodoList