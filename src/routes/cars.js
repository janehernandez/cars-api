const { Router } = require("express");
const router = Router();
const { getAll, store, update, deleteCar } = require("../controllers/cars");

router.use((req, res, next) => {
  console.log("Request sending to /cars");
  next();
});

router.get("/", getAll);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", deleteCar);

module.exports = router;
