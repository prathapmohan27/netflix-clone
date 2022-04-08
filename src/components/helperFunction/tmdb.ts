const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=6c853d9d4848f8bd909aec2f83847f8b';

export const links = {
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
    const trending = await response.json();
    console.log(trending);
  } catch (error) {
    console.log(error);
  }
};
