import router from "express";
const accountRouter = router.Router();
import chalk from "chalk";
import stringify from "json-stringify-safe";
import {
  fetch_all_accounts,
  add_account,
  fetch_account,
  del_account,
  update_account,
} from "../controllers/account.js";

// Fetch ALL Accounts
accountRouter.get("/all", fetch_all_accounts, (req, res) => {});

//Add an Account
accountRouter.post("/add", add_account, (req, res) => {});

// Fetch AN Account
accountRouter.get("/:id", fetch_account, (req, res) => {});

// Delete an Account
accountRouter.delete("/:id", del_account, (req, res) => {});

// Update an Account
accountRouter.put("/update/:id", update_account, (req, res) => {});

export { accountRouter };
