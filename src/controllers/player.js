import { PlayerModel } from "../models/player.js";
import chalk from "chalk";
import stringify from "json-stringify-safe";
import bcrypt from "bcrypt";

const fetch_all_players = (req, res) => {
  PlayerModel.find()
    .then((plays) => {
      res.json(plays),
        console.log(chalk.cyan("[i] GET -> [/player/all] -> *Players"));
    })
    .catch((err) => {
      res.status(400).json("error : " + err),
        console.log(chalk.yellow("[i] GET -> [/player/all] -> FAILED"));
    });
};

const add_player = (req, res) => {
  const uname = req.body.username;
  const avatar = req.body.avatar;
  const mail = req.body.email;
  const phone = req.body.telephone;
  const pwd = bcrypt.hashSync(req.body.password, 10);

  const newPlayer = new PlayerModel({
    uname,
    avatar,
    mail,
    phone,
    pwd,
  });

  newPlayer
    .save()
    .then(() => {
      res.json({ info: "[OK] Player Added." }),
        console.log(chalk.cyan("[i] POST -> [/player/add] -> Added a Player"));
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(chalk.yellow("[i] POST -> [/player/add] -> FAILED"));
    });
};

const fetch_player = (req, res) => {
  PlayerModel.findById(req.params.id)
    .then((plays) => {
      res.json(plays),
        console.log(
          chalk.cyan(
            "[i] GET -> [/player/" + req.params.id + "] -> Fetch Player"
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow("[i] GET -> [/player/" + req.params.id + "] -> FAILED")
        );
    });
};

const del_player = (req, res) => {
  PlayerModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ infos: "[OK] Player Deleted." }),
        console.log(
          chalk.cyan(
            "[i] DELETE -> [/player/" +
              req.params.id +
              "] -> Deleted Player : " +
              req.params.id +
              "."
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow(
            "[i] DELETE -> [/player/" + req.params.id + "] -> FAILED"
          )
        );
    });
};

const update_player = (req, res) => {
  const uname = req.body.username;
  const avatar = req.body.avatar;
  const mail = req.body.email;
  const phone = req.body.telephone;
  const pwd = bcrypt.hashSync(req.body.password, 10);

  const PlayerData = {
    uname,
    avatar,
    mail,
    phone,
    pwd,
  };
  PlayerModel.findByIdAndUpdate(req.params.id, PlayerData)
    .then((plays) => {
      res.json({ info: "Player Infos Updated." }),
        console.log(
          chalk.cyan(
            "[i] PUT -> [/player/update/" +
              req.params.id +
              "] -> Updated Player : " +
              req.params.id
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow(
            "[i] PUT -> [/player/update/" + req.params.id + "] -> FAILED"
          )
        );
    });
};

export {
  fetch_all_players,
  add_player,
  fetch_player,
  del_player,
  update_player,
};
