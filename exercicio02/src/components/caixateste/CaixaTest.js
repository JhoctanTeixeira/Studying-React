import React, {useState}  from 'react'
import './CaixaTest.css'
import Adicao from '../adicao/Adicao'

export default function CaixaTest(props) {

    const [valorState, setvalorState] = useState(10)
    let valorVariavel = 10;

    const aumentar = () =>{
        setvalorState(valorState + 10)
        valorVariavel += 10
    }

   return(
      <>
      <div>
          <p className="v-valor1">valorState : {valorState}</p>
          <p className="v-valor1">Valor da Variavel : {valorVariavel}</p>
          <button className='btn'  onClick={()=> aumentar()}   >Aumentar em 10</button>

          <Adicao resultado2={valorState} operacao2={aumentar}/>
      </div>

      </>
)
}