import { Request, Response } from 'express';
import { RestaurantService } from '../services';

class RestaurantController {
    createRestaurant = async (req: Request, res: Response) => {
        try {
            const userId = req.body.userId;
            const name = req.body.name;
            const description = req.body.description;
            const imageUrl = req.body.imageUrl;
            const restaurant = await RestaurantService.createRestaurant({
                name: name,
                description: description,
                imageUrl: imageUrl,
                userId: userId,
            });
            return res.json(restaurant);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    fetchAllRestaurants = async (req: Request, res: Response) => {
        try {
            const restaurants = await RestaurantService.getAllRestaurants();
            return res.json(restaurants);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new RestaurantController();
