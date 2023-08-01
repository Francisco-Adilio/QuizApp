import { QuizBox } from '../components/QuizBox';
import { Topbar } from '../components/Topbar';
import '../styles/global.css';

function App() {
  return (
    <div className="bg-zinc-600">
      <Topbar />
      <div className="h-screen grid grid-cols-3-quiz gap-6 px-8 overflow-y-scroll pt-20 z-0 pb-4">
        <QuizBox title='Você conhece o Vasco?'/>
        <QuizBox title='Super quiz do Grêmio'/>
        <QuizBox title='Quem você seria em Chapeuzinho Vermelho?'/>
        <QuizBox title='Acerte a logo (Impossível)'/>
        <QuizBox title='Quem você seria em Chapeuzinho Vermelho?'/>
        <QuizBox title='Acerte a logo (Impossível)'/>
        <QuizBox title='Quem você seria em Chapeuzinho Vermelho?'/>
        <QuizBox title='Acerte a logo (Impossível)'/>
        <QuizBox title='Quem você seria em Chapeuzinho Vermelho?'/>
        <QuizBox title='Acerte a logo (Impossível)'/>
      </div>
    </div>
  )
}

export default App
