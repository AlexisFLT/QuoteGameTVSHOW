const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const tvshowControllers = require("./controllers/tvshowControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.get("/tvshow", tvshowControllers.browse);
router.get("/tvshow/:id", tvshowControllers.read);
router.put("/tvshow/:id", tvshowControllers.edit);
router.post("/tvshow", tvshowControllers.add);
router.delete("/tvshow/:id", tvshowControllers.destroy);

module.exports = router;
