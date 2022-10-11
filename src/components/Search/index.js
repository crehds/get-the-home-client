import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useAuth } from '../../context/auth-context';
import { usePlaces } from '../../context/places-context';
// import CreateSelect, { components } from 'react-select';
import { colors } from '../../styles/colors';
import { SearchLabel, SearchWrapper } from './styles';
import './styles.css';

function Search({
  label,
  options = [],
  placeholder = 'Search...',
  name,
  handleChange,
  setFieldValue,
  value
}) {
  // const Input = ({ ...props }) => <components.Input {...props} ref={useRef} />;
  const { googleAPI } = usePlaces();

  const autoComplete = useRef();
  const inputRef = useRef();
  const mapOptions = {
    componentRestrictions: { country: 'pe' },
    fields: ['address_components', 'geometry', 'icon', 'name'],
    types: ['establishment']
  };
  useEffect(() => {
    if (googleAPI) {
      autoComplete.current = new googleAPI.maps.places.Autocomplete(
        inputRef.current,
        mapOptions
      );
      autoComplete.current.addListener('place_changed', async function () {
        const place = await autoComplete.current.getPlace();
        setFieldValue('address', place.name);
      });
    }
  }, [googleAPI]);

  return (
    <SearchWrapper>
      {label && <SearchLabel htmlFor='search-address'>{label}</SearchLabel>}
      {/* //todo  icon should be a child of select  */}
      <BiSearch
        size={20}
        color={colors.lightGray}
        style={{
          position: 'absolute',
          zIndex: 10,
          bottom: '1rem',
          left: '0.8rem'
        }}
      />
      {/* //*Code for migrate to react-select */}
      {/* <CreateSelect
        options={options}
        styles={searchStyles}
        isClearable
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Input }}
      /> */}
      <input
        id='search-address'
        type='text'
        ref={inputRef}
        name={name}
        onChange={handleChange}
      />
    </SearchWrapper>
  );
}

export default Search;
