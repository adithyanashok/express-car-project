var db=require('../config/connection')
var collection=require('../config/collections')

module.exports={
    addUsedCars:(usedcars,callback)=>{
        
        db.get().collection('usedcars').insertOne(usedcars).then((data)=>{

            callback(data.ops[0]._id)
        })

    },
    getAllUsedCars:()=>{
        return new Promise(async (resolve,reject)=>{
            let cars=await db.get().collection(collection.USEDCAR_COLLECTIONS).find().toArray()
            resolve(cars)
        })
    },
    
}