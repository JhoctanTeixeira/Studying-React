import React, { useState } from 'react'
import Tarefas from '../tarefas/Tarefas'
import styled from 'styled-components'
import FormTarefa from '../formTarefa/FormTarefa';

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
                descricao:'Por gentileza reforçar o estoqeu para o NATAL'
            },
            
        ])

        const[nTarefa, setNTarefa] = useState({titulo:'', setor:'', descricao:''})

        const addTarefa = (e) => {
            e.preventDefault();
            setTarefa([...tarefa, nTarefa])
            setNTarefa({titulo:'', setor:'', descricao:''})
    }
    
    const captura = (e) => {
        //Realizando o destruction
        const {name, value} = e.target

        //Criando uma estrutura de decisão para validar qual ´r o campo deisparador do evento
        //Descobrindo qual é passa o value para este  objeto
        if(name === 'titulo'){
            setNTarefa({'titulo': value, 'setor': nTarefa.setor, 'descricao': nTarefa.descricao});
        }else if(name === 'setor'){
            setNTarefa({'titulo': nTarefa.titulo, 'setor': value, 'descricao': nTarefa.descricao});
        }else if(name === 'descricao'){
            setNTarefa({'titulo': nTarefa.titulo, 'setor': nTarefa.setor, 'descricao': value});
        }

    }

    const removerTarefa = (tar) =>{
        let lista = tarefa
        lista = lista.filter((t) => t !== tar)
        setTarefa(lista)
    }
    

    return (
        <DivLista>
            <FormTarefa addTarefa={addTarefa} digit={captura} tarefa={nTarefa} />
            {tarefa.map( 
                (tar,i)=>(


                    <Tarefas key={i}
                             titulo={tar.titulo}
                             setpr={tar.setor}
                             descricao={tar.descricao}
                             remove={removerTarefa.bind(this, tar)}
                    />
                ))}
         
        </DivLista>
    )
}
export default ListaTarefas


// const addTarefa = () => {
//     const novaTarefa = {
//         titulo:'CONTRATAÇÂO',
//         setor:'PESSOAL',
//         descricao:'Providenciar tratamento'
//     }

//     setTarefa([...tarefa, novaTarefa])
// }


{/* <button onClick={addTarefa}>ADICIONAR POST-IT</button> */}