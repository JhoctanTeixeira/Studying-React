import React from 'react'

export default function Parceiros(props) {

   return(
      <>
      <h2> Conheca nossos Parceiros</h2>
      <span>{props.contaFunc(2,8)}</span>
          <p><a href="#">Fiat</a></p>
          <p><a href="#">Ford</a></p>
          <p><a href="#">Hyundai</a></p>
          <p><a href="#">Kia</a></p>
      
      </>
)
}