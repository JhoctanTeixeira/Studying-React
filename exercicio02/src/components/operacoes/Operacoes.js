import React, {useState} from 'react'
import './Operacoes.css'

export default function Operacoes() {

    const [valorState, setvalorState] = useState(5)
    let valorVariavel = 5;

    const aumentar = ()=>{
        setvalorState(valorState + 5)
        valorVariavel += 5
    }

   return(
      <>

        <p className="v-valor">valorState : {valorState}</p>
        <p className="v-valor">valorSVariavel : {valorVariavel}</p>
        <button onClick={()=> aumentar()}> Aumentar</button>

      </>
)
}