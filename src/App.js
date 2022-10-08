import { Route, Routes } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';
import Footer from './components/Footer';
import Landing from './components/Main/Landing';
import Signup from './components/Main/Signup';
import SignupForm from './components/Main/Signup/SignupForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/create-property" element={<CreateProperty />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-form" element={<SignupForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
