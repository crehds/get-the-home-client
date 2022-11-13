
import { useEffect, useState } from "react";
import { BiWindows } from "react-icons/bi";
import { Link, useLocation, useParams } from "react-router-dom";
import Section from "../../containers/Section";
import { getProperties } from "../../services/landlord-services";
import { colors } from "../../styles/colors";
import Carousel from "../ListView/Carousel";
import { Option, OptionsWrapper, PropertiesFound } from "./styles";
import { ListViewWrapper } from "./styles";

// const slides = [[...cards], [...cards], [...cards]];
function MyProperties() {
  let location = useLocation();
  let { status } = useParams();
  let param = !status ? 'active' : status;

    const [properties, setProperties] = useState([]);
    const [renderProperties, setRenderProperties] = useState([]);

    useEffect(() => {
      getProperties()
        .then((data) => setProperties(data))
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
      
        if (param === "active") {
          setRenderProperties( properties.filter((property) => property.active === true))
        } else {
          setRenderProperties( properties.filter((property) => property.active === false))
        };
      }, [properties, param]);

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

  return (
    <Section>
      <ListViewWrapper>
        <OptionsWrapper>
          <Link to={`/myproperties/active`} ><Option style={{color: `${
              location.pathname === '/myproperties/active'  || location.pathname === '/myproperties'? 
              colors.darkGray : colors.lightGray }`}}>Active</Option></Link>
          <Link to={`/myproperties/closed`} ><Option style={{color: `${
              location.pathname === '/myproperties/closed' ? colors.darkGray : colors.lightGray}`}}>Closed</Option></Link>
        </OptionsWrapper>
        <PropertiesFound>{renderProperties.length} Properties found</PropertiesFound>
        <Carousel slides={propertiesArray} handleChange={setRenderProperties} properties={renderProperties}/>
      </ListViewWrapper>
    </Section>
  );
}

export default MyProperties;