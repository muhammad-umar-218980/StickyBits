import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
{
    title:
    {
        type: String,
        required: true,
        trim: true
    },
    content:
    {
        type: String,
        required: true
    },
    color:
    {
        type: String,
        default: "#feff9c"
    }
},
{
    timestamps: true
}
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
