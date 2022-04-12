/* eslint-disable react-hooks/exhaustive-deps */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getVideo } from '../helperFunction/tmdb';
import { Container, ButtonContainer, VideoContainer } from './PlayerStyle';

interface propsInterface {
  movieId: number;
  bg: string;
}
// 675353
const Player = ({ movieId, bg }: propsInterface) => {
  const [show, setShow] = useState<boolean>(true);
  const [trailer, setTrailer] = useState<any>([]);

  useEffect(() => {
    getTrailer();
    setShow(true);
  }, [movieId]);

  const showVideo = (): void => {
    if (trailer.length === 0) {
      alert('Trailer not available');
      return;
    }
    setShow(!show);
  };

  const getTrailer = async () => {
    const data = await getVideo(movieId);
    setTrailer(data);
  };

  return (
    <Container url={`https://image.tmdb.org/t/p/original${bg}`}>
      <ButtonContainer show={show}>
        <button onClick={showVideo} data-testid="playButton">
          <FontAwesomeIcon icon={faCirclePlay} />
        </button>
      </ButtonContainer>
      <VideoContainer
        data-testid="videoContainer"
        show={show}
        dangerouslySetInnerHTML={{ __html: `${trailer[0]}` }}
      ></VideoContainer>
    </Container>
  );
};

export default Player;
