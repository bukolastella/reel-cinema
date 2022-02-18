import React from "react";
import Hero from "../components/hero/Hero";
import { GetStaticPropsResult } from "next";

export interface ResponProps {
  data: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Number[];
    id: Number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: Number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: Number;
    vote_count: Number;
  }[];
}

const index = (props: ResponProps) => {
  console.log(props.data[0]);
  return (
    <div>
      <Hero data={props.data} />
    </div>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ResponProps>
> {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e2f2461a7e6d96df9ee72e2d06a514c0&language=en-US&page=1"
  );
  const result = await res.json();
  const data = result.results;

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
export default index;
