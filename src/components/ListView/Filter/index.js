import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../../Button';
import Search from '../../Search';
import Select from '../../Select';
import ByPrice from './ByPrice';
import FilterModal from './FilterModal';
import { FilterButtons, FilterWrapper } from './styles';

const TYPE_OPERATION = [
  { value: 'sale & rent', label: 'Both' },
  { value: 'sale', label: 'Buying' },
  { value: 'rent', label: 'Renting' }
];

function Filter({ properties }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <FilterWrapper>
      <Search />
      <FilterButtons>
        <Button size='default' type='primary' value='price' />
        <Button size='default' type='primary' value='property type' />
        <Button size='default' type='primary' value='beds & baths' />
        <Button
          size='default'
          type='primary'
          value='More'
          icon={<IoIosArrowDown size={24} />}
        />
        {isOpen && (
          <FilterModal>
            <ByPrice />
          </FilterModal>
        )}
      </FilterButtons>
      <Select options={TYPE_OPERATION} />
    </FilterWrapper>
  );
}

export default Filter;
