

const {Schema, model} = require("mongoose")

const postSchema = new Schema(
    {
        content:{
            type: String,   
        },
        creatorId:{
            type:String,
        },
        picPath:{
            type: String,
            default: null,
        },
        picName:{
            type:String
        }
}
)
module.exports = model("Post", postSchema)