
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Top from './component/Top';
import LoginPage from './component/KaKaoLogin/LoginPage';
import MainPage from './component/Main/MainPage';
import KakaoMap from './component/kakaomap/KakaoMap';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Top />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path = "/map/:mapId" element = {<KakaoMap/>}></Route>
          <Route path="/oauth2/redirect/*" element = {<Navigate to ="/"></Navigate>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
