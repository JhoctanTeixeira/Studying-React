import './App.css';
import Cabecalho from './Components/cabecalho/Cabecalho'
import Carros from './Components/carros/Carros';
import Parceiros from './Components/parceiros/Parceiros';

//Compoente PAI
export default function App() {

  const carros =['Ford Mustang', 'Fiat Uno', 'Jeep Light', 'BMW i320', 'Kia Cinze']

  const multiplica = (a, b) => {
      return a * b
  }
  return (
      <div>
        <Cabecalho />
        <Carros carros={carros}/>
        <Parceiros contaFunc={multiplica}/>
      </div>
  );

}