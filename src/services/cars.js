const common = require("../utils/common");
const { database } = require("./database");
const { pagination } = require("../utils/pagination");
const { limit, carFields, httpStatus } = require("../utils/constants");

const getAll = async (make = null, page, sort) => {
  let sql = "SELECT make, model, year FROM cars";
  let payload = [];

  if (make) {
    sql = sql + " WHERE make = ?";
    payload.push(make);
  }

  if (sort) {
    sql = sql + " ORDER BY ?";
    payload.push(carFields[sort]);
  }

  let meta = {};
  if (page && page > 0) {
    meta.currentPage = parseInt(page);
    meta.limit = limit;

    sql = sql + " LIMIT ?,?";
    payload.push(pagination.getOffset(meta.currentPage));
    payload.push(limit);
  }

  try {
    const results = await database.query(sql, payload);
    const data = common.fetchData(results);

    return { data, meta };
  } catch (error) {
    console.error("[CARS SERVICE - getAll]", error);
    await database.close();
    return { error };
  }
};

const store = async (car) => {
  if (!car.make || !car.model || !car.year) {
    return {
      status: httpStatus.badRequest,
      message: "All fields are required.",
    };
  }

  const params = [car.make, car.model, car.year];
  try {
    const results = await database.query(
      "SELECT * FROM cars WHERE make = ? AND model = ? AND year = ?",
      params
    );

    if (results.length) {
      return { status: httpStatus.badRequest, message: "Car exists" };
    }

    const result = await database.query(
      "INSERT INTO cars (make, model, year) VALUES (?, ?, ?)",
      params
    );

    if (result.affectedRows) {
      return { status: httpStatus.created, message: "Car stored successfully" };
    }

    return {
      status: httpStatus.internalServerError,
      message: "Error in storing a car",
    };
  } catch (error) {
    console.error("[CARS SERVICE - store]", error);
    await database.close();
    return { status: httpStatus.internalServerError, error };
  }
};

const update = async (id, car) => {
  if (!id || !car.make || !car.model || !car.year) {
    return {
      status: httpStatus.badRequest,
      message: "All fields are required",
    };
  }

  try {
    const results = await database.query("SELECT * FROM cars WHERE id = ?", [
      id,
    ]);

    if (!results.length) {
      return { status: httpStatus.notFound, message: "Car doesn't exists" };
    }

    const params = [car.make, car.model, car.year, id];
    const result = await database.query(
      "UPDATE cars SET make = ?, model = ?, year = ? WHERE id = ?",
      params
    );

    if (result.affectedRows) {
      return { status: httpStatus.ok, message: "Car updated" };
    }

    return {
      status: httpStatus.internalServerError,
      message: "Error in updating car",
    };
  } catch (error) {
    console.error("[CARS SERVICE - update]", error);
    await database.close();
    return { status: httpStatus.internalServerError, error };
  }
};

const deleteCar = async (id) => {
  if (!id) {
    return { status: httpStatus.badRequest, message: "ID is required" };
  }

  try {
    const params = [id];
    const results = await database.query(
      "SELECT * FROM cars WHERE id = ?",
      params
    );

    if (!results.length) {
      return { status: httpStatus.notFound, message: "Car doesn't exists" };
    }

    const result = await database.query(
      "DELETE FROM cars WHERE id = ?",
      params
    );

    if (result.affectedRows) {
      return { status: httpStatus.ok, message: "Car deleted" };
    }

    return {
      status: httpStatus.internalServerError,
      message: "Error in deleting car",
    };
  } catch (error) {
    console.error("[CARS SERVICE - delete]", error);
    await database.close();
    return { status: httpStatus.internalServerError, error };
  }
};

module.exports = { getAll, store, update, deleteCar };
