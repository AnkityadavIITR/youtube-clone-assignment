import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { Route,  Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  const [videoData,setVideoData]=useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home videoData={videoData} setVideoData={setVideoData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
