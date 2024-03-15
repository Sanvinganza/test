import { useEffect } from "react";
import { IMovieTableItem } from "./types";

export const MovieTable = () => {
  const fetchMovieTableValue = async () => {
    return await fetch("https://moviesverse1.p.rapidapi.com/top-250-movies", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fbecf4a86amsh4ac072810f3a248p1ab803jsn504328d19225",
        "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
      },
    }).then((res) => res.json());
  };

  useEffect(() => {
    try {
      fetchMovieTableValue().then((res: IMovieTableItem[]) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <></>;
};
