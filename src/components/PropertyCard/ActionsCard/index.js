import { BiEdit } from 'react-icons/bi';
import {
  RiCloseCircleLine,
  RiDeleteBin6Line,
  RiUploadLine
} from 'react-icons/ri';
import { Wrapper } from './styles';

function ActionsCard({ active, id, handleChange }) {
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

  function handleButton(event) {
    console.log(event.target.id)
    if (event.target.id === 'close') {
      handleChange(id, {"active": false}, 'active')
    } else if (event.target.id === 'restore') {
      handleChange(id, {"active": true}, 'active')
    } else {
      handleChange(id)
    }
  }

  return (
    <Wrapper>
      {options.map((element) => {
        return (
          <div key={element.name} >
            {element.icon}
            <a id={element.name} onClick={handleButton}>{element.name}</a>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default ActionsCard;
