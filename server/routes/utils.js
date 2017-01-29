module.exports = function handleError(err) {
    console.error(err);
    res.status(400).send(err);
};