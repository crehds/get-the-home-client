import { BiCopyright } from 'react-icons/bi';
import { AiFillHeart, AiFillGithub } from 'react-icons/ai';
import { WrapperAbout, WrapperFooter, WrapperTeam } from './styles';
import logo from '../../assets/images/logo.svg';
import dataTeam from '../Main/Landing/dataTeam';
import SourceCode from './WrapperSourceCode';
import { useLocation } from 'react-router-dom';
import { colors } from '../../styles/colors';

function Footer() {
  const { pathname } = useLocation();

  return (
    <WrapperFooter>
      {pathname === '/' ? (
        <div className="landing">
          <div className="copyRight">
            <BiCopyright size="1.5rem" />
            <p>2022 - Find That Home</p>
          </div>
          <SourceCode pathname={pathname} />
          <p>Codeable - Cohort 7 Final Project</p>
        </div>
      ) : (
        <div className="otherPages">
          <WrapperAbout>
            <img src={logo} alt="logo" />
            <div>
              <div className="copyRight">
                <BiCopyright size="1.5rem" />
                <p>2022 - Find That Home</p>
              </div>
              <p>Codeable - Cohort 7 Final Project</p>
            </div>
          </WrapperAbout>
          <WrapperTeam>
            <p>
              Build with <AiFillHeart size="1.3rem" color={colors.darkPink} />{' '}
              by:
            </p>
            <div>
              {dataTeam.map((developer) => (
                <div key={developer.name}>
                  <AiFillGithub size="1.6rem" />
                  <p>{developer.name}</p>
                </div>
              ))}
            </div>
          </WrapperTeam>
          <SourceCode pathname={pathname} />
        </div>
      )}
    </WrapperFooter>
  );
}

export default Footer;
