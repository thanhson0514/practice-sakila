import express, { Router } from "express";
import * as Level from "../controllers";

const router: Router = express.Router();

const level1 = new Level.Level1Controller();

router.get("/bai1/query", level1.bai1);
router.get("/bai2/query", level1.bai2);
router.get("/bai3/query", level1.bai1);
router.get("/bai4/query", level1.bai2);

export default router;
