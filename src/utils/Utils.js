export const filterSearchMovie = (movies, query) => {
   return movies.filter((movie) => {
    const nameRu = String(movie.nameRU).toLowerCase();
    const nameEn = String(movie.nameEN).toLowerCase();
    const userMovie = query.toLowerCase();
    return nameRu.indexOf(userMovie) !== -1 || nameEn.indexOf(userMovie) !== -1;
  });
};

export const filterShortCheckbox = (movies) => {
  return Array.isArray(movies)
    ? movies.filter((movie) => movie.duration < 40)
    : null;
};

export const getSavedMovie = (arr, movie) => {
  return arr.find((item) => {
    return item.movieId === movie.id;
  });
};