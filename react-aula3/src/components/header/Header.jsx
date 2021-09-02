import React, { useState } from 'react'
import Home from '../home/Home'
import Features from '../features/Features'
import Pricing from '../pricing/Pricing'
import Demo from '../demo/Demo'
import Resource from '../resource/Resource'
import Contato from '../contato/Contato'

export default function Header() {

    const [componente, setComponente] = useState(<Home>
        <div>
            Conteúdo enviado pelo Header.
        </div>
        <p>Exemplos Chíldren.</p>
    </Home>)

    return (
        <>
            <header>
                <nav>
                    <a href="#" onClick={() => setComponente(
                        <Home>
                            <div>
                                <div>
                                    Conteúdo enviado pelo Header.
                                </div>
                                <p>Exemplos Chíldren.</p>

                            </div>
                        </Home>

                    )}>Home</a>

                    <a href="#" onClick={() => setComponente(<Features />)}>Features</a>
                    <a href="#" onClick={() => setComponente(<Pricing />)}>Pricing</a>
                    <a href="#" onClick={() => setComponente(<Demo />)}>Demo</a>
                    <a href="#" onClick={() => setComponente(<Resource/>)}>Resource</a>
                    <a href="#" onClick={() => setComponente(<Contato />)}>Contato</a>
                </nav>
            </header>

            <div>
                {componente}
            </div>

        </>
    )
}