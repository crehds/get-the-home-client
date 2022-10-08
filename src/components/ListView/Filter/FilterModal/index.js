import { Wrapper } from './styles';

function FilterModal({ children, posX }) {
  return <Wrapper theme={{ posX }}>{children}</Wrapper>;
}

export default FilterModal;
