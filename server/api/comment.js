import Express from 'express'
const router = Express.Router();
import Comment from '../../models/comment'
import {responseClient} from '../util'

router.post('/publishComment', function (req, res) {
    const {
        description
    } = req.body;
    let tempComment = new Comment({
        description
    });
    tempComment.save().then(data=>{
        responseClient(res,200,0,'发表成功',data)
    }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});

module.exports = router;