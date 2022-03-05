import React from "react";
import Hero from "../components/hero/Hero";
import { GetStaticPropsResult } from "next";

export interface ResponProps {
  data: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export interface GenresProps {
  genreData: {
    name: string;
    id: number;
  }[];
}
export type ColorfulCircle = GenresProps & ResponProps;

const index: React.FC<ColorfulCircle> = (props) => {
  console.log(props.data[0]);

  return (
    <div>
      <Hero data={props.data} genreData={props.genreData} />
    </div>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ColorfulCircle>
> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const result = await res.json();
  const data = result?.results;

  const genreRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  );
  const genreResult = await genreRes.json();
  const genreData = genreResult?.genres;

  return {
    props: {
      data,
      genreData,
    },
    revalidate: 10,
  };
}
export default index;
