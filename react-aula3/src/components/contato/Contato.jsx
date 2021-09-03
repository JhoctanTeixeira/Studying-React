import React, { useState } from 'react'

export default function Contato() {

    const [carro, setCarro] = useState({'marca': '', 'modelo': ''})
    



    return (
        <div>
            <h2>Dados do Carro</h2>
            Marca  :  <input name="marca" type="text" />  <br />
            Modelo :  <input name="modelo" type="text" /> <br />
        </div>
    )
}