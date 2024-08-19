import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage'; 
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { useState } from 'react';

function App() {
  //user만 볼 수 있는 페이지
  const [authenticate, setAuthenticate] = useState(true);//false 면 로그인 해야하는거, true 면 한거
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage/> : <Navigate to="/login"/>
  }
  return (
    <div className="App">
      {/* //각각의 페이지를 스위치하는 역할, 원래이름은 switch */}
      <Routes> 
        {/* 페이지의 주소값을 줘야지 연결되니까, path는 각 주소, element는 그 주소에 보여주고싶은거
        일단 start 하면 homepage 밖에 안보이고 /about 붙이면 aboutpage 보임 -> 근데 번거롭다 */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        {/* detail 꺼 path detail 어떻게 설정하지 -> restful route 사용, id 값에는 가변적인 아무 숫자나 와도 됨*/}
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>

      </Routes>

      {/* //이렇게 하면 다른 페이지가 한 페이지에 같이 보인다 ㅠㅠ */}
      {/* <Homepage/>
      <Aboutpage/> */}
    </div>
  );
}

export default App;
