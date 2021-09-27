const page404 = (req, res) =>
    res.status(404).send('<h1> Error: Page not found </h1>');

module.exports = page404;
