export type IMovie = {
  id: number;
  title: string;
  describe: string;
};

export const Movies = ({ movies }: { movies: IMovie[] }) => {
  return (
    <>
      <h1>Films :</h1>
      <br />
      <ul>
        {movies?.map((movie: IMovie, i: number) => (
          <ol key={i}>
            <h2>{movie.title}</h2>
            <h4>{movie.describe}</h4>
          </ol>
        ))}
      </ul>
    </>
  );
};
