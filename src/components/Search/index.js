import { BiSearch } from 'react-icons/bi';
import CreateSelect from 'react-select';
import { colors } from '../../styles/colors';
import { searchStyles, SearchWrapper } from './styles';

function Search({ options = [], placeholder = 'Search...' }) {
  return (
    <SearchWrapper>
      {/* //todo  icon should be a child of select  */}
      <BiSearch
        size={20}
        color={colors.lightGray}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: '1rem',
          left: '0.8rem'
        }}
      />
      <CreateSelect
        options={options}
        styles={searchStyles}
        isClearable
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
}

export default Search;
