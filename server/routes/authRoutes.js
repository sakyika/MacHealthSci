module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.send({ message: "Welcome to McMaster Health Sciences"});
    });
};