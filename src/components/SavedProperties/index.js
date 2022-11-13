
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Section from "../../containers/Section";
import { getSavedProperties } from "../../services/homeseeker-services";
import { colors } from "../../styles/colors";
import Carousel from "../ListView/Carousel";
import { Option, OptionsWrapper, PropertiesFound } from "./styles";
import { ListViewWrapper } from "./styles";

// const slides = [[...cards], [...cards], [...cards]];
function SavedProperties() {
  let location = useLocation();
  let { attribute } = useParams();
  let param = !attribute ? 'favorites' : attribute;

    const [properties, setProperties] = useState([]);
    const [renderProperties, setRenderProperties] = useState([]);

    useEffect(() => {
      getSavedProperties()
        .then((data) => setProperties(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (param === 'favorites') {
          setRenderProperties( properties.filter((property) => property.favorite == true).map(property => property.property))
        } else {
          setRenderProperties( properties.filter((property) => property.contacted == true).map(property => property.property))
        };
      }, [properties, param]);

      useEffect(() => {
        getSavedProperties()
          .then((data) => setProperties(data))
          .catch((error) => console.log(error));
      }, []);

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

    console.log(properties.filter((property) => property.contacted == true))
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