const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
router.get("/about-us", staticController.about);
router.get("/contact", staticController.contact);
router.get("/design-and-build", staticController.design);
router.get("/maintenance", staticController.maintenance);
router.get("/our-process", staticController.process);
router.get("/our-services", staticController.services);
router.get("/our-team", staticController.team);

module.exports = router;
