module.exports = function handleError(res, err, code) {
    code = code || 400;
    var msg = (err.name || err.type || 'Error') + ': ' + err.message;
    console.error(err);
    res.status(code).send(msg);
};