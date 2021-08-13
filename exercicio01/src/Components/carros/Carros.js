import React from 'react'
import CarroBlack from '../img/car1.jpg'

export default function Carros(props) {

   return(
      <>
        <img className="App-car1" src={CarroBlack} alt="Não é um carro é um monstro !" />
        <ul>
          <h1>Lançamento Monstruoso</h1>
          <li>{props.carros[0]}</li>
          <li>{props.carros[1]}</li>
          <li>{props.carros[2]}</li>
          <li>{props.carros[3]}</li>
          <li>{props.carros[4]}</li>
        </ul>
      </>
)
}