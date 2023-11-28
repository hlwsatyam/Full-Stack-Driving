const {
  Top_Player,
  UserWithRatingHistory,
  Top_50_Player,
  Top_50_PlayerStoringDB,
} = require("../Controllers/ChessControllers");

const ChessRouter = require("express").Router();

// GET /500 top-players
ChessRouter.get("/top-players", Top_Player);

// GET /player/{username}/rating-history with 30days old data
ChessRouter.get("/player/:username/rating-history", UserWithRatingHistory);

// top 50 player router{Frontend Req}
ChessRouter.get("/top-50-players/:player", Top_50_Player);

// store the username and rating
ChessRouter.get("/top-50-playersdbstore", Top_50_PlayerStoringDB);

module.exports = { ChessRouter };
