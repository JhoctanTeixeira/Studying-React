import React from 'react'
import './App.css'
import CompTeste from './compoents/comp-test/CompTeste'

const fn = ()=> {
  let paragraf = {
      textAlign: 'justify',
      color: '#00ff00',
      textIdentit: '50px',
      fontSize: '2em'
  }

  return(
      <>
        <h1 style={{fontSize:'3em', color:'blue'}}> Conteudo do index.js, agora no App component...</h1>
        <p style={paragraf} > Formas de Adicionar CSS em um elemento no REACT de forma inline.</p>
        <p className="exemplo"> Aqui é um exemplo de declaração de classe CSS sendo declarada dentro do component REACT! </p>
        <CompTeste />
      </>
  )
}

export default fn;