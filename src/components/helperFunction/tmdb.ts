const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=6c853d9d4848f8bd909aec2f83847f8b';

export const imageUrl = 'https://image.tmdb.org/t/p/w500';

export interface linksInterface {
  trending: string;
  netflix: string;
  action: string;
  documentaries: string;
  romance: string;
  horror: string;
  movie: string;
  tv: string;
}

export const links: linksInterface = {
  trending: `${base_url}trending/all/day?${api_key}`,
  netflix: `${base_url}discover/movie?${api_key}&with_networks=213`,
  action: `${base_url}discover/movie?${api_key}&with_genres=28`,
  documentaries: `${base_url}discover/movie?${api_key}&with_genres=99`,
  romance: `${base_url}discover/movie?${api_key}&with_genres=10749`,
  horror: `${base_url}discover/movie?${api_key}&with_genres=27`,
  movie: `${base_url}discover/movie?${api_key}`,
  tv: `${base_url}discover/movie?${api_key}`,
};

// get based on genre
export const getData = async (str: string) => {
  try {
    const response = await fetch(str, { mode: 'cors' });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// get single from trending
export const getSingleMovie = async () => {
  const movieData = await getData(links.trending);
  const obj = movieData[Math.floor(Math.random() * movieData.length)];
  return obj;
};

//get similar movie
export const similarMovie = async (id: number) => {
  try {
    const response = await fetch(`${base_url}movie/${id}/similar?${api_key}`, {
      mode: 'cors',
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// get movie info for detail component
export const MovieInfo = async (id: number) => {
  console.log('id=>', id);
  try {
    const response = await fetch(`${base_url}movie/${id}?${api_key}`, {
      mode: 'cors',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideo = async (id: number) => {
  try {
    const response = await fetch(`${base_url}movie/${id}/videos?${api_key}`, {
      mode: 'cors',
    });
    const data = await response.json();
    let trailers: any[] = [];
    data.results.forEach((obj: any) => {
      if (obj.site === 'YouTube') {
        trailers.push(
          `<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${obj.key}"
          title="YouTube video player"
          frameBorder='0'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
         `
        );
      }
    });
    return trailers;
  } catch (error) {
    console.log(error);
  }
};
