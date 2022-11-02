import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function SignupCard({ img, name, description, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <img src={img} alt={`${name}-img`} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
}
SignupCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default SignupCard;
