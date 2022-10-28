import { CaptionText, InputWrapper } from './styles';
import { RiUploadLine } from 'react-icons/ri';

function UploadImage({
  labelValue,
  captionText,
  name,
  handleChange,
  setPreview
}) {
  const saveImages = (files) => {
    files.forEach((file) => {
      let reader = new FileReader();
      let image = new Image();
      reader.readAsDataURL(file);
      reader.onload = () => {
        image.src = reader.result;
        setPreview((prevState) => [...prevState, image]);
      };
    });
    handleChange(name, files);
  };

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
          accept='image/jpg, image/jpeg, image/png'
          name={name}
          onChange={(e) => saveImages([...e.target.files])}
        />
      </div>
      {captionText && <CaptionText>{captionText}</CaptionText>}
    </InputWrapper>
  );
}

export default UploadImage;
