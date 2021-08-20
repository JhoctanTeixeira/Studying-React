import React, {useState} from 'react'
import './Operacoes.css'
import Adicao from '../adicao/Adicao'

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
        <p className="v-valor">Valor da Variavel : {valorVariavel}</p>
        {console.log("Valor da Variavel: " + valorVariavel )}
        <button onClick={()=> aumentar()}> Aumentar</button>

        <Adicao resultado={valorState} operacao={aumentar}/>

      </>
)
}