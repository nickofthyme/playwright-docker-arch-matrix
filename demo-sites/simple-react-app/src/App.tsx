import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router';
import { simpleReactApp } from '../../constants';

import './App.css'

import { Examples } from './pages/Examples';
import { Home } from './pages/Home';
import { Text } from './pages/examples/Text';
import { Icons } from './pages/examples/Icons';
import { Canvas } from './pages/examples/Canvas';
import { Image } from './pages/examples/Image';
import { Chart } from './pages/examples/Chart';

function App() {
  return (
    <Router basename={simpleReactApp.basePath}>
      <nav className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/examples'>Examples</NavLink>
      </nav>

      <Routes>
        <Route index element={<Home />} />

        <Route path='/examples' element={<Examples />}>
          <Route index element={<Navigate replace to="/examples/text" />} />
          <Route path='text' element={<Text />} />
          <Route path='canvas' element={<Canvas />} />
          <Route path='chart' element={<Chart />} />
          <Route path='icons' element={<Icons />} />
          <Route path='image' element={<Image />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
