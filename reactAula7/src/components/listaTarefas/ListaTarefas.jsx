import React, { useState } from 'react'
import Tarefas from '../tarefas/Tarefas'
import styled from 'styled-components'

export const DivLista = styled.div`
width: 100%;
min-height: 85vh;
padding: 20px;
background-color: #ccc;
display: flex;
flex-wrap: wrap;
justify-content: space-around ;

`;
const ListaTarefas = () =>{

    //Lista de tarefas 
    const [tarefa, setTarefa] = useState(
        [
            {
                titulo: 'Relatorio de Vendas',
                setor:'Dep. Vendas',
                descricao: 'Vendemos tudo'
            },
            {
                titulo:'Estoque no final',
                setor:'ESTOQUE',
                descricao:'Por gentileza reforçar o estoqeu para o NATAl'
            }
        ])

    return (
        <DivLista>
            { tarefa.map( 
                (tar,i)=>(
                    <Tarefas key={i}
                             titulo={tar.titulo}
                             setpr={tar.setor}
                             descricao={tar.descricao}
                    />
                ))}
        </DivLista>
    )
}
export default ListaTarefas