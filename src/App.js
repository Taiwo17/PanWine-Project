import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component from './pages/Component';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<Component />} path='/component' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
