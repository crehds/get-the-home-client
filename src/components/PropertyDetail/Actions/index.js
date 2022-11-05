import { RiUserReceived2Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth-context';
import Button from '../../Button';
import { ActionsWrapper } from './styles';

function Actions() {
  const { user } = useAuth();
  console.log("hola", user)
  return (
    <ActionsWrapper>
      <div>
        {(user && user.role === "homeseeker") ?
        <><Button
        size='small'
        type='primary'
        value='contact advertiser'
        />
        <FiHeart size={24} /></> : 
        <><p>Log in or Join to contact the advertiser</p>
        <Link to={'/login'}><Button
          size='small'
          type='primary'
          value='login'
          icon={<RiUserReceived2Line size={24} />}
        /></Link></>}

      </div>
    </ActionsWrapper>
  );
}

export default Actions;
