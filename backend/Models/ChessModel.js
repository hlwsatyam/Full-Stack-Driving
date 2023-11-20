const { default: mongoose } = require("mongoose");

const chessSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  rating: {
    type: String,
    required: true,
  },
});

const ChessrModel = mongoose.model("chess", chessSchema);
module.exports = { ChessrModel };
