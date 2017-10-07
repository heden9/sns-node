var express = require('express');
var router = express.Router();
var userModel = require('../model/api');
var app = require('../app');
var jwt = require('jwt-simple');
/* GET home page. */
router.post('/login', function(req, res, next) {
    var name = req.body.acc;
    var pwd = req.body.pwd;
    userModel.getByNamePwd(name, pwd, function(result){
        var info;
        if(result.length > 0){
            var rs = result[0];
            var data = {
                username: rs.username,
                name: rs.name,
                id: rs.id,
                headerPortrait: rs.headerPortrait
            };
            info = {
                code: 0,
                message: '',
                data: data
            }
        } else{
            info = {
                code: 1,
                message: '账号或密码错误',
                data: {}
            }
        }
        res.send(info);
    });
});
router.post('/message', function (req, res, next) {
    res.send({
        code: 0,
        message: '',
        data: require('../data/message.json')
    });
});
router.post('/follow', function (req, res, next) {
    res.send({
        code: 0,
        message: '',
        data: require('../data/follow.json')
    });
});
module.exports = router;
