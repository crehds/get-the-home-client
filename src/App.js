import { Route, Routes, useLocation } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';
import Main from './containers/Main';

function App() {
  const location = useLocation();
  return (
    <>
      <div>NavBar</div>
      <Main location={location}>
        <Routes>
          <Route index element={<div>Landing</div>} />
          <Route path='/create-property' element={<CreateProperty />} />
          <Route
            path='/property-detail'
            element={<div>Detalles de propiedad</div>}
          />
        </Routes>
      </Main>
      <div>Footer</div>
    </>
  );
}

export default App;
