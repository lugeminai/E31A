module.exports = app => {
    app.get('/api/project/GetProject', (req, res)  => {
        var data = require ('../json/project.json');
        res.json(data);
    })
}