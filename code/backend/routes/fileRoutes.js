import express from "express";
import {
  createFile,
  getFiles,
  getFile,
  updateFile,
  deleteFile,
} from "../controllers/fileController.js";

const router = express.Router();

router.route("/").get(getFiles).post(createFile);
router.route("/:fileId").get(getFile).put(updateFile).delete(deleteFile);

export default router;
