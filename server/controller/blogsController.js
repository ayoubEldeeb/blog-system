const blogsModel = require('../model/blogsModel')
exports.create = async (req , res) => {
    const title = req.body.title
    const description = req.body.description
    const category = req.body.category
    const createdBy = req.body.createdBy
    if (!title || !description || !category || !createdBy) {
        res.json({
            msg : 'enter blog data',
            state : 0,
            data : []
        })
        return
    }
    blogsModel.create({
        title : title,
        description : description,
        category : category,
        createdBy : createdBy
    }).then((data) => {
        res.json({
            msg : 'blog data has entered',
            state : 1,
            data : data
        })
    }).catch((err) => {
        console.log(err)
    })
}