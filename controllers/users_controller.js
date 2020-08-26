const User=require('../models/user');





//for login to our website 
module.exports.createSession= function(req,res){

    // req.flash('success','Logged in Successfully');
    return res.redirect('/'); 
     
}



//for signin to our website
module.exports.create= function(req,res){
    // console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            User.create(req.body, function(err,user){
                if (err){console.log('error in creating user while signing up');  return ;}


                return res.redirect('/users/login'); 
            })
        }
        else{
            return res.redirect('back'); 
        }
    });

}

module.exports.login=function(req,res){
    //if user is already loged in then he will not able to go to login page
    if(req.isAuthenticated()){
       return res.redirect('/');
    }

    return res.render('../views/login');

}


module.exports.signin=function(req,res){
    //if user is already loged in then he will not able to go to signup page
    if(req.isAuthenticated()){
       return res.redirect('/')
    }

    return res.render('../views/signin');
    
}
