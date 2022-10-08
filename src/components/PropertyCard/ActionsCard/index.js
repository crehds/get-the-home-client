import { BiEdit } from 'react-icons/bi';
import {
  RiCloseCircleLine,
  RiDeleteBin6Line,
  RiUploadLine
} from 'react-icons/ri';
import { Wrapper } from './styles';

function ActionsCard({ active }) {
  const options =
    active === true
      ? [
          { name: 'edit', icon: <BiEdit size="1.8rem" /> },
          { name: 'close', icon: <RiCloseCircleLine size="2rem" /> }
        ]
      : [
          { name: 'restore', icon: <RiUploadLine size="1.8rem" /> },
          { name: 'delete', icon: <RiDeleteBin6Line size="2rem" /> }
        ];

  return (
    <Wrapper>
      {options.map((element) => {
        return (
          <div key={element.name}>
            {element.icon}
            <p>{element.name}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ActionsCard;
