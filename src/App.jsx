import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './screens/Home';
import VideoEditing from './screens/VideoEditing';
import PhotoEditing from './screens/PhotoEditing';
import FAQs from './screens/FAQs';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<VideoEditing />} />
            <Route path="/photo" element={<PhotoEditing />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
