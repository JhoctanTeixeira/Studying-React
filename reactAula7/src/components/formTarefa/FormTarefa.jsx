import React from 'react'
import styled from 'styled-components'

export const FilTraf = styled.fieldset`
border: 1px solid #481353;
border-radius: 3px;
padding: 20px;
`
export const DivInput = styled.div`
padding: 6px;

`
export const LeTraf = styled.legend`
color: #3c2b3a;
padding: 10px;
`
export const InputTraf = styled.input`
border: 1px solid #481353;
border-radius: 1px;
padding: 6px;
`

export const DivForm = styled.div`
font-family: monospace;
font-size: 1.7em;
`
export const Form = styled.form`

background-color: #fff;
border: 4px solid #481353;
border-style:  outset;
padding: 20px;
`
export const Btn = styled.button`
  background-color: #481353;
  border: none;
  color: white;
  padding: 15px 51px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
  margin-top: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  `


export const DivBtn = styled.div`
padding: 5px;
`

export default function FormTarefa(props) {
    return (
        <DivForm>
            <Form method="post" onSubmit={props.addTarefa}>
                <FilTraf>
                    <LeTraf>CRIAR TAREFA</LeTraf>
                    <DivInput>
                        <InputTraf type="text" name="titulo" value={props.tarefa.titulo} onChange={props.digit} placeholder="Título"/>
                    </DivInput>
                    <DivInput>
                        <InputTraf type="text" name="setor" value={props.tarefa.setor} onChange={props.digit} placeholder="Setor"/>
                    </DivInput>
                    <DivInput>
                        <InputTraf type="text" name="descricao" value={props.tarefa.descricao} onChange={props.digit} placeholder="Descricao" />
                    </DivInput>
                </FilTraf>
                <DivBtn>
                    <Btn type="submit">Adicionar POST IT</Btn>
                </DivBtn>
            </Form>

        </DivForm>
    )
}
