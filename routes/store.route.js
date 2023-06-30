const express = require('express');
const router = express.Router();
const storeCtrl = require('../controller/store.controller');

router.get('/notes',storeCtrl.getStoreList);
router.post('/notes/save',storeCtrl.saveStore);

module.exports=router;