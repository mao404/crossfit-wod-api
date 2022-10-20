// In src/v1/routes/workoutRoutes.js
const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();



router.get("/", workoutController.getAllWorkouts)

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.createNewWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;