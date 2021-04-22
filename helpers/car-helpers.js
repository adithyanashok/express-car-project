var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectID;
const { ObjectId } = require('bson');
module.exports={
    addCars:(cars,callback)=>{
        
        db.get().collection('cars').insertOne(cars).then((data)=>{

            callback(data.ops[0]._id)
        })

    },
    getAllCars:()=>{
        return new Promise(async (resolve,reject)=>{
            let cars=await db.get().collection(collection.CAR_COLLECTIONS).find().toArray()
            resolve(cars)
        })
    },
    deleteCars:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CAR_COLLECTIONS).removeOne({_id:ObjectId(prodId)}).then((response)=>{
                // console.log(response);
                resolve(response)
            })
        })

    },
    getCarsDetails:(prodId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CAR_COLLECTIONS).findOne({_id:ObjectId(prodId)}).then((cars)=>{
                resolve(cars)
            })
            
        })
    },
    updateCars:(prodId,carDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.CAR_COLLECTIONS)
            .updateOne({_id:ObjectId(prodId)},{
                $set:{     
                    Name:carDetails.Name,
                    Description:carDetails.Description,
                    Price:carDetails.Price,
                    Category:carDetails.Category
                }
            }).then((response)=>{
                resolve()
            })
        })
    }

    
}