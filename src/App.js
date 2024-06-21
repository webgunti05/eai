import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbaordPage from './pages/dashboard';
import PipelinesPage from './pages/pipelines';
import DatabasePage from './pages/database';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<PipelinesPage />} />
                <Route path="/dashboard" element={<DashbaordPage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path='/pipelines' element={<PipelinesPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
