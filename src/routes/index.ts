import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';
import RestaurantController from '../controllers/restaurants';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// Auth
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// Restaurant
router.post('/createRestaurant', RestaurantController.createRestaurant);
router.get('/restaurants', RestaurantController.fetchAllRestaurants);

export default router;
