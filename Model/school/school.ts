import mongoose  from 'mongoose'

const schoolSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    }
 
})

const School = mongoose.model('School',schoolSchema)

export default School