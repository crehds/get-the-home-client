import { Route, Routes, useLocation } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';
import Footer from './components/Footer';
import Landing from './components/Main/Landing';
import Navbar from './components/Navbar';
import PropertyDetail from './components/PropertyDetail';
import Main from './containers/Main';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Main location={location}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/create-property' element={<CreateProperty />} />
          <Route path='/property-detail' element={<PropertyDetail />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
