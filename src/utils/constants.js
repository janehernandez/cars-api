const limit = parseInt(process.env.LIMIT_PER_PAGE) || 3;
const carFields = ["make", "model", "year"];
const httpStatus = {
  ok: 200,
  created: 201,
  badRequest: 400,
  notFound: 404,
  internalServerError: 500,
};

module.exports = { limit, carFields, httpStatus };
