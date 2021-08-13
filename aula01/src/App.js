import './App.css';
import Cabecalho from './components/cabecalho/Cabecalho'
import ListaAlunos from './components/listaalunos/ListaAlunos';

export default function App() {

  // Criando a declaração de envio dos parãmetros para a lista de Alunos via props
  const lista = ['Leandro', 'Jorge', 'Ana', 'Bob']

  // Criando a declaração de envio do curso para o componente Lista Alunos
  const crs = 'ADS'

  //Criando uma função para ser passadam como paraãmetro para o componente ListaAlunos
  const addAluno = ()=> 'Jhoctan'

  return (   
        <div className="App">
            <Cabecalho />
            <div className="AppCorpo">
              <ListaAlunos alunos={lista} curso={crs} maisAlunos={addAluno}/>
            </div>               
        </div>
  )
}