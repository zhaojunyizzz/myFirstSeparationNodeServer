let express = require('express');
let router = express.Router();

router.get('/',function (req,res,next) {
    let data = {
        code:0,
        data:{name:'zjy',pwd:'123'},
        isSuccess:true,
        msg:"请求成功"
    }
    res.json({data:data});
});

module.exports = router