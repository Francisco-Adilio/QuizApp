import { Quiz } from './components/Quiz';
import './styles/global.css';

function App() {
  return (
    <div className="h-screen bg-zinc-600">
      <div className="h-screen grid grid-cols-3 gap-6 mx-8">
        <Quiz />
        <Quiz />
        <Quiz />
      </div>
    </div>
  )
}

export default App
