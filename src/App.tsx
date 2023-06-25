import { useRoutes } from 'react-router-dom'
import routeConfig from "./router/index"

function App() {
  return (
    <>
      {useRoutes(routeConfig)}
    </>
  )
}

export default App
