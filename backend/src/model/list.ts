import mongoose, { mongo } from "mongoose";
import { ObjectId, Types, Schema } from "mongoose";

const ListSchema = new Schema({
    nome:{
        type: String,
        required: true,
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tarefas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarefa'
    }]
})

const List = mongoose.model("Client", ListSchema);

export { List }