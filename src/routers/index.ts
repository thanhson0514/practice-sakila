import express, { Router } from "express";
import * as Level from "../controllers";

const router: Router = express.Router();

const level1 = new Level.Level1Controller();
const level2 = new Level.Level2Controller();

// router for level 1
router.get("/level1/bai1/query", level1.bai1);
router.get("/level1/bai2/query", level1.bai2);
router.get("/level1/bai3/query", level1.bai3);
router.get("/level1/bai4/query", level1.bai4);
router.get("/level1/bai7/query", level1.bai7);
router.get("/level1/bai8/query", level1.bai8);

// router for level2
router.get("/level2/bai1/query", level2.bai1);
router.get("/level2/bai2/query", level2.bai2);
router.get("/level2/bai3/query", level2.bai3);
router.get("/level2/bai4/query", level2.bai4);
router.get("/level2/bai6/query", level2.bai6);
router.get("/level2/bai7/query", level2.bai7);
router.get("/level2/bai8/query", level2.bai8);
router.get("/level2/bai10/query", level2.bai10);

export default router;
