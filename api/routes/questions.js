import express from "express"
import { showQuestion, updateHighScore, suggestion, proposed, approved, statistics, rejected } from "../controllers/question.js"

const router = express.Router()

router.get("/", showQuestion)
router.post("/score", updateHighScore);
router.post("/suggestion", suggestion);
router.get("/proposed", proposed);
router.post("/approved", approved);
router.post("/rejected", rejected);
router.get("/statistics", statistics);

export default router