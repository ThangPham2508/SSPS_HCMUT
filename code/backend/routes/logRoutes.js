import express from "express";
import {
  createPrintingLog,
  getPrintingLogs,
  getPrintingLog,
  updatePrintingLog,
  deletePrintingLog,
  getPrintingLogsByUser
} from "../controllers/logController.js";

const router = express.Router();

router.route("/").get(getPrintingLogs).post(createPrintingLog);
router.route("/mine").get(getPrintingLogsByUser);
router
  .route("/:id")
  .get(getPrintingLog)
  .put(updatePrintingLog)
  .delete(deletePrintingLog);

export default router;
