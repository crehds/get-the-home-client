import { cloneElement, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '../../Button';
import Search from '../../Search';
import Select from '../../Select';
import ByPrice from './ByPrice';
import ByPropertyType from './ByPropertyType';
import BySpaces from './BySpaces';
import FilterModal from './FilterModal';
import More from './More';
import { FilterButtons, FilterWrapper } from './styles';

const TYPE_OPERATION = [
  { value: 'sale & rent', label: 'Both' },
  { value: 'sale', label: 'Buying' },
  { value: 'rent', label: 'Renting' },
];

const MODALS = {
  price: <ByPrice />,
  'property type': <ByPropertyType />,
  'beds & baths': <BySpaces />,
  more: <More />,
};

function handleModal(modal, handler, values, setIsOpen) {
  return cloneElement(MODALS[modal], { onChange: handler, values: values, setIsOpen: setIsOpen });
}

function Filter({ handler, values }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState('price');
  const [posX, setPosX] = useState(null);

  const handleButton = (e) => {
    const text = e.currentTarget.textContent;
    if (text === modal) return setIsOpen(!isOpen);
    const buttonContainer = document.getElementById('filter-buttons');
    const newPosX =
      e.currentTarget.offsetLeft - buttonContainer.offsetWidth / 16;
    setPosX(`${newPosX}px`);
    setIsOpen(true);
    setModal(e.currentTarget.textContent);
  };

  useEffect(() => {
    const buttonContainer = document.getElementById('filter-buttons');
    setPosX(`${buttonContainer.offsetLeft / 2.8}px`);
  }, []);

  function handleQuery(event) {

    handler((values) => ({
      ...values,
      searchQuery: event.target.value
    }));
  }

  return (
    <FilterWrapper>
      <Search  handleChange={handleQuery}/>
      <FilterButtons id='filter-buttons'>
        <Button
          size='default'
          type='primary'
          value='price'
          onClick={handleButton}
        />
        <Button
          size='default'
          type='primary'
          value='property type'
          onClick={handleButton}
        />
        <Button
          size='default'
          type='primary'
          value='beds & baths'
          onClick={handleButton}
        />
        <Button
          size='default'
          type='primary'
          value='more'
          icon={<IoIosArrowDown size={24} />}
          onClick={handleButton}
          sideIcon='right'
        />
        {isOpen && (
          <FilterModal posX={posX || '0'}>
            {handleModal(modal, handler, values, setIsOpen)}
          </FilterModal>
        )}
      </FilterButtons>
      <Select options={TYPE_OPERATION} handleChange={handler} values={values}/>
    </FilterWrapper>
  );
}

export default Filter;
