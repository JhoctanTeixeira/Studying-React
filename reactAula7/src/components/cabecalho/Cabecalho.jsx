import React from 'react'
import Logo from '../img/logo.png'
import styled from 'styled-components'

export const DivCabe = styled.div`
font-family: ;
width: 100%;
`
export const LogoCabe = styled.img`
  float: left;
  width: 100px;
  height: 100px;
`
export const TituCabe = styled.h1`
position: relative;
top: 18px;
left: 10px;
`

export default function Cabecalho() {
    return (
        <DivCabe>
                <header>
                 <LogoCabe src={Logo} alt="" />   
                {/* <TituCabe>Gerador Post-It tarefa</TituCabe> */}
                </header>
        </DivCabe>
    )
}
