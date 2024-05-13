const usersModel = require('../model/usersModel')
const moment = require('moment')

exports.signup = async (req , res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const lastLogin = moment(new Date()).format('YYYY-MM-DD');
    const createdAt = moment(new Date()).format('YYYY-MM-DD');
    
    
   

     if (!userName || !email || !password || !phone) {
                return res.json({
                    msg : 'enter your data..',
                    state : 0,
                    data : []
                })
            }   
     const user = await usersModel.findOne({
        $or : [
            {userName : userName},
            {email : email}
        ]
    })
    if (!user) {
        
        return usersModel.create({
            userName : userName,
            email : email,
            password : password,
            phone : phone,
            lastLogin : lastLogin,
            createdAt : createdAt
        }).then((user) => {
            res.json({
                msg : 'your data has entered',
                 state : 1,
                 data : user
            })
        }).catch(() => {
            res.json({
                 msg : 'internal server error contact with support',
                 state : 0,
                 data : []
            })
           
        })
    }else{
        return  res.json({
            msg : 'sorry this userName or email already taken',
            state : 0,
            data : []
        })
    }

}

exports.login = async (req , res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password ) {
        return res.json({
            msg : 'enter your data..',
            state : 0,
            data : []
        })
    }   
    const user = await usersModel.findOne({
        email : email
    })
    if (!user) {
        return res.json({
            msg : 'user not found',
            state :0,
            data : []
        })
    }
    if (email != user.email) {
        return res.json({
            msg : 'user not found',
             state :0,
             data : []
        })
    }
    if (password != user.password) {
        return res.json({
            msg : 'password is incorrect',
             state :0,
             data : []
        })
    }
    if (email === user.email && password === user.password) {
        return res.json({
            msg : 'hello',
            state : 1,
            data : user
        })
    }
}

// exports.login = async (req , res) => {
//     const userName = req.body.userName;
//     const password = req.body.password;

//     if (!userName || !password ) {
//         return res.json({
//             msg : 'enter your data..',
//             state : 0,
//             data : []
//         })
//     }}