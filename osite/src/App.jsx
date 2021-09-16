import React from 'react'
import Header from './components/header/Header'
import {ElHtml, BodyAll, TitulosFont} from './styled'
export default function App() {

    return (
        <>
            <div className="container">
                <ElHtml>
                    <BodyAll>
                        <TitulosFont>
                            <h1>ROTAS</h1>
                            <Header />
                        </TitulosFont>
                    </BodyAll>
                </ElHtml>
            </div>
            
        </>
    )
}