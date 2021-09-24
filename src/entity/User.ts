import { model, Schema } from 'mongoose';
import { SaveUserDTO } from '../services/User/UserDTO';

const userSchema = new Schema<SaveUserDTO>({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 8,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant',
    },
});

export default model<SaveUserDTO>('user', userSchema);
