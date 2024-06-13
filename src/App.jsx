import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />} />
      </Routes>
    </HashRouter>
  )
}

export default App
