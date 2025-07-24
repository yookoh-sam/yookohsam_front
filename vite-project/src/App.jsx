import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { Layout } from './components/layout/Layout'
import { Login } from './pages/Login'
import { MyPage } from './pages/MyPage'
import KakaoRedirectPage from './pages/KakaoRedirectPage'
import MapPage from './pages/MapPage'
import OAuth2RedirectHandler from './pages/OAuth2RedirectHandler'
import { ShopInfo } from './pages/ShopInfo'
import { Profile } from './pages/Profile'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/auth/callback" element={<KakaoRedirectPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/shopInfo' element={<ShopInfo/>}/>
          <Route path='profile' element={<Profile />}/>
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
