/* eslint-disable react-hooks/exhaustive-deps */
import { Container, ButtonContainer, VideoContainer } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { MovieInfo } from '../helperFunction/tmdb';

//autoplay=1

interface propsInterface {
  movieId: number;
}

const Player = ({ movieId }: propsInterface) => {
  const [show, setShow] = useState<boolean>(true);
  const [bgImg, setBgImg] = useState<string>('');

  useEffect(() => {
    getBgImg();
  }, [movieId]);

  const showVideo = (): void => {
    setShow(!show);
  };

  const getBgImg = async () => {
    const data = await MovieInfo(movieId);
    setBgImg(data.backdrop_path);
  };
  // backdrop_path

  return (
    <Container url={`https://image.tmdb.org/t/p/original${bgImg}`}>
      <ButtonContainer show={show}>
        <button onClick={showVideo}>
          <FontAwesomeIcon icon={faCirclePlay} />
        </button>
      </ButtonContainer>
      <VideoContainer show={show}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RBumgq5yVrA?"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </Container>
  );
};

export default Player;
