import { Topbar } from '../components/Topbar'
import '../styles/global.css'

export function CreateQuiz() {
  return (
    <div className='bg-zinc-600 fixed w-full'>
      <Topbar />

      <div className='h-screen grid grid-cols-auto gap-4 p-4 overflow-y-scroll'>
        <a href="/certo-e-errado" className='bg-red-600 h-[450px] my-auto'>
          <h1>Certo e Errado</h1>
        </a>
        
        <a href="/personalidade" className='bg-red-600 h-[450px] my-auto '>
          <h1>Personalidade</h1>
        </a>
        
        <a href="/quiz-sobre-mim" className='bg-red-600 h-[450px] my-auto '>
          <h1>Quiz sobre mim</h1>
        </a>
      </div>
    </div>
  )
}