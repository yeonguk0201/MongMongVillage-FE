import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
  LoginPage, 
  MainPage, 
  ReviewListPage,
  ReviewDetail,
  ReviewWritePage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/review" element={<ReviewListPage />} />
        <Route path='/review/detail' element={<ReviewDetail />} />
        <Route path='/review/write' element={<ReviewWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
