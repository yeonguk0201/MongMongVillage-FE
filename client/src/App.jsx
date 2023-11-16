import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, ReviewListPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/review" element={<ReviewListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
