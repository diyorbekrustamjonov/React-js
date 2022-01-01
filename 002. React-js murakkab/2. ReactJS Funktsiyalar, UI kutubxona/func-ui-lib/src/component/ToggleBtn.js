import React, { useState } from "react";


function ToggleBtn(){

    const [toggleBtn, setToggleBtn] = useState(false);
    return (
        <>
            <button className='btn btn-secondary' onClick={() => setToggleBtn(!toggleBtn)}>Show content</button>
            { toggleBtn ? <p className='lead'> Hello world bro </p> : null }
        </>
    )
}

// Class korinishida yozish
// class ToggleBtn extends React.Component{
//     constructor(props){
//         super(props)
//         this.toggleBtn = {
//             toggleBtn: false
            
//         }
//         console.log(!this.setToggleBtn)
//         this.setToggleBtn = this.setToggleBtn.bind(this)
//     }

//     setToggleBtn(){
//         this.toggleBtn.toggleBtn = !this.toggleBtn.toggleBtn
//     }

//     render(){
//         return (
//             <>
//             <button className='btn btn-secondary' onClick={() => this.setToggleBtn}>Show content</button>
//             { this.toggleBtn.toggleBtn ? <p className='lead'> Hello world bro </p> : null }
//             </>
//         )
//     }
// }

export default ToggleBtn