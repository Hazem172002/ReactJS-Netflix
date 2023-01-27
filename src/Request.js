const key='ef14cbad873b9523a000ee8fcc3f5241';
const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    upComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};
export default requests