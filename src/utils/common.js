const fetchData = (data) => {
  if (!data) {
    return [];
  }
  return data;
};

const getOffset = (currentPage, limit) => {
  return (currentPage - 1) * limit;
};

module.exports = { fetchData, getOffset };
