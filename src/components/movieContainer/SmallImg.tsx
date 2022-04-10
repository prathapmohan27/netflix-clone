import { SmallImgContainer, Img } from './MovieContainerStyle';
import { baseUrl } from '../helperFunction/tmdb';
interface propsInterface {
  url: string;
}
const SmallImg = ({ url }: propsInterface) => {
  return (
    <SmallImgContainer>
      <Img src={`${baseUrl}${url}`} alt="poster" />
    </SmallImgContainer>
  );
};

export default SmallImg;
