import React, {useState}  from 'react'
import './CaixaTest.css'

export default function CaixaTest(props) {

    const [caixaState, setvalorState] = useState(10)
    let valorVariavel = 10;
    <button></button>
    
    const aumentar = () =>{
        setvalorState(caixaState + 10)
        valorVariavel += 10
    }

   return(
      <>
      <div>
         
      </div>

      </>
)
}