import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store.ts'
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import { router } from './routes/routeControl.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* <Router>
      <App />
    </Router> */}
    <RouterProvider router={router} />
  </Provider>,
)
