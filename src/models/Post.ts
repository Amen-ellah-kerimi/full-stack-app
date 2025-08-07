import mongoose, { Schema, model, models} from "mongoose";

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
    
);

export const Post = models.Post || model("Post", PostSchema);

