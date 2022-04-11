import { Link } from 'react-router-dom';

import { ImgContainer, Img } from './MovieContainerStyle';
import { imageUrl } from '../helperFunction/tmdb';
interface propsInterface {
  url: string;
  id: number;
}
const LargeImg = ({ url, id }: propsInterface) => {
  return (
    <Link to={`/detail/${id}`}>
      <ImgContainer>
        <Img src={`${imageUrl}${url}`} alt="poster" />
      </ImgContainer>
    </Link>
  );
};

export default LargeImg;
