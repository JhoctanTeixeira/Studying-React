import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <div>
                <h1>O SITE</h1>
                <header>
                    <nav>
                        <ul>
                            <li><Link>Inicio</Link></li>
                            <li>Sobre</li>
                            <li>Serviços</li>
                            <li>Fotos</li>
                            <li>Conatato</li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path-'/sobre' component={sobre} />
                    </Switch>

                </main>
            </div>
        </>
    )
}