import landingIlustration from '../../../assets/images/landingIlustration.svg';
import logo from '../../../assets/images/logo.svg';
import {
  Wrapper,
  WrapperFooter,
  WrapperHeader,
  WrapperMain,
  WrapperNav,
  WrapperProducts,
  WrapperSearch,
  WrapperSignup,
  WrapperTeam,
  WrapperUl
} from './styles';

function Landing() {
  return (
    <>
      <WrapperHeader>
        <WrapperNav>
          <img src={logo} alt="logo" />
          <WrapperUl>
            <li>Find a home</li>
            <li>Join</li>
            <li>Login</li>
          </WrapperUl>
        </WrapperNav>
      </WrapperHeader>
      <WrapperMain>
        <WrapperSearch>
          <img src={landingIlustration} alt="landing ilustration" />
          <img src={landingIlustration} alt="landing ilustration" />
          <div>
            <h1>Meet your new Home</h1>
            <p>The easiest way to find where you belong</p>
          </div>
        </WrapperSearch>
        <WrapperProducts></WrapperProducts>
        <WrapperSignup>
          <div>
            <h4>
              Getting someone to rent your apartment has never been this easy
            </h4>
          </div>
        </WrapperSignup>
        <WrapperTeam></WrapperTeam>
      </WrapperMain>
      <WrapperFooter></WrapperFooter>
    </>
  );
}

export default Landing;
