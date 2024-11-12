export const exerciseoptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeoptions = {
  method: 'GET',
 
  
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'x-rapidapi-key': '27dff25e88mshca78f3bcb97d42bp11f2a1jsndbdb05666203',
//     'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//   }
// }