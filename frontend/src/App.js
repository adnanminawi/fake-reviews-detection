import { Routes, Route, Link } from 'react-router-dom';
import BasicMode from './pages/BasicMode';
import AdvancedMode from './pages/AdvancedMode';

function App() {
  return (
    <div>
      <nav style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: 20 }}>Basic</Link>
        <Link to="/advanced">Advanced</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BasicMode />} />
        <Route path="/advanced" element={<AdvancedMode />} />
      </Routes>
    </div>
  );
}

export default App;