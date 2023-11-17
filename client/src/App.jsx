import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, CafeMapPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cafemap" element={<CafeMapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
