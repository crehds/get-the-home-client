import { CaptionText, InputWrapper } from './styles';
import { RiUploadLine } from 'react-icons/ri';

function UploadImage({ labelValue, captionText }) {
  return (
    <InputWrapper>
      {labelValue && <label htmlFor='upload-file'>{labelValue}</label>}
      <div>
        <RiUploadLine
          color='white'
          size={20}
          style={{ position: 'absolute', top: '8px', left: '8px' }}
        />
        <input
          id='upload-file'
          type='file'
          multiple
          accept='.jpg, jpeg, .png'
        />
      </div>
      {captionText && <CaptionText>{captionText}</CaptionText>}
    </InputWrapper>
  );
}

export default UploadImage;
