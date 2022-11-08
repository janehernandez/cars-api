const { limit } = require("../utils/constants");

class Pagination {
  constructor(limit) {
    this.limit = limit;
  }

  getLimit() {
    return this.limit;
  }

  getOffset(currentPage) {
    return (currentPage - 1) * this.limit;
  }
}

const pagination = new Pagination(limit);
module.exports = { pagination };
