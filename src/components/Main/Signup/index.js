import SignupCard from '../../SignupCard';
import lanlord from '../../../assets/images/landlord.svg';
import homeSeeker from '../../../assets/images/homeSeeker.svg';
import { Wrapper } from './styles';
import { useState } from 'react';
import SignupForm from './SignupForm';
import { useAuth } from '../../../context/auth-context';
import { Navigate } from 'react-router-dom';

const roles = [
  {
    name: 'Landlord',
    description: 'You want to rent or sell a home',
    img: lanlord,
    value: 0,
  },
  {
    name: 'Home seeker',
    description: 'You want to find a home',
    img: homeSeeker,
    value: 1,
  },
];

function Signup() {
  const [role, setRole] = useState(false);
  const [userData, setUserData] = useState({
    role: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const { user } = useAuth();
  if (user) {
    return <Navigate to='/'/>;
  }

  function handleRole(value) {
    setRole(true);
    setUserData({
      ...userData,
      role: value,
    });
  }

  return (
    <div>
      {!role ? (
        <Wrapper>
          <div>
            <div className='title'>
              <h5>Selecciona el perfil con el que te identificas</h5>
              <h2>Que estas buscando?</h2>
            </div>
            <div className='cards'>
              {roles.map((role) => {
                return (
                  <SignupCard
                    key={role.name}
                    img={role.img}
                    name={role.name}
                    description={role.description}
                    onClick={() => handleRole(role.value)}
                  ></SignupCard>
                );
              })}
            </div>
          </div>
        </Wrapper>
      ) : (
        <SignupForm data={userData} />
      )}
    </div>
  );
}

export default Signup;
