import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const PlacesContext = createContext();

function PlacesProvider({ children }) {
  const [googleAPI, setGoogleAPI] = useState(null);
  const loader = new Loader({
    apiKey: 'AIzaSyAWknVh_Fg0GBYYAjcDXsPjTZPnCEV8nJ4',
    version: 'weekly',
    libraries: ['places']
  });

  const handleLoader = async () => {
    const google = await loader.load();
    return setGoogleAPI(google);
  };

  useEffect(() => {
    handleLoader();
  }, []);

  return (
    <PlacesContext.Provider value={{ googleAPI }}>
      {children}
    </PlacesContext.Provider>
  );
}

function usePlaces() {
  return useContext(PlacesContext);
}

export { PlacesProvider, usePlaces };
