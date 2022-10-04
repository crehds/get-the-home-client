import { Img, Wrapper } from "./styles";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

function DeveloperCard({ href }) {
  return (
    <Wrapper>
      <Img src="https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg"></Img>
      <p>Ruby Ramirez</p>
      <div>
        <a href={href} target="blank">
          <AiFillGithub size={"1.25rem"}></AiFillGithub>
        </a>
        <a href={href} target="blank">
          <AiOutlineLinkedin size={"1.25rem"}></AiOutlineLinkedin>
        </a>
      </div>
    </Wrapper>
  );
}

export default DeveloperCard;
