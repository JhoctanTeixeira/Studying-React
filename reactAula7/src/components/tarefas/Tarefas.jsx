import React from 'react'
import styled from 'styled-components'
import {TiDeleteOutline as DelTask} from 'react-icons/ti'

export const DivTarefa = styled.div`
    font-family: monospace;
    font-size: 1.4em;
    background: rgb(190,160,255);
    background: linear-gradient(0deg, rgba(190,160,255,1) 6%, rgba(72,19,83,1) 52%);
    border: 4px solid #751f87;
    border-style:  outset;
    box-shadow: 5px 5px 5px #333;
    padding: 40px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 1vh 1vw;
    
    

    h2.p{padding-bottom:10px;}
    .iconeDEL{
        float: right;
    }
`

const Tarefas = (props) =>{
    return (
        <DivTarefa>
            <DelTask onClick={props.remove} className="iconeDEL">X</DelTask>
            <p>Nr da tarefa: {props.key}</p>
            <h2>{props.titulo}</h2>
            <p>Para: {props.setor}</p>
            <p>{props.descricao}</p>

        </DivTarefa>
    )
}
export default Tarefas