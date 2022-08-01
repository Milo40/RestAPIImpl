import router from "express";
const playerRouter = router.Router();
import chalk from "chalk";
import stringify from "json-stringify-safe";
import {
  fetch_all_players,
  add_player,
  fetch_player,
  del_player,
  update_player,
} from "../controllers/player.js";

// Fetch ALL Players
playerRouter.get("/all", fetch_all_players, (req, res) => {});

//Add an Player
playerRouter.post("/add", add_player, (req, res) => {});

// Fetch AN Player
playerRouter.get("/:id", fetch_player, (req, res) => {});

// Delete an Player
playerRouter.delete("/:id", del_player, (req, res) => {});

// Update an Player
playerRouter.put("/update/:id", update_player, (req, res) => {});

export { playerRouter };
