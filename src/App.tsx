import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import Post from './pages/postDetails';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route
        path="/*"
        element={
          <div className='center'>
            <h2>Page not found</h2>
            <button onClick={() => navigate('/main')}>Back Home</button>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
