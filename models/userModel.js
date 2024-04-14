const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// schema design
const userSchema = new  mongoose.Schema({
      name:{
        type:String,
        required:[true,"Name is reuired"]
      },
      email:{
        type:String,
        required:[true,"email is required and should be unique"],
        unique:true
      },
      password:{
        type:String,
        required:[true,"password is required "]
      },

},
{timestamps:true}
);
// pre-save hook to hash the password
// userSchema.pre('save', async function (next) {
//   try {
//     // Hash the password only if it is modified or a new user
//     if (this.isModified('password') || this.isNew) {
//       const hashedPassword = await bcrypt.hash(this.password, 10);
//       this.password = hashedPassword;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });


// exports
const userModel = mongoose.model('users',userSchema);
module.exports = userModel;