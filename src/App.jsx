import './assets/css/style.css'
import './assets/css/animate.css'
import { useRoutes } from 'react-router-dom'
import routesConfig from './routing/RoutesConfig'

function App() {
  const routing = useRoutes(routesConfig)
  return routing
}

export default App
