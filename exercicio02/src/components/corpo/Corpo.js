import React, {useState} from 'react'
import Treino from'../img/exerF.jpg'
import './Corpo.css'
import CompTeste from '../teste/CompTeste'
import Operacoes from '../operacoes/Operacoes'
import CaixaTest from '../caixateste/CaixaTest'

export default function Corpo() {

   const [corpoState, setCorpoState] = useState('Conteudo')

   return(
      <>
      <p>E possui STATE : {corpoState}</p>
      <button onClick={()=> setCorpoState('STATE-ALTERADO NO CORPO')}> ALTERA STATE</button>

      <section>
         <img src={Treino} alt="Exercicios se arrume e bora treinar em CASA!!!!" />
         <h2>Exercicios recomendados</h2>
         <p>1 - Polichinelo completo Em pé, com as pernas unidas e os braços estendidos ao lado do corpo, dê um salto para cima. Ao mesmo tempo, afaste os pés lateralmente e bata as mãos acima da cabeça. Volte para a posição inicial e depois agache, tocando as mãos no solo. Estenda as pernas e repita o exercício... </p> 
            <div>
               <CompTeste/>
               <Operacoes/>
               <CaixaTest attribState={setParagrafo} />
            </div>
         <p>2 - Agachamento com deslocamento lateral Em pé, fique com as pernas unidas e coloque as mãos na cintura. Dê um passo para o lado. Estenda os braços à frente, contraia o abdome e agache até suas coxas ficarem paralelas ao chão. Volte para a posição inicial e execute o movimento para o outro lado....</p>
         <p>3 - Prancha com toque nas pernas Fique em posição de flexão de braços, com as mãos afastadas em uma largura igual a dos ombros e o abdome contraído, para estabilizar o corpo. Leve a mão esquerda até a lateral da coxa de mesmo lado. Volte e repita com a outra mão....</p>
         <p>4 - Salto com afundo Fique em pé, com as pernas afastadas na largura do quadril e as mãos na cintura. Flexione levemente os joelhos para pegar impulso e dê um salto para cima. Depois, dê um pequeno salto, coloque a perna direita à frente e flexione os joelhos, fazendo um afundo. Retorne à posição inicial e repita o movimento, agora colocando a perna esquerda à frente....</p>
         </section>
      </>
)
}