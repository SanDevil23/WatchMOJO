import responseHandler from "../handlers/response.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import userModel from "../models/userModel.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddlerware from "../middlewares/token.middleware.js";

const getGenres = async (req, res) => {
    try {
      const { media } = req.params;
  
      const response = await tmdbApi.mediaGenres({ media });
  
      return responseHandler.ok(res, response);
    } catch {
      responseHandler.error(res);
    }
  };


