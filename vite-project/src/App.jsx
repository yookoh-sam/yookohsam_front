import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Layout } from './components/layout/Layout'
import MapPage from './pages/MapPage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>} />
          <Route path='/map' element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
