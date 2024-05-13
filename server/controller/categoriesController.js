const categoriesModel = require('../model/categoriesModel')

exports.create = async (req , res) => {
    const categoryName = req.body.categoryName
    const userId = req.body.userId
    const cat = await categoriesModel.findOne({
        categoryName : categoryName
    })
    if (!cat) {
         categoriesModel.create({
            categoryName : categoryName,
            createdBy : userId
        }).then((data ) => {
            res.json({
                msg : 'category created succesfully',
                state : 1,
                data : data.categoryName
            })
        }).catch((err) => {
            console.log(err)
        })
        return
        
    }
    res.json({
        msg : 'this category has already exist',
        state : 0,
        data : []
    })

    
}
exports.getAll = async (req , res) => {
    const userId = req.body.userId
    await categoriesModel.find({createdBy : userId}).then((data) => {
        res.json({
            msg : '',
            state : 1,
            data : data
        })
    }).catch((err) => {
        console.log(err)
    })
}
exports.deleteCat = async (req , res) => {
    const id = req.query.id
    await categoriesModel.findOneAndDelete({_id:id}).then(() => {
        res.json({
            msg : 'category has deleted',
            state : 1,
            data : []
        })
    }).catch((err) => {
        console.log(err)
    })
}

