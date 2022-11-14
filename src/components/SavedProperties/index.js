
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import Section from "../../containers/Section";
import { useAuth } from "../../context/auth-context";
import { getSavedProperties } from "../../services/homeseeker-services";
import { colors } from "../../styles/colors";
import Carousel from "../ListView/Carousel";
import { Option, OptionsWrapper, PropertiesFound } from "./styles";
import { ListViewWrapper } from "./styles";

// const slides = [[...cards], [...cards], [...cards]];
function SavedProperties() {
  let location = useLocation();
  let { status } = useParams();
  let param = !status ? 'favorites' : status;
  const { user } = useAuth();



    const [properties, setProperties] = useState([]);
    const [renderProperties, setRenderProperties] = useState([]);

    useEffect(() => {
      getSavedProperties()
        .then((data) => setProperties(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (param === 'favorites') {
          setRenderProperties( properties.filter((property) => property.favorite === true).map(property => property.property))
        } else {
          setRenderProperties( properties.filter((property) => property.contacted === true).map(property => property.property))
        };
      }, [properties, param]);

      useEffect(() => {
        getSavedProperties()
          .then((data) => setProperties(data))
          .catch((error) => console.log(error));
      }, []);

      
      if (!user || user.role === 'landlord') {
        return <Navigate to='/'/>;
      }

      let propertiesArray = [];
      function splitProperties() {
        let propertySplit = [];
        let i = 0;
        while (i < renderProperties.length) {
          propertySplit = [];
          for (let j = 0; j < 9; j++) {
            if (j < renderProperties.length && i < renderProperties.length) {
              propertySplit.push(renderProperties[i]);
              i++;
            }
          }
          propertiesArray.push(propertySplit);
        }
      }
      splitProperties();

    console.log(status)
  return (
    <Section>
      <ListViewWrapper>
        <OptionsWrapper>
          <Link to={`/savedproperties/favorites`} ><Option style={{color: `${
              location.pathname === '/savedproperties/favorites' || location.pathname === '/savedproperties' ? 
              colors.darkGray : colors.lightGray }`}}>Favorites</Option></Link>
          <Link to={`/savedproperties/contacted`} ><Option style={{color: `${
              location.pathname === '/savedproperties/contacted' ? colors.darkGray : colors.lightGray}`}}>Contacted</Option></Link>
        </OptionsWrapper>
        <PropertiesFound>{renderProperties.length} Properties found</PropertiesFound>
        <Carousel slides={propertiesArray} />
      </ListViewWrapper>
    </Section>
  );
}

export default SavedProperties;