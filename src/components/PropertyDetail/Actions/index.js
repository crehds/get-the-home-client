import { RiUserReceived2Line } from 'react-icons/ri';
import Button from '../../Button';
import { ActionsWrapper } from './styles';

function Actions() {
  return (
    <ActionsWrapper>
      <div>
        <p>Log in or Join to contact the advertiser</p>
        <Button
          size='small'
          type='primary'
          value='login'
          icon={<RiUserReceived2Line size={24} />}
        />
      </div>
    </ActionsWrapper>
  );
}

export default Actions;
