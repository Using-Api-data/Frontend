import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoMap from './component/kakaomap/KakaoMap';
import LoginButton from './component/KaKaoLogin/LoginButton';
import LoginRedirect from './component/KaKaoLogin/LoginRedirect';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<LoginButton />}></Route>
            <Route path="/" element={<KakaoMap />}></Route>
            <Route path = "/oauth/callback/kakao" element={<LoginRedirect/>}></Route>
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
