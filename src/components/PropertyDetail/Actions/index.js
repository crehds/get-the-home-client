import { RiUserReceived2Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/auth-context';
import Button from '../../Button';
import { ActionsWrapper } from './styles';
import { createSavedProperty } from '../../../services/homeseeker-services';
import { useState } from 'react';

function Actions() {
  const [showInfo, setShowInfo] = useState(false);
  const { user } = useAuth();
  let { id } = useParams();

  function handleContacted () {
    createSavedProperty({"property_id": id, "contacted": true}).then(console.log).catch(console.log)
    setShowInfo(true)
  }

  function handleFavorite() {
    createSavedProperty({"property_id": id, "favorite": true}).then(console.log).catch(console.log)
  }
  return (
    <ActionsWrapper>
      <div>
        {(user && user.role === "homeseeker") ?
          (showInfo === false) ? 
            <><Button
            size='small'
            type='primary'
            value='contact advertiser'
            onClick={handleContacted} />
            <FiHeart size={24} />
            <a onClick={handleFavorite}> Add to favorites</a></> : 
            <><p>Contact Information</p>
            <p>Email</p> 
            <p>{user.email}</p>
            <p>Phone</p> 
            <p>{user.phone}</p></> 
          : <><p>Log in or Join to contact the advertiser</p>
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
