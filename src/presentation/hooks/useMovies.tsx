import React, { useEffect, useState } from 'react'
import type{ Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

   useEffect(() => {
    
    initialLoad();
     
     
   }, [])

   const initialLoad = async() => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher)
   }
   


  return {}
}

export default useMovies
