var express = require('express');
var router = express.Router();
const carHelpers = require('../helpers/car-helpers');
var usedCarHelpers = require('../helpers/used-car-helpers');
var seccarHelpers = require('../helpers/sec-car-helpers');
var userHelper=require('../helpers/user-helpers')
const verifylogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  console.log(user);
  // carHelpers.getAllCars().then((cars)=>{
  //   console.log(cars); //
  cars=[
    {
      name:"KIA Seltos",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV4",
      price:"Rs.9.89 Lakh",
      image:"http://localhost:3000/images/607fa9e33d8c8c3e33d8e3bf.jpg"
      
    },
    {
      name:"Toyota Camry",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.40.59 Lakh",
      image:"http://localhost:3000/images/607fb1e63d8c8c3e33d8e3c8.jpg"
      
    },
    {
      name:"Bentley Bentayga",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs. 4.10 Crore",
      image:"http://localhost:3000/images/607faa423d8c8c3e33d8e3c1.jpg"
      
      
      
    },
    {
      name:"Citroen C5 Aircross",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.29.90 Lakh",
      image:"http://localhost:3000/images/607faabd3d8c8c3e33d8e3c2.jpg"
      
    },
    {
      name:"MG Hector",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs13.17 Lakh",
      image:"http://localhost:3000/images/607faae93d8c8c3e33d8e3c3.jpg" 
    },
    {
      name:"Tata Tiago XTA AMT",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs. 5.99 Lakh",
      image:"http://localhost:3000/images/607fb2983d8c8c3e33d8e3ce.jpg" 
    },
    {
      name:"Toyota Corolla",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.15.00 Lakh",
      image:"http://localhost:3000/images/607fb1aa3d8c8c3e33d8e3c6.jpg" 
    },
    {
      name:"Audi Q5",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.65.50 Lakh",
      image:"http://localhost:3000/images/607ee90fe58ca73816fc3cfb.jpg" 
    },
    {
      name:"BMW X5",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.75.50 Lakh",
      image:"http://localhost:3000/images/607fa9c43d8c8c3e33d8e3be.jpg" 
    },
    {
      name:"Hyundai Venue",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs 6.86 Lakh",
      image:"http://localhost:3000/images/607fab7e3d8c8c3e33d8e3c5.jpg" 
    },
    {
      name:"Toyota Fortuner",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs30.34 Lakh",
      image:"http://localhost:3000/images/607fab5b3d8c8c3e33d8e3c4.jpg" 
    },
    {
      name:"Mercedes-Benz S-Class",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.1.41 Cr",
      image:"http://localhost:3000/images/607faa163d8c8c3e33d8e3c0.jpg" 
    },
    {
      name:"Audi A4",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.42.34 Lakh",
      image:"http://localhost:3000/images/607fb1c73d8c8c3e33d8e3c7.jpg" 
    },
    {
      name:"Hyundai Creta",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.9.99 Lakh",
      image:"http://localhost:3000/images/607fb2103d8c8c3e33d8e3c9.jpg" 
    },
    {
      name:"Mahindra Scorpio",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs.11.99 Lakh",
      image:"http://localhost:3000/images/607fb2293d8c8c3e33d8e3ca.jpg" 
    },
    {
      name:"BMW 2 Series 220i",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs. 37.90 Lakh",
      image:"http://localhost:3000/images/607fb2463d8c8c3e33d8e3cb.jpg" 
    },
    {
      name:"Ford EcoSport SE",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs. 11.19 Lakh",
      image:"http://localhost:3000/images/607fb25d3d8c8c3e33d8e3cc.jpg" 
    },
    {
      name:"Mini Cooper Countryman",
      features:"Features : ARAI Mileage:11.24 kmpl,Fuel Type:Petrol,Body Type:SUV",
      price:"Rs. 39.50 Lakh",
      image:"http://localhost:3000/images/607fb2763d8c8c3e33d8e3cd.jpg" 
    },

    
    
  ]
    res.render('user/view-cars',{cars,user})
  
  })
  


router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    
  res.render('user/login',{"loginErr":req.session.loginErr})
  req.session.loginErr=false
 }

})

router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelper.doSignup(req.body).then((response)=>{
    console.log(response);
    req.session.loggedIn=true
    req.session.user=response
    res.redirect('/')
  })
})
router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
    res.redirect('/')
    }else{
      req.session.loginErr=true
      res.redirect('/login')
    } 
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})
router.get('/new-cars',verifylogin,(req,res)=>{
  let user=req.session.user
  console.log(user);
  seccarHelpers.getAllNewCars().then((newcars)=>{
    console.log(newcars);
    res.render('user/new-cars',{newcars,user})
})
})

 
  router.get('/used-cars',verifylogin,(req,res)=>{
    let user=req.session.user
  console.log(user);
    usedCarHelpers.getAllUsedCars().then((usedcars)=>{
      console.log(usedcars);
      res.render('user/used-cars',{usedcars,user})
    

  })
})
router.get('/place-order',verifylogin,(req,res)=>{
  let user=req.session.user
  res.render('user/place-order',{user})
})



 


module.exports = router;
