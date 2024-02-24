import express from "express";
import { postQuestion } from "../controllers/admin.js";

const router = express.Router();

router.post("/post", postQuestion);

export default router;