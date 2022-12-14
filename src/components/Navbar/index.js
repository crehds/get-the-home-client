import { BiSearch } from 'react-icons/bi';
import {
  RiUserAddLine,
  RiUserReceived2Line,
  RiUserLine,
  RiHome8Line
} from 'react-icons/ri';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import Button from '../Button';
import { WrapperHeader, WrapperNav, WrapperUl } from './styles';
import logo from '../../assets/images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

function Navbar() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout()
  }
  return (
    <WrapperHeader>
      <WrapperNav>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        {!user ? (
          <WrapperUl>
            <Link to='/list-view'>
              <Button
                size='default'
                type='ghost'
                value={'Find a home'}
                icon={<BiSearch size='2.1rem' />}
              />
            </Link>
            <Link to='/signup'>
              <Button
                size='default'
                type='secondary'
                value={'Join'}
                icon={<RiUserAddLine size='2rem' />}
              />
            </Link>
            <Link to='/login'>
              <Button
                size='default'
                type='primary'
                value={'Login'}
                icon={<RiUserReceived2Line size='2rem' />}
              />
            </Link>
          </WrapperUl>
        ) : (
          <WrapperUl>
            <div>
            <Link to='/list-view'><Button
                size='default'
                type='ghost'
                value={'Find a home'}
                icon={<BiSearch size='2.1rem' />}
              /></Link>
            </div>
            <Button
              size='default'
              type='secondary'
              value={'Logout'}
              icon={<BiLogOutCircle size='2rem' />}
              onClick={handleLogout}
            />
            {user.role === 'homeseeker' ? (
              <Link to='/savedproperties'><Button
                size='default'
                type='primary'
                value={'Saved Properties'}
                icon={<AiFillHeart size='2rem' />}
              /></Link>
            ) : (
              <Link to='/myproperties'><Button
                size='default'
                type='primary'
                value={'My Properties'}
                icon={<RiHome8Line size='2rem' />}
              /></Link>
            )}
            <Link to='/profile'><Button
              size='default'
              type='primary'
              value={'Profile'}
              icon={<RiUserLine size='2rem' />}
            /></Link>
          </WrapperUl>
        )}
      </WrapperNav>
    </WrapperHeader>
  );
}

export default Navbar;
