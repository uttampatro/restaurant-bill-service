import { randomUUID } from 'crypto';
import { model, Schema } from 'mongoose';

const foodItemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        max: 255,
        min: 3,
    },
    price: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    restaurantId: {
        type: Schema.Types.ObjectId,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
});

export default model('foodItem', foodItemSchema);
