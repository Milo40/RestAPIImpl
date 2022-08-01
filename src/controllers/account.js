import { AccountModel } from "../models/account.js";
import chalk from "chalk";
import stringify from "json-stringify-safe";

const fetch_all_accounts = (req, res) => {
  AccountModel.find()
    .then((accnt) => {
      res.json(accnt),
        console.log(chalk.cyan("[i] GET -> [/account/all] -> *Accounts"));
    })
    .catch((err) => {
      res.status(400).json("error : " + err),
        console.log(chalk.yellow("[i] GET -> [/account/all] -> FAILED"));
    });
};

const add_account = (req, res) => {
  const amount = req.body.montant;
  const tokens = req.body.jetons;
  const player = req.body.joueur;

  const newAccount = new AccountModel({
    amount,
    tokens,
    player,
  });

  newAccount
    .save()
    .then(() => {
      res.json({ info: "[OK] Account Added." }),
        console.log(
          chalk.cyan("[i] POST -> [/account/add] -> Added a Account")
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(chalk.yellow("[i] POST -> [/account/add] -> FAILED"));
    });
};

const fetch_account = (req, res) => {
  AccountModel.findById(req.params.id)
    .then((accnt) => {
      res.json(accnt),
        console.log(
          chalk.cyan(
            "[i] GET -> [/account/" + req.params.id + "] -> Fetch Account"
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow("[i] GET -> [/account/" + req.params.id + "] -> FAILED")
        );
    });
};

const del_account = (req, res) => {
  AccountModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ infos: "[OK] Account Deleted." }),
        console.log(
          chalk.cyan(
            "[i] DELETE -> [/account/" +
              req.params.id +
              "] -> Deleted Account : " +
              req.params.id +
              "."
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow(
            "[i] DELETE -> [/account/" + req.params.id + "] -> FAILED"
          )
        );
    });
};

const update_account = (req, res) => {
  const amount = req.body.montant;
  const tokens = req.body.jetons;
  const player = req.body.joueur;

  const AccountData = {
    amount,
    tokens,
    player,
  };
  AccountModel.findByIdAndUpdate(req.params.id, AccountData)
    .then((accnt) => {
      res.json({ info: "Account Infos Updated." }),
        console.log(
          chalk.cyan(
            "[i] PUT -> [/account/update/" +
              req.params.id +
              "] -> Updated Account : " +
              req.params.id
          )
        );
    })
    .catch((err) => {
      res.status(400).json({ info: "errno -> " + err }),
        console.log(
          chalk.yellow(
            "[i] PUT -> [/account/update/" + req.params.id + "] -> FAILED"
          )
        );
    });
};

export {
  fetch_all_accounts,
  add_account,
  fetch_account,
  del_account,
  update_account,
};
