import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import { CreateQuiz } from "./pages/CreateQuiz";
import { CertoEerrado } from "./pages/CertoEerrado";
import { Quiz } from "./pages/Quiz";

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
    children: [
      {
        path: 'create',
        element: (
          <CreateQuiz />
        ),
        children: [
          {
            path: 'certo-e-errado',
            element: (
              <CertoEerrado />
            )
          }
        ]
      },
      {
        path: 'quiz/:id',
        element: (
          <Quiz />
        )
      }
    ]
  }
])