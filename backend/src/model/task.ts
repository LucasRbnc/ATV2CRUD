import mongoose, { mongo } from "mongoose";
import { ObjectId, Types, Schema } from "mongoose";

const TaskSchema = new Schema({
    titulo:{
        type:String,
        required: [true, "A tarefa precisa de um título"]
    },
    descricao:{
        type: String
    },
    data_criacao:{
        type: Date,
        default: Date.now
    },
    data_vencimento:{
        type: Date
    },
    prioridade:{
        type: String,
        enum: ['Alta', 'Média', 'Baixa'],
        default: 'Média'
    },
    status:{
        type:String,
        enum: ['Pendente', 'Em andamento', 'Concluída'],
        default: 'Pendente'
    },
    lista:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true,
    }
})

const Task = mongoose.model("Client", TaskSchema);

export { Task }