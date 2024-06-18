import tmdbConfig from "./tmdb.config";

const TmdbEndpoints = {
    genres: ({media}) => tmdbConfig.getUrl(`genre/${media}/list`),
    images: ({media, mediaID}) => tmdbConfig.getUrl(`${media}/${mediaID}/images`),
} 


export default TmdbEndpoints;
