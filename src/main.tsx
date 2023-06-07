import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store/Store.ts'
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import { router } from './routes/createRouter.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
