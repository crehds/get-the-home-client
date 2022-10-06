import { Route, Routes } from 'react-router-dom';
import CreateProperty from './components/CreateProperty';

function App() {
  return (
    <>
      <div>NavBar</div>
      <Routes>
        <Route index element={<div>Landing</div>} />
        <Route path='/create-property' element={<CreateProperty />} />
      </Routes>
      <div>Footer</div>
    </>
  );
}

export default App;
