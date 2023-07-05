import { useRoutes } from 'react-router-dom'
import routeConfig from "./router/index"
import { KeepAliveProvider } from './components/public/KeepAliveProvider'

function App() {
  return (
    <>
      <KeepAliveProvider>
        {useRoutes(routeConfig)}
      </KeepAliveProvider>
    </>
  )
}

export default App
