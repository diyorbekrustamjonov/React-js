import {useState } from "react"
function App(){
    const [count, setCount] = useState(0)

    function inc(){
        setCount(count + 1)
    } 
    function decr(){
        setCount(count - 1)
    } 
    return (
        <>
            <h3>Count: {count}</h3>
            <button className="btn btn-success" onClick={inc}>INCR</button>
            <button className="btn btn-danger" onClick={decr}>Dectr</button>
        </>            
    )
}

export default App