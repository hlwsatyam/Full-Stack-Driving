const Top_Player = async (req, res, next) => {
  try {
    const response = await fetch(
      "https://lichess.org/api/player/top/500/classical"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
};
const Top_50_Player = async (req, res, next) => {
  const player = req.params.player;
  try {
    const response = await fetch(
      `https://lichess.org/api/player/top/50/${player}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
};

const UserWithRatingHistory = async (req, res, next) => {
  const username = req.params.username;
  try {
    const response = await fetch(
      `https://lichess.org/api/user/${username}/rating-history`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const ChessPlayersData = await response.json();

    res.send(ChessPlayersData);
  } catch (error) {
    next(error);
  }
};

module.exports = { Top_Player, UserWithRatingHistory, Top_50_Player };
