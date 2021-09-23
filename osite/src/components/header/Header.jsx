import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contato from '../contato/Contato'
import Fotos from '../fotos/Fotos'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'
import { Botao, Navbar } from '../../styled'
export default function Header() {

    return (
        <>
            <div>
                <h1>O SITE</h1>
                <header>
                    <Navbar>
                        <ul>
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/sobre'>Sobre</Link></li>
                            <li><Link to='/Servicos'>Serviços</Link></li>
                            <li><Link to='/fotos'>Fotos</Link></li>
                            <li><Link to='/contato'>Contato</Link></li>
                        </ul>
                    </Navbar>

                    <h1>Aluno</h1>
                    <p>Alunoooooooooooooooooooooo da 1TDSfffffffffffffffffffffffffffffffffffffffffffffff #2021 2° Semestreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    <Link to='/servicos'>
                        <Botao>
                            Ver mais
                        </Botao>
                    </Link>
                </header>
                <main>
                    <Switch>
                        <Route path='/sobre' component={Sobre} />
                        <Route path='/servicos' component={Servicos} />
                        <Route path='/fotos' component={Fotos} />
                        <Route path='/contato' component={Contato} />
                    </Switch>
                </main>
            </div>
        </>
    )
}