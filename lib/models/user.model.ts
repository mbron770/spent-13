import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: {type: String, required: true}, 
    username: {type: String, required: true, unique: true}, 
    name: {type: String, required: true}, 
    image: String, 
    bio: String, 
    // one user can create many threads for example 
    // threads: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Thread' // thread is a collection/table
    //     }

    // ]
    onboarded: {type: Boolean, default: false, required: true}, 

    // same relationship as threads
    // communities: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'Community'
    //     }
       

    // ]

})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User