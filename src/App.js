import { Route, Routes } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';
import Footer from './components/Footer';
import Landing from './components/Main/Landing';
import Signup from './components/Main/Signup';
import Navbar from './components/Navbar';
const user = { role: 'landlord' };
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/create-property" element={<CreateProperty />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
