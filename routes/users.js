const express= require('express');
// const path= require('path');

const router= express.Router();
const passport= require('passport');





const userController= require('../controllers/users_controller');



// const homeController= require('../controllers/home_controller')

// router.get('/', homeController.home );
// router.use('/category',require('./category'));

router.get('/signin',userController.signin);
router.get('/login',userController.login);


// router.post('/create', userController.create);

router.post('/create',userController.create);

router.post('/createsession',passport.authenticate(
    'local',
    {
        failureRedirect: '/users/login'
        
    },
),userController.createSession);





module.exports=router;