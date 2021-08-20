import React, {useState} from 'react'
import './Footer.css'

export default function Footer() {
    const [valorState, setvalorState] = useState(10)
    let valorVariavel = 10;

    const aumentar = () =>{
        setvalorState(valorState + 10)
        valorVariavel += 10
    }

   return( 
        <>
            <div>
                <p>
                <p className="v-valor2">valorState : {valorState}</p>
                <p className="v-valor2">Valor da Variavel : {valorVariavel}</p>
                <button onClick={()=> aumentar()}   >Aumentar em 10</button>
                </p>
            </div>
        <footer >
            <p>Todos os direitos reservados 2021 &copy; &#9757;</p>
        </footer>
        </>
)
}