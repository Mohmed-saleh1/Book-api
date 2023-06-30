const queries = require('../db/queries')
const dbConnection = require('../db/connection')
const util = require('../scripts/utilities')


exports.getStoreList = async (req,res)=>{
    try {
        var storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(storeListQuery);
        return res.status(200).send(JSON.stringify(result));
    } catch (e) {
        console.log("Error : "+e);
        return res.status(500).send({error:'Failed to list stores'});
    }
}

exports.saveStore =async (req,res)=>{
    try {
        var createdBy = 'admin';
        var createdOn = new Date();
        // req.body
        var storeName = req.body.storeName;
        var address = req.body.address;
        //utilities
        var storeCode = util.generateStoreCode()
    
        if(!storeName || !address){
              return  res.status(500).send({error:'store name and address are required , cant be empty'})
        }
        values = [storeName,address,createdBy,createdOn,storeCode]
        var saveStoreQuery = queries.queryList.SAVE_STORE_QUERY;
        await dbConnection.dbQuery(saveStoreQuery); 

        return res.status(200).send('Successfully store created');

    } catch (error) {
          console.log("Error : "+error);
        return res.status(500).send({error:'Failed to list stores'});
  
    }
   
    


}