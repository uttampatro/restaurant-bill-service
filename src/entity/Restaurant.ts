import { model, Schema } from 'mongoose';
import { RestaurantDTO } from '../services/Restaurant/RestaurantDTO';

const restaurantSchema = new Schema<RestaurantDTO>({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    description: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    imageUrl: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
});

export default model<RestaurantDTO>('restaurant', restaurantSchema);
