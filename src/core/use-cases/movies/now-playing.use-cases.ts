import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponses } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {

        const nowPlaying = await fetcher.get<NowPlayingResponses>('/now_playing');
        console.log({nowPlaying});

        return[];
        
    } catch (error) {
        console.log (error);
        throw Error ('Error fetching movies -NowPlaying');
        
    }
}