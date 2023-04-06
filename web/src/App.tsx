import { Quiz } from './components/Quiz';
import { Topbar } from './components/Topbar';
import './styles/global.css';

function App() {
  return (
    <div className="bg-zinc-600">
      <Topbar />
      <div className="h-screen grid grid-cols-3 gap-6 px-8 overflow-y-scroll pt-20 z-0">
        <Quiz title='Você conhece o Vasco?'/>
        <Quiz title='Super quiz do Grêmio'/>
        <Quiz title='Quem você seria em Chapeuzinho Vermelho?'/>
        <Quiz title='Acerte a logo (Impossível)'/>
        <Quiz title='Quem você seria em Chapeuzinho Vermelho?'/>
        <Quiz title='Acerte a logo (Impossível)'/>
        <Quiz title='Quem você seria em Chapeuzinho Vermelho?'/>
        <Quiz title='Acerte a logo (Impossível)'/
        ><Quiz title='Quem você seria em Chapeuzinho Vermelho?'/>
        <Quiz title='Acerte a logo (Impossível)'/>
      </div>
    </div>
  )
}

export default App
