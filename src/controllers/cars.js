const carsService = require("../services/cars");

const getAll = async (req, res, next) => {
  const { make, page, sort } = req.query;
  try {
    res.json(await carsService.getAll(make, page, sort));
  } catch (error) {
    console.error("[Cars Controller] Something went wrong ", error.message);
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const data = await carsService.store(req.body);
    res.status(data.status).json(data);
  } catch (error) {
    console.error("[CarsController] Something went wrong ", error.message);
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const data = await carsService.update(req.params.id, req.body);
    res.status(data.status).json(data);
  } catch (error) {
    console.error("[CarsController] Something went wrong ", error.message);
    next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const data = await carsService.deleteCar(req.params.id);
    res.status(data.status).json(data);
  } catch (error) {
    console.error("[CarsController] Something went wrong ", error.message);
    next(error);
  }
};

module.exports = { getAll, store, update, deleteCar };
