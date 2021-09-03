import React from 'react'

export default function Itens(props) {

   return(
      <>
      <div>
         <a href="#">Home</a>
         <a href="#">Features</a>
         <a href="#">Pricing</a>
         <a href="#">Demo</a>
         <a href="#">Resource</a>
         {props.children}
         {/* <input type="text" onChange{(e) => setFrase(e.target.value)} /> */}
         <p>Frase motivadora dp dia: <span>{frase}</span> </p>
         
      </div>

      </>
)
}