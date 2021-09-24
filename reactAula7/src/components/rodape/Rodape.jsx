import React from 'react'
import styled from 'styled-components'
export const Froda = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #481353;
  color: white;
  text-align: center;
  font-family: monospace;
  padding: 20px;
`

export default function Rodape() {
    return (
        <Froda>
            <footer>
                <p>&#10055;	2021 Jhoctan Teixeira In GitHub</p>
            </footer>
            
        </Froda>
    )
}
