import express from "express";
import {
  createPrintingLog,
  getPrintingLogs,
  getPrintingLog,
  updatePrintingLog,
  deletePrintingLog,
} from "../controllers/logController.js";

const router = express.Router();

router.route("/").get(getPrintingLogs).post(createPrintingLog);
router
  .route("/:logId")
  .get(getPrintingLog)
  .put(updatePrintingLog)
  .delete(deletePrintingLog);

export default router;
