import axiosClient from "../axios/axios.client";
import tmdbEndpoints from "./tmdb.endpoints";


const tmdbApi =  {
    genres :  async({media}) => axiosClient.get(tmdbEndpoints.genres({media})),
    images : async({media, mediaID}) => axiosClient.get(tmdbEndpoints.images(media, mediaID))
}

export default tmdbApi