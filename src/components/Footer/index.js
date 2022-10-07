import { BiCopyright } from 'react-icons/bi';
import { AiFillHeart, AiFillGithub } from 'react-icons/ai';
import { WrapperAbout, WrapperFooter, WrapperTeam } from './styles';
import logo from '../../assets/images/logo.svg';
import dataTeam from '../Main/Landing/dataTeam';
import SourceCode from './WrapperSourceCode';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <WrapperFooter>
      <div>
        <div className="copyRight">
          <BiCopyright size="1.5rem" />
          <p>2022 - Find That Home</p>
        </div>
        <SourceCode />

        <p>Codeable - Cohort 7 Final Project</p>
      </div>

      <div>
        <WrapperAbout>
          <img src={logo} alt="logo" />
          <div className="copyRight">
            <BiCopyright size="1.5rem" />
            <p>2022 - Find That Home</p>
          </div>
          <p>Codeable - Cohort 7 Final Project</p>
        </WrapperAbout>
        <WrapperTeam>
          <p>
            Build with <AiFillHeart size="0.2rem" /> by:
          </p>
          <div>
            {dataTeam.map((developer) => (
              <div key={developer.name}>
                <AiFillGithub />
                <p>{developer.name}</p>
              </div>
            ))}
          </div>
        </WrapperTeam>
        <SourceCode />
      </div>
    </WrapperFooter>
  );
}

export default Footer;
