import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
  LoginPage, 
  MainPage, 
  ReviewListPage,
   ReviewDetail,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/review" element={<ReviewListPage />} />
        <Route path='/review/detail' element={<ReviewDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
