import React, {useState} from 'react'
import './Header.css'

export default function Header() {

   const [valorState, setvalorState] = useState(10)
   let valorVariavel = 10;

   const aumentar = () =>{
       setvalorState(valorState + 10)
       valorVariavel += 10
   }

   return(

      <>
       <p className="v-valor3">valorState : {valorState}</p>
        <p className="v-valor3">Valor da Variavel : {valorVariavel}</p>
        {console.log("Valor da Variavel: " + valorVariavel )}
        <button onClick={()=> aumentar()}> Aumentar</button>
      <header>
      <h1 className="t-title">Bora fazer o exercício !!!!!!</h1>
      <p>01 - Abdominal Agrupado apoie as mãos no solo ao lado corpo e erga as pernas. Incline o tronco para trás e estenda as pernas para a frente. Depois, mova o tronco para a frente e ao mesmo tempo flexione os joelhos, aproximando-os do peito. Repita o movimento sem parar, esse exercício trabalha o abdômen por completo.</p>
      </header>
      </>
)
}