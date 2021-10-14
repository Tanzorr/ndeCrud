const PostCont = require('./PostController')


const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();

router.post('/posts', PostCont.create);
router.get('/posts', PostCont.getAll);
router.get('/posts/:id', PostCont.getOne);
router.put('/posts', PostCont.update);
router.delete('/posts/:id', PostCont.delete)

module.exports = router;
