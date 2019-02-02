module.exports = function (response) {
    return {
        "statusCode": 200,
        "data": response || {},
        "message": "OK"
    }
};
