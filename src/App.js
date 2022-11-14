import { Route, Routes, useLocation } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';
import Footer from './components/Footer';
import ListView from './components/ListView';
import Landing from './components/Main/Landing';
import Signup from './components/Main/Signup';
import Navbar from './components/Navbar';
import PropertyDetail from './components/PropertyDetail';
import MyProperties from './components/MyProperties';
import SavedProperties from './components/SavedProperties';
import Main from './containers/Main';
import Login from './components/Main/Login';
import SignupForm from './components/Main/Signup/SignupForm';
import { useAuth } from './context/auth-context';

function App() {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <Main location={location}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/create-property' element={<CreateProperty />} />
          <Route path='/property-detail' element={<PropertyDetail />} />
          <Route path='/property-detail/:id' element={<PropertyDetail />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/profile'
            element={<SignupForm formType='edit' data={user} />}
          />
          <Route path='/list-view' element={<ListView />} />
          <Route path='/myproperties' element={<MyProperties />} />
          <Route path='/myproperties/:status' element={<MyProperties />} />
          <Route path='/savedproperties' element={<SavedProperties />} />
          <Route
            path='/savedproperties/:status'
            element={<SavedProperties />}
          />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
