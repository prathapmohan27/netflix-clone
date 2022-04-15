import { Link } from 'react-router-dom';
import { imageUrl } from '../../helperFunction/tmdb';
import { SmallImgContainer, Img } from '../MovieContainerStyle';

interface propsInterface {
  url: string;
  id: number;
}
const SmallImg = ({ url, id }: propsInterface) => {
  return (
    <Link to={`/detail/${id}`}>
      <SmallImgContainer>
        <Img src={`${imageUrl}${url}`} alt="poster" />
      </SmallImgContainer>
    </Link>
  );
};

export default SmallImg;
