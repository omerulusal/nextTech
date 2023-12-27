import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//Eğer User koleksiyonu mevcut değilse yeni bir tane oluştur.
export default mongoose.models.User || mongoose.model("User", userSchema);