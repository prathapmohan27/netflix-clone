const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=6c853d9d4848f8bd909aec2f83847f8b';

export const baseUrl = 'https://image.tmdb.org/t/p/w500';

export interface linksInterface {
  trending: string;
  netflix: string;
  action: string;
  documentaries: string;
  romance: string;
  horror: string;
}

export const links: linksInterface = {
  trending: `${base_url}trending/all/day?${api_key}`,
  netflix: `${base_url}discover/movie?${api_key}&with_networks=213`,
  action: `${base_url}discover/movie?${api_key}&with_genres=28`,
  documentaries: `${base_url}discover/movie?${api_key}&with_genres=99`,
  romance: `${base_url}discover/movie?${api_key}&with_genres=10749`,
  horror: `${base_url}discover/movie?${api_key}&with_genres=27`,
};

export const getData = async (str: string) => {
  try {
    const response = await fetch(str, { mode: 'cors' });
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMovie = async () => {
  const movieData = await getData(links.trending);
  const obj = movieData[Math.floor(Math.random() * movieData.length - 1)];
  console.log(obj);
  return obj;
};
