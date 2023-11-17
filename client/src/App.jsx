import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  MainPage,
  CommunityPage,
  CommunityDetailPage,
  NewPostPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/newpost" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>

}

export default App;
