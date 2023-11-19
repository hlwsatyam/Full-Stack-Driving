const {
  Top_Player,
  UserWithRatingHistory,
  Top_50_Player,
} = require("../Controllers/ChessControllers");

const ChessRouter = require("express").Router();

ChessRouter.get("/top-players", Top_Player);
ChessRouter.get("/player/:username/rating-history", UserWithRatingHistory);
// top 50 player router
ChessRouter.get("/top-50-players/:player", Top_50_Player);
module.exports = { ChessRouter };
