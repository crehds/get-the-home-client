import { Img, Wrapper } from './styles';
import PropTypes from 'prop-types';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

function DeveloperCard({ avatar, name, githubLink, linkedinLink }) {
  return (
    <Wrapper>
      <Img src={avatar}></Img>
      <p>{name}</p>
      <div>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <AiFillGithub size={'2rem'}></AiFillGithub>
        </a>
        <a href={linkedinLink} target="_blank" rel="noreferrer">
          <AiOutlineLinkedin size={'2rem'}></AiOutlineLinkedin>
        </a>
      </div>
    </Wrapper>
  );
}

DeveloperCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  githubLink: PropTypes.string,
  linkedinLink: PropTypes.string
};

export default DeveloperCard;
