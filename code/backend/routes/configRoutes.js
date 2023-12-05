import express from "express";
import {
  createConfiguration,
  getConfiguration,
  updateConfiguration,
} from "../controllers/configController.js";

const router = express.Router();

router
  .route("/")
  .get(getConfiguration)
  .post(createConfiguration)
  .put(updateConfiguration);

export default router;
