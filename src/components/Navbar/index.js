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

function Navbar({ user }) {
  return (
    <WrapperHeader>
      <WrapperNav>
        <img src={logo} alt="logo" />
        {!user ? (
          <WrapperUl>
            <div>
              <Button size="default" type="ghost">
                <BiSearch size="2.1rem" />
                Find a home
              </Button>
            </div>
            <Button size="default" type="secondary">
              <RiUserAddLine size="2rem" />
              Join
            </Button>
            <Button size="default" type="primary">
              <RiUserReceived2Line size="2rem" />
              Login
            </Button>
          </WrapperUl>
        ) : (
          <WrapperUl>
            <div>
              <Button size="default" type="ghost">
                <BiSearch size="2.1rem" />
                Find a home
              </Button>
            </div>
            <Button size="default" type="secondary">
              <BiLogOutCircle size="2rem" />
              Logout
            </Button>
            {user.role === 'seeker' ? (
              <Button size="default" type="primary">
                <AiFillHeart size="2rem" />
                Saved Properties
              </Button>
            ) : (
              <Button size="default" type="primary">
                <RiHome8Line size="2rem" />
                My Properties
              </Button>
            )}
            <Button size="default" type="primary">
              <RiUserLine size="2rem" />
              Profile
            </Button>
          </WrapperUl>
        )}
      </WrapperNav>
    </WrapperHeader>
  );
}

export default Navbar;
