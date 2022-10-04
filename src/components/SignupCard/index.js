import { Wrapper } from './styles';

function SignupCard({ img, name, description }) {
  return (
    <Wrapper>
      <img src={img} alt={`${name}-img`} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
}

export default SignupCard;
