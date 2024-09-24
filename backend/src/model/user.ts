import mongoose, { mongo } from "mongoose";
import { ObjectId, Types, Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "O nome é obrigatorio!"]
    },
    email:{
        type: String,
        required: [true, "O email é obrigatorio!"],
        unique: true,
        validate: {
            validator: function (value: string) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é um formato de e-mail válido`,
        }
    },
    senha:{
        type: String,
        trim: true,
        select: false,
        required: [true, "A senha é obrigatória"]
    },
    listas:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lista'
    }]
})

const User = mongoose.model("Client", UserSchema);

export { User }