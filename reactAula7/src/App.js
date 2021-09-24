import React from 'react'
import ListaTarefas from './components/listaTarefas/ListaTarefas'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho'
import Rodape from './components/rodape/Rodape'
const App = () =>{
    return(
        <>
        <div id="container">
            <Cabecalho />
            <ListaTarefas/>
            <Rodape/> 
        </div>

        </>
    )
}
export default App