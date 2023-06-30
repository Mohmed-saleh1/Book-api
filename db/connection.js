 const pool = require('./pool');

    exports.dbQuery = (QueryText,QueryParams)=>{

        return new Promise((resolve,reject)=>{

            pool.query(QueryText,QueryParams)
            .then((res) => {
                resolve(res)
                
            }).catch((err) => {
                reject(err)
            });

        })
    }

    module.exports=pool;