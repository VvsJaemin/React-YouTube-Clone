
import React from 'react';
import './App.css';
import Layout from './components/shared/Layout';
import youtubeData from './data/youtubeData.json'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';
function App() {
  console.log('youtubeData : ', youtubeData);
  console.log('youtubeData[data]', youtubeData['data']);
  console.log('youtubeData[data][0]', youtubeData['data'][0]);
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/subscription" element={<Subscription/>}/>
      <Route path="/assignment" element={<Assignment/>}/>
    </Routes>

  );
}

export default App;
