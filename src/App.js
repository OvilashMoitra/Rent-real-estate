import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './PageContainer/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
