import { useState } from "react"

export default function InputVal(){
    const [value, setValue] = useState('')
    return (
        <>
          <p className='lead'>Value: {value}</p>
          <input type="text" value={value} onChange={(e) =>setValue(e.target.value)} className='form-control'></input>
        </>
    )
}