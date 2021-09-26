import FoodItem from '../../entity/FoodItem';
import Restaurant from '../../entity/Restaurant';
import User from '../../entity/User';
import {
    CreateFoodItemDTO,
    CreateRestaurantDTO,
    FindFoodDTO,
} from './RestaurantDTO';

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
    async createFoodItem(dto: CreateFoodItemDTO) {
        const { name, userId, price, restaurantId } = dto;
        const user = await User.findOne({ _id: userId }).select([
            'name',
            'email',
        ]);
        const restaurant = await Restaurant.findOne({
            _id: restaurantId,
        }).select(['name']);
        const food = new FoodItem({
            name: name,
            price: price,
            createdBy: user!,
            restaurant: restaurant!,
        });
        await food.save();
        return food;
    }
    async getFoodsByRestaurantId(dto: FindFoodDTO) {
        const { restaurantId } = dto;
        const restaurant = await Restaurant.findOne({
            _id: restaurantId,
        }).select(['name']);
        const food = await FoodItem.find({
            restaurant: restaurant,
        });
        return food;
    }
}

export default new RestaurantService();
