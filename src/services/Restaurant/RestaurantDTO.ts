export interface RestaurantDTO {
    name: string;
    description: string;
    imageUrl: string;
}

export interface CreateRestaurantDTO {
    userId: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface CreateFoodItemDTO {
    userId: string;
    name: string;
    price: string;
    restaurantId: string;
}

export interface FindFoodDTO {
    restaurantId: string;
}