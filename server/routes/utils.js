module.exports = function handleError(res, err, code) {
    code = code || 400;
    var msg = err.name + ": " + err.message;
    console.error(msg);
    res.status(code).send(msg);
};