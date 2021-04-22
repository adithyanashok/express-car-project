var express = require('express');
const carHelpers = require('../helpers/car-helpers');
var seccarHelpers = require('../helpers/sec-car-helpers');
const usedCarHelpers = require('../helpers/used-car-helpers');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  carHelpers.getAllCars().then((cars)=>{
    console.log(cars);
    res.render('admin/view-cars',{admin:true,cars})
  
  })
  

  router.get('/add-cars',(req,res)=>{
    res.render('admin/add-cars')

  })
  router.post('/add-cars',(req,res)=>{
    console.log(req.body);
    console.log(req.files.image);
    carHelpers.addCars(req.body,(id)=>{
      let image=req.files.image
      image.mv('./public/images/'+id+'.jpg',(err,done)=>{
        if(!err){
          res.render('admin/add-cars')
        }else{
          console.log(err);
        }
      })
      
    })
  })
  router.get('/delete-cars/:id',(req,res)=>{
    let proId=req.params.id
    console.log(proId);
  
    carHelpers.deleteCars(proId).then((response)=>{
      res.redirect('/admin/')
    })
  })
  router.get('/edit-cars/:id',async (req,res)=>{
    let cars=await carHelpers.getCarsDetails(req.params.id)
    console.log(cars);
    res.render('admin/edit-cars',{cars,admin:true})
  })
  router.post('/edit-cars/:id',(req,res)=>{
    console.log(req.params.id);
    let id=req.params.id
    carHelpers.updateCars(req.params.id,req.body).then(()=>{
      res.redirect('/admin')
      if(req.files.image){
        let image=req.files.image
        image.mv('./public/images/'+id+'.jpg')
        
  
  
      }
    })
  })
  router.get('/new-cars',(req,res)=>{
    seccarHelpers.getAllNewCars().then((newcars)=>{
      console.log(newcars);
      
      res.render('admin/new-cars',{admin:true,newcars}) 
      
    
    })
    
  })
  router.post('/new-cars',(req,res)=>{
    console.log(req.body);
    console.log(req.files.image);
    seccarHelpers.addNewCars(req.body,(id)=>{
      let image=req.files.image
      image.mv('./public/images/'+id+'.jpg',(err,done)=>{
        if(!err){
          res.render('admin/new-cars')
        }else{
          console.log(err);
        }
      })
      
    })
  })
  
  router.get('/used-cars',(req,res)=>{
    usedCarHelpers.getAllUsedCars().then((usedcars)=>{
      console.log(usedcars);
      res.render('admin/used-cars',{admin:true,usedcars})
    

  })
    })
    router.post('/used-cars',(req,res)=>{
      console.log(req.body);
      console.log(req.files.image);
      usedCarHelpers.addUsedCars(req.body,(id)=>{
        let image=req.files.image
        image.mv('./public/images/'+id+'.jpg',(err,done)=>{
          if(!err){
            res.render('admin/used-cars')
          }else{
            console.log(err);
          }
        })
        
      })
    })
});

module.exports = router;
