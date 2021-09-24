import Restaurant from '../../entity/Restaurant';
import User from '../../entity/User';
import { CreateRestaurantDTO } from './RestaurantDTO';

class RestaurantService {
    async createRestaurant(dto: CreateRestaurantDTO) {
        const { name, description, imageUrl, userId } = dto;
        const user = await User.findOne({ _id: userId }).select([
            'name',
            'email',
        ]);
        const restaurant = new Restaurant({
            name: name,
            description: description,
            imageUrl: imageUrl,
            createdBy: user!,
        });
        await restaurant.save();
        return restaurant;
    }
    async getAllRestaurants() {
        const restaurants = await Restaurant.find();
        return restaurants;
    }
    // async getMenuByRestaurantId(id: any) {
    //     const restaurant = await Restaurant.findOne({ _id: id });
    //     return restaurant;
    // }
}

export default new RestaurantService();
