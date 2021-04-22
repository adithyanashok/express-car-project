var db=require('../config/connection')
var collection=require('../config/collections')

module.exports={
    addNewCars:(newcars,callback)=>{
        
        db.get().collection('newcars').insertOne(newcars).then((data)=>{

            callback(data.ops[0]._id)
        })

    },
    getAllNewCars:()=>{
        return new Promise(async (resolve,reject)=>{
            let cars=await db.get().collection(collection.SECCAR_COLLECTIONS).find().toArray()
            resolve(cars)
        })
    },
    
}