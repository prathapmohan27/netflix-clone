import { ImgContainer, Img } from './MovieContainerStyle';
import { baseUrl } from '../helperFunction/tmdb';
interface propsInterface {
  url: string;
}
const LargeImg = ({ url }: propsInterface) => {
  return (
    <ImgContainer>
      <Img src={`${baseUrl}${url}`} alt="poster" />
    </ImgContainer>
  );
};

export default LargeImg;
