import React, { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    
    function dec(){
        setCount = setCount(prev => prev - 1)
      }
      function inc(){
        setCount = setCount(prev => prev + 1)
      }
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={inc} className="btn btn-success w-25 ml-3">INC</button>
            <button onClick={dec} className="btn btn-danger  w-25 ">DEC</button>

        </>
    )
}


// Class korinishida yozish

// class Counter extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.increment = this.increment.bind(this)
//     this.decrement = this.decrement.bind(this)
//   }
//   increment(){
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decrement(){
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render(){
//     return (
//       <>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment} className="btn btn-success w-25 ml-3">INCR</button>
//         <button onClick={this.decrement} className="btn btn-danger w-25 ml-3">INCR</button>

//       </>
//     )
//   }
// }

export default Counter