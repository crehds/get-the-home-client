import { RiUserReceived2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { ActionsWrapper } from './styles';

function Actions() {
  return (
    <ActionsWrapper>
      <div>
        <p>Log in or Join to contact the advertiser</p>
        <Link to={'/login'}><Button
          size='small'
          type='primary'
          value='login'
          icon={<RiUserReceived2Line size={24} />}
        /></Link>
      </div>
    </ActionsWrapper>
  );
}

export default Actions;
