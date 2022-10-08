import SignupCard from '../../SignupCard';
import lanlord from '../../../assets/images/landlord.svg';
import homeSeeker from '../../../assets/images/homeSeeker.svg';
import { Wrapper } from './styles';

const roles = [
  {
    name: 'Landlord',
    description: 'You want to rent or sell a home',
    img: lanlord
  },
  {
    name: 'Home seeker',
    description: 'You want to find a home',
    img: homeSeeker
  }
];

function Signup() {
  return (
    <Wrapper>
      <div>
        <div className="title">
          <h5>Selecciona el perfil con el que te identificas</h5>
          <h2>Que estas buscando?</h2>
        </div>
        <div className="cards">
          {roles.map((role) => {
            return (
              <SignupCard
                key={role.name}
                img={role.img}
                name={role.name}
                description={role.description}
              ></SignupCard>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Signup;
