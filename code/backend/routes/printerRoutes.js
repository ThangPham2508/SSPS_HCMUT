import express from "express";
import {
  createPrinter,
  getPrinters,
  getPrinter,
  updatePrinter,
  deletePrinter,
} from "../controllers/printerController.js";

const router = express.Router();

router.route("/").get(getPrinters).post(createPrinter);
router
  .route("/:printerId")
  .get(getPrinter)
  .put(updatePrinter)
  .delete(deletePrinter);

export default router;
