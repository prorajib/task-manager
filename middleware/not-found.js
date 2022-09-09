const notFound = (req, res) =>
  res.status(404).send(`<h1>Route doesnot Exists!! </h1>`);

module.exports = notFound;
